import styles from './diferencial.module.scss'
import { BiBuildingHouse } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

export function Diferencial() {
  return (
    <main className={styles.container} id="sobre">
      <div className={styles.title}>
        <div>
          <h2>Sobre nós</h2>
        </div>
        <span>
          Fundada em 2003, gerenciada por Daricles Paiano com vasta vivência na área da Construção Civil, onde recebeu o legado de seu Pai que o ensinou e forjou a carreira de construtor, e sua Esposa, Fabiana Paiano que deixou sua profissão de Gerente comercial, onde atuou por mais de 18 anos no grupo Boticário para agregar valor na visão comercial e na satisfação singular dos clientes. <br /><br />

          Contamos com a expertise de mercado do profissional Luiz Augusto, que integra o time de planejamento, com mais de 13 anos de experiência em gerenciamento de matérias de construção civil, seu foco esta em cotações e orçamentos para oferecer o melhor preço e qualidade. <br /><br />

          Desde a especificação de projetos, até os ajustes finais, integrando isso a sua realização, a MRP possui experiência técnica e prática em todas as etapas necessárias para o desenvolvimento de grandes obras, atendendo as necessidades de forma ímpar.
        </span>
        <span></span>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.ico}>
            <BiBuildingHouse />
          </div>
          <h2>Atendimento</h2>
          <p>Estamos presentes em Curitiba, Região metropolitana e Santa Catarina. Atuando nas áreas residenciais, comerciais, empresarial, hotelaria e hospitalar.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.ico}>
            <GoVerified />
          </div>
          <h2>Qualificação</h2>
          <p>Possuimos profissionais especializados e bem treinados, comprometidos na entrega com excelência de todas as obras.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.ico}>
            <FaRegHandshake />
          </div>
          <h2>Compromisso</h2>
          <p>Compromisso em atender nossos clientes com respeito e responsabilidade, seja a obra pequena, média ou de grande porte.</p>
        </div>
      </div>
    </main>
  )
}