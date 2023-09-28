import React, { useState } from "react";
import "../Pages/Dashboard.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
  zIndex: "1000",
};

const StudentModal = ({ isOpen, closeModal, data }) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="main_modal">
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            className="heading"
          >
            Scholarship Data
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="detail">
              <ul>
                <div className="detail_section">
                  <div className="left">Name</div>
                  <div className="right">{data.name}</div>
                </div>
                <div className="detail_section">
                  <div className="left">Registration No.</div>
                  <div className="right">{data.regno}</div>
                </div>
                <div className="detail_section">
                  <div className="left">Trade</div>
                  <div className="right">{data.trade}</div>
                </div>
                <div className="detail_section">
                  <div className="left">College</div>
                  <div className="right">{data.college}</div>
                </div>
                <div className="detail_section">
                  <div className="left">AISHE code</div>
                  <div className="right">{data.aishe}</div>
                </div>
                <div className="detail_section">
                  <div className="left">Reference No.</div>
                  <div className="right">{data.refno}</div>
                </div>
                <div className="detail_section">
                  <div className="left">Verification</div>
                  <div className="right">{data.verification}</div>
                </div>
                <div className="detail_section">
                  <div className="left">Bonafide certificate</div>
                  <div className="right">{data.bonafide}</div>
                </div>
                <div className="detail_section">
                  <div className="left">DMC certificate</div>
                  <div className="right">{data.dmc}</div>
                </div>
              </ul>
            </div>
          </Typography>
          <div className="modal_bttn">
            <Button variant="contained" style={{backgroundColor:'rgba(14, 128, 14,.85)'}}>Verify</Button>
            <Button variant="contained" style={{backgroundColor:'rgba(204, 30, 30,.9)'}}>Reject</Button>
            <Button onClick={closeModal} variant="contained" color="primary">Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default StudentModal;
