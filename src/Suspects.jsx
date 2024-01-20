import React, { useState, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";

import Modal from 'react-modal';
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Header from './Header'
import ActionMenuSuspect from "./ActionMenuSuspects";
  

const tableIcons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),

  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
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
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const Suspects = () => {
  const [isPhotoView, setIsPhotoView] = React.useState(false);
  const [photo, setPhoto] =useState("./images/joey.jpg");
  const [suspects, setSuspects] = useState([]);
  const [cameras, setCameras] = useState([]); 
  useEffect(() => {
    // Function to be called on page load
    getSuspects();
    getCameras();
  }, []);
  const getSuspects = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/Suspect", 
            {
              method: "GET",
              headers: {
                      'Accept': 'application/json',
                  },
            }).then(response => {
              if (response.ok) {
                
                console.log('success');
                response.json().then(respData => {
                  console.log(respData);
                  console.log(JSON.stringify(respData));
                  //console.log(respData.firstName);
                  setSuspects(respData);
                     
                });
              
              }
              else {
                console.log('failure getting suspects');
                console.log(response);
              }
            });
            
          } catch (err) {
            console.log(err);
          }
         
  };
  const getCameras = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/Camera", {
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
                  setCameras(respData);
                     
                });
              
              }
              else {
                console.log('failure getting cameras');
                console.log(response);
              }
            });
            
          } catch (err) {
            console.log(err);
          }
         
  };
  var objCameraLocation = cameras.reduce(function(acc, cur) {
    acc[cur.cameraId] = cur.cameraLocation;  
    return acc;
  }, {});
  var objCameraTypes = cameras.reduce(function(acc, cur) {
    acc[cur.cameraId] = cur.cameraType;  
    return acc;
  }, {});

  const deleteSuspect = (data) => {
    try {

      const res =  fetch("http://localhost:7199/api/Suspect/" + data.suspectId , {
        method: "Delete",
        headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.ok) {
          getSuspects();
          console.log('success', response);
        }
        else {
          console.log(response);
        }
      });
      
    } catch (err) {
      console.log(err);
    }
  };
  const columns = [
    
    { title: "Suspect Id", field: "suspectId", filterPlaceholder: "Suspect Id"},
    { title: "Camera Type", field: "camera.cameraId",  filterPlaceholder: "Camera Type", lookup:objCameraTypes },    
    { title: "Camera Location", field: "camera.cameraId",  filterPlaceholder: "Camera location", lookup:objCameraLocation },
    { title: "Capture Date", field: "captureDate",  filterPlaceholder: "capture date",type: "date"},
    { title: "Photo",  render: (rowData) =>
    rowData && (
      <button onClick={() => openPhotoModal(rowData.photo.photo1)} style={{border : 'none', backgroundColor: 'white', color:'blue', textDecorationLine:'underline' }}>{rowData.photo.photo1}</button>
    ),editable: 'never'},
    { title: "", render: (rowData) =>
    // rowData && (
      <ActionMenuSuspect data = {rowData} />
    //)
  }
  ];


  const openPhotoModal =  (data) => {
    console.log("Photo", data);
  
    const photoModule = require('./images/' + data);
    setPhoto(photoModule);
    setIsPhotoView(true);
  
    console.log("Photo", photo);
  };
  const closePhotoModal = () => {
    setIsPhotoView(false);
  };

  const customStyles = {
    content: {
      top: '50%',
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
    <>
      <Header isProfilePage={false} isTargetPage={false} isSuspectPage={true} isKeywordsPage={false} />      
      <MaterialTable
        title="Suspects"
        icons={tableIcons}
        columns={columns}
        data={suspects}
        options={{exportButton:true, filtering:true}}
        editable={{        
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
               deleteSuspect(oldData);

                resolve();
              }, 1000);
            }),
            
        }}
      />
      <Modal
        isOpen={isPhotoView}
        onRequestClose={closePhotoModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        style={customStyles}
      >
        <h2>Image:</h2>
        <img style={{position:'relativeTimeRounding', width:'700px', height:'500px'}} src={photo}></img>
        <button style={{marginTop:'5px',display: 'inline', float:'right'}} onClick={closePhotoModal}>close</button>

      </Modal>
    </>
  );
};

export default Suspects;
