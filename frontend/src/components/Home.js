import React from 'react';
import '../stylings/Home.css';
import Product from './Product';

function Card() {
    return (
        <>
        <div className="home">
            <img className="home__sideimg" src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Prime-Music-Logo-Transparent-PNG.png" alt="Prime video"></img>
            <img className="home__collage" src="https://archive.org/download/poster-collage/poster-collage.jpg" alt="Collage"></img>
            <p>Start your 30 day free trial now</p>

        </div>
        <div className="home2">
            <div className="home__row">
                <Product 
                    id="1"
                    title ="Autumn-Winter'20 Handbag"
                    price={20.49}
                    rating={4}
                    image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" 
                />
                <Product 
                    id="2"
                    title ="The Man Company Body Perfume"
                    price={15.69}
                    rating={5}
                    image="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=348&q=80" 
                />
                <Product 
                    id="3"
                    title ="Milk and honey"
                    price={3.50}
                    rating={3}
                    image="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
                />
                <Product 
                    id="4"
                    title =" Men's Gavin Skate Sneaker"
                    price={45.35}
                    rating={5}
                    image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="13"
                    title ="Canon Rayo I5"
                    price={109.96}
                    rating={4}
                    image="https://images.unsplash.com/photo-1589113050289-1c654e7e305d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                /> 
                <Product 
                    id="14"
                    title ="MacBook Pro 16-inch "
                    price={1750.63}
                    rating={5}
                    image="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" 
                /> 
                <Product 
                    id="6"
                    title ="Set of 12 wadrobe organizers"
                    price={15.49}
                    rating={4}
                    image="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="5"
                    title ="Crescent Affair Earring"
                    price={20.59}
                    rating={4}
                    image="https://images.unsplash.com/photo-1588891825655-aa526b56f805?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                />
                <Product 
                    id="7"
                    title ="Box of 16 assorted chocolates"
                    price={9.45}
                    rating={4}
                    image="https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" 
                /> 
                <Product 
                    id="8"
                    title ="Sony 32 inches HD display"
                    price={849.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81kezz4E4oL._AC_SX679_.jpg" 
                />  
                <Product 
                    id="9"
                    title ="High Sierra Bagpack"
                    price={39.94}
                    rating={4}
                    image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" 
                />  
                
            </div>
            <div className="home__row">
                <Product 
                    id="10"
                    title ="Tissot classic watch"
                    price={48.75}
                    rating={5}
                    image="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=80" 
                />  
                <Product 
                    id="11"
                    title ="Iphone XS Max (128Gb)"
                    price={1099.58}
                    rating={5}
                    image="https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                />  
                <Product 
                    id="12"
                    title ="Backdrop wallpaper"
                    price={19.59}
                    rating={2}
                    image="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                /> 
            </div>
        </div>
        </>
    )
}

export default Card

