import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const HistoryInfo = () => {
  return (
    <Box background="pink.400" h="100vh" color="white" textAlign="center">
      <Text fontSize="3xl" mb={10}>
        Taylor lyrics generator
      </Text>
    </Box>
  );
};

export default HistoryInfo;
