import React, { useEffect, useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "react-query";
import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setNewLyrics } from "./state/actions/lyricsAction";
import { useDispatch } from "react-redux";

const App = () => {
  const { isLoading, error, data } = useQuery(
    "taylorApi",
    async () => await axios.get("https://taylorswiftapi.herokuapp.com/get")
  );
  const [lyrics, setLyrics] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  console.log(data?.data);

  if (error) return <h1>Error</h1>;

  useEffect(() => {
    if (lyrics) {
      dispatch(setNewLyrics(lyrics));
      history.push("/lyrics-info");
    }
  }, [lyrics]);

  return (
    <Box background="pink.400" h="100vh" color="white" textAlign="center">
      <Text fontSize="3xl" mb={10}>
        Taylor lyrics generator
      </Text>
      <Button
        isLoading={isLoading}
        variant="outline"
        onClick={() => setLyrics(data?.data)}
      >
        Get lyrics
      </Button>
    </Box>
  );
};

export default App;
