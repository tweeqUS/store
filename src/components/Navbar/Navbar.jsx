import React from "react";
import s from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={s.nav}>
        <div><a className={s.item} href='/'>Товары</a></div>
        <div><a className={s.item} href='/'>Акции</a></div>
        <div><a className={s.item} href='/'>Оплата</a></div>
        <div><a className={s.item} href='/'>Доставка</a></div>
        <div><a className={s.item} href='/'>Контакты</a></div>
      </nav>
    )
}

export default Navbar;