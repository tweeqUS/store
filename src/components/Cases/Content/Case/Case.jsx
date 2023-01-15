import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from './Case.module.css'

// import classNames from 'classnames';

const Case = (props) => {
    // let [counter, setCounter] = useState(0);
    // const onclickLike = () => {
    //     setCounter(++counter);
    //   };

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get("https://fakestoreapi.com/products")
        promise.then((res) => {
            const products = res.data;
            setProducts(products)
        });
    }, []);

    const showMoreHandler = (id) => {
        navigate(`product/${id}`)
        console.log(id);
    }
    return (
        <div className={s.our_cases}>
            {props.message}
            {products.map((el) => {
                return (
                    <div className={`${s.case} ${s.case_1}`} key={el.id}>
                        <h1>{el.title}</h1>
                        <img src={el.image} alt='img'></img>
                        <h4 className={s.case_price}>${el.price}</h4>
                        <button onClick={() => showMoreHandler(el.id)}>show more</button>
                    </div>
                )
            })}

            {/* <div className={classNames(s.case, s.case_2)}>
                <h1>Товар</h1>
                <img src='http://zornet.ru/_fr/81/7704636.jpg' alt='img'></img>
                <h3>Описание</h3>
                <h4 className={s.case_price}>Стоимость</h4>
            </div>
            <div className={classNames(s.case, s.case_3)}>
                <h1>Товар</h1>
                <img src='http://zornet.ru/_fr/81/0139850.jpg' alt='img'></img>
                <h3>Описание</h3>
                <h4 className={s.case_price}>Стоимость</h4>
            </div>
            <div className={classNames(s.case, s.case_4)}>
                <h1>Товар</h1>
                <img src='http://zornet.ru/_fr/81/8447465.jpg' alt='img'></img>
                <h3>Описание</h3>
                <h4 className={s.case_price}>Стоимость</h4>
            </div>
            <div className={classNames(s.case, s.case_5)}>
                <h1>Товар</h1>
                <img src='http://zornet.ru/_fr/81/2169494.jpg' alt='img'></img>
                <h3>Описание</h3>
                <h4 className={s.case_price}>Стоимость</h4>
            </div>
            <div className={classNames(s.case, s.case_6)}>
                <h1>Товар</h1>
                <img src='http://zornet.ru/_fr/81/7838580.jpg' alt='img'></img>
                <h3>Описание</h3>
                <h4 className={s.case_price}>Стоимость</h4>
            </div>
            <div className={classNames(s.case, s.case_7)}>
                <h1>Товар</h1>
                <img src='http://zornet.ru/_fr/81/9419281.jpg' alt='img'></img>
                <h3>Описание</h3>
                <h4 className={s.case_price}>Стоимость</h4>
            </div>
            <div className={classNames(s.case, s.case_8)}>
                <h1>Товар</h1>
                <img src='http://zornet.ru/_fr/81/8493688.jpg' alt='img'></img>
                <h3>Описание</h3>
                <h4 className={s.case_price}>Стоимость</h4>
            </div>
            <div className={classNames(s.case, s.case_9)}>
                <h1>Товар</h1>
                <img src='http://zornet.ru/_fr/81/9601951.jpg' alt='img'></img>
                <h3>Описание</h3>
                <h4 className={s.case_price}>Стоимость</h4>
            </div> */}
        </div>
    )
}

export default Case;