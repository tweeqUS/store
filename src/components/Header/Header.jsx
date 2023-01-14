import React from "react";
import s from './Header.module.css'
import logo from './img/logo.png'
import cart from './img/cart.svg'
import login from './img/login.png'


const Header = () => {
    return (
        <header className={s.header}>
        <img className={s.logo} src={logo} alt='logo' />
        <h1>Ларёк марёк нарёк</h1>
        <img className={s.cart} src={cart} alt="cart" />
        <button className={s.button}>
          <img src={login} alt="login" />
          Log in
          </button>
      </header>
    )
}

export default Header;
