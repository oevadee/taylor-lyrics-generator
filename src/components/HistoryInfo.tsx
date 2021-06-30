import React from "react";
import { useSelector } from "react-redux";
import { ICombinedReducers } from "../state/store";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Spinner,
  Text,
} from "@chakra-ui/react";

const HistoryInfo = () => {
  const state = useSelector((state: ICombinedReducers) => state.lyrics.lyrics);

  console.log(state);

  if (!state) return <Spinner />;

  return (
    <Box background="gray.900" h="100vh" color="white" textAlign="center" p={5}>
      <Text fontSize="4xl">Taylor lyrics generator</Text>
      <Box p={10}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Taylor's quote</Th>
              <Th>Song</Th>
              <Th>album</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{state.quote}</Td>
              <Td>{state.song}</Td>
              <Td>{state.album}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default HistoryInfo;
