// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

export type FormContextType = {
  query: string;
  setQuery: (_value: string) => void;
  category: string;
  setCategory: (_value: string) => void;
};
export const FormContext = createContext<FormContextType>({
  query: "",
  setQuery: (_value: string) => {},
  category: "",
  setCategory: (_value: string) => {},
});

export const useFormContext = () => useContext(FormContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  return (
    <ChakraProvider>
      <FormContext.Provider value={{ query, setQuery, category, setCategory }}>
        {children}
      </FormContext.Provider>
    </ChakraProvider>
  );
}
