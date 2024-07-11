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
import ResultCard from "@/components/resultCard";

export default function Page() {
  const { data, setPage, category } = useFormContext();

  const handlePageChange = (value: string) => {
    const toPage =
      value === "next"
        ? data?.next.slice(data?.next.length - 1)
        : data?.previous.slice(data?.previous.length - 1);
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
          {/* {category === "films"
            ? data?.results.map((categories: Films, index) => {
                // return categories;
                return <ResultCard key={`${categories.title}+${index}`} />;
              })
            : category === "people"
            ? true
            : category === "planet"
            ? true
            : category === "species"
            ? true
            : category === "starships"
            ? true
            : category === "vehicles"
            ? true
            : null} */}

          {/* {data?.results.map((categories: any, index) => {
            return (
              <ResultCard
                key={`${categories}+${index}`}
              />
            );
          })} */}
          <Box width={80} height={80}></Box>
        </SimpleGrid>

        {/* Pagination Buttons */}
        <Flex css={{ margin: "25px" }} justifyContent="center" gap="20px">
          {data && data?.previous !== null && (
            <Button
              onClick={(e) => handlePageChange(e.currentTarget.value)}
              variant="outline"
              size="md"
              css={{ border: "1px solid black" }}
              value="prev"
            >
              Previous Page
            </Button>
          )}
          {data && data?.next !== null && (
            <Button
              onClick={(e) => handlePageChange(e.currentTarget.value)}
              variant="outline"
              size="md"
              css={{ border: "1px solid black" }}
              value="next"
            >
              Next Page
            </Button>
          )}
        </Flex>
      </Box>
    </Container>
  );
}
