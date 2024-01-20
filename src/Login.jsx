import React,{ useState }  from 'react';
import './css/Login.css';
import { useNavigate } from 'react-router-dom';
import logo from './images/Swat_Logo.svg';


import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login() {

  const navigate = useNavigate();

  const [user, setUsername] = useState('');
  const [pass, setPassword] = useState('');
  // const [output, setOutput] = useState('');
  
  const handleSubmit =  (event) => {
    event.preventDefault();
    try {
      const data ={
        username: user,
        password: pass
      };
      console.log(data);
      console.log(JSON.stringify(data));
      const res =  fetch("http://localhost:7199/api/user/Login", {
        method: "POST",
        headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
        body: JSON.stringify(data)
      }).then(response => {
        if (response.ok) {
          setUsername("");
          setPassword("");
          console.log('success');
          
          response.json().then(respData => {
            console.log(respData);
            console.log(JSON.stringify(respData));
            console.log(respData.firstName);
            //setOutput(respData.email);

          });
          navigate('/Profiles');
          
        }
        else {
          //change to popup error alert
          navigate('/Error');
          console.log('failure');
          console.log(response);
        }
      });
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <img src={logo} style={{ width: '200px', height: 'auto', borderRadius: '50%' }}></img>
            <div style={{ textAlign: 'center' }}>
        <h2>S.W.A.T</h2>
      </div>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Username' id='formControlLg' type='email' size="lg" value={user} 
          onChange={(event) =>
            setUsername(event.target.value)
          }  />
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" value={pass}
          onChange={(event) => {
            setPassword(event.target.value);
          }}/>  
          {/* <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" value={output}/>           */}
            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' type='submit' onClick={handleSubmit}>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="http://localhost:3000/SignUp" className="link-info">Register here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src={logo}
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  

  );
}

export default Login;