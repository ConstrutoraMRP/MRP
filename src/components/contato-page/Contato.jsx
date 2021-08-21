
import styles from './contato.module.scss'
import emailjs from 'emailjs-com'
import { Footer } from '../footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


export function Contato() {

  const [hundleInput, setHundleInput] = useState(false);
  const [hasFocus, setFocus] = useState(false);

  function hundleFocus() {
    setHundleInput(true)
    console.log(hundleInput)
  }

  function sendEmail(e) {
    e.preventDefault();

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
      <div className={styles.container} id="contato">
        <h2>Fale conosco</h2>
        <div className={styles.content}>
          <form onSubmit={sendEmail}>
            <div className={styles.emailHeader}>
              <input type="email" placeholder="Endereço de e-mail" name="email" required onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)} />
              <input type="text" placeholder="Assunto do e-mail" name="subject" required onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)} />
            </div>
            <div className={styles.emailText}>
              <textarea placeholder="Digite aqui sua mensagem." required onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)} />
            </div>
            <button type="submit" > Enviar</button>
          </form>
        </div>
      </div>
      {/* <div className={hasFocus ? styles.App__redText : styles.App__defaultText}> */}
      <Footer />
      {/* </div> */}
    </div>
  )
}
