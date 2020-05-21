import React from 'react';
import './Login.css';

const Login = () =>{
    return(
        <div class="container tc dib br3 pa3 ma2 bw2 shadow-5">
            <h2>login</h2>
            <form>
                <input type="email" className="email" placeholder="email"/>
                <br/>
                <input type="password" className="pwd" placeholder="password"/>
                <br/>
                <input type="checkbox" className="check" id="checkbox"></input>
                <label for="checkbox">Remember me</label>
            </form>
            <button className="register"><strong>register</strong></button>
            <button className="login"><strong>login</strong></button>
            <a href="#" className="link">
                forgot your password ?
            </a>
        </div>
    )
}

export default Login;