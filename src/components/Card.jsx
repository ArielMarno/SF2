import React from 'react'
import '../styles/card.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Card = ({img, icon, title, text, href}) => {
  return (
    <div className='card_services' style={{ backgroundImage: `url(${img})` }} data-aos="fade-up">
          <div className='details'>
            <img src={icon} alt={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={href} target='_blank' rel="noopener noreferrer">Más Información</a>
          </div>
        </div>
  )
}

export default Card