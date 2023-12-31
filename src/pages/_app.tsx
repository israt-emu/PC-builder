import "@/styles/globals.css";
import {NextPage} from "next";
import type {ReactElement, ReactNode} from "react";
import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {SessionProvider} from "next-auth/react";
import store from "@/redux/store";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
    </SessionProvider>
  );
}
