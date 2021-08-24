import { FaWhatsapp } from 'react-icons/fa';
import styles from './whatsappbutton.module.scss'
import Link from 'next/link'

export function WhatsappButton() {
  return (
    <div className={styles.container}>
      <div>
        <Link href="https://api.whatsapp.com/send?phone=554198243992" target="_blank">
          <span><a><FaWhatsapp /></a></span>
        </Link>
      </div>
    </div>
  )
}