import React from 'react'
import '../styles/card.css';

const Card = ({bg, icon, title, text}) => {
  return (
    <div className='card_services'>
        <div className='poster'><img src={bg} alt={bg} /></div>
        <div className='details'>
          <img src={icon} alt={icon} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Card