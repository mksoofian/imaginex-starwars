"use client";

import SearchForm from "@/components/form";
import {
  AbsoluteCenter,
  background,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useFormContext } from "./providers";
import ResultCard from "@/components/result.Card";
import { css } from "@emotion/react";

export default function Page() {
  const { category, data, setPage } = useFormContext();

  const handlePageChange = () => {
    const toPage = data?.next.slice(data?.next.length - 1);
    if (toPage === "/") {
      setPage(1);
    } else {
      const pageNumber = parseInt(toPage as string);
      setPage(pageNumber);
    }
  };

  return (
    <Container maxWidth="1440px" centerContent>
      {/* HERO SECTION WITH QUERY FORM */}
      <Box as="section" id="section1" width="100%">
        <Box
          bg="white"
          borderRadius="15px"
          paddingY="5vh"
          maxWidth="500px"
          marginX="auto"
        >
          <SearchForm />
        </Box>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            {data ? `${data.count} Total Results` : "Results"}
          </AbsoluteCenter>
        </Box>
      </Box>

      {/* RESULTS SECTION  */}
      <Box as="section" id="section2" width="90%">
        <SimpleGrid minChildWidth="240px" spacing="40px">
          {data?.results.map((category: any) => {
            return <ResultCard key={category.name} />;
          })}
          <Box width={80} height={80}></Box>
        </SimpleGrid>

        {/* Pagination Buttons */}
        <Flex css={{ margin: "25px" }} justifyContent="center">
          {data && data?.previous !== null && (
            <Button
              onClick={handlePageChange}
              variant="outline"
              size="md"
              css={{ border: "1px solid black" }}
            >
              Previous Page
            </Button>
          )}
          {data && data?.previous !== null && data?.next !== null && <p> | </p>}
          {data && data?.next !== null && (
            <Button
              onClick={handlePageChange}
              variant="outline"
              size="md"
              css={{ border: "1px solid black" }}
            >
              Next Page
            </Button>
          )}
        </Flex>
      </Box>
    </Container>
  );
}
