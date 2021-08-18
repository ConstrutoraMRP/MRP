import { SidebarMenu } from "./SidebarMenu";
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../assets/logo.png'

import styles from './header.module.scss'

export function Header() {
  return (

    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} />
        </Link>
      </div>
      <nav>
        <Link href="#about">
          <span><a>Sobre nós</a></span>
        </Link>
        <Link href="#services">
          <span><a>Serviços</a></span>
        </Link>
        <Link href="#portifolio">
          <span><a>Portifólio</a></span>
        </Link>
        <Link href="#contact">
          <span><a>Contato</a></span>
        </Link>
      </nav>

      <div className={styles.mobile_menu}>
        <SidebarMenu />
      </div>

    </header>
  )
}