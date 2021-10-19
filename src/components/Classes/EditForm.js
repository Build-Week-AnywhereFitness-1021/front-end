import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../Login/utils/axiosWithAuth';

const EditClass = (props) => {
    const [formValues, setFormValues] = useState(props.class)
    const { push } = useHistory()
    const { ClassId } = useParams()

    // useEffect(() => {
    //     axiosWithAuth().get(`/api/classes/ClassId/${ClassId}`)
    //     .then(res => {
    //         setFormValues(res.data)
    //         console.log(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    const submitEditedListing = () => {
        axiosWithAuth().put(`/api/classes/ClassId/${ClassId}`, formValues)
            .then(res => {
                push('/instructor')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.toggler()
        submitEditedListing()
        props.hanldeFetch()
    }

    const handleCancel = () => {
        console.log('cancel')
        console.log(formValues)
        push('/instructor')
    }

    return (
        <div>
            <h1>Edit Class:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Class ID:
                    <input
                        type='text'
                        name='ClassId'
                        value={formValues.ClassId}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Class name:
                    <input
                        type='text'
                        name='Name'
                        value={formValues.Name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Class type:
                    <input
                        type='text'
                        name='Type'
                        value={formValues.Type}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Start time:
                    <input
                        type='text'
                        name='StartTime'
                        value={formValues.StartTime}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Duration:
                    <input
                        type='text'
                        name='Duration'
                        value={formValues.Duration}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Intesity level:
                    <input
                        type='text'
                        name='IntensityLevel'
                        value={formValues.IntensityLevel}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Location:
                    <input
                        type='text'
                        name='Location'
                        value={formValues.Location}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Max class size:
                    <input
                        type='text'
                        name='MaxClassSize'
                        value={formValues.MaxClassSize}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>Submit Changes</button>
                {/* <button type='button' onClick={handleCancel}>Cancel</button> */}
            </form>
        </div>
    )
};

export default EditClass; 