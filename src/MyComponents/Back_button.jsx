import React from 'react';
import '../Pages/Dashboard.css';
import Fab from '@mui/material/Fab';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

const Back_button = () => {
    return (
        <>
            <div className="back">
                <NavLink style={{ textDecoration: 'none' }} to={"/"} >
                    <Fab className='back_button' variant="extended">
                        <ArrowBackIcon sx={{ mr: 1 }} />
                        Back
                    </Fab>
                </NavLink>
            </div>
        </>
    );
}

export default Back_button;