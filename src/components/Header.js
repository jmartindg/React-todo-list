import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { BiTimeFive } from "react-icons/bi";

const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb={3} mt={10}>
      <Heading as="h1" size="lg">
        Todo List
      </Heading>
      <Box>
        <Flex alignItems="center">
          <BiTimeFive />
          <Text fontSize="md" fontWeight="medium" ml={2}>
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
