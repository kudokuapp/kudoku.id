import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import '../styles/slides.css'
import '../styles/component.css'
import '../styles/Swiper.css'
import '../styles/Swiperitem.css'
import '../styles/placeholder.css'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default appWithTranslation(MyApp)
