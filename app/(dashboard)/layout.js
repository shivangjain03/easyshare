"use client";
import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";
import { ClerkProvider } from "@clerk/nextjs";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [toggle, setToggle] = useState(false); 
  return (
    <ClerkProvider>
    <div>
      <div className=" h-full w-64 flex-col fixed inset-y-0 z-50 md:flex hidden">
        <SideNav closeSideBar={()=>setToggle(false)}/>
      </div>
      {toggle ? <div className=" h-full w-64 flex-col fixed inset-y-0 z-30 bg-white flex">
        <SideNav closeSideBar={()=>setToggle(false)}/>
        </div>:null}
      <div className="md:ml-64">
        <TopHeader />
        {children}
      </div>
    </div>
    </ClerkProvider>
  );
}