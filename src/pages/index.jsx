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
        <meta name="description" content="Construtora MRP - A mais de 18 anos transformando sonhos em realidade através da construção civíl - Atendemos diversas áreas: Residencial, Comercial, Empresarial, Hotelaria e Hospitalar. Venha fazer um orçamento conosco! " />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Main />
      <Diferencial />
      <Services />
      <Portifolio />
      <Contato />
      <Footer />

    </div>
  )
}
