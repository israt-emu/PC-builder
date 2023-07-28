import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
