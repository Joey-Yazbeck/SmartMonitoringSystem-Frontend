import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import Header from './Header'

export default function App() {
  const [formValue, setFormValue] = useState({
    fname: '',
    lname: '',
    email: '',
    city: '',
    state: '',
    zip: '',
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  
  

  return  (
    <div style={{ position: 'absolute', top: 0, left: 20, right: 20 }}>
    <Header/>
      <h1>Add Account</h1>

    <MDBValidation className='row g-3'>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.fname}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.lname}
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Username'
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid Email.' invalid>
        <MDBInput
          type='text'
          
          name='Email'
          onChange={onChange}
          id='validationCustom03'
          required
          label='Email'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid Password.' invalid>
        <MDBInput
          type='password'
          name='passord'
          onChange={onChange}
          id='validationCustom05'
          required
          label='Password'
        />
      </MDBValidationItem>
      
      <div className='col-12'>
        <MDBBtn type='submit'style={{ marginRight: '10px' }}>Submit form</MDBBtn>
        <MDBBtn type='reset'style={{ marginLeft: '10px' }}>Reset form</MDBBtn>
      </div>
    </MDBValidation>
    </div>
    
    ) ;
    
};