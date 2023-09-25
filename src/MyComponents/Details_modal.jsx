import React, { useEffect, useState } from 'react';
import Textfield from './Textfield';
import '../App.css';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
// Component to render a "Detail" element
function DetailItem({ name, type }) {
  return <p>{type} : {name}</p>;
}

// Component to render a "Document" element
function DocumentItem({ name, type }) {
  return <div>{type} : {name}</div>;
}

const getData = () => {
  const data = localStorage.getItem("Scholarship");
  if(data) {
    return JSON.parse(data);
  }
  else {
    return [];
  }
}


const Details_modal = (props) => {
  const [type, setType] = useState('detail');
  const [name, setName] = useState('');
  const [sname, setSname] = useState('');
  const [addedItems, setAddedItems] = useState(getData());
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
      const newItem = { sname, type, name };
      let check = 1;
      if(addedItems.length) {
        for(let i = 0;i < addedItems.length;i++) if(addedItems[i].sname === sname){check = 0; break;}
      }
      if(check === 1) setAddedItems([...addedItems, newItem]);
      setName("");
    }
  };

  const handleDeleteClick = (index) => {
    const updatedItems = [...addedItems];
    updatedItems.splice(index, 1);
    setAddedItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem('Scholarship',JSON.stringify(addedItems))
  }, [addedItems]);

  return (
    <div>
      <div>
          <div className='spacebt'>
            <h6>Scholorship Name</h6>
          <Textfield onChange={handleSnameChange} width={"16rem"} ph={"Enter your scholorship name"} value={sname}/>

          </div>
          <hr></hr>
        <div className='listcontain'>
          {addedItems.length === 0 ? 'No Credentials Added' : addedItems.map((item, index) => (
            <div key={index} className='list'>
              {item.type === 'detail' ? (
                <DetailItem key={index} name={item.name} type={item.type} />
              ) : (
                <DocumentItem key={index} name={item.name} type={item.type} />
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
