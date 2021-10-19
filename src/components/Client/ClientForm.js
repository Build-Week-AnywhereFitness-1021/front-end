import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react';

const ClientForm = (props) => {
    const { values, submit, change, errors, disabled} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <div className = "clientFormDiv">
            
        </div>
    )
}