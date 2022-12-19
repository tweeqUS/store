import React from "react";
import s from './Cases.module.css'
import Search from "./Search/Search";
import Content from "./Content/Content";



const Cases = () => {
    return (
      <div className={s.cases}>
        <Search/>
        <Content/>
      </div>
    )
}

export default Cases;