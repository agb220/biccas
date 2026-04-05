import { PropsWithChildren } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const LayoutWrapper = async ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
