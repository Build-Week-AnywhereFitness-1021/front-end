import { useHistory } from 'react-router-dom'
import React from 'react';

const ClientPage = (props) => {
const { push } = useHistory();

const handleClick = (e) => {
    e.preventDefault();
    push('/classes');
}

return (
    <div className = "clientContainer">
        <h1>Are you ready to get fit</h1>
        <button onClick={handleClick}>CLASSES</button>
    </div>
);
};
export default ClientPage;