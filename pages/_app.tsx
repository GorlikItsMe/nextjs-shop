import { AppProps } from "next/app";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "../styles/fontawesome_5.15.1_all.css";
import "../styles/global.css";
import ContextMain from "../context/ContextMain";

function App({ Component, pageProps }: AppProps) {
  return (
    <ContextMain>
      <Component {...pageProps} />
    </ContextMain>
  );
}

export default App;
