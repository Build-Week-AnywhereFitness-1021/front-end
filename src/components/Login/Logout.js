import React, {useEffect} from 'react';
import {axiosWithAuth} from './../helpers/axiosWithAuth';

const Logout = (props) => {
    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(res => {
                localStorage.removeItem("token");
                localStorage.removeItem("role")
                props.history.push("/login");
            }).catch(err => {console.log(err)})
    }, [])
    return (<div>
        <h1>logging off...</h1>
    </div>)
}

export default Logout;