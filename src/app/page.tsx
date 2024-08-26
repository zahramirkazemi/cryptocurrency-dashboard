"use client";

import React, { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/system";
import TokenList from "@/components/token-list";
import useTokensStore from "@/store/tokens";

const Home: React.FC = () => {
  const { fetchTokens } = useTokensStore();

  useEffect(() => {
    fetchTokens(1);
  }, []);

  return (
    <NextUIProvider>
      <main className="h-screen flex">
        <TokenList />
      </main>
    </NextUIProvider>
  );
};

export default Home;
