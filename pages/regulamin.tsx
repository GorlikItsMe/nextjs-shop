import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
export default function regulamin() {
    return (
        <Layout>
            <Head>
                <title>Regulamin</title>
            </Head>
            <h2 className="text-center mt-5">Regulamin Sklepu NextJS</h2>
            <div className="container mt-5">
                <ol>
                    <li className="font-weight-bold">Informacje ogólne</li>
                    <p>Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich usług kupna poprzez Serwis.</p>
                    <li className="font-weight-bold">Bezpieczeństwo danych</li>
                    <p>W trosce o bezpieczeństwo powierzonych nam danych opracowaliśmy wewnętrzne procedury i zalecenia, które mają zapobiec udostępnieniu danych osobom nieupoważnionym.
                        Kontrolujemy ich wykonywanie i stale sprawdzamy ich zgodność z odpowiednimi aktami prawnymi – ustawą o ochronie danych osobowych, ustawą o świadczeniu usług drogą elektroniczną, a także wszelkiego rodzaju aktach wykonawczych i aktach prawa wspólnotowego.</p>
                    <li className="font-weight-bold">Dane Osobowe</li>
                    <p>Przetwarzane są na podstawie zgody wyrażanej przez Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania danych osobowych na podstawie przepisów prawa lub w celu realizacji zawartej pomiędzy stronami umowy.</p>
                    <li className="font-weight-bold">Zbieranie informacji</li>
                    <p>Serwis zbiera informacje dobrowolnie podane przez użytkownika.</p>
                    <li className="font-weight-bold">Dane w formularzach</li>
                    <p>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza np. w celu dokonania procesu obsługi kontaktu informacyjnego</p>
                    <li className="font-weight-bold">Dane osobowe klientów</li>
                    <p>Dane osobowe pozostawione w serwisie nie zostaną sprzedane ani udostępnione osobom trzecim, zgodnie z przepisami Ustawy o ochronie danych osobowych.</p>
                    <li className="font-weight-bold">Wgląd w dane osobowe</li>
                    <p>Do danych zawartych w formularzu przysługuje wgląd osobie fizycznej, która je tam umieściła. Osoba ta ma również praw do modyfikacji i zaprzestania przetwarzania swoich danych w dowolnym momencie.</p>
                    <li className="font-weight-bold">Prawo administracji</li>
                    <p>Zastrzegamy sobie prawo do zmiany w polityce ochrony prywatności serwisu, na które może wpłynąć rozwój technologii internetowej, ewentualne zmiany prawa w zakresie ochrony danych osobowych oraz rozwój naszego serwisu internetowego.
                        O wszelkich zmianach będziemy informować w sposób widoczny i zrozumiały.</p>
                    <li className="font-weight-bold">Linki stron trzecich</li>
                    <p>W Serwisie mogą pojawiać się linki do innych stron internetowych.
                        Takie strony internetowe działają niezależnie od Serwisu i nie są w żaden sposób nadzorowane przez serwis bynaturejk.pl Strony te mogą posiadać własne polityki dotyczące prywatności oraz regulaminy, z którymi zalecamy się zapoznać.</p>
                </ol>
                <MDBContainer>
                    <h2 className="text-center mt-4">Pliki do pobrania</h2>
                    <MDBRow className="text-center">
                        <MDBCol size='md' className='col-example'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Regulamin Sklepu - .pdf</MDBCardTitle>
                                    <MDBCardText>
                                        <MDBBtn size='lg' style={{ backgroundColor: '#55acee' }} href='#'>
                                            <MDBIcon className='me-2' fas icon='cloud-download-alt' /> Pobierz
                                        </MDBBtn>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol size='md' className='col-example'>
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Wzór reklamacji / zwrotu towaru - .pdf</MDBCardTitle>
                                    <MDBCardText>
                                        <MDBBtn size='lg' style={{ backgroundColor: '#55acee' }} href='#'>
                                            <MDBIcon className='me-2' fas icon='cloud-download-alt' /> Pobierz
                                        </MDBBtn>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </Layout>
    )
}