import React, { useEffect } from "react";
import {
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Heading,
  ModalCloseButton,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";
import { getImage } from "../utils/getImage";
import { useDispatch, useSelector } from "react-redux";
import { addNewFaveLyrics } from "../state/actions/lyricsAction";
import { v4 as uuidv4 } from "uuid";
import { ICombinedReducers } from "../state/store";

interface LyricsAdder {
  isOpen: boolean;
  onClose: () => void;
  albumName: string;
  songName: string;
}

const LyricsAdder = ({ isOpen, onClose, albumName, songName }: LyricsAdder) => {
  const dispatch = useDispatch();
  const { isLoading, data, refetch, isFetchedAfterMount } = useQuery(
    "taylorApi",
    async () =>
      await axios.get(
        `https://taylorswiftapi.herokuapp.com/get${
          albumName ? `?album=${albumName.toLowerCase()}` : ""
        }${songName ? `?song=${songName.toLowerCase()}` : ""}`
      ),
    {
      refetchOnWindowFocus: false,
    }
  );
  const faveLyrics = useSelector(
    (state: ICombinedReducers) => state.lyrics.faveLyrics
  );

  console.log(data);

  useEffect(() => {
    if (data) {
      if (faveLyrics.find((x) => x.quote === data.data.quote)) {
        refetch();
      }
    }
  }, [data]);

  const imageSrc = data && getImage(data.data.album);

  if (!data || !imageSrc) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Taylor's lyrics</ModalHeader>
        {isFetchedAfterMount && <ModalCloseButton />}
        <ModalBody>
          {isFetchedAfterMount ? (
            <Image
              boxSize="100px"
              h={100}
              w={100}
              src={imageSrc}
              alt={data.data.album}
              mb={2}
            />
          ) : (
            <Box h={100} w={100} background="rgb(138, 15, 78)"></Box>
          )}
          {isFetchedAfterMount ? (
            <>
              <Heading>{data?.data.album}</Heading>
              <Text fontSize="xl">{data.data.song}</Text>
              <Text fontSize="m">{data.data.quote}</Text>
            </>
          ) : (
            <Heading>Loading...</Heading>
          )}
        </ModalBody>
        {isFetchedAfterMount && (
          <ModalFooter d="flex" justifyContent="space-between">
            <Button
              isLoading={isLoading}
              colorScheme="pink"
              variant="outline"
              mr={3}
              onClick={() => {
                refetch();
              }}
            >
              Next lyrics
            </Button>
            <Button
              isLoading={isLoading}
              colorScheme="pink"
              mr={3}
              onClick={() => {
                const newLyrics = {
                  uuid: uuidv4(),
                  ...data.data,
                };
                dispatch(addNewFaveLyrics(newLyrics));
                onClose();
              }}
            >
              Fave the lyrics
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default LyricsAdder;
