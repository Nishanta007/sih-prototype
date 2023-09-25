import React, { useState } from 'react';
import '../Pages/Dashboard.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

const SideBar = () => {
  return (
    <>
      <div className="contain">
        <div className="side">
          <List>
            <ListItem disablePadding className='list_elem'>
              <ListItemButton>
                <ListItemIcon>
                  <PendingActionsIcon />
                </ListItemIcon>
                <ListItemText primary="Verification Requests" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </div>
    </>
  )
}

export default SideBar;
