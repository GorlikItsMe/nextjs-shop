import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBIcon,
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
import { CartProduct } from '../lib/shopApi';
import { useRouter } from 'next/router';


export default function CartModal({ basicModal, setBasicModal, toggleShow }: { basicModal: boolean, setBasicModal: any, toggleShow: any }) {

    const [loading, setLoading] = useState(true);
    const [cartProducts, setCartProducts] = useState<CartProduct[]>(null);
    const [cartTotal, setCartTotal] = useState(0);
    const router = useRouter();
    const [_document, set_document] = useState(null)

    useEffect(() => {
        set_document(document)
    }, [])

    useEffect(() => {
        fetch('/api/cart')
            .then(data => data.json())
            .then((data: CartProduct[]) => {
                setCartProducts(data)
                setLoading(false);
                let totalPrice = 0;
                data.forEach(p => {
                    totalPrice = totalPrice + (p.price * p.amount)
                });
                setCartTotal(parseFloat(totalPrice as unknown as string))
            })
    }, [basicModal])

    const routeToOrder = () => {
        toggleShow()
        router.push('/order')
    }

    if (!_document) { return <div style={{ display: "none" }}></div> }

    return (
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex={-1} closeOnEsc={true}>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle><MDBIcon fas icon='shopping-cart'></MDBIcon> Twój koszyk</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        {
                            loading && <div>Ładowanie...</div>
                        }
                        {
                            !loading && cartProducts.length == 0 &&
                            <div className="alert alert-danger" role="alert" data-mdb-color="danger">
                                Brak produktów w koszyku
                            </div>
                        }
                        {
                            !loading && cartProducts.length != 0 &&
                            <div>
                                <MDBContainer>
                                    {cartProducts.map((p) => {
                                        return (
                                            <MDBRow>
                                                <MDBCol size='md-6' className='col-example'>
                                                    {p.name}
                                                </MDBCol>
                                                <MDBCol size='md-4' className='col-example'>
                                                    Cena: {p.price} zł
                                                </MDBCol>
                                                <MDBCol size='md-2'>
                                                    x {p.amount}
                                                </MDBCol>
                                            </MDBRow>
                                        )
                                    })}

                                </MDBContainer>
                                <hr />
                                Kwota do zapłaty: {cartTotal} zł
                            </div>
                        }

                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn outline rounded className='mx-2' color='danger' onClick={toggleShow}>
                            <MDBIcon fas icon='times'></MDBIcon> Zamknij
                        </MDBBtn>
                        <MDBBtn outline rounded color='success' onClick={routeToOrder}>Przejdź do zamówienia <MDBIcon fas icon='long-arrow-alt-right'></MDBIcon></MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}