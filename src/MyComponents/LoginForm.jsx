import React from 'react'
import Textfield from './Textfield'

const LoginForm = (props) => {
    return (
        <>
            <div>
                <label>{props.username}</label>
                <Textfield ph="Enter College username" />
            </div>
        </>
    )
}

export default LoginForm;