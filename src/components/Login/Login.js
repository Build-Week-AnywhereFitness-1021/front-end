import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router';
import { fetchStart, fetchSuccess } from './../../actions/index';

const Login = (props) => { 
    const {push} = useHistory();
    const [error,setError] = useState('');
    const [creds, setCreds] = useState({
        username: '',
        password: '',
        role: ''
    });
    const { user, isFetching, fetchStart, fetchSuccess } = props;
    
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

    if(isFetching){
        return <h2>Logging in...</h2>
    }

    return( 
    <div className = "login-main">
        <h1>Login Page</h1>
        <form className = "login-form">
            <label htmlFor="username-label">Username:</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={creds.username}
                    onChange={handleChange}
                    /><br/>
            <label htmlFor="password-label">Password:</label>
                <input
                    id="password"
                    type="text"
                    name="password"
                    value={creds.password}
                    onChange={handleChange}
                    /><br/>
            <label htmlFor="password-label">Instructor?</label>
                <input
                    id="role"
                    type="checkbox"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    /><br/>
            <button id='login-submit' onClick={handleLogin}>Login</button>
        </form>
        <div className = "login-error">
            <p id='error'>{error}</p>
        </div>

    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchStart, fetchSuccess })(Login);