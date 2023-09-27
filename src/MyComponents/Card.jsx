import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "./organization.css";

const Card = (props) => {

    return (
        <>
            <div className="cards-Contain">
                <div style={{ marginLeft: '2rem' }}>
                    {parseInt(props.idx) + 1}. {props.name}
                </div>
                <div className="bttn-bar">

                    <Button variant="outlined" color="primary" style={{ marginRight: '1.5rem' }} onClick={() => props.fun2(props.idx)}>Register Student</Button>
                    <Button variant="outlined" color="primary" style={{ marginRight: '1.5rem' }} >Registered Students</Button>
                    <DeleteIcon style={{ cursor: 'pointer', color: 'black', marginRight: '2rem' }} onClick={() => props.fun(props.idx)} />
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export default Card
