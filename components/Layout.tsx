// Layout.jsx
import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
interface LayoutProps {
  children: ReactNode;
}


const Layout = ({ children }:  LayoutProps) => {
  return (
    <>
      <div className="bg-bodyColor"><Navbar /></div>
      <div className="w-full h-screen font-bodyFont bg-bodyColor text-white overflow-x-hidden overflow-y-scroll">
        {children}
      </div>
    </>
  );
};

export default Layout;
