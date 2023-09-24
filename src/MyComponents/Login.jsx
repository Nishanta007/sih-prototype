// import React from 'react'
import React, { useState } from 'react';
import './Login.css';
import LoginForm from './LoginForm';

const Login = () => {
    const [selectedForm, setSelectedForm] = useState('college');

    const handleFormChange = (formType) => {
        setSelectedForm(formType);
    };
    return (
        <>
            <div className='contain'>
                <div className='login'>
                    <div className='l-option'>
                        <button type="button" className={`btn btn-outline-primary ${selectedForm === 'college' ? 'active' : ''}`}onClick={() => handleFormChange('college')}>College </button>
                        <button type="button" className={`btn btn-outline-primary ${selectedForm === 'organization' ? 'active' : ''}`}onClick={() => handleFormChange('organization')}>Organization</button>
                    </div>
                        {selectedForm === 'college' && <LoginForm username="College"/>}
                        {selectedForm === 'organization' && <LoginForm username="Organization"/>}
                </div>
            </div>
        </>
    )
}

export default Login