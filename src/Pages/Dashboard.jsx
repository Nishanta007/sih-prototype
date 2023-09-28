import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './Dashboard.css';
import List_phase1 from '../MyComponents/List_phase1';
import Student from "../MyComponents/Student";
import Back from '../MyComponents/Back_button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';

const Dashboard = () => {
  const [showListPhase1, setShowListPhase1] = useState(false);
  const handleVerificationRequestsClick = () => {
    setShowListPhase1(!showListPhase1);
  };

  return (
    <>
      <div className="contain">
        <div className="side">
          <List>
            <ListItem disablePadding className='list_elem' onClick={handleVerificationRequestsClick}>
              <ListItemButton>
                <ListItemIcon>
                  <PendingActionsIcon />
                </ListItemIcon>
                <ListItemText primary="Verification Requests" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className='list_elem'>
              <ListItemButton>
                <ListItemIcon>
                  <HowToRegIcon />
                </ListItemIcon>
                <ListItemText primary="Verified" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding className='list_elem'>
              <ListItemButton>
                <ListItemIcon>
                  <CancelScheduleSendIcon />
                </ListItemIcon>
                <ListItemText primary="Rejcted Requests" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        {showListPhase1 &&
          <div className='scholarship'>
            <Routes>
              <Route exact path="/" element={<List_phase1 />} />
              <Route exact path="/scholarship/:id" Component={() => {
                return (
                  <>
                    <Back />
                    <Student />
                  </>
                );
              }} />
            </Routes>
          </div>
        }
      </div>
    </>
  )
}

export default Dashboard;