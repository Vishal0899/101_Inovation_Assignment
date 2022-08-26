import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { GrFavorite } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleFav = () => {
    navigate("/favourite");
  };
  const handleHome = () => {
    navigate("/")
  }
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        // py={{ base: 2 }}
        // px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ md: "left" }}>
          <Button
            fontFamily={"cursive"}
            fontSize={"4xl"}
            color={useColorModeValue("red", "white")}
            fontWeight={"bold"}
            onClick={handleHome}
            bg={"white"}
          >
            FoodKatta
          </Button>
        </Flex>

        <Stack direction={"row"} spacing={6}>
          <Button
            mr={"5%"}
            as={"a"}
            fontSize={"3xl"}
            fontWeight={500}
            onClick={handleFav}
            color="black"
            bg={"white"}
          >
            <GrFavorite />
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
