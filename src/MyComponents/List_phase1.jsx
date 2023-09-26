import React from 'react';
import '../Pages/Dashboard.css';
import ListItem from '@mui/material/ListItem';

const List_phase1 = (props) => {
  return (
    <>
      <div className="list1">
        <ListItem >
          <div className="first">
            <div className="name">{props.name}</div>
            <div className="count">Pending: {props.no}</div>
          </div>
          <div className="desc">{props.description}</div>
          <div className="govt">By {props.state} government</div>
        </ListItem>
      </div>
    </>
  );
}

export default List_phase1;