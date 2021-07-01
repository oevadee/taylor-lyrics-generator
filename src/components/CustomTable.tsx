import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ICombinedReducers } from "../state/store";
import { getImage } from "../utils/getImage";

const CustomTable = () => {
  const state = useSelector((state: ICombinedReducers) => state.lyrics.lyrics);

  if (!state) return null;

  return (
    <Box p={10}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Taylor's quote</Th>
            <Th>Song</Th>
            <Th>album</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Image w={100} src={getImage(state.album)} alt={state.album} />
            </Td>
            <Td>{state.quote}</Td>
            <Td>{state.song}</Td>
            <Td>
              {state.album === "Fearless"
                ? `Fearless (Taylor's Version)`
                : state.album}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomTable;
