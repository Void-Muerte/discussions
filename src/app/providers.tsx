"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ProviderProps } from "react";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
