import styles from './services.module.scss'

import Image from 'next/image'

import pintura from '../../assets/teste.jpg'
import asfalto from '../../assets/asfalto.jpg'
import eletrica from '../../assets/eletrica.jpg'
import hidraulica from '../../assets/hidraulica.jpg'
import telhado from '../../assets/telhado.jpg'
import impermeabilizacao from '../../assets/impermeabilizacao.jpg'
import obras from '../../assets/obras.jpg'
import gesso from '../../assets/gesso.jpg'
import porcelanato from '../../assets/porcelanato.jpg'
import limpeza from '../../assets/limpeza.png'

export function Services() {
  return (
    <>
      <div className={styles.container} id="servicos">
        <h2>Serviços</h2>
        <div className={styles.cards}>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <span>Construção e Reforma.</span>
            </div>
            <div className={styles.cardImage}>
              <Image src={obras} alt="Construção e reforma" layout="fill" objectFit="cover" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <span>Pinturas Internas e Externas (Lisa, Textura, Projetada e Epóxi)</span>
            </div>
            <div className={styles.cardImage}>
              <Image src={pintura} alt="Pinturas Internas e Externas (Lisa, Textura, Projetada e Epóxi)" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <span>Elétrica (Residencial e Predial)</span>
            </div>
            <div className={styles.cardImage}>
              <Image src={eletrica} alt="Elétrica (Residencial e Predial)" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <span>Hidráulicas (Água Fria, Quente e Esgoto)</span>
            </div>
            <div className={styles.cardImage}>
              <Image src={hidraulica} alt="Hidráulicas (Água Fria, Quente e Esgoto)" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Telhados (Telha Barro, Ondulada, Concreto, Sanduiche e Canalete).
            </div>
            <div className={styles.cardImage}>
              <Image src={telhado} alt="Telhados (Telha Barro, Ondulada, Concreto, Sanduiche e Canalete)." objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Impermeabilizações Internas e Externas
            </div>
            <div className={styles.cardImage}>
              <Image src={impermeabilizacao} alt=" Impermeabilizações Internas e Externas" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Gesso e Drywall.
            </div>
            <div className={styles.cardImage}>
              <Image src={gesso} alt="Gesso e Drywall." objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Assentamento de Pisos e Revestimentos (Porcelanato/Cerâmica).
            </div>
            <div className={styles.cardImage}>
              <Image src={porcelanato} alt="Assentamento de Pisos e Revestimentos (Porcelanato/Cerâmica)." objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Pavimentação – Asfalto e Paver.
            </div>
            <div className={styles.cardImage}>
              <Image src={asfalto} alt="Pavimentação – Asfalto e Paver." objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Limpeza e conservação de obras.
            </div>
            <div className={styles.cardImage}>
              <Image src={limpeza} alt="Limpeza e conservação de obras." objectFit="cover" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}