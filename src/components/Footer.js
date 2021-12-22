import React from "react";
import { Box, Center, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Box bg="gray.100" w="full" py={5}>
        <Center>
          <Text fontWeight="medium">
            Made with {""}
            <Link href="https://chakra-ui.com/" target="_blank" fontWeight="bold" isExternal>
              Chakra UI
            </Link>
          </Text>
        </Center>
      </Box>
    </footer>
  );
};

export default Footer;
