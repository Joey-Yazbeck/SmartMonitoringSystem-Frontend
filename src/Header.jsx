import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBadge,
} from 'mdb-react-ui-kit';
import { useEffect } from 'react';


export default function Header(props) {
  const [showBasic, setShowBasic] = useState(true);

  useEffect(() => {
    console.log(showBasic);
    setShowBasic(true);
    console.log(showBasic);
    },[]);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Welcome!
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='http://localhost:3000/signup'>Add User</MDBDropdownItem>
                  <MDBDropdownItem link href='http://localhost:3000/'>SignOut</MDBDropdownItem>
                </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
            
              <MDBNavbarLink active={props.isProfilePage} aria-current={props.isProfilePage ? 'page' : null} href='http://localhost:3000/Profiles'>Profiles</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem> 
              <MDBNavbarLink active={props.isTargetPage} aria-current={props.isTargetPage ? 'page' : null} href='http://localhost:3000/Targets'>Targets</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={props.isSuspectPage} aria-current={props.isSuspectPage ? 'page' : null} href='http://localhost:3000/Suspects'>Suspects</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
            <MDBNavbarLink active={props.isKeywordsPage} aria-current={props.isKeywordsPage ? 'page' : null} href='http://localhost:3000/Keyword'>Keywords</MDBNavbarLink>
            
             
            </MDBNavbarItem>
            

           
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            
          <MDBBtn style={{ backgroundColor: 'black' }} href='http://localhost:3000/Alerts'>
          <MDBIcon far icon="bell" /> 
          
          </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}