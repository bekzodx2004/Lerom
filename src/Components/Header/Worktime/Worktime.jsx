import React from 'react'
import './Worktime.scss'
const Worktime = () => {
  return (
    <div className="work  animate__animated animate__fadeInLeft animate__delay-1s">
    <h3>
      <i className="fa-solid fa-clock"></i>
      Пн-Пт с 10:00 до 20:00 <br />
      Сб-Вс с 10:00 до 19:00
    </h3>
    <a href="https://t.me/bekzodx2004">
      <i className="fa-solid fa-compass"></i>
      Наши салоны
    </a>
  </div>
  )
}

export default Worktime