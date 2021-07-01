import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { setNewLyrics } from "../state/actions/lyricsAction";
import { getImage } from "../utils/getImage";

interface LyricsAdder {
  isOpen: boolean;
  onClose: () => void;
}

const LyricsAdder = ({ isOpen, onClose }: LyricsAdder) => {
  const [newLyrics, setNewLyrics] = useState();
  const { isLoading, error, data, refetch, isPreviousData } = useQuery(
    "taylorApi",
    async () => await axios.get("https://taylorswiftapi.herokuapp.com/get"),
    {
      refetchOnMount: true,
    }
  );

  console.log(isPreviousData);

  console.log(newLyrics);

  useEffect(() => {
    if (data) {
      setNewLyrics(data.data);
    }
  }, [data]);

  if (isLoading || !data || error) return <Spinner />;

  return (
    <Box background="gray.900" h="100vh" color="white" textAlign="center" p={5}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Taylor's lyrics</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              w={100}
              src={getImage(data.data.album)}
              alt={data?.data.album}
              mb={2}
            />
            <Heading>{data?.data.album}</Heading>
            <Text fontSize="xl">{data?.data.song}</Text>
            <Text fontSize="m">{data?.data.quote}</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="pink"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              Fav the lyrics
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box position="relative">
        <Button colorScheme="pink" position="absolute" left="10" top="3">
          Back
        </Button>
        <Text fontSize="4xl">Taylor lyrics generator</Text>
      </Box>
    </Box>
  );
};

export default LyricsAdder;
