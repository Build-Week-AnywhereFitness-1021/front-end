import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem("role")

    return axios.create({
        baseURL: "", //need server
        headers: {
            authorization: token,
            role: role
        }
    });
}

export default axiosWithAuth;