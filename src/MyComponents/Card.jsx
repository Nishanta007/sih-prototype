import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "./organization.css";
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Card = (props) => {
    return (
        <>
            <div className="cards-Contain">
                <div className="detail">
                    {props.name}
                </div>
                <div className="bttn-bar">
                    <Button className="bttn1" variant="contained" endIcon={<EditIcon />}>Edit</Button>
                    <Button className="bttn2" variant="contained" color="success" endIcon={<TaskAltIcon />}>Fill</Button>
                    <Button className="bttn3" variant="contained"
                        onClick={() => props.fun(props.key)}
                        startIcon={<DeleteIcon />}
                    >Delete</Button>
                </div>
            </div>
        </>
    )
}

export default Card