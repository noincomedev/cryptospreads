import { ApolloServer } from "apollo-server-express";
import { WebApp } from "meteor/webapp";
import { getUser } from "meteor/apollo";
import merge from "lodash/merge";

import UserSchema from "../../../api/users/User.graphql";
import UserResolvers from "../../../api/users/resolvers";

import MarketSchema from "../../../../imports/api/markets/Market.graphql";
import MarketResolvers from "../../../api/markets/resolvers";

import BudaAPI from "../../../api/data-sources/buda";

const typeDefs = [UserSchema, MarketSchema];
const resolvers = merge(UserResolvers, MarketResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      BudaAPI: new BudaAPI()
    };
  },
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
});

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: "/graphql"
});

WebApp.connectHandlers.use("/graphql", (req, res) => {
  if (req.method === "GET") {
    res.end();
  }
});
