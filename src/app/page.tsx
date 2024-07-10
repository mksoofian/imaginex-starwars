"use client";
import SearchForm from "@/components/form";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { useFormContext } from "./providers";
import ResultCard from "@/components/result.Card";

export default function Page() {
  const { category, data } = useFormContext();

  return (
    <Container bg="black" maxWidth="1440px" height="100vh" centerContent>
      <section id="section1">
        <Box bg="white" borderRadius="15px">
          <SearchForm />
        </Box>
      </section>
      <section id="section2">
        {" "}
        <SimpleGrid minChildWidth="120px" spacing="40px">
          {data?.results.map((category: any) => {
            return <ResultCard key={category.name} />;
          })}
          <Box width={80} height={80}></Box>
        </SimpleGrid>
      </section>
    </Container>
  );
}
