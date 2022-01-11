import React, { useEffect, useState } from 'react';
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
  MDBCollapse
} from 'mdb-react-ui-kit';
import Link from 'next/link'
import CartModal from './CartModal';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  return (<>
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <Link href="/">
          <a><MDBNavbarBrand>Sklep NextJS</MDBNavbarBrand></a>
        </Link>

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
              <Link href="/">
                <a><MDBNavbarLink active aria-current='page'>
                  <MDBIcon fas icon='home'></MDBIcon> Strona Główna
                </MDBNavbarLink></a>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link href="/">
                <a><MDBNavbarLink><MDBIcon fas icon='store-alt'></MDBIcon> Sklep</MDBNavbarLink></a>
              </Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  <MDBIcon fas icon='file-pdf'></MDBIcon> Dokumenty
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link href="/politykaPrywatnosci">
                      <a><MDBDropdownLink>Polityka Prywatności</MDBDropdownLink></a>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/regulamin">
                      <a><MDBDropdownLink>Regulamin</MDBDropdownLink></a>
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <Link href="/kontakt">
                <a><MDBNavbarLink><MDBIcon fas icon='envelope'></MDBIcon> Kontakt</MDBNavbarLink></a>
              </Link>
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
    {
      <CartModal basicModal={basicModal} setBasicModal={setBasicModal} toggleShow={toggleShow} />
    }
  </>
  );
}