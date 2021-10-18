import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "", //need server
        headers: {
            authorization: token
        }
    });
}

export default axiosWithAuth;