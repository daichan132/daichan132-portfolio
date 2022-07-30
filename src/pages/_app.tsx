import Layout from '@/components/layouts/mainLayout'
import AppProvider from '@/providers/app'

import type { AppProps } from 'next/app'
import 'fontsource-noto-sans-jp'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppProvider>
)

export default MyApp
