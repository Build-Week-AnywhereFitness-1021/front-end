import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

const ClientPage = (props) => {
const { /*URL*/ } = useRouteMatch()
return (
    <div className = "clientContainer">
        <h1>Are you ready to get fit</h1>
        <Link to={/*class form */}><button>CLASSES</button></Link>
    </div>
);
};
export default ClientPage;