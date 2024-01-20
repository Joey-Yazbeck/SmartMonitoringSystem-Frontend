import React, { useState,forwardRef } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from 'react-modal';
import {useRef} from 'react';
import 'react-table-6/react-table.css';
import MaterialTable from "material-table";
import { useNavigate } from 'react-router-dom';
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import './css/MTableHeader.css';




export default function ActionMenuSuspect( suspectData ) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [viewProfileModelIsOpen, setViewProfileModelIsOpen] = React.useState(false);

  
  const [profiles, setProfiles] = useState([]);

  const open = Boolean(anchorEl);

  const inputRef = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  




  const closeViewProfileModal = () => {
    setViewProfileModelIsOpen(false);
  };

  const FlagAsTarget = () => {
    try {

      const res =  fetch("http://localhost:7199/api/Profile/DTO" , {
        method: "GET",
        headers: {
                'Accept': 'application/json',
            },
      }).then(response => {
        if (response.ok) {
          
          //console.log('success');
          
          response.json().then(respData => {
            setProfiles(respData);
            console.log("get profiles: " + JSON.stringify(respData));
            //setProfiles(respData);
            getNationalities();
    getGenders(); 
    getFamilyStatus();
               
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
    setViewProfileModelIsOpen(true);
    handleClose();

  };

 
  
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  //: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
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
  const [nationalities, setNationalities] = useState([]); 
  const [genders, setGenders] = useState([]); 
  const [familyStatus, setFamilyStatus] = useState([]); 
  
 
  const getGenders = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/Gender", {
              method: "GET",
              headers: {
                      'Accept': 'application/json',
                  },
            }).then(response => {
              if (response.ok) {
                
                //console.log('success');
                
                response.json().then(respData => {
                  //console.log(respData);
                  //console.log(JSON.stringify(respData));
                  setGenders(respData);
                     
                });
              
              }
              else {
                console.log('failure getting genders');
                console.log(response);
              }
            });
            
          } catch (err) {
            console.log(err);
          }
         
  };
  const getNationalities = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/Nationality", {
              method: "GET",
              headers: {
                      'Accept': 'application/json',
                  },
            }).then(response => {
              if (response.ok) {
                
                //console.log('success');
                
                response.json().then(respData => {
                  //console.log(respData);
                  //console.log(JSON.stringify(respData));
                  setNationalities(respData);
                     
                });
              
              }
              else {
                console.log('failure getting nationalities');
                console.log(response);
              }
            });
            
          } catch (err) {
            console.log(err);
          }
         
  };
  const getFamilyStatus = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/FamilyStatus", {
              method: "GET",
              headers: {
                      'Accept': 'application/json',
                  },
            }).then(response => {
              if (response.ok) {
                
                //console.log('success');
                
                response.json().then(respData => {
                  //console.log(respData);
                  console.log(JSON.stringify(respData));
                  setFamilyStatus(respData);
                     
                });
              
              }
              else {
                console.log('failure getting family status');
                console.log(response);
              }
            });
            
          } catch (err) {
            console.log(err);
          }
         
  };
  


 
  
    var objNationalities = nationalities.reduce(function(acc, cur) {
      acc[cur.nationalityId] = cur.nationality1;  
      return acc;
    }, {});
    var objGenders =  genders.reduce(function(acc, cur) {
      acc[cur.genderId] = cur.gender1;  
      return acc;
    }, {});
    var objFamilyStatus =  familyStatus.reduce(function(acc, cur) {
      acc[cur.familyStatusId] = cur.familyStatus1;  
      return acc;
    }, {});
    
   
    const columns = [
      { title: "Full name", field: "fullName" , filterPlaceholder: "name"},
      { title: "Mother name", field: "motherName",  filterPlaceholder: "mother name"},
      { title: "Date of birth", field: "dateOfBirth",  filterPlaceholder: "DOB",type: "date"},
      { title: "Gender", field: "gender.genderId",  filterPlaceholder: "Gender", lookup:objGenders},
      { title: "Nationality", field: "nationality.nationalityId", filterPlaceholder: "Nationality", lookup:objNationalities},
      { title: "Family Status", field: "familyStatus.familyStatusId", filterPlaceholder: "Family Status", lookup:objFamilyStatus},
      
    ];
  const handleRowSelection = (profiledata) => {
console.log(JSON.stringify(profiledata));
console.log(JSON.stringify(suspectData));
try {
let flagAsTargetDTO = {
  suspect:suspectData.data,
  profileId:profiledata[0].profileId

}
  const res =  fetch("http://localhost:7199/api/Suspect/LinkToTarget", {
    method: "POST",
    headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
    body: JSON.stringify(flagAsTargetDTO)
  }).then(response => {
    if (response.ok) {
      console.log('success', response);
      navigate('/Targets');
        }
    else {
      console.log(response);
    }
  });
  
} catch (err) {
  console.log(err);
}
  }



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
        <MenuItem key="2" onClick={FlagAsTarget}>
          Flag as target
        </MenuItem>
        
      </Menu>
      
     

      <Modal
        isOpen={viewProfileModelIsOpen}
        onRequestClose={closeViewProfileModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={customStyles}
        >
          <MaterialTable
        title="Profiles"
        icons={tableIcons}
        columns={columns}
        data={profiles}
        options={{ 
          selection: true
        }}   
        
        onSelectionChange={(selectedRows) =>handleRowSelection(selectedRows)} 
      />
{/*        
        <h2>Profiles :</h2>
        <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Full Name</th>
                    <th>Mother Name</th>
                    <th>Date Of Birth</th>
                    <th>Gender</th>
                    <th>Nationality</th>
                    <th>Family Status</th>
                    </tr>
                </thead>
                <tbody>
                  {profiles.map(
                  p => (
                      <tr>
                        <td>{p.fullName}</td>
                        <td>{p.motherName}</td>
                        <td>{p.dateOfBirth}</td>
                        <td>{p.gender.gender1}</td>
                        <td>{p.nationality.nationality1}</td>
                        <td>{p.familyStatus.familyStatus1}</td>
                      </tr>
                    )
                  )}
                </tbody>
            </table> */}


        <button style={{marginTop:'5px',display: 'inline', float:'right'}} onClick={closeViewProfileModal}>close</button>

      </Modal>

    </div>



    
  );
}


