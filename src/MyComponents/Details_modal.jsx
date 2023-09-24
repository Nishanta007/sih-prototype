import React, { useState } from 'react';
import Textfield from './Textfield';
import '../App.css';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
// Component to render a "Detail" element
function DetailItem({ name }) {
  return <p>{name}</p>;
}

// Component to render a "Document" element
function DocumentItem({ name }) {
  return <div>{name}</div>;
}

const Details_modal = ({ onCardCreate }) => {
  const [type, setType] = useState('detail');
  const [name, setName] = useState('');
  const [addedItems, setAddedItems] = useState([]);

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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

  const handleCreateClick = () => {
    if (addedItems.length > 0) {
      // Create a card using the first added item (you can customize this logic)
      const cardData = addedItems[0];
      onCardCreate(cardData);
    }
  };

  return (
    <div>
      <div>
        <div className='listcontain'>
          {addedItems.length === 0 ? 'No Credentials Added' : addedItems.map((item, index) => (
            <div key={index} className='list'>
              {item.type === 'detail' ? (
                <DetailItem key={index} name={item.name} />
              ) : (
                <DocumentItem key={index} name={item.name} />
              )}
              {/* <button type="button" className="btn-close" onClick={() => handleDeleteClick(index)}></button> */}
              <CancelIcon onClick={() => handleDeleteClick(index)} style={{cursor:'pointer',color:'#a30707bd'}}/>
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
            <Textfield onChange={handleNameChange} width={"16rem"} ph={"Enter your credential name"} value={name}/>
            <Button variant='contained' type="submit" className="btn btn-primary" onClick={handleAddClick}>Add</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details_modal;
