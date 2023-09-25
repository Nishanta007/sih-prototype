import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import "./organization.css";
import AddIcon from '@mui/icons-material/Add';
import Card from './Card';
import Textfield from './Textfield';
import CancelIcon from '@mui/icons-material/Cancel';
import SideBar from './sideBar';
import "../Pages/Dashboard.css";

const getData = () => {
  const data = localStorage.getItem("Scholarship");

  try {
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error parsing data from localStorage:", error);
  }

  return [];
};

// Component to render a "Detail" element
function DetailItem({ name, type }) {
  return <p>{type} : {name}</p>;
}

// Component to render a "Document" element
function DocumentItem({ name, type }) {
  return <div>{type} : {name}</div>;
}

const Organization_dash = () => {

  const [cards, setCards] = useState(() => getData());
  const [type, setType] = useState('detail');
  const [name, setName] = useState('');
  const [sname, setSname] = useState('');
  const [arr, setArr] = useState([]);
  const [addedItems, setAddedItems] = useState(getData());
  const [selectedCardIndex, setSelectedCardIndex] = useState(null); // Add selectedCardIndex state

  const handleCreateCard = () => {
    if (sname && addedItems.length > 0) {
      // Create a new scholarship entry with the current data
      const newCardData = { sname, items: addedItems };
      setCards([...cards, newCardData]);
      // Clear the form
      setSname('');
      setAddedItems([]);
    }
  };

  const handleCardModalOpen = (index) => {
    setSelectedCardIndex(index); // Set the selected card index
  };

  const handleCardModalClose = () => {
    setSelectedCardIndex(null); // Reset the selected card index when modal is closed
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  useEffect(() => {
    localStorage.setItem('Scholarship', JSON.stringify(cards));
  }, [cards]);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSnameChange = (e) => {
    setSname(e.target.value);
  }

  const handleAddClick = () => {
    if (name) {
      const newItem = { type, name };
      setAddedItems([...addedItems, newItem]);
      setName("");
    }
  };

  const handleDeleteClick = (index) => {
    const updatedItems = [...addedItems];
    updatedItems.splice(index, 1);
    setAddedItems(updatedItems);
  };

  return (
    <>
    <div className='main'>
      <SideBar />
      <div className='org'>
        {/* <h1>Organization Dash</h1> */}
        <h4>Scholorships</h4>
        <hr></hr>
        <Button id='compose' variant='contain' startIcon={<AddIcon style={{ fontSize: '2rem' }} />} data-bs-toggle="modal" data-bs-target="#exampleModal">Create New</Button>

        <div className="modal fade" id="exampleModal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

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

                <div>
                  <div>
                    <div className='spacebt'>
                      <h6>Scholorship Name</h6>
                      <Textfield onChange={handleSnameChange} width={"16rem"} ph={"Enter your scholorship name"} value={sname} />

                    </div>
                    <hr></hr>
                    <div className='listcontain'>
                      {addedItems.length === 0 ? 'No Credentials Added'
                        : addedItems.map((item, index) => (
                          <div key={index} className='list'>
                            {item.type === 'detail' ? (
                              <DetailItem key={index} name={item.name} type={item.type} />
                              ) : (
                                <DocumentItem key={index} name={item.name} type={item.type} />
                                )}

                            <CancelIcon onClick={() => handleDeleteClick(index)} style={{ cursor: 'pointer', color: '#a30707bd' }} />
                          </div>
                        ))}
                    </div>
                    <form onSubmit={(e) => {
                      e.preventDefault(false);
                    }}>
                      <div className='spacebt'>
                        <select className='dropdown' value={type} onChange={handleTypeChange}>
                          <option value="detail">Detail</option>
                          <option value="document">Document</option>
                        </select>
                        <Textfield onChange={handleNameChange} width={"16rem"} ph={"Enter your credential name"} value={name} />
                        <Button variant='contained' type="submit" className="btn btn-primary" onClick={handleAddClick}>Add</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Button
                  variant='contained' style={{ marginRight: '1rem' }}
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    handleCreateCard();
                    // <Details_modal fun={`${handleDeleteClick}`} />
                  }} >
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
          {cards.map((card, idx) => (
            <>
              <Card key={idx} name={card.sname} items={card.items} fun={handleDeleteCard} onDelete={() => handleDeleteCard(idx)} />
              <Button variant='contained' color='primary' data-bs-toggle="modal" data-bs-target="#cardModal" onClick={() => handleCardModalOpen(idx)}>Open Modal</Button>

              {selectedCardIndex !== null && (
                <div className="modal fade" id="cardModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      {/* Modal content here */}
                      {/* Use selectedCardIndex to access addedItems for the selected card */}
                      {cards[selectedCardIndex].items.map((item, index) => (
                        <div key={index}>
                          {item.type === 'detail' ? (
                            <DetailItem name={item.name} type={item.type} />
                            ) : (
                              <DocumentItem name={item.name} type={item.type} />
                              )}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={handleCardModalClose}
                        >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>

))}
          {/* Modal for displaying added items of the selected card */}

        </div>

      </div>
    </div>

</>
  );
}
export default Organization_dash;
