import SearchForm from "@/comoponents/form";
import { getData } from "@/lib/data";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";

export default async function Page() {
  return (
    <Container bg="black" maxWidth="1440px" height="100vh" centerContent>
      <section id="section1">
        <Box bg="white" borderRadius="15px">
          <SearchForm />
        </Box>
      </section>
      <section id="section2">
        {" "}
        <h2>Results to be displayed here</h2>
        <SimpleGrid minChildWidth="120px" spacing="40px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </section>
    </Container>
  );
}
