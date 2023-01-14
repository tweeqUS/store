import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Case from "./Case/Case";
import s from './Content.module.css';



const Content = () => {
    return (
        <div className={s.content}>
            <Case />
        </div>
    )
}

export default Content;

