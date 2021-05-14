import React,{useState} from 'react';
import '../stylings/Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../FireBase/Firebase';

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const login = event =>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/'); 
            })
            .catch(e=> alert(e.message));
    }

    const register = event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth =>{

        })
        .catch(e=> alert(e.message));
    }

    return (
        <div className="login">
            <Link to ="/">
                <img className="login__logo" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt=""></img>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail (event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword (event.target.value)} type ="password"/>
                    <button onClick= {login} type="submit" className="login__signin">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. Please see our Privacy Notice, our Cookies and interest-based Notice.</p>
                <small>----------New to Amazon?---------</small>
                <Link to ="/register">
                     <button className="login__create">Create your Amazon Account</button>
                     {/* <button onClick={register} className="login__create">Create your Amazon Account</button> */}

                </Link>
            </div>
        </div>
    )
}

export default Login
