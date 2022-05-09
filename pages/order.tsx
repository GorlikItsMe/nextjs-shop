import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBRadio, MDBCheckbox, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBTable, MDBTableHead, MDBTableBody, MDBTextArea } from 'mdb-react-ui-kit';
import { CartProduct } from '../lib/shopApi';
import { useRouter } from 'next/router';
export default function Order() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>(null);
  const [cartTotal, setCartTotal] = useState(0);
  // formularz
  const [formFirstName, setFormFirstName] = useState("");
  const [formLastName, setFormLastName] = useState("");
  const [formStreet, setFormStreet] = useState("");
  const [formBuilding, setFormBuilding] = useState("");
  const [formFloor, setFormFloor] = useState("");
  const [formPostalCode, setFormPostalCode] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formExtraDetails, setFormExtraDetails] = useState("");
  const [formAcceptTos, setFormAcceptTos] = useState(false);

  const router = useRouter();


  useEffect(() => {
    fetch('/api/cart')
      .then(data => data.json())
      .then((data: CartProduct[]) => {
        setCartProducts(data)
        let totalPrice = 0;
        data.forEach(p => {
          totalPrice = totalPrice + (p.price * p.amount)
        });
        setCartTotal(parseFloat(totalPrice as unknown as string))
      })
  }, [])

  const onChange = (e) => {
    const key = e.target.name;
    const q = {
      "firstName": setFormFirstName,
      "lastName": setFormLastName,
      "street": setFormStreet,
      "building": setFormBuilding,
      "floor": setFormFloor,
      "postalCode": setFormPostalCode,
      "city": setFormCity,
      "phone": setFormPhone,
      "email": setFormEmail,
      "extraDetails": setFormExtraDetails,
    }
    if (key in q) {
      q[key](e.target.value)
    } else {
      console.error(`Not found ${key}`)
    }
  }

  const acceptOrder = () => {
    // checks
    if (!formAcceptTos) { alert("Zaakceptuj regulamin"); return; }
    const q = [
      formFirstName,
      formLastName,
      formStreet,
      formBuilding,
      // formFloor,
      formPostalCode,
      formCity,
      formPhone,
      formEmail,
    ]
    for (let i = 0; i < q.length; i++) {
      const f = q[i];
      if (f == "" || f === null || f === undefined) {
        alert("Uzupełnij formularz"); return;
      }
    }

    fetch("/api/cart/createOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName: formFirstName,
        lastName: formLastName,
        street: formStreet,
        building: formBuilding,
        floor: formFloor,
        postalCode: formPostalCode,
        city: formCity,
        phone: formPhone,
        email: formEmail,
        extraDetails: formExtraDetails,
      })
    })
      .then(response => {
        fetch("/api/cart/setup")
        router.push("/");
      })
      .catch(err => {
        console.error(err);
      });

  }

  return (
    <Layout>
      <Head>
        <title>Twoje zamówienie</title>
      </Head>
      <h2 className="text-center mt-5">Formularz zamówienia</h2>
      <MDBContainer>
        <MDBRow>
          <MDBCol size='md-5' className='col-example'>
            <h4>Dane płatności</h4>
            <form>
              <div className="form-outline mb-4">
                <MDBRow>
                  <MDBCol size='md-6' className='col-example'>
                    <MDBInput label='Imię' name='firstName' type='text' value={formFirstName} onChange={onChange} />
                  </MDBCol>
                  <MDBCol size='md-6' className='col-example'>
                    <MDBInput label='Nazwisko' name='lastName' type='text' value={formLastName} onChange={onChange} />
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="form-outline mb-4">
                <MDBInput label='Adres' name='street' type='text' value={formStreet} onChange={onChange} />
              </div>
              <div className="form-outline mb-4">
                <MDBRow>
                  <MDBCol size='md-6' className='col-example'>
                    <MDBInput label='Numer budynku' name='building' type='text' value={formBuilding} onChange={onChange} />
                  </MDBCol>
                  <MDBCol size='md-6' className='col-example'>
                    <MDBInput label='Numer mieszkania' name='floor' type='text' value={formFloor} onChange={onChange} />
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="form-outline mb-4">
                <MDBRow>
                  <MDBCol size='md-6' className='col-example'>
                    <MDBInput label='Kod pocztowy' name='postalCode' type='text' value={formPostalCode} onChange={onChange} />
                  </MDBCol>
                  <MDBCol size='md-6' className='col-example'>
                    <MDBInput label='Miasto' name='city' type='text' value={formCity} onChange={onChange} />
                  </MDBCol>
                </MDBRow>
              </div>
              <div className="form-outline mb-4">
                <MDBInput label='Numer telefonu' name='phone' type='text' value={formPhone} onChange={onChange} />
              </div>
              <div className="form-outline mb-4">
                <MDBInput label='Adres E-mail' name='email' type='email' value={formEmail} onChange={onChange} />
              </div>
              <div className="form-outline mb-4">
                <MDBTextArea label='Uwagi do zamówienia' name='extraDetails' rows={4} value={formExtraDetails} onChange={onChange} />
              </div>
            </form>
          </MDBCol>
          <MDBCol size='md-7' className='col-example'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Twoje zamówienie</MDBCardTitle>
                <MDBCardText>
                  {/* Produkt w koszyku */}
                  <MDBTable>
                    <MDBTableHead>
                      <tr>
                        <th scope='col'>Produkt</th>
                        <th scope='col'>Cena</th>
                        <th scope='col'>Ilość</th>
                        <th scope='col'>Suma</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {
                        cartProducts && cartProducts.map((p) => {
                          return (
                            <tr>
                              <td>{p.name}</td>
                              <td>{p.price} zł</td>
                              <td>x{p.amount}</td>
                              <th>{p.price * p.amount} zł</th>
                            </tr>
                          )
                        })
                      }
                    </MDBTableBody>
                  </MDBTable>
                  <hr />

                  {/* Wybór sposobu dostawy */}
                  <p className="font-weight-bold">Wybierz sposób dostawy</p>
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Kurier DPD 15.99 zł' defaultChecked />
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='InPost Paczkomaty 12.99 zł' disabled />
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault3' label='Odbiór osobisty 00.00 zł' disabled />
                  <hr />

                  {/* Wybór metody płatności */}
                  <p className="font-weight-bold">Wybierz sposób płatności</p>
                  <MDBRadio name='flexRadioDefaultt' id='flexRadioDefault22' label='Płatność przy odbiorze' defaultChecked />
                  <MDBRadio name='flexRadioDefaultt' id='flexRadioDefault11' label='Przelew tradycyjny' disabled />
                  <MDBRadio name='flexRadioDefaultt' id='flexRadioDefault11' label='Przelewy24' disabled />
                  <hr />

                  <p className="font-weight-bold">Koszt</p>
                  <div>Zamówienie: {cartTotal} zł</div>
                  <div>+ Dostawa: {15.99} zł</div>
                  <div>Kwota do zapłaty: <b>{cartTotal + 15.99} zł</b></div>

                  <p className="mt-4">
                    Twoje dane osobowe będą użyte do przetworzenia twojego zamówienia, obsługi twojej wizyty na naszej stronie oraz dla innych celów o których mówi nasza polityka prywatności.
                  </p>
                  <MDBCheckbox name='flexCheck' checked={formAcceptTos} id='flexCheckDefault' label='Przeczytałem/am i akceptuję regulamin *' onChange={() => { setFormAcceptTos(!formAcceptTos) }} />
                </MDBCardText>
                <MDBBtn outline rounded onClick={acceptOrder}>
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




