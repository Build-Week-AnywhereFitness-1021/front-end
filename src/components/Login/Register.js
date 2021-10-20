import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';


const initialState = {
    username: "",
    password: "",
    role: ""
}


const Register = () => {

    const [creds, setCreds] = useState(initialState)
    const {push} = useHistory();

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

//end endpoints
        axios
          .post("", creds)
          .then(res => {
            if(creds.role === "instructor"){
                push("/instructor")
            }
            else{
                push("/client")
            }
          })
          .catch(err => {console.log(err)})
          
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={creds.username}
                    onChange={handleChange}
                />
                <label>Password: </label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={creds.password}
                    onChange={handleChange}
                />
                <label id = 'role-dropdown'>Select A Role: </label>
                <select
                    onChange={handleChange}
                    values={creds.role}
                    name='role'
                    >   
                        <option value='-Select-'>-Select-</option>
                        <option value='intructor'>Instructor</option>
                        <option value='client'>Client</option>
                </select>

                <input type="submit" value="register" />
            </form>
        </div>
    )
}