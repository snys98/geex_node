import { AppConfig } from 'xorgx-libs';

export const appConfig: AppConfig = {
  appName: "api",
  gql: {
    subgraphs: [
      {
        name: "identity",
        url: process.env.IDENTITY_SUBGRAPH_URL || "http://localhost:3001/graphql",
      }
    ],
  },
  logger: {
    logResponse: true,
  },
};
