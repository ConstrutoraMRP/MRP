import { Header } from '../components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
    </>
  )
}

export default MyApp
