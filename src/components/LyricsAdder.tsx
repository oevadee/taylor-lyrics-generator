import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import axios from "axios";
import { getImage } from "../utils/getImage";
import { useDispatch } from "react-redux";
import { addNewFaveLyrics } from "../state/actions/lyricsAction";
import { v4 as uuidv4 } from "uuid";

interface LyricsAdder {
  isOpen: boolean;
  onClose: () => void;
}

const LyricsAdder = ({ isOpen, onClose }: LyricsAdder) => {
  const dispatch = useDispatch();
  const [newLyrics, setNewLyrics] = useState();
  const { isLoading, data, refetch, isFetched, isSuccess } = useQuery(
    "taylorApi",
    async () => await axios.get("https://taylorswiftapi.herokuapp.com/get")
  );

  useEffect(() => {
    if (data) {
      setNewLyrics(data.data);
    }
  }, [data]);

  if (!data) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      {isFetched && (
        <ModalContent>
          <ModalHeader>Taylor's lyrics</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              w={100}
              src={getImage(data.data.album)}
              alt={data.data.album}
              mb={2}
            />
            <Heading>{data?.data.album}</Heading>
            <Text fontSize="xl">{data.data.song}</Text>
            <Text fontSize="m">{data.data.quote}</Text>
          </ModalBody>

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
        </ModalContent>
      )}
    </Modal>
  );
};

export default LyricsAdder;
