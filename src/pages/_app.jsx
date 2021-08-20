import { Header } from '../components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import { WhatsappButton } from '../components/floatWhatsButton/WhatsappButton';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
      <WhatsappButton />
    </>
  )
}

export default MyApp
