import axios from "axios"
import { useEffect, useState } from "react"
import rating from './img/rating.svg'
import cartWhite from './img/cartWhite.svg'
import s from './product.module.css'
import { Link, useParams } from "react-router-dom"
import arrowBack from './img/arrowBack.svg'
import { Reviews } from "./Reviews/Reviews"

export const Product = () => {

    const [product, setProduct] = useState(null)
    let { productId } = useParams();


    useEffect(() => {
        const promise = axios.get(`https://fakestoreapi.com/products/${productId}`)
        promise.then((res) => {
            setProduct(res.data)
        })
    }, []);

    const [isProductInCart, setIsProductIncart] = useState(false)

    // ...
    const addProductToCartHandler = () => {
        alert('Товар успешно добавлен в корзину')
        setIsProductIncart(true)
    }

    return (
        <div>
            <div className="arrowBack">
                <Link to={"/"}>
                    <img src={arrowBack} alt="" />
                    Вернутся к товарам
                </Link>
            </div>

            {
                product === null
                    ? <h1>LOADING...</h1>
                    : <div className={s.product}>
                        <img src={product.image} alt="" />
                        <div className={s.info}>
                            <p className={s.title}>{product.title}</p>
                            <p className={s.price}>$ {product.price}</p>
                            <div className={s.rating}>
                                <p>Rating: {product.rating.rate}</p>
                                <img src={rating} alt="" />
                            </div>
                            <div className={s.category}>
                                <span>Category:</span>
                                <p>{product.category}</p>
                            </div>
                            <p className={s.description}>{product.description}</p>
                            <button onClick={addProductToCartHandler} >
                                <img src={cartWhite} alt="" />
                                {isProductInCart ? 'Go to cart' : 'Add to cart'}
                            </button>
                        </div>
                    </div>
            }



            <Reviews />
        </div>
    )
}