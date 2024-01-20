import React, { useState, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";
import './css/MTableHeader.css';

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
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Header from './Header'
import Modal from 'react-modal';
import ActionMenuTarget from "./ActionMenuTargets";

  



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
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const Targets = () => {
  const [isPhotoView, setIsPhotoView] = React.useState(false);
  const [photo, setPhoto] =useState("./images/joey.jpg");
  const [data, setData] = useState([]);
  const [nationalities, setNationalities] = useState([]); 
  const [genders, setGenders] = useState([]); 
  const [familyStatus, setFamilyStatus] = useState([]); 
  useEffect(() => {
    // Function to be called on page load
    getTargetsDTO();
    getNationalities();
    getGenders(); 
    getFamilyStatus();
  }, []);

  const getTargetsDTO = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/Target", {
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
                  //console.log(respData.firstName);
                  setData(respData);
                     
                });
              
              }
              else {
                console.log('failure');
                console.log(response);
              }
            });
            
          } catch (err) {
            console.log(err);
          }
         
  };
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
    { title: "Full name", field: "profile.fullName" , filterPlaceholder: "name"},
    { title: "Mother name", field: "profile.motherName",  filterPlaceholder: "mother name"},
    { title: "Date of birth", field: "profile.dateOfBirth",  filterPlaceholder: "DOB",type: "date"},
    { title: "Gender", field: "profile.gender.genderId",  filterPlaceholder: "Gender", lookup:objGenders},
    { title: "Nationality", field: "profile.nationality.nationalityId", filterPlaceholder: "Nationality", lookup:objNationalities},
    { title: "Family Status", field: "profile.familyStatus.familyStatusId", filterPlaceholder: "Family Status", lookup:objFamilyStatus},
    { title: "Count of warrants", field: "profile.countOfWarrants",filterPlaceholder: "Count of warrants" ,editable: 'never'},
    { title: "Photo",  render: (rowData) =>
    rowData && (
      <button onClick={() => openPhotoModal(rowData.photo.photo1)} style={{border : 'none', backgroundColor: 'white', color:'blue', textDecorationLine:'underline' }}>{rowData.photo.photo1}</button>
    ),editable: 'never'},
    { title: "", render: (rowData) =>
    // rowData && (
      <ActionMenuTarget data = {rowData} />
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
  // const openPhotoModal = async (data) => {
  //   console.log("Photo", data);
  //   console.log("Photo", './images/' + {data})

  //   const photoModule = await import('./images/${data}');
  //   setPhoto(photoModule.default);
  //   setIsPhotoView(true);
    
  //   // setPhoto( "./images/" + data);
  //   // setIsPhotoView(true);
  //   console.log("Photo", photo);
  // };
  

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
  const deleteTarget = (data) => {
    try {

      const res =  fetch("http://localhost:7199/api/Target/" + data.targetId , {
        method: "Delete",
        headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.ok) {
          console.log('success', response);
          getTargetsDTO();
        }
        else {
          console.log(response);
        }
      });
      
    } catch (err) {
      console.log(err);
    }
  };
  const updateTarget = (data) => {
    console.log(JSON.stringify(data));
    try {

      const res =  fetch("http://localhost:7199/api/Target", {
        method: "PUT",
        headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.ok) {

          console.log('success', response);
          getTargetsDTO();
        }
        else {
          console.log(JSON.stringify(response.body));
        }
      });
      
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div>
      <Header isProfilePage={false} isTargetPage={true} isSuspectPage={false} isKeywordsPage={false} />
      <MaterialTable
        title="Targets"
        icons={tableIcons}
        columns={columns}
        data={data}
        options={{exportButton:true, filtering:true}}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataUpdate = [...data];
                // const index = oldData.tableData.id;
                // dataUpdate[index] = newData;
                updateTarget(newData);
                // setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataDelete = [...data];
                // const index = oldData.tableData.id;
                // dataDelete.splice(index, 1);
                deleteTarget(oldData)
                // setData([...dataDelete]);

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
  );
    </div>

  );
};

export default Targets;
