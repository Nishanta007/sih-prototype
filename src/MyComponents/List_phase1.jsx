import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Pages/Dashboard.css';
import api from '../Pages/list1Data';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';

const List_phase1 = (props) => {
  const [data, setData] = useState(api);

  return (
    <>
      {data.map((e) => (
        <NavLink key={e.id} style={{ width: '100%', textDecoration: 'none' }} to={`/scholarship/${e.id}`} >
          <List>
            <ListItemButton className="list1" id="listbtn">
              <div className="first">
                <div className="name">{e.name}</div>
                <div className="count">Pending : <span>{e.no}</span></div>
              </div>
              <div className="desc">{e.description}</div>
              <div className="govt">By {e.state} government</div>
            </ListItemButton>
          </List>
        </NavLink>
      ))}
    </>
  );
}

export default List_phase1;