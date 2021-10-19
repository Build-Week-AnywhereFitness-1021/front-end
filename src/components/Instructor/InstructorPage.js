import React from 'react';
import Classes from '../Classes/ClassesList';
import EditForm from '../Classes/EditForm';
import { Link } from 'react-router-dom';

const InstructorPage = () => {
    return(
        <>
            <div className='instructor-page'>
                <h3>Thank you for creating your ANYWHERE FITNESS instructor account!</h3>
                <p>As an instructor, you can...</p>
                    <Link>Add Classes</Link>
                    <Link>Manage Classes</Link>
            </div>
        </>
    )
}

export default InstructorPage;