import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBIcon } from 'mdb-react-ui-kit';
import style from './NewProducts.module.css'

export default function NewProducts() {
    return (
        <MDBContainer className="mt-5 text-center">
            <h4 className='mb-5'>Nowe produkty</h4>
            <MDBRow>
                <MDBCol size='md' className='col-example'>
                    <MDBCard className={style.card}>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src='https://consumer.huawei.com/content/dam/huawei-cbg-site/cee-nordics/pl/mkt/pdp/phones/p30-pro/img/p30-pro-blue.png' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>HUAWEI P30 PRO</MDBCardTitle>
                            <MDBCardText className={style.cardText}>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Ekran: 6,47 cali, OLED, FHD + 2 340 x 1 080</li>
                                    <li>Procesor: Ośmiordzeniowy procesor HUAWEI Kirin 980</li>
                                    <li>Odporność: IP68</li>
                                    <li>System: EMUI 9.1 (na podstawie Android 9)</li>
                                    <li>Pamięć: 6 GB RAM + 128 GB ROM</li>
                                    <li>Bateria: 4 200 mAh</li>
                                    <li>Aparat: Przedni - 40 MP, Tylni - 32MP</li>
                                </ul>
                                <h4>Cena: 2333.00 zł</h4>
                            </MDBCardText>
                            <MDBBtn href='#'><MDBIcon fas icon='cart-plus'></MDBIcon> Dodaj do koszyka</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol size='md' className='col-example'>
                    <MDBCard className={style.card}>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src='https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p40-lite-5g/p40lite-silver.png' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>HUAWEI P40 LITE | 5G</MDBCardTitle>
                            <MDBCardText className={style.cardText}>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Ekran: 6,5 cali, LCD, 2 400 x 1 080 px</li>
                                    <li>Procesor: Ośmiordzeniowy procesor HUAWEI Kirin 820</li>
                                    <li>Odporność: IP68</li>
                                    <li>System: EMUI 10.1 (Android 10)</li>
                                    <li>Pamięć: 6 GB RAM + 128 GB ROM</li>
                                    <li>Bateria: 4 000 mAh</li>
                                    <li>Aparat: Przedni - 16 MP, Tylni - 64MP</li>
                                </ul>
                                <h4>Cena: 1290.00 zł</h4>
                            </MDBCardText>
                            <MDBBtn href='#'><MDBIcon fas icon='cart-plus'></MDBIcon> Dodaj do koszyka</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol size='md' className='col-example'>
                    <MDBCard className={style.card}>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src='https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p40-pro/p40-pro-black.png' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>HUAWEI P40 PRO</MDBCardTitle>
                            <MDBCardText className={style.cardText}>
                                <ul style={{ textAlign: 'left' }}>
                                    <li>Ekran: 6,58 cali, OLED, 2 640 x 1 200 px</li>
                                    <li>Procesor: Ośmiordzeniowy procesor HUAWEI Kirin 990 5G</li>
                                    <li>Odporność: IP68</li>
                                    <li>System: EMUI 10.1 (oparty na systemie Android10)</li>
                                    <li>Pamięć: 8 GB RAM + 256 GB ROM</li>
                                    <li>Bateria: 4 200 mAh</li>
                                    <li>Aparat: Przedni - 32 MP, Tylni - 50MP + 40MP</li>
                                </ul>
                                <h4>Cena: 4299.00 zł</h4>
                            </MDBCardText>
                            <MDBBtn href='#'><MDBIcon fas icon='cart-plus'></MDBIcon> Dodaj do koszyka</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}