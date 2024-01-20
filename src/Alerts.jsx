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
import { MDBBadge} from 'mdb-react-ui-kit';
import Header from './Header'
import Modal from 'react-modal';

  



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

const Alert = () => {

  useEffect(() => {
    // Function to be called on page load
    getAlerts();
  }, []);

  const getAlerts = () => {
    // Perform actions or logic on page load
    try {
            
            const res =  fetch("http://localhost:7199/api/Alert", {
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


  const columns = [
    { title: "FullName", field: "fullName" },
    { title: "Message", field: "message" },
    { title: "Date Generated", field: "dateGenerated"},
    { render: (rowData) =>
    rowData && !rowData.isRead && (
      <button onClick={() => markAlertToBeMonitored(rowData.alertId)} style={{border : 'none', backgroundColor: 'white', color:'blue', textDecorationLine:'underline' }}>Monitor</button>
    )
  }
  ];

  const [data, setData] = useState([]);

  const markAlertToBeMonitored = (alertId) => {
    console.log("alertId", alertId);
    try {

      const res =  fetch("http://localhost:7199/api/Alert/Monitor/" + alertId, {
        method: "PUT",
        headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
      }).then(response => {
        if (response.ok) {
          //console.log('success', response);
          getAlerts();
        }
        else {
          console.log(response);
        }
      });
      
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <div>
      <Header/>
      <MaterialTable
        title="Targets"
        icons={tableIcons}
        columns={columns}
        data={data}
        editable={{
        }}
      />
      
  );
    </div>

  );
};

export default Alert;
