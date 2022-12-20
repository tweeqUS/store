import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}><NavLink to='/cases'>Товары</NavLink></div>
      <div className={s.item}><NavLink to='/stock'>Акции</NavLink></div>
      <div className={s.item}><NavLink to='/payment'>Оплата</NavLink></div>
      <div className={s.item}><NavLink to='/delivery'>Доставка</NavLink></div>
      <div className={s.item}><NavLink to='/contacts'>Контакты</NavLink></div>
    </nav>
  )
}

export default Navbar;