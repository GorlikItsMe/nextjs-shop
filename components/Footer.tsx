import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter backgroundColor='light' className='text-center text-lg-left mt-5'>
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
                <a href='/' className='text-dark'>
                  Strona Główna
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Sklep
                </a>
              </li>
              <li>
                <a href='/kontakt' className='text-dark'>
                  Kontakt
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'><MDBIcon fas icon='file-pdf'></MDBIcon> Dokumenty</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='/politykaPrywatnosci' className='text-dark'>
                  Polityka Prywatności
                </a>
              </li>
              <li>
                <a href='/regulamin' className='text-dark'>
                  Regulamin Sklepu
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()}{' '}
        <a className='text-dark' href='#'>
          Kamil G & Maciej F
        </a>
      </div>
    </MDBFooter>
  );
}