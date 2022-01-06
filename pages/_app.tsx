import { AppProps } from 'next/app'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '../styles/fontawesome_5.15.1_all.css'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
