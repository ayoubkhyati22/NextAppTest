import '../styles/globals.css'
import Layout from '../src/layout/Layout'
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';


const queryClient = new QueryClient();


function MyApp({ Component, pageProps }) {
  return(
  <QueryClientProvider client={queryClient}>
  <Layout>
    <Component {...pageProps} />
    <ReactQueryDevtools />
  </Layout>
  </QueryClientProvider>
  )

   
}

export default MyApp
