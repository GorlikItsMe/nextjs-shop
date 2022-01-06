import React from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
export default function ProductPreview() {
    return (
        <Layout>
            <Head>
                <title>Nazwa produktu</title>
            </Head>
            <MDBContainer className="mt-5">

                <MDBRow>
                    <MDBCol size='md-6' className='col-example'>
                        <img src='https://consumer.huawei.com/content/dam/huawei-cbg-site/cee-nordics/pl/mkt/pdp/phones/p30-pro/img/p30-pro-blue.png' className='img-fluid shadow-4' alt='...' />
                    </MDBCol>
                    <MDBCol size='md-6' className='col-example'>
                        <h3>HUAWEI P30 PRO</h3>
                        <h4>Cena: 2333.00 zł</h4>
                        <p>Zobacz z bliska tajemnicze nocne niebo, orła szybującego nad wierzchołkami drzew i subtelne piękno kryształu.
                            Uchwyć najlepsze chwile i stwórz własną wizję przyszłości. HUAWEI P30 Pro wprowadza nową jakość w fotografii z wykorzystaniem smartfonów.<br />
                            <img src='https://consumer-img.huawei.com/content/dam/huawei-cbg-site/cee-nordics/pl/mkt/pdp/phones/p30-pro/img/p30-pro-6ksp.png' className='img-fluid shadow-4' alt='...' />
                        </p>
                        <MDBBtn href='#' className="btn-lg"><MDBIcon fas icon='cart-plus'></MDBIcon> Dodaj do koszyka</MDBBtn>
                        <hr />
                        <p>Udostępnij: <MDBIcon fab icon='facebook-messenger'></MDBIcon> <MDBIcon fab icon='facebook-f'></MDBIcon> <MDBIcon fas icon='link'></MDBIcon></p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}