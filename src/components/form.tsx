"use client";

import { useFormContext } from "@/app/providers";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

export default function SearchForm() {
  const { query, setQuery, category, setCategory } = useFormContext();

  function handleSearch(term: string) {
    setQuery(term);
  }

  function handleCategorySelection(category: string) {
    setCategory(category);
  }

  return (
    <Flex gap={4} align="stretch" padding={5} flexWrap="wrap">
      <FormControl>
        <FormLabel>Categories</FormLabel>
        <Select
          placeholder="Select Category"
          onChange={(e) => {
            handleCategorySelection(e.target.value);
          }}
        >
          <option value="films">Films</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Search Database</FormLabel>
        <Input
          type="text"
          value={query}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </FormControl>
    </Flex>
  );
}
