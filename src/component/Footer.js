import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Logo  from "../image/logo.png"




const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%',color:'black' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" width="30px" src={Logo}/>
              <span className="ml-3 h5 font-weight-bold">No Sida</span>
            </a>
            <p className="my-3" style={{ width: '250px' ,color:'black'}}>
              Nous avons créer ce site pour sensibiliser les gents au gravité de CIDA 
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' ,color:'black'}}>
              Devwares
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0',color:'black' }}>
              <CDBFooterLink>Resources</CDBFooterLink>
              <CDBFooterLink>About Us</CDBFooterLink>
              <CDBFooterLink >Contact</CDBFooterLink>
              <CDBFooterLink >Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' ,color:'black'}}>
              Help
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' ,color:'black'}}>
              <CDBFooterLink >Support</CDBFooterLink>
              <CDBFooterLink >Sign Up</CDBFooterLink>
              <CDBFooterLink >Sign In</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600',color:'black' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' ,color:'black'}}>
              <CDBFooterLink >Windframe</CDBFooterLink>
              <CDBFooterLink >Loop</CDBFooterLink>
              <CDBFooterLink >Contrast</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer