import React, { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "react-query";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setNewLyrics } from "./state/actions/lyricsAction";
import { useDispatch, useSelector } from "react-redux";
import { ICombinedReducers } from "./state/store";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
  useDisclosure,
} from "@chakra-ui/react";
import { CustomTable, LyricsAdder } from "./components";

const App = () => {
  const [lyrics, setLyrics] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box background="gray.900" h="100vh" color="white" textAlign="center" p={5}>
      <Text fontSize="4xl" mb={10}>
        Taylor lyrics generator
      </Text>
      <Button colorScheme="pink" onClick={onOpen}>
        Gnerate lyrics
      </Button>
      {isOpen && <LyricsAdder isOpen={isOpen} onClose={onClose} />}
      <CustomTable />
    </Box>
  );
};

export default App;
