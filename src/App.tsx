import React, { useState } from "react";
import { Box, Text, Button, useDisclosure } from "@chakra-ui/react";
import { CustomTable, LyricsAdder } from "./components";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box background="gray.900" h="100vh" color="white" textAlign="center" p={5}>
      <Text fontSize="4xl" mb={10}>
        Taylor lyrics generator
      </Text>
      <Button colorScheme="pink" onClick={() => onOpen()}>
        Gnerate lyrics
      </Button>
      {isOpen && <LyricsAdder isOpen={isOpen} onClose={onClose} />}
      <CustomTable />
    </Box>
  );
};

export default App;
