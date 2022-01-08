import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
export default function successOrderPage() {
    return (
        <Layout>
            <Head>
                <title>Dziękujemy za zakup w Naszym sklepie!</title>
            </Head>
            <h2 className="text-center mt-5">Dziękujemy za zakup nr. 123419</h2>
            <hr />
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='md-6' className='col-example'>
                        <MDBTable className="text-center">
                            <MDBTableHead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Kupiony produkt</th>
                                    <th scope='col'>Cena</th>
                                    <th scope='col'>Szacowany czas dostawy</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <th scope='row'>123419</th>
                                    <td>HUAWEI P30 PRO</td>
                                    <td>2333.00 zł</td>
                                    <td>2-3 dni</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCol>
                    <MDBCol size='md-6' className='col-example'>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>Kontakt z Nami</MDBCardTitle>
                                <MDBCardText>
                                    <p>Telefon: 123456789</p>
                                    <p>E-mail: biuro@nextjs.pl</p>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}




