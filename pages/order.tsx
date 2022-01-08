import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBRadio, MDBCheckbox, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
export default function Order() {
    return (
        <Layout>
            <Head>
                <title>Nazwa produktu</title>
            </Head>
            <h2 className="text-center mt-5">Formularz zamówienia nr. 123419</h2>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='md-7' className='col-example'>
                        <h4>Dane płatności</h4>
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
                                <MDBInput label='Adres' id='form1' type='text' />
                            </div>
                            <div className="form-outline mb-4">
                                <MDBRow>
                                    <MDBCol size='md-6' className='col-example'>
                                        <MDBInput label='Numer budynku' id='form1' type='text' />
                                    </MDBCol>
                                    <MDBCol size='md-6' className='col-example'>
                                        <MDBInput label='Numer mieszkania' id='form1' type='text' />
                                    </MDBCol>
                                </MDBRow>
                            </div>
                            <div className="form-outline mb-4">
                                <MDBRow>
                                    <MDBCol size='md-6' className='col-example'>
                                        <MDBInput label='Kod pocztowy' id='form1' type='text' />
                                    </MDBCol>
                                    <MDBCol size='md-6' className='col-example'>
                                        <MDBInput label='Miasto' id='form1' type='text' />
                                    </MDBCol>
                                </MDBRow>
                            </div>
                            <div className="form-outline mb-4">
                                <MDBInput label='Numer telefonu' id='form1' type='text' />
                            </div>
                            <div className="form-outline mb-4">
                                <MDBInput label='Adres E-mail' id='form1' type='text' />
                            </div>
                            <div className="form-outline mb-4">
                                <MDBInput label='Uwagi do zamówienia' id='textAreaExample' textarea rows={4} />
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol size='md-5' className='col-example'>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Twoje zamówienie</MDBCardTitle>
                                <MDBCardText>
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
                                    {/* Cena produktu - bez dostawy */}
                                    Kwota do zapłaty: 2333.00 zł
                                    {/* Wybór sposobu dostawy */}
                                    <p className="font-weight-bold">Wybierz sposób dostawy</p>
                                    <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='InPost Paczkomaty 12.99 zł' defaultChecked />
                                    <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Kurier DPD 15.99 zł' />
                                    <MDBRadio name='flexRadioDefault' id='flexRadioDefault3' label='Odbiór osobisty 00.00 zł' />
                                    {/* Cena produktu + cena dostawy */}
                                    <hr />
                                    Kwota do zapłaty: 2345.99 zł
                                    {/* Wybór metody płatności */}
                                    <p className="font-weight-bold">Wybierz sposób płatności</p>
                                    <MDBRadio name='flexRadioDefaultt' id='flexRadioDefault22' label='Płatność przy odbiorze' defaultChecked />
                                    <MDBRadio name='flexRadioDefaultt' id='flexRadioDefault11' label='Przelew tradycyjny' />
                                    <MDBRadio name='flexRadioDefaultt' id='flexRadioDefault11' label='Przelewy24' />
                                    <p className="mt-4">
                                        Twoje dane osobowe będą użyte do przetworzenia twojego zamówienia, obsługi twojej wizyty na naszej stronie oraz dla innych celów o których mówi nasza polityka prywatności.
                                    </p>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Przeczytałem/am i akceptuję regulamin *' />
                                </MDBCardText>
                                <MDBBtn outline rounded>
                                    Kupuje i płacę <MDBIcon fas icon='long-arrow-alt-right'></MDBIcon>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}




