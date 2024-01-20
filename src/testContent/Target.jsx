import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



export default function Target() {
  return (
  <>

    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>FullName</th>
          <th scope='col'>MotherName</th>
          <th scope='col'>Status</th>
          <th scope='col'>Nationality</th>
          <th scope='col'>FamilyStatus</th>
          <th scope='col'>Gender</th>
          <th scope='col'>Edit/Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Rasha Sinno</p>
                <p className='text-muted mb-0'>Beirut</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Manal Saab</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Nothing
            </MDBBadge>
          </td>
          <td>Lebanese</td>
          <td>
            Single
          </td>
          <td>
            Female
          </td>
          <td>
          <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn><br></br>
            <MDBBtn color='link' rounded size='sm'>
              Delete
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Joey Yazbeck</p>
                <p className='text-muted mb-0'>Aley</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Marie Sargi</p>
            
          </td>
          <td>
            <MDBBadge color='danger' pill>
              Wanted
            </MDBBadge>
          </td>
          <td>Lebanese</td>
          <td>
            Married
          </td>
          <td>
            Male
          </td>
          <td>
          <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
            <br></br>
            <MDBBtn color='link' rounded size='sm'>
              Delete
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Marc Srouji</p>
                <p className='text-muted mb-0'>Zahle</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Jaqueline Nakad</p>
           
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Arrested
            </MDBBadge>
          </td>
          <td>Lebanese</td>
          <td>
           Single
          </td>
          <td>
            Male
          </td>
          <td>
          <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
            <br></br>
            <MDBBtn color='link' rounded size='sm'>
              Delete
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </>
  );
}