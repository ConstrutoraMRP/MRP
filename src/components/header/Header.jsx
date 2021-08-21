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
          <a><Image src={logo} alt="Logo MRP" /></a>
        </Link>
      </div>
      <nav>
        <Link href="#sobre">
          <span><a>Sobre nós</a></span>
        </Link>
        <Link href="#servicos">
          <span><a>Serviços</a></span>
        </Link>
        <Link href="#clientes">
          <span><a>Clientes</a></span>
        </Link>
        <Link href="#contato">
          <span><a>Contato</a></span>
        </Link>
      </nav>
      <div className={styles.mobile_menu}>
        <SidebarMenu />
      </div>
    </header>
  )
}