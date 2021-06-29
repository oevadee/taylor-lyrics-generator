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

// api endpoint
//

const App = () => {
  const { isLoading, error, data } = useQuery(
    "taylorApi",
    async () => await axios.get("https://taylorswiftapi.herokuapp.com/get")
  );
  const [lyrics, setLyrics] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  if (error) return <h1>Error</h1>;

  console.log(error);

  console.log(lyrics);

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
        onClick={() => setLyrics(data?.data.quote)}
      >
        Get lyrics
      </Button>
    </Box>
  );
};

export default App;
