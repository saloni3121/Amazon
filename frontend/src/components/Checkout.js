import { Link } from 'react-router-dom';
import React from 'react';
import { useStateValue } from '../provider/StateProvider';
import '../stylings/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const[{basket},dispatch] = useStateValue();
    console.log(basket);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src= "https://jumprov.files.wordpress.com/2017/01/asc_bannersxsite_houseads_728x90_pv_en-gb._cb1198675309_-prime-video.gif"></img>
                {basket?.length ===0 ? (
                        <div className="wrapper">
                            <h2 className="checkout__display">Your basket is empty</h2>
                            <p className="checkout__display">You have no items in your basket. To buy one or more items, click on the "Add to basket" option present below the item</p>
                            <Link to = "/">
                                <button className="checkout__button">Continue Shopping</button>
                            </Link>
                        </div>
                    ):( 
                        <div className="checkout__title">
                            <h2 style={{display:'inline-block'}}>All items you added to the basket</h2>
                            <Link to ="/">
                                <button className="checkout__button_2">Continue Shopping</button>
                            </Link>
                            {basket.map(item=>(
                                <CheckoutProduct
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))} 
                            
                        </div>
                    )
                }
            </div>
            {basket.length >0 && (
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    );
}

export default Checkout


