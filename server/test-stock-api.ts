// Test script for Yahoo Finance API
import { callDataApi } from "./_core/dataApi";

async function testStockApi() {
  console.log("Testing Yahoo Finance API...");
  
  try {
    const response = await callDataApi("YahooFinance/get_stock_chart", {
      query: {
        symbol: "RBLX",
        region: "US",
        interval: "1d",
        range: "1d",
        includeAdjustedClose: true,
      },
    });
    
    console.log("API Response:", JSON.stringify(response, null, 2));
  } catch (error) {
    console.error("API Error:", error);
  }
}

testStockApi();
