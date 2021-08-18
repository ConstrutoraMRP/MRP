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
      <div className={styles.container} id="services">
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
              <Image src={pintura} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <span>Elétrica (Residencial e Predial)</span>
            </div>
            <div className={styles.cardImage}>
              <Image src={eletrica} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <span>Hidráulicas (Água Fria, Quente e Esgoto)</span>
            </div>
            <div className={styles.cardImage}>
              <Image src={hidraulica} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Telhados (Telha Barro, Ondulada, Concreto, Sanduiche e Canalete).
            </div>
            <div className={styles.cardImage}>
              <Image src={telhado} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Impermeabilizações Internas e Externas
            </div>
            <div className={styles.cardImage}>
              <Image src={impermeabilizacao} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Gesso e Drywall.
            </div>
            <div className={styles.cardImage}>
              <Image src={gesso} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Assentamento de Pisos e Revestimentos (Porcelanato/Cerâmica).
            </div>
            <div className={styles.cardImage}>
              <Image src={porcelanato} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Pavimentação – Asfalto e Paver.
            </div>
            <div className={styles.cardImage}>
              <Image src={asfalto} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              Limpeza
            </div>
            <div className={styles.cardImage}>
              <Image src={limpeza} alt="Construção e reforma" objectFit="cover" layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}