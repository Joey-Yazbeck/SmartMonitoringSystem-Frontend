import React, { useState, forwardRef, useEffect } from "react";
import MaterialTable from "material-table";

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
import ActionMenuProfile from "./ActionMenuProfiles";
import moment from "moment";
import Header from './Header'
import './css/MTableHeader.css';


  

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

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [nationalities, setNationalities] = useState([]); 
  const [genders, setGenders] = useState([]); 
  const [familyStatus, setFamilyStatus] = useState([]); 
  const [targetStatus, setTargetStatus] = useState([]); 
  useEffect(() => {
    // Function to be called on page load
    getProfilesDTO();
    getNationalities();
    getGenders(); 
    getFamilyStatus();
    getTargetStatus();    
  }, []);
  const getProfilesDTO = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/Profile/DTO", {
              method: "GET",
              headers: {
                      'Accept': 'application/json',
                  },
            }).then(response => {
              if (response.ok) {
                
                //console.log('success');
                
                response.json().then(respData => {
                  //console.log(respData);
                  //console.log("get profiles: " + JSON.stringify(respData));
                  setProfiles(respData);
                     
                });
              }
              else {
                console.log('failure getting profile');
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
  const getTargetStatus = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/TargetStatus", {
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
                  setTargetStatus(respData);
                     
                });
              
              }
              else {
                console.log('failure getting target status');
                console.log(response);
              }
            });
            
          } catch (err) {
            console.log(err);
          }
         
  };
  const addProfile = (data) => {
    try {

      const res =  fetch("http://localhost:7199/api/Profile", {
        method: "POST",
        headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.ok) {
          //console.log('success', response);
          //window.location.replace("/Menu")
          getProfilesDTO();
        }
        else {
          console.log(response);
        }
      });
      
    } catch (err) {
      console.log(err);
    }
  };
  const updateProfile = (data) => {
    try {

      const res =  fetch("http://localhost:7199/api/Profile", {
        method: "PUT",
        headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.ok) {
          console.log('success', response);
          getProfilesDTO();
        }
        else {
          console.log(response);
        }
      });
      
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProfile = (data) => {
    try {

      const res =  fetch("http://localhost:7199/api/Profile/" + data.profileId , {
        method: "Delete",
        headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.ok) {
          getProfilesDTO();
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
    var objTargetStatus =  targetStatus.reduce(function(acc, cur) {
      acc[cur.targetStatusId] = cur.targetStatus1;  
      return acc;
    }, {});
   
    const columns = [
      { title: "Full name", field: "fullName" , filterPlaceholder: "name"},
      { title: "Mother name", field: "motherName",  filterPlaceholder: "mother name"},
      { title: "Date of birth", field: "dateOfBirth",  filterPlaceholder: "DOB",type: "date"},
      { title: "Gender", field: "gender.genderId",  filterPlaceholder: "Gender", lookup:objGenders},
      { title: "Nationality", field: "nationality.nationalityId", filterPlaceholder: "Nationality", lookup:objNationalities},
      { title: "Family Status", field: "familyStatus.familyStatusId", filterPlaceholder: "Family Status", lookup:objFamilyStatus},
      { title: "Count of warrants", field: "countOfWarrants",filterPlaceholder: "Count of warrants" ,editable: 'never'},
      { title: "Target Status", field: "targetStatus.targetStatusId" ,filterPlaceholder: "Target status", lookup:objTargetStatus ,editable: 'never'},
      { title: "", render: (rowData) =>
      // rowData && (
        <ActionMenuProfile data = {rowData.profileId} />
      //)
    }
    ];
  

  return (
    <>
      <Header isProfilePage={true} isTargetPage={false} isSuspectPage={false} isKeywordsPage={false} />
      <MaterialTable
        title="Profiles"
        icons={tableIcons}
        columns={columns}
        data={profiles}
        options={{exportButton:true, filtering:true}}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                let formattedDate = moment(newData.dateOfBirth).format('YYYY-MM-DD');
                let newProfile = {
                  fullName : newData.fullName,
                  motherName : newData.motherName,
                  dateOfBirth : formattedDate,
                  genderId: parseInt(newData.gender.genderId),
                  nationalityId: parseInt(newData.nationality.nationalityId),
                  familyStatusId: parseInt(newData.familyStatus.familyStatusId)
                }                
                //console.log(JSON.stringify(newProfile));
                addProfile(newProfile);
                // setProfiles([...profiles, newData]);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // const dataUpdate = [...profiles];
                // const index = oldData.tableData.id;
                // dataUpdate[index] = newData;
                updateProfile(newData);
                // setProfiles([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                //console.log(JSON.stringify(oldData));
                // const profileDelete = [...profiles];
                // const index = oldData.tableData.id;
                // profileDelete.splice(index, 1);
                
                deleteProfile(oldData);
                // setProfiles([...profileDelete]);

                resolve();
              }, 1000);
            })
            
        }}
      />
    </>
  );
};

export default Profiles;
