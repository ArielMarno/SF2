import React from 'react'
import '../styles/burguer.css';

const Burguer = (props) => {
  return (
    <div>
       <input type="checkbox" id="checkbox" onClick={props.handleClick}/>
       <label for="checkbox" class="toggle">
          <div class="bars" id="bar1"></div>
          <div class="bars" id="bar2"></div>
          <div class="bars" id="bar3"></div>
       </label>
    </div>
  )
}

export default Burguer