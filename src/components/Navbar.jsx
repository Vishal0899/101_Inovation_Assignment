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

export const Navbar = () => {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "left" }}>
          <Text
            // textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"cursive"}
            fontSize={"4xl"}
            color={useColorModeValue("red", "white")}
            fontWeight={"bold"}
            variant={"link"}
            href={"/"}
          >
            FoodKatta
          </Text>
        </Flex>

        <Stack direction={"row"} spacing={6}>
          <Button
            mr={10}
            as={"a"}
            fontSize={"xl"}
            fontWeight={500}
            variant={"link"}
            href={"/"}
            color="black"
          >
            Home
          </Button>
        </Stack>

        <Stack direction={"row"} spacing={6}>
          <Button
            mr={10}
            as={"a"}
            fontSize={"xl"}
            fontWeight={500}
            variant={"link"}
            href={"/favourite"}
            color="black"
          >
            <GrFavorite />
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
