import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import '../Pages/Dashboard.css';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';

const sideBar = () => {
  return (
    <>
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
          <ListItem disablePadding  className='list_elem'>
            <ListItemButton>
              <ListItemIcon>
                <HowToRegIcon />
              </ListItemIcon>
              <ListItemText primary="Verified" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding  className='list_elem'>
            <ListItemButton>
              <ListItemIcon>
                <CancelScheduleSendIcon />
              </ListItemIcon>
              <ListItemText primary="Rejcted Requests" />
            </ListItemButton>
          </ListItem>
        </List>
    </div>
    </>
  )
}

export default sideBar