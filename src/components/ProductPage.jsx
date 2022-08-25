import React from "react";
import { useSelector } from "react-redux/es/exports";

export const ProductPage = () => {
  const data = useSelector((state) => state.state);
  console.log(data);
  return (
    <div>
      <SocialProfileWithImage />
    </div>
  );
};

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SocialProfileWithImage() {
  return (
    <Center py={6}>
      <Box
        maxW={"270px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              John Doe
            </Heading>
            <Text color={"gray.500"}>Frontend Developer</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
