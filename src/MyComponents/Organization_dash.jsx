import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import "./organization.css";
import AddIcon from '@mui/icons-material/Add';
import Card from './Card';
import Textfield from './Textfield';
import CancelIcon from '@mui/icons-material/Cancel';
import SideBar from './SideBar';
import "../Pages/Dashboard.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import LogoutIcon from '@mui/icons-material/Logout';

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
  return <p>{name}</p>;
}

// Component to render a "Document" element
function DocumentItem({ name, type }) {
  return <div>{name}</div>;
}

const Organization_dash = () => {

  const [cards, setCards] = useState(() => getData());
  const [type, setType] = useState('detail');
  const [name, setName] = useState('');
  const [sname, setSname] = useState('');
  const [addedItems, setAddedItems] = useState(getData());
  const [selectedCardIndex, setSelectedCardIndex] = useState(null); // Add selectedCardIndex state
  const [showModal, setShowModal] = useState(false);

  const handleCreateCard = () => {
    setAddedItems([]);
    if (sname && addedItems.length > 0) {
      // Create a new scholarship entry with the current data
      const newCardData = { sname, items: addedItems };
      setCards([...cards, newCardData]);
      // Clear the form
      setSname('');
    }
  };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCardModalOpen = (index) => {
    setSelectedCardIndex(index); // Set the selected card index
    openModal();
  };

  const handleCardModalClose = () => {
    setSelectedCardIndex(null); // Reset the selected card index when modal is closed
    closeModal();
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
        <SideBar icon1={<PlaylistAddCheckIcon />} name1={'Registered Students'} icon2={<LogoutIcon />} name2={'Logout'} />
        <div className="contain">
          <div className='org'>
            <h3 style={{ padding: '1rem 1.5rem' }}>Scholorships</h3>
            <Button id='compose' variant='contain' startIcon={<AddIcon style={{ fontSize: '2rem' }} />} data-bs-toggle="modal" data-bs-target="#exampleModal">Create New</Button>

            <div className="modal fade" id="exampleModal" tabndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Scholarship format</h5>
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
                  <Card idx={idx} name={card.sname} items={card.items} fun={handleDeleteCard} fun2={handleCardModalOpen} onDelete={() => handleDeleteCard(idx)} />
                  {/* <Button variant='contained' color='primary' data-bs-toggle="modal" data-bs-target="#cardModal" onClick={() => handleCardModalOpen(idx)}>Open Modal</Button> */}
                  {showModal && (
                    <div className="overlay">
                      <div className="custom-modal">
                        <div className="modal-content">
                          <h5 className='font-t'>Scholarship form</h5>
                          <div className="form">
                            {cards[selectedCardIndex].items.map((item, index) => (
                              <div key={index}>
                                {item.type === 'detail' ? (
                                  <>
                                    <div className='form-field'>
                                      <DetailItem name={item.name} type={item.type} />
                                      <Textfield width={"16rem"} />
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className='form-field'>
                                      <DocumentItem name={item.name} type={item.type} />
                                      <Button component="label" variant="contained" style={{ backgroundColor: '#1586d2' }} startIcon={<CloudUploadIcon />}>Upload file<VisuallyHiddenInput type="file" /></Button>
                                    </div>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                          <div className='bttn-mod'>
                            <Button variant='contained' >Forward</Button>
                            <Button variant='outlined' onClick={handleCardModalClose}>Close</Button>
                          </div>
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
      </div>

    </>
  );
}
export default Organization_dash;
