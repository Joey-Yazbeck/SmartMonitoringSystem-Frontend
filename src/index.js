import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/index.css';
import Login from './Login';
import Target from './testContent/Target';
import reportWebVitals from './builtIn/reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Header from './Header';
import Error from './Error';
import Targets from './Targets';
import DataTable from './testContent/Table2';
import Profiles from './Profiles';
import Suspects from './Suspects';
import Keyword from './Keywords';
import Alert from './Alerts'



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Router>
    <Routes>      
      <Route path="/"  element={<Login />}  />
      <Route path="/SignUp"  element={<SignUp />}  />
      <Route path="/Targets"  element={<Targets />}/>
      <Route path="/Profiles"  element={<Profiles />}/>
      <Route path="/Suspects"  element={<Suspects />}/>
      <Route path="/Alerts"  element={<Alert />}/>
      <Route path="/Error"  element={<Error />}/>
      {/* test content */}
      <Route path="/Target"  element={<Target />}/>
      <Route path="/Header"  element={<Header />}/>
      <Route path="/Table2"  element={<DataTable />}/>
      <Route path="/Keyword"  element={<Keyword />}/>
    </Routes>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
