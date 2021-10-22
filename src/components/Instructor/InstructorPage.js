import React from 'react';
import Classes from '../Classes/ClassesList';
import EditForm from '../Classes/EditForm';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'

const InstructorPage = () => {
    const { push } = useHistory();
    const handleClick = (e) => {
        e.preventDefault();
        push('/CreateClassForm');
    }
    return(
        <>
            <div className='instructor-page'>
                {/* <p>As an instructor, you can...</p> */}
                <Link className='addClasses' onClick={handleClick}>Add Classes</Link><br/>
                <Link className='manageClasses' onClick={handleClick}>Manage Classes</Link>
            </div>
        </>
    )
}

export default InstructorPage;