import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { ICombinedReducers } from "../state/store";
import { getImage } from "../utils/getImage";
import { ILyrics } from "../state/types/lyricsTypes";
import { DeleteIcon } from "@chakra-ui/icons";

const CustomTable = () => {
  const faveLyrics = useSelector(
    (state: ICombinedReducers) => state.lyrics.faveLyrics
  );

  console.log(faveLyrics);

  if (!faveLyrics) return null;

  return (
    <Box p={10}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Taylor's quote</Th>
            <Th>Song</Th>
            <Th>album</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {faveLyrics.map((lyric: ILyrics) => (
            <Tr>
              <Td>
                <Image w={100} src={getImage(lyric.album)} alt={lyric.album} />
              </Td>
              <Td>{lyric.quote}</Td>
              <Td>{lyric.song}</Td>
              <Td>
                {lyric.album === "Fearless"
                  ? `Fearless (Taylor's Version)`
                  : lyric.album}
              </Td>
              <Td>
                <DeleteIcon />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomTable;
