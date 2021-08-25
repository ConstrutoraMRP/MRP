import styles from './footer.module.scss'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { BiMap } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
// BiMap

import Image from 'next/image'
import logo from '../../assets/logo.png'

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.locale}>
        <p className={styles.ico}>Endereço</p>
          <span className={styles.ico}><BiMap /> <span className={styles.localeContent}>Rua Rio Juruá 360, Bairro Alto,<br />Curitiba – Paraná<br /></span></span>
        </div>
        <div className={styles.locale}>
          <p className={styles.ico}>Siga as nossas redes sociais</p>
          <div className={styles.social}>
          <div>
            <Link href="https://www.instagram.com/construtoramrp/" target="_blank">
              <a><FaInstagram /></a>
            </Link>
          </div>
          <div>
            <Link href="https://www.facebook.com/daripaiano">
              <a><FaFacebook /></a>
            </Link>
          </div>
        </div>
          {/* <span className={styles.ico}><BiPhone /> <span className={styles.localeContent}>41-3045-8791</span></span> */}
        </div>
      </div>
      <div className={styles.copyright}> 
        2021 © Todos os direitos reservados. <span style={{fontWeight: "bold"}}>Construtora MRP</span>
      </div>
    </div>
  )
}