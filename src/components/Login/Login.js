import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';

const Login = () => { 
    const {push} = useHistory();
    //need to seterror
    const [error,setError] = useState('Test Error')
    const [creds, setCreds] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })


    }
    // need backend endpoints
    const handleLogin = (e) => {
        e.preventDefault();
        
        axios.post("", creds)
      .then(resp => {
        // localStorage.setItem("token", resp.data.token);
        // localStorage.setItem("role", resp.data.role);
        if(resp.data.role === "instructor"){
            push("/instructor")
        }
        else{
            push("/client")
        
        }
      })
      .catch(err=> {
        console.log(err);
      })
    }


    return( 
    <div className = "login-main">
        <h1>Login Page</h1>
        <div className = "login-error">
            <p id='error'>{error}</p>
        </div>
        <form onSumbit = {handleLogin} className = "login-form">
            <label htmlFor="username-label">Username:</label><br/>
                <input
                    id="username"
                    name="username"
                    value={creds.username}
                    onChange={handleChange}
                /><br/>
            <label htmlFor="password-label">Password:</label><br/>
                <input
                    id="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChange}
                    /><br/>
            <button id='login-submit'>Login</button>
        </form>

    </div>
    )




}

export default Login;