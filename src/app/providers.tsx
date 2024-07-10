// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useContext, useState, useEffect } from "react";

////// Form Context Provider
export type FormContextType = {
  query: string;
  setQuery: (_value: string) => void;
  category: string; // Why can't I get CategoryNames | null to work...?
  setCategory: (_value: string) => void; // Why can't I get CategoryNames | null to work...?
  data: ResponseInfo | null;
};
export const FormContext = createContext<FormContextType>({
  query: "",
  setQuery: (_value: string) => {},
  category: "", // Why can't I get CategoryNames | null to work...?
  setCategory: (_value: string) => {}, // Why can't I get CategoryNames | null to work...?
  data: null,
});
export const useFormContext = () => useContext(FormContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(""); // Why can't I get CategoryNames | null to work...?
  const [data, setData] = useState(null);
  //   const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (category === "") {
      console.log("No category to fetch");
    } else {
      fetch(`/api/${category.toLowerCase()}/`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          // setLoading(false);
        });
    }
  }, [category]);

  // FOR DEBUGGING ONLY
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ChakraProvider>
      <FormContext.Provider
        value={{ query, setQuery, category, setCategory, data }}
      >
        {children}
      </FormContext.Provider>
    </ChakraProvider>
  );
}
