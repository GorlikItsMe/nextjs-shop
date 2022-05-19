import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Link from 'next/link'

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left mt-5'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'><MDBIcon fas icon='info'></MDBIcon> Sklep NextJS</h5>

            <p>
              Nasza historia rozpoczęła się w 2022 roku z chwilą otwarcia pierwszego salonu stacjonarnego. Od tej pory nieustannie się rozwijamy, dzięki czemu staliśmy się ekspertami w branży komputerowej.
              Łączymy empatię i technologię, co pozwala nam lepiej rozumieć potrzeby Klientów. Jesteśmy otwarci na sugestie i oferujemy rozwiązania, zapewniające 100% satysfakcji.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'><MDBIcon fas icon='list'></MDBIcon> Szybkie Linki</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <Link href="/">
                  <a className='text-dark'>Strona Główna</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className='text-dark'>Sklep</a>
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  <a className='text-dark'>Kontakt</a>
                </Link>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'><MDBIcon fas icon='file-pdf'></MDBIcon> Dokumenty</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <Link href="/politykaPrywatnosci">
                  <a className='text-dark'>Polityka Prywatności</a>
                </Link>
              </li>
              <li>
                <Link href="/regulamin">
                  <a className='text-dark'>Regulamin</a>
                </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()}{' '}
        <Link href="https://github.com/GorlikItsMe">
          <a className='text-dark'>Kamil 51066</a>
        </Link>&nbsp;&&nbsp;
        <Link href="https://github.com/mfaldzinski">
          <a className='text-dark'>Maciej 51059</a>
        </Link>
      </div>
    </MDBFooter>
  );
}