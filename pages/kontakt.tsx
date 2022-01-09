import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput, } from 'mdb-react-ui-kit';
import style from '../styles/kontakt.module.css'
export default function kontakt() {
    return (
        <Layout>
            <Head>
                <title>Kontakt</title>
            </Head>
            <h2 className="text-center mt-5">Skontaktuj się z Nami</h2>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='md' className='col-example'>
                    <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle className="text-center">Informacje o Nas</MDBCardTitle>
                                <MDBCardText className={style.cardText}>
                                    <p><b>Sklep NextJS</b></p>
                                    <p><b>NIP:</b> 41572348954</p>
                                    <p><b>Adres: </b>ul. Adresowa 10 / 90</p>
                                    <p><b>Kod pocztowy: </b>00-000 Miasto</p>
                                    <p><b>Telefon:</b> +48 123 456 789</p>
                                    <p><b>E-mail:</b> biuro@sklepnextjs.pl</p>
                                    <p><b>Godziny pracy:</b><br />
                                    pon - pt: 09.00 - 18.00<br />
                                    sobota: 10.00 - 15.00
                                    </p>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol size='md' className='col-example'> 
                    <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle className="text-center">Formularz kontaktowy</MDBCardTitle>
                                <MDBCardText className={style.cardText}>
                                    <form>
                                        <div className="form-outline mb-4">
                                            <MDBRow>
                                                <MDBCol size='md-6' className='col-example'>
                                                    <MDBInput label='Imię' id='form1' type='text' />
                                                </MDBCol>
                                                <MDBCol size='md-6' className='col-example'>
                                                    <MDBInput label='Nazwisko' id='form1' type='text' />
                                                </MDBCol>
                                            </MDBRow>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <MDBInput label='Temat' id='form1' type='text' />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <MDBInput label='Adres E-mail' id='form1' type='text' />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <MDBInput label='Treść wiadomości' id='textAreaExample' textarea rows={4} />
                                        </div>
                                        <MDBBtn outline rounded>
                                            Wyślij wiadomość <MDBIcon fas icon='paper-plane'></MDBIcon>
                                        </MDBBtn>
                                    </form>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}