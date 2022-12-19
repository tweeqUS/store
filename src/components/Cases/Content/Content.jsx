import React from "react";
import Case from "./Case/Case";
import s from './Content.module.css';



const Content = () => {
    return (
        <div className={s.content}>
         <Case title="Товар" image="http://zornet.ru/_fr/81/4335554.jpg" descr="Описание" price="Цена"/>
        </div>
    )
}

export default Content;