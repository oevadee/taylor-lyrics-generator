import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ICombinedReducers } from "../state/store";
import { getImage } from "../utils/getImage";
import { ILyrics } from "../state/types/lyricsTypes";
import { DeleteIcon } from "@chakra-ui/icons";
import { removeFaveLyrics } from "../state/actions/lyricsAction";

const CustomTable = () => {
  const faveLyrics = useSelector(
    (state: ICombinedReducers) => state.lyrics.faveLyrics
  );

  const dispatch = useDispatch();

  const handleLyricsDelete = (uuid: string) => {
    console.log(uuid);
    dispatch(removeFaveLyrics(uuid));
  };

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
            <Tr cursor="pointer" id={lyric.uuid} key={lyric.uuid}>
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
              <Td name={lyric.uuid}>
                <IconButton
                  variant="outline"
                  colorScheme="pink"
                  aria-label="Delete lyrics"
                  icon={<DeleteIcon />}
                  onClick={() => handleLyricsDelete(lyric.uuid)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CustomTable;
