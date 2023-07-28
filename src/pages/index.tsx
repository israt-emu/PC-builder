import Image from "next/image";
import {Inter} from "next/font/google";
import React, {ReactElement} from "react";
import {NextPageWithLayout} from "./_app";
import RootLayout from "@/components/layout/RootLayout";

const inter = Inter({subsets: ["latin"]});

const Home: NextPageWithLayout = () => {
  return <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>This is home page</main>;
};
Home.getLayout = function getLayout(Home: ReactElement) {
  return <RootLayout>{Home}</RootLayout>;
};
export default Home;
