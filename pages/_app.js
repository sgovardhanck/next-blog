import NavBar from "../components/navBar";
import "../styles/global.css";
export default function ({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
