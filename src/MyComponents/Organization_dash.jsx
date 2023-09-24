import React, { useState } from 'react';
import Modal from 'react-modal';
import Details_modal from './Details_modal';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import "./organization.css";
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddIcon from '@mui/icons-material/Add';

const Organization_dash = () => {

  const [cards, setCards] = useState([]);

  const handleCreateCard = (cardData) => {
    setCards([...cards, cardData]);
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div >
      <h1>Organization Dash</h1>
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create
      </button> */}
      
      <Button id='compose' variant='contain' startIcon={<AddIcon style={{fontSize:'2rem'}}/>} data-bs-toggle="modal" data-bs-target="#exampleModal">Create New</Button>
      
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Modal</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Details_modal />
            </div>
            <div className="modal-footer">
              <Button
                variant='contained' style={{marginRight:'1rem'}}
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleCreateCard}>
                Create
              </Button>
              <Button
                variant='outlined'
                data-bs-dismiss="modal">
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="curousel">
        {cards.map((card, idx) => {
          return (
            <div className="cards-Contain">
              <div className="detail">
                {cards.name}
              </div>
              <div className="bttn-bar">
                <Button className="bttn1" variant="contained" endIcon={<EditIcon />}>Edit</Button>
                <Button className="bttn2" variant="contained" color="success" endIcon={<TaskAltIcon />}>Fill</Button>
                <Button className="bttn3" variant="contained"
                onClick={() => handleDeleteCard(idx)}
                  startIcon={<DeleteIcon />}
                >Delete</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Organization_dash

{/* {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.type}</h3>
            <p>{card.name}</p>
          </div>
        ))} */}