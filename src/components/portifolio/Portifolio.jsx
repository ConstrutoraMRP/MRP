import styles from './portifolio.module.scss'
import { Carousel } from 'react-bootstrap'


import Image from 'next/image'

import portifolio1 from '../../assets/portifolio/foto-1.jpg'
import portifolio2 from '../../assets/portifolio/foto-2.jpg'
import portifolio3 from '../../assets/portifolio/foto-3.jpg'
import portifolio4 from '../../assets/portifolio/foto-4.jpg'
import portifolio5 from '../../assets/portifolio/foto-5.jpg'
import portifolio6 from '../../assets/portifolio/foto-6.jpg'
import portifolio7 from '../../assets/portifolio/foto-7.jpg'
import portifolio8 from '../../assets/portifolio/foto-8.jpg'
import portifolio9 from '../../assets/portifolio/foto-9.jpg'
import portifolio10 from '../../assets/portifolio/foto-10.jpg'
import portifolio11 from '../../assets/portifolio/foto-11.jpg'
import portifolio12 from '../../assets/portifolio/foto-12.jpg'
import portifolio13 from '../../assets/portifolio/foto-13.jpg'
import portifolio14 from '../../assets/portifolio/foto-14.jpg'
import portifolio15 from '../../assets/portifolio/foto-15.jpg'
import portifolio16 from '../../assets/portifolio/foto-16.jpg'
import portifolio17 from '../../assets/portifolio/foto-17.jpg'
import portifolio18 from '../../assets/portifolio/foto-18.jpg'

export function Portifolio() {
  return (
    <>
      <div className={styles.container} id="portifolio">
        <h2>Portifólio</h2>
        <span>Em nosso portfólio, contabiliza-se obras na Sanepar, Unicred, Angelloni, Pizzaria Dallagrana, Hotéis Slaviero, PUCPR, também como obras para o consumidor final.</span>
        <div className={styles.content}>
          <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
              <Carousel.Caption>
              </Carousel.Caption>
              <Image
                className="d-block w-100"
                src={portifolio1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio2}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio3}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio4}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio5}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio6}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio7}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio8}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio9}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio10}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio11}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio12}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio13}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio14}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio15}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio16}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio17}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <Image
                className="d-block w-100"
                src={portifolio18}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  )
}