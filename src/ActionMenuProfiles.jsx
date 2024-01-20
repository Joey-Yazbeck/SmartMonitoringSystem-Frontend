import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from 'react-modal';
import {useRef} from 'react';
import 'react-table-6/react-table.css';



export default function ActionMenuProfile({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [addModalIsOpen, setIsOpen] = React.useState(false);
  const [viewWarrantModelIsOpen, setViewWarrantModelIsOpen] = React.useState(false);

  
  const [warrants, setWarrants] = useState([]);
  const [profileId] = useState(data);
  const [location, setLocation] = useState('');
  const [judgeName, setJudgeName] = useState('');
  const [crimeDescription, setCrimeDescription] = useState('');

  const open = Boolean(anchorEl);

  const inputRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const addToTargetClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();
    const byteImage = reader.readAsArrayBuffer(fileObj);

    reader.onloadend = () => {
      console.log("reader.result ", reader.result);
      const byteArray = new Uint8Array(reader.result);
      console.log("reader.result ", byteArray);

      const base64String = btoa(String.fromCharCode.apply(null, byteArray));

      const apiData ={
        profileId: data,
        photo: base64String
      };

      sendToApi(apiData);
      
    };

    const sendToApi = (apiData) => {
      try {

        const res =  fetch("http://localhost:7199/api/Target/AddTarget", {
          method: "POST",
          headers: {
                  'Accept': 'application/json',
                  'Content-Type':'application/json'
              },
          body: JSON.stringify(apiData)
        }).then(response => {
          if (response.ok) {
            console.log('success', response);
          }
          else {
            console.log(response);
          }
        });
        
      } catch (err) {
        console.log(err);
      }
    }
    
  };
  
  const openAddModal = () => {
    console.log("openAddModal")
    setIsOpen(true);
    console.log("addModalIsOpen: " + addModalIsOpen)
    handleClose();
  }

  const closeAddModal = () => {
    setIsOpen(false);
  };

  const closeViewWarrantModal = () => {
    setViewWarrantModelIsOpen(false);
  };

  const ViewWarrants = () => {
    try {

      const res =  fetch("http://localhost:7199/api/Warrant/" + data, {
        method: "GET",
        headers: {
                'Accept': 'application/json',
            },
      }).then(response => {
        if (response.ok) {
          
          //console.log('success');
          
          response.json().then(respData => {
            setWarrants(respData);
            console.log("get warrants: " + JSON.stringify(respData));
            //setProfiles(respData);
               
          });
        }
        else {
          //console.log('failure getting profile');
          //console.log(response);
        }
      });
      
    } catch (err) {
      console.log(err);
    }
    setViewWarrantModelIsOpen(true);
    handleClose();
  };

  const handleSubmit = (e) => {
      try {
        console.log("handleSubmit");

        const data ={
          ProfileId: profileId,
          Location: location,
          JudgeName: judgeName,
          CrimeDescription: crimeDescription
        };

        console.log(JSON.stringify(data));

        const res =  fetch("http://localhost:7199/api/Warrant", {
          method: "POST",
          headers: {
                  'Accept': 'application/json',
                  'Content-Type':'application/json'
              },
          body: JSON.stringify(data)
        }).then(response => {
          if (response.ok) {
            console.log('success', response);
            closeAddModal();
            window.location.replace("/Profiles")
          }
          else {
            console.log("error: " + JSON.stringify(response));
            closeAddModal();
          }
        });
        
      } catch (err) {
        console.log(err);
      }
    };
  
  const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      width: '60%'
    },
  };


  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem key="1" onClick={openAddModal}>
          Add Warrant
        </MenuItem>

        <MenuItem key="2" onClick={ViewWarrants}>
          View Warrants
        </MenuItem>

        <MenuItem key="3" onClick={addToTargetClick}>
          Add to Target
        </MenuItem>
      </Menu>
      
      <Modal
        isOpen={addModalIsOpen}
        onRequestClose={closeAddModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={customStyles}
        >
        <h2>Please enter the below:</h2>
          <label htmlFor="location">Location:</label><br/>
          <input style={{width:'60%'}} onChange={(e) => setLocation(e.target.value)} type="text" name="location"/><br/>

          <label htmlFor="judgeName">Judge Name:</label><br/>
          <input style={{width:'60%'}} onChange={(e) => setJudgeName(e.target.value)} type="text" name="judgeName"/><br/>

          <label htmlFor="crimeDescription">Crime Description:</label><br/>
          <textarea style={{width:'60%'}} onChange={(e) => setCrimeDescription(e.target.value)} type="text" name="crimeDescription"/><br/>
        <button style={{marginTop:'5px', display: 'inline'}} onClick={handleSubmit}>Submit</button>
        <button style={{marginTop:'5px',display: 'inline', float:'right'}} onClick={closeAddModal}>close</button>

      </Modal>

        <input
          style={{display: 'none'}}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />

      <Modal
        isOpen={viewWarrantModelIsOpen}
        onRequestClose={closeViewWarrantModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={customStyles}
        >
        <h2>Warrants :</h2>
        <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Location</th>
                    <th>Judge Name</th>
                    <th>Crime Description</th>
                    <th>Status</th>
                    <th>Issued Date</th>
                    </tr>
                </thead>
                <tbody>
                  {warrants.map(
                  w => (
                      <tr>
                        <td>{w.location}</td>
                        <td>{w.judgeName}</td>
                        <td>{w.crimeDescription}</td>
                        <td>{w.warrantStatusId}</td>
                        <td>{w.issueDate}</td>
                      </tr>
                    )
                  )}
                </tbody>
            </table>


        <button style={{marginTop:'5px',display: 'inline', float:'right'}} onClick={closeViewWarrantModal}>close</button>

      </Modal>

    </div>



    
  );
}


