import React from 'react'
import '../styles/about.css';
import brain from '../assets/brain.png';

const About = () => {
  return (
    <div className='about__main' id='about'>
      <div className='about__img'>
        <img src={brain} alt="cerebro?" />
      </div>
      <div className='about__content'>
        <h2>SOBRE <span>NOSOTROS</span></h2>
        <p>En sunflower nos encargamos de adaptar negocios a las nuevas tecnologias y prepararlos para responder con <span>éxito</span> a los constantes cambios del mercado</p>
        <p>Creamos <span>soluciones</span> de marketing que no solo satisfagan las necesidades actuales de nuestros clientes, sino que también anticipen y se adapten a las <span>tendencias</span> futuras.</p>
      </div>
    </div>
  )
}

export default About