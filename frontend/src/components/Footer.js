import React from 'react'
import { Link } from 'react-router-dom';
import '../stylings/Footer.css';
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


function Footer() {
   
    return (
        <nav className="footer">
           
            <Link to = "/">
                <img className="footer__logo" src = "http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon logo"/>
            </Link> 
            <div className="footer__nav">
                <Link  className="footer__link">
                    <div  className="footer__option">
                        <span className="footer__option__line2">Get to Know Us</span>
                        <span className="footer__option__line1">About us</span>
                        <span className="footer__option__line1">Careers</span>
                        <span className="footer__option__line1">Amazon Cares</span>
                        <span className="footer__option__line1">Gift a smile</span>
                    </div>
                </Link>
                <Link to = "/" className="footer__link">
                <div  className="footer__option">
                        <span className="footer__option__line2">Connect with Us</span>
                        <span className="footer__option__line1">Facebook</span>
                        <span className="footer__option__line1">Twitter</span>
                        <span className="footer__option__line1">Instagram</span>
                    </div>
                </Link>
                <Link to = "/" className="footer__link">
                    <div className="footer__option">
                    <span className="footer__option__line2">Make money with Us</span>
                        <span className="footer__option__line1">Sell on Amazon</span>
                        <span className="footer__option__line1">Become an Affiliate</span>
                        <span className="footer__option__line1">Advertise your Products</span>
                    </div>
                </Link>
                <Link to = "/" className="footer__link">
                    <div className="footer__option">
                    <span className="footer__option__line2">Let us help you</span>
                        <span className="footer__option__line1">Your Account</span>
                        <span className="footer__option__line1">Returns Center</span>
                        <span className="footer__option__line1">Help</span>
                    </div>
                </Link>
            </div>
        </nav> 
    )
}

export default Footer
