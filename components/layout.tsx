import Footer from "./footer"
import Header from "./header"
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) =>{
  return(
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout