import React from 'react';
import '../Pages/Dashboard.css';
import ListItem from '@mui/material/ListItem';

const List_phase1 = () => {
  return (
    <>
      <div className="list1">
        <ListItem >
          <div className="name"></div>
          <div className="count"></div>
          <div className="govt"></div>
        </ListItem>
      </div>
    </>
  );
}

export default List_phase1;