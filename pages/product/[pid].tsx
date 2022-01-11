import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { GetServerSideProps } from 'next';
import { getProductById, ShopApiProduct } from '../../lib/shopApi';

export default function ProductPreview({ product }: { product: ShopApiProduct }) {
    const [amount, setAmount] = useState(1);
    const [_document, set_document] = useState(null)

    useEffect(() => {
        set_document(document)
    }, [])

    const onChangeAmount = (e) => {
        setAmount(parseInt(e.target.value));
    }

    const addToCart = () => {
        fetch("/api/cart/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                productId: product.id,
                amount: amount
            })
        })
            .then(response => {
                console.log(response);
                (window as Window & typeof globalThis & { openCart }).openCart()
            })
            .catch(err => {
                console.error(err);
            });

    }
    return (
        <Layout>
            <Head>
                <title>{product.name}</title>
            </Head>
            <MDBContainer className="mt-5">

                <MDBRow>
                    <MDBCol size='md-6' className='col-example'>
                        <img src={product.imageLink} className='img-fluid shadow-4' alt='Product' />
                    </MDBCol>
                    <MDBCol size='md-6' className='col-example'>
                        <h3>{product.name}</h3>
                        <h4>Cena: {product.price} zł</h4>
                        <div>
                            <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: product.desc }} />
                        </div>
                        <MDBContainer>
                            <MDBRow className="text-center">
                                <MDBCol size='md-6' className='col-example'>
                                    <MDBInput label='Ilość' id='typeNumber' type='number' min='1' value={`${amount}`} onChange={onChangeAmount} />
                                </MDBCol>
                                <MDBCol size='md-6' className='col-example'>
                                    <MDBBtn outline rounded href='#' className="btn-lg" onClick={addToCart}>
                                        <MDBIcon fas icon='cart-plus'></MDBIcon> Dodaj do koszyka
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <hr />
                        <p>
                            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
                                <MDBIcon fab icon='facebook-f' />
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
                                <MDBIcon fab icon='twitter' />
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
                                <MDBIcon fab icon='google' />
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
                                <MDBIcon fab icon='instagram' />
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
                                <MDBIcon fab icon='youtube' />
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#481449' }} href='#'>
                                <MDBIcon fab icon='slack-hash' />
                            </MDBBtn>

                            <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
                                <MDBIcon fab icon='whatsapp' />
                            </MDBBtn>
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    query
}) => {
    // get service id (and check it)
    const productId = query['pid'] as string;
    let pid = parseInt(productId);
    if (isNaN(pid)) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
            props: {},
        };
    }

    const productObj = await getProductById(pid);
    if (productObj == undefined) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
            props: {},
        };
    }
    return { props: { pid, product: productObj } };
}