import React from 'react';
import '../stylings/Product.css';
import { useStateValue } from '../provider/StateProvider';


function Product({id,title,image,price,rating}) {

    const[{basket, user},dispatch] = useStateValue();

    const add = ()=>{
        if(user?.email){
            alert(`${title} has been added to your cart`);
            dispatch({
            type: "ADD",
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }})
        }else{
            alert("You need to log in to add items to basket")
        }
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>€ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>⭐</p>
                        ))
                    } 
                </div>
            </div>
             
            <img src={image} alt="Product"></img>
            <button onClick={add}>Add to basket</button>
        </div>
    )
}

export default Product
// €