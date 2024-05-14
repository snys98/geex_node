import { useContext } from 'react';

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/link-context';

import { AuthContext } from './auth.provider';

export const ApolloProviderWrapper = (props: { children: React.ReactNode }) => {
  const { accessToken } = useContext(AuthContext);

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
      }
    }
  });

  const httpLink = new HttpLink({
    uri: `${import.meta.env.VITE_API_URL}/graphql`,
  });

  const Apollo = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return ApolloProvider({ ...props, client: Apollo });
};
