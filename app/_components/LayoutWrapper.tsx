import { PropsWithChildren } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

const LayoutWrapper = async ({ children }: PropsWithChildren) => {
  return (
    <AuthProvider>
      <Header />
      {children}
      <Footer />
    </AuthProvider>
  );
};

export default LayoutWrapper;
