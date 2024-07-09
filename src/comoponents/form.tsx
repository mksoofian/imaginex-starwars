import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Flex,
  VStack,
} from "@chakra-ui/react";

export default function SearchForm() {
  return (
    <VStack spacing={4} align="stretch" padding={5}>
      <FormControl>
        <FormLabel>Search Database</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>Categories</FormLabel>
        <Select placeholder="Select Category">
          <option value="films">Films</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
        </Select>
      </FormControl>
    </VStack>
  );
}
