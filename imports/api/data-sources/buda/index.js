import { RESTDataSource } from "apollo-datasource-rest";

class BudaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = Meteor.settings.public.buda.api.BASE_URL;
  }

  async getMarkets() {
    const result = await this.get("markets");
    return result;
  }

  async getMarketTicker(id) {
    const result = await this.get(`markets/${id}/ticker`);
    return JSON.parse(result);
  }
}

export default BudaAPI;
