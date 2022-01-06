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
  MDBBadge,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (<>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Sklep NextJS</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                <MDBIcon fas icon='home'></MDBIcon> Strona Główna
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><MDBIcon fas icon='store-alt'></MDBIcon> Sklep</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  <MDBIcon fas icon='file-pdf'></MDBIcon> Dokumenty
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Polityka Prywatności</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Regulamin</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='#'><MDBIcon fas icon='envelope'></MDBIcon> Kontakt</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={toggleShow}>
                <MDBBadge pill color='danger'>!</MDBBadge>
                <span>
                  <MDBIcon fas icon='shopping-cart'></MDBIcon>
                </span>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    {/* MODAL */}
    {basicModal &&
      <MDBModal show={true} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle><MDBIcon fas icon='shopping-cart'></MDBIcon> Twój koszyk</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {/* BRAK PRODUKTÓW W KOSZTYKU */}
              <div className="alert alert-danger" role="alert" data-mdb-color="danger">
                Brak produktów w koszyku
              </div>

              {/* Produkt w koszyku */}
              <MDBContainer>
                <MDBRow>
                  <MDBCol size='md-6' className='col-example'>
                    HUAWEI P30 PRO
                  </MDBCol>
                  <MDBCol size='md-6' className='col-example'>
                    Cena: 2333.00 zł
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <hr />
              Kwota do zapłaty: 2333.00 zł
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='danger' onClick={toggleShow}>
                <MDBIcon fas icon='times'></MDBIcon> Zamknij
              </MDBBtn>
              <MDBBtn color='success'>Przejdź do zamówienia <MDBIcon fas icon='long-arrow-alt-right'></MDBIcon></MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    }
  </>
  );
}