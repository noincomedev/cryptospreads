export default {
  Query: {
    markets: async (obj, args, { dataSources }) => {
      const result = await dataSources.BudaAPI.getMarkets();
      const { markets } = result;
      return markets;
    }
  },
  Market: {
    ticker: async ({ id }, args, { dataSources }) => {
      const result = await dataSources.BudaAPI.getMarketTicker(id);
      const { ticker } = result;
      console.log(ticker);
      let last_price = `${ticker.last_price[1]} ${ticker.last_price[0]}`;
      let spread =
        parseFloat(ticker.min_ask[0]) - parseFloat(ticker.max_bid[0]);

      return {
        market_id: ticker.market_id,
        currency: ticker.last_price[1],
        last_price,
        spread: spread.toFixed(2)
      };
    }
  }
};
