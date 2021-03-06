import styles from './portifolio.module.scss'
import Image from 'next/image'

import pucpr from '../../assets/clientes/pucpr.png'
import sanepar from '../../assets/clientes/sanepar.png'
import angeloni from '../../assets/clientes/angeloni.png'
import slaviero from '../../assets/clientes/slaviero.png'
import unicred from '../../assets/clientes/unicred.jpg'

export function Portifolio() {
  return (
    <>
      <div className={styles.container} id="clientes">
        <h2>Conheça alguns de nossos clientes</h2>
        {/* <span>Conheça alguns de nossos clientes!</span> */}
        {/* <span>Em nosso portfólio, contabiliza-se obras na Sanepar, Unicred, Angelloni, Pizzaria Dallagrana, Hotéis Slaviero, PUCPR, também como obras para o consumidor final.</span> */}
        <div className={styles.content}>
          <div className={styles.clientContent}>
            <Image src={pucpr} alt="PUCPR" objectFit="cover" />
          </div>
          <div className={styles.clientContent}>
            <Image src={sanepar} alt="Sanepar" objectFit="cover" />
          </div>
          <div className={styles.clientContent}>
            <Image src={angeloni} alt="Angeloni" objectFit="cover" />
          </div>
          <div className={styles.clientContent}>
            <Image src={slaviero} alt="Slaviero" objectFit="cover" />
          </div>
          <div className={styles.clientContent}>
            <Image src={unicred} alt="Unicred" objectFit="cover" />
          </div>
        </div>
      </div>
    </>
  )
}