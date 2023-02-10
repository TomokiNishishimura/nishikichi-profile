import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import { Authenticator } from '@aws-amplify/ui-react'
import awsExports from 'src/aws-exports';
import Amplify, { I18n } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Authenticator.Provider>
  )
}

export default MyApp
