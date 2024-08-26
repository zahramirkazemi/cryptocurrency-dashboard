"use client"

import React from "react";
import { NextUIProvider } from "@nextui-org/system";
import TokenList from "@/components/token-list";

const Home: React.FC = () => (
  <NextUIProvider>  
    <main className="h-screen flex">
      <TokenList />
    </main>
  </NextUIProvider>
)

export default Home;
