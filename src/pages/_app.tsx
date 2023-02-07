import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import Link from "next/link";
import { Header } from "../components/Header";
import { CartContextProvider } from "../contexts/cartContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />

        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  );
}
