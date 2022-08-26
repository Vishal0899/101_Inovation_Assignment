import React from "react";
import {
  Heading,
  Box,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux/es/exports";
import "./FavouritePage.css";

export const Favourite = () => {
  const fLData = JSON.parse(localStorage.getItem("favourite")) || [];
  // console.log(fData);
  const fRdata = useSelector((state) => state);
  // console.log(fRdata);
  return (
    <Box id="mainBox">
      <Box>
        <Heading>Favourites</Heading>
      </Box>
      <Box id="showData">
        {fLData?.map((elem) => (
          <Box
            // key={elem.Id}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Box>
              <Stack spacing={0} align={"center"} mb={10} mt={10}>
                <Box onClick={() => handleClick({ elem })}>
                  <Text color={"gray.500"}>{elem.Menu_Category}</Text>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    {elem.Menu_Items}
                  </Heading>
                </Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
