import React from 'react'
import { Link } from 'react-router-dom';
import '../stylings/Header.css';
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from '../provider/StateProvider';
import { auth } from '../FireBase/Firebase';

function Header() {
    const [{basket, user}] = useStateValue();
    const login = ()=>{
        if(user){
            auth.signOut();
        }
    };

    return (
        <nav className="header">
           
            <Link to = "/">
                <img className="header__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon logo"/>
            </Link>
          
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            <div className="header__nav">
                <Link to = {!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__option__line1">Hello, {user?.email ? user?.email : "User"}!</span>
                        <span className="header__option__line2">{user? "Sign Out": "Sign In"}</span>
                    </div>
                </Link>
                <Link to = "/" className="header__link">
                    <div className="header__option">
                        <span className="header__option__line1">Returns</span>
                        <span className="header__option__line2">& Orders</span>
                    </div>
                </Link>
                <Link to = "/" className="header__link">
                    <div className="header__option">
                        <span className="header__option__line1">Your</span>
                        <span className="header__option__line2">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                <div className="header__optionBasket">
                    <AddShoppingCartIcon/>
                    <span className="header__option__line2 header__basketCount">{basket?.length}</span>
                </div>
                </Link>
            </div>
        </nav> 
    )
}

export default Header
