import React from "react";
import s from './search.module.css'

const Search = () => {
    return (
        <div className={s.searсh}>
          <input placeholder='Введите текст'></input>
          <button>Поиск</button>
        </div>
    )
}

export default Search;