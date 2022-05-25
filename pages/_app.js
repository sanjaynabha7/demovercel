import '../styles/globals.css'
import '../styles/bootstrap.css'
import '../styles/style.css'
import '../styles/responsive.css'
import '../styles/style.css'
import '../styles/font-awesome.min.css'
import Layout from '../components/layout'
function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
