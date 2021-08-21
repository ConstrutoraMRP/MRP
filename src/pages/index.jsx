import Head from 'next/head'
import { Diferencial } from '../components/diferenciais-page/Diferencial'

import { Main } from '../components/main-page/Main'
import { Portifolio } from '../components/portifolio/Portifolio'
import { Services } from '../components/services-page/Services'
import { Contato } from '../components/contato-page/Contato'
import { Footer } from '../components/footer/Footer'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Construtora MRP</title>
        <meta name="Construtora MRP" content="Construtora MRP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Diferencial />
      <Services />
      <Portifolio />
      <Contato />
      
    </div>
  )
}
