
import styles from './main.module.scss'
import Link from 'next/link'

export function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Construtora MRP</h1>
        </div>
        <div>
          <h2>Mais de 18 anos transformando sonhos em realidade através da construção civíl.</h2>
        </div>
        <div className={styles.btn}>
          <Link href="#sobre">
            <button>
              <span><a>Saiba mais</a></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}