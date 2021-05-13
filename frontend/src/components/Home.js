import React from 'react';
import '../stylings/Home.css';
import Product from './Product';

function Card() {
    return (
        <>
        <div className="home">
            <img className="home__sideimg" src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Music-Logo-Transparent-PNG.png" alt="Prime video"></img>
            <img className="home__collage" src="https://archive.org/download/poster-collage/poster-collage.jpg" alt="Collage"></img>
        </div>
        <div className="home2">
            <div className="home__row">
                <Product 
                    id="123"
                    title ="The lean setup of the following"
                    price={11.59}
                    rating={5}
                    image="https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80" 
                />
                <Product 
                    id="123"
                    title ="The lean setup of the following"
                    price={11.59}
                    rating={5}
                    image="https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80" 
                />
                <Product 
                    id="123"
                    title ="The lean setup of the following"
                    price={11.59}
                    rating={5}
                    image="https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80" 
                />
                <Product 
                    id="123"
                    title ="The lean setup of the following"
                    price={11.59}
                    rating={5}
                    image="https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123"
                    title ="The lean setup of the following"
                    price={11.59}
                    rating={5}
                    image="https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80" 
                />
                <Product 
                    id="123"
                    title ="The lean setup of the following"
                    price={11.59}
                    rating={5}
                    image="https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123"
                    title ="The lean setup of the following"
                    price={11.59}
                    rating={5}
                    image="https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80" 
                /> 
            </div>
        </div>
        </>
    )
}

export default Card

