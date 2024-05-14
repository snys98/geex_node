import useLocalStorageState from 'use-local-storage-state';

import { ApolloProviderWrapper } from './apollo.provider';
import { AuthProvider } from './auth.provider';

export const AppProviders = ({ children }) => {
  const [accessToken, setAccessToken] = useLocalStorageState<string>('accessToken', {
    defaultValue: "",
    storageSync: true
  });

  return (
    <AuthProvider value={{ accessToken, setAccessToken }}>
      <ApolloProviderWrapper>
        {children}
      </ApolloProviderWrapper>
    </AuthProvider>
  );
};
export default AppProviders;
