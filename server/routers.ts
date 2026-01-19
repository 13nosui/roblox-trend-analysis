import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { callDataApi } from "./_core/dataApi";
import { z } from "zod";

// Stock data types
interface StockMeta {
  symbol: string;
  longName?: string;
  exchangeName: string;
  currency: string;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  regularMarketOpen: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  marketCap?: number;
}

interface StockQuote {
  open: (number | null)[];
  high: (number | null)[];
  low: (number | null)[];
  close: (number | null)[];
  volume: (number | null)[];
}

interface StockChartResult {
  meta: StockMeta;
  timestamp: number[];
  indicators: {
    quote: StockQuote[];
    adjclose?: { adjclose: (number | null)[] }[];
  };
}

interface StockChartResponse {
  chart: {
    result: StockChartResult[];
    error: null | { code: string; description: string };
  };
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Stock data router
  stock: router({
    // Get current stock price and basic info
    getQuote: publicProcedure
      .input(z.object({
        symbol: z.string().default("RBLX"),
      }))
      .query(async ({ input }) => {
        try {
          // All query parameters must be strings for the Data API
          const response = await callDataApi("YahooFinance/get_stock_chart", {
            query: {
              symbol: input.symbol,
              region: "US",
              interval: "1d",
              range: "5d",
            },
          }) as StockChartResponse;

          if (!response?.chart?.result?.[0]) {
            throw new Error("No stock data available");
          }

          const result = response.chart.result[0];
          const meta = result.meta;

          // Calculate price change with NaN protection
          const currentPrice = meta.regularMarketPrice || 0;
          const previousClose = meta.regularMarketPreviousClose || currentPrice;
          const priceChange = previousClose > 0 ? currentPrice - previousClose : 0;
          const priceChangePercent = previousClose > 0 ? (priceChange / previousClose) * 100 : 0;

          return {
            symbol: meta.symbol,
            companyName: meta.longName || meta.symbol,
            exchange: meta.exchangeName,
            currency: meta.currency,
            currentPrice,
            previousClose,
            priceChange,
            priceChangePercent,
            dayHigh: meta.regularMarketDayHigh,
            dayLow: meta.regularMarketDayLow,
            open: meta.regularMarketOpen,
            volume: meta.regularMarketVolume,
            fiftyTwoWeekHigh: meta.fiftyTwoWeekHigh,
            fiftyTwoWeekLow: meta.fiftyTwoWeekLow,
            marketCap: meta.marketCap,
            lastUpdated: new Date().toISOString(),
          };
        } catch (error) {
          console.error("Error fetching stock quote:", error);
          throw new Error("Failed to fetch stock data");
        }
      }),

    // Get historical stock data for charts
    getHistory: publicProcedure
      .input(z.object({
        symbol: z.string().default("RBLX"),
        range: z.enum(["1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y"]).default("1mo"),
        interval: z.enum(["1m", "5m", "15m", "30m", "1h", "1d", "1wk", "1mo"]).default("1d"),
      }))
      .query(async ({ input }) => {
        try {
          // All query parameters must be strings for the Data API
          const response = await callDataApi("YahooFinance/get_stock_chart", {
            query: {
              symbol: input.symbol,
              region: "US",
              interval: input.interval,
              range: input.range,
              includeAdjustedClose: "true",
            },
          }) as StockChartResponse;

          if (!response?.chart?.result?.[0]) {
            throw new Error("No stock data available");
          }

          const result = response.chart.result[0];
          const timestamps = result.timestamp || [];
          const quotes = result.indicators.quote[0];

          // Transform data for charts
          const chartData = timestamps.map((timestamp, index) => ({
            date: new Date(timestamp * 1000).toISOString(),
            timestamp,
            open: quotes.open[index],
            high: quotes.high[index],
            low: quotes.low[index],
            close: quotes.close[index],
            volume: quotes.volume[index],
          })).filter(d => d.close !== null);

          return {
            symbol: result.meta.symbol,
            companyName: result.meta.longName || result.meta.symbol,
            currency: result.meta.currency,
            data: chartData,
          };
        } catch (error) {
          console.error("Error fetching stock history:", error);
          throw new Error("Failed to fetch stock history");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
