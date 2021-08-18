
import styles from './contato.module.scss'
import emailjs from 'emailjs-com'
import { Footer } from '../footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


export function Contato() {

  const [hundleInput, setHundleInput] = useState(false);

  function hundleFocus() {
    setHundleInput(true)
  }

  function sendEmail(e) {
    e.preventDefault();

    // emailjs.sendForm('service_9q0k3sl', 'template_mrp', e.target, 'user_X77KG79uYjEEeH0DF4x5t')
    emailjs.sendForm('service_lvtddyn', 'template_mrp', e.target, 'user_pFHS264Nagf6Bvcftaynn')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      toast.success('E-mail enviado com sucesso!');

    e.target.reset();
  }
  return (
    <div className={styles.bg}>
      <ToastContainer />
      <div className={styles.container} id="contact">
        <h2>Fale conosco</h2>
        <div className={styles.content}>
          <form onSubmit={sendEmail}>
            <div className={styles.emailHeader}>
              <input type="email" placeholder="Endereço de e-mail" name="email" required />
              <input type="text" placeholder="Assunto do e-mail" name="subject" required />
            </div>
            <div className={styles.emailText}>
              {/* <input type="text" placeholder="Texto" required /> */}
              <textarea placeholder="Digite aqui sua mensagem." name="message" onClick={hundleFocus}/>
            </div>
            <button type="submit" > Enviar</button>
          </form>
        </div>
      </div>
      <div>
        {/* {
          hundleInput ? <Footer /> : false
        } */}
        <Footer />
      </div>
    </div>
  )
}
