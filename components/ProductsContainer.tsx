import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBIcon } from 'mdb-react-ui-kit';
import style from './NewProducts.module.css'
import { ApiCategoryDetail } from '../lib/shopApiTypes';
import Link from 'next/link';

export default function ProductsContainer({ title, categoryId, titleIcon }: { title: string, categoryId: number, titleIcon?: any }) {
    const [categoryDetail, setCategoryDetail] = useState<ApiCategoryDetail>(null)
    useEffect(() => {
        fetch(`/api/category/${categoryId}`)
            .then(r => r.json())
            .then((data) => setCategoryDetail(data))
    }, [])

    if (!titleIcon) {
        titleIcon = (<MDBIcon fas icon='plus'></MDBIcon>);
    }

    return (
        <MDBContainer className="mt-5 text-center">
            <h4 className='section-title mb-5'>{titleIcon} {title}</h4>
            <MDBRow>
                {categoryDetail && categoryDetail.Product.map((p) => {
                    return (
                        <MDBCol key={p.id} size='md' className='col-example'>
                            <MDBCard className={style.card}>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src={p.imageLink} fluid alt='...' />
                                    <a>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>{p.name}</MDBCardTitle>
                                    <MDBCardText className={style.cardText}>
                                        <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: p.desc }} />
                                        <h4>Cena: {p.price} zł</h4>
                                    </MDBCardText>
                                    <Link href={`/product/${p.id}`}>
                                        <MDBBtn outline rounded><MDBIcon fas icon='cart-plus'></MDBIcon> Dodaj do koszyka</MDBBtn>
                                    </Link>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    )
                })}
            </MDBRow>
        </MDBContainer>
    );
}