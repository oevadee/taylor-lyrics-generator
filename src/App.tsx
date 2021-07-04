import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  useDisclosure,
  Link,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CustomTable, LyricsAdder } from "./components";
import "./styles/scrollbar.scss";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({
    id: "test",
  });
  const [albumName, setAlbumName] = useState("");
  const [songName, setSongName] = useState("");

  console.log(albumName);

  return (
    <Box
      background="gray.900"
      h="100vh"
      w="100vw"
      color="white"
      textAlign="center"
      p={5}
      d="flex"
      flexDir="column"
      alignItems="center"
    >
      <Text fontSize="4xl" mb={10}>
        Taylor lyrics generator
      </Text>
      <Tabs
        variant="soft-rounded"
        d="flex"
        flexDir="column"
        alignItems="center"
      >
        <TabList>
          <Tab>Random</Tab>
          <Tab>By album</Tab>
          <Tab>By song</Tab>
        </TabList>
        <TabPanels>
          <TabPanel pt={12} mt={12}>
            <Button mt={1} onClick={() => onOpen()}>
              Gnerate lyrics
            </Button>
          </TabPanel>
          <TabPanel pt={10}>
            <Input
              mb={5}
              placeholder="Enter album name"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
            />
            <Button onClick={() => onOpen()}>Gnerate lyrics</Button>
          </TabPanel>
          <TabPanel pt={10}>
            <Input
              mb={5}
              placeholder="Enter song name"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
            />
            <Button onClick={() => onOpen()}>Gnerate lyrics</Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {isOpen && (
        <LyricsAdder
          albumName={albumName}
          songName={songName}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
      <CustomTable />
      <Text fontSize={16}>
        Credit:{" "}
        <Link
          color="blue.300"
          isExternal
          href="https://github.com/MitanshiKshatriya/taylor-swift-api"
        >
          MitanshiKshatriya <ExternalLinkIcon mx="2px" mb="4px" />
        </Link>
      </Text>
    </Box>
  );
};

export default App;
