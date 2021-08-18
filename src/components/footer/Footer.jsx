import styles from './footer.module.scss'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import Image from 'next/image'
import logo from '../../assets/logo.png'

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} />
        </Link>
      </div>
      <div className={styles.social}>
        <div>
          <Link href="https://api.whatsapp.com/send?phone=554198243992" target="_blank">
            <FaWhatsapp />
          </Link>
        </div>
        <div>
          <Link href="https://www.instagram.com/construtoramrp/" target="_blank">
            <FaInstagram />
          </Link>
        </div>
        <div>
          <Link href="https://www.facebook.com/daripaiano">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </div>
  )
}