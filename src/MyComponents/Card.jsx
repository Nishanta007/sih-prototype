import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "./organization.css";
import EditIcon from '@mui/icons-material/Edit';
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Card = (props) => {

    // const handleRegisterStudent = (index) => {
    //     try {
    //       // Attempt to open the Bootstrap modal
    //       const myModal = new bootstrap.Modal(document.getElementById("cardModal"));
    //       myModal.show();
    //     } catch (error) {
    //       // Handle any errors that occur
    //       console.error("Error opening Bootstrap modal:", error);
    //     }
    //   };

    return (
        <>
            <div className="cards-Contain">
                <div>{props.idx}.</div>
                <div>
                    {props.name}
                </div>
                <div className="bttn-bar">
                    {/* <Button className="bttn1" variant="contained" endIcon={<EditIcon />}>Edit</Button> */}

                    <Button className="bttn2" variant="outlined" color="primary" onClick={() => props.fun2(props.idx)}>Register Student</Button>
                    <Button className="bttn2" variant="outlined" color="primary">Registered Students</Button>
                    {/* <EditNoteTwoToneIcon  style={{ cursor: 'pointer', color: 'black' }} />Edit */}
                    <DeleteIcon style={{ cursor: 'pointer', color: 'black' }} onClick={() => props.fun(props.idx)}/>

                    {/* <Button className="bttn3" variant="contained" onClick={() => props.fun(props.key)} startIcon={<DeleteIcon />}>Delete</Button> */}
                </div>
            </div>
                <hr></hr>
        </>
    )
}

export default Card
