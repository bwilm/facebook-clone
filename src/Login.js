import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
import {auth, provider} from './firebase';

function Login() {
    const[state,dispatch] = useDataLayerValue();
    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then((user)=>{
            dispatch({
                type:"SET_USER",
                user,
            })
        }).catch((error)=>alert(error.message))

    }
    return (
        <div className="login">
            <div className="login_logo">
            <img src="https://i.ibb.co/8Xh7nnT/facebooklogo.png" alt=""/>
            </div>
            <Button onClick={signIn}><h3>SIGN IN</h3></Button>

            <div className="login_footer">
                <small style={{color:"gray"}}>Facebook UI Clone using React.js</small>
                <small style={{color:"darkgray"}}>Created by brandonKyle 2020</small>
            </div>
        </div>
    )
}

export default Login
