import SearchForm from "@/comoponents/form";
import { getData } from "@/lib/data";
import { Link } from "@chakra-ui/next-js";
import { Box, Container } from "@chakra-ui/react";

export default async function Page() {
  return (
    <Container bg="black" maxWidth="1440px" height="100vh" centerContent>
      <section id="section1">
        <Box bg="white" borderRadius="15px">
          <SearchForm />
        </Box>
      </section>
      <section id="section2"> Results to be displayed here</section>
    </Container>
  );
}
