import React,{useState} from 'react';
import '../stylings/Register.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../FireBase/Firebase';

function Register() {

    
    const history = useHistory();
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');

    const register = event =>{
        if(validate()){
            event.preventDefault();
            auth.createUserWithEmailAndPassword(email,password)
            .then(auth =>{
                alert("Your Amazon account has been created! Log in to continue shopping!");
                history.push("/login");
            })
            .catch(e=> alert(e.message));
        }
    }

    const validate = () =>{
        let isValid = true;

        if (typeof password !== "undefined" && typeof repassword !== "undefined") {
            if (password != repassword) {
                alert("Your passwords don't match! Try again");
                isValid = false;
            }
        } 
        if(phone.length !=10){
            alert("Mobile number entered is invalid")
            isValid = false;
        }
        if(name.length == 0){
            alert("Please enter your name")
            isValid = false;
        }
        return isValid;
    }

    return (
        <div className="register">
            <form>
                <Link to ="/">
                    <img className="register__logo" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt=""></img>
                </Link>
                <div className="register__container">
                    <h1>Create Account</h1>
                    <form>
                        <h5>Your Name</h5>
                            <input value={name} onChange={event => setName (event.target.value)} type="text"/>
                        <h5>Mobile Number</h5>
                            <input value={phone} onChange={event => setPhone (event.target.value)} type="text"/>
                        <h5>E-mail</h5>
                            <input value={email} onChange={event => setEmail (event.target.value)} type="email"/>
                        <h5>Password</h5>
                            <input value={password} onChange={event => setPassword (event.target.value)} type ="password"/>
                        <h5>Re-enter Password</h5>
                            <input value={repassword} onChange={event => setRepassword (event.target.value)} type ="password"/>
                        <button onClick={register}  type="submit" className="register__signin">Continue</button>
                    </form>
                    <p>By continuing, you agree to Amazon's Conditions and Privacy Notice. Please see our Privacy Notice, our Cookies and interest-based Notice.</p>
                    <small>----------Already Registered?---------</small>
                    <Link to ="/login">
                        <button className="register__create">Sign into your account</button>
                    </Link>
                </div>
                </form>
        </div>
    )
}

export default Register
