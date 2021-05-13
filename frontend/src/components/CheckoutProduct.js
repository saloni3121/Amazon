import React from 'react';
import { useStateValue } from '../provider/StateProvider';
import '../stylings/CheckoutProduct.css';

function CheckoutProduct({id,title,image,rating,price}) {

    const [{basket}, dispatch]= useStateValue();

    const Remove =()=>{
        dispatch({
            type: "REMOVE",
            id: id,
        });
    }
    return (
        <div className="checkoutpro">
            <img className="checkoutpro_img" src = {image} alt="Product"/>
            <div className="checkoutpro_info">
                <p className="checkoutpro_title">{title}</p>
                <p className="checkoutpro_price">
                    <small>€ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutpro_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))
                    } 
                </div>
                <button onClick={Remove}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
