import React from 'react'
import '../styles/about.css';
import brain from '../assets/brain.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const About = () => {

  return (
    <div className='about__main' id='nosotros'>
      <div className='about__img' data-aos="fade-up">
        <img src={brain} alt="cerebro?" />
      </div>
      <div className='about__content' data-aos="fade-up">
        <h2>SOBRE <span>NOSOTROS</span></h2>
        <p>En Sunflower nos encargamos de adaptar negocios a las nuevas tecnologías y prepararlos para responder con <span>éxito</span> a los constantes cambios del mercado.</p>
        <p>Creamos <span>soluciones</span> de marketing que no solo satisfagan las necesidades actuales de nuestros clientes, sino que también anticipen y se adapten a las <span>tendencias</span> futuras.</p>
      </div>
    </div>
  )
}

export default About