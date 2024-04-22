import React from 'react'
import '../styles/home.css';
import video from '../assets/bg-video.mp4';
import videomb from '../assets/videomb.mp4';

const Home = () => {
  return (
    <div className='home__container'>
      <video autoPlay loop muted className='home__video_destock'>
        <source src={video} type='video/mp4' />
      </video>
      <video autoPlay loop muted className='home__video_mb'>
            <source src={videomb} type='video/mp4' />
        </video>
      <div className='home__content'>
        <h1>MARKETING DIGITAL <br /><span>COMPROMETIDO</span> <br />CON SU FUTURO.</h1>
        <p>Contar con una estrategía de marketing digital es esencial para garantizar el progreso y la prosperidad de su negocio.</p>
        <p>Una comprensión profunda de sus objetivos, sus clientes y el panorama competitivo, le aseguran una presencia solida y efectiva en la web.</p>
        <button onClick={""}>Asesoria sin cargo</button>
      </div>
    </div>
  )
}

export default Home