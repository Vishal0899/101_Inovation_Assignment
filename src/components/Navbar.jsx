import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

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
            fontSize={"3xl"}
            color={useColorModeValue("gray.800", "white")}
            variant={"link"}
            href={"/"}
          >
            FoodKatta
          </Text>
        </Flex>

        <Stack
          // flex={{ base: 1, md: 0 }}
          // justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            mr={10}
            as={"a"}
            fontSize={"lg"}
            fontWeight={500}
            variant={"link"}
            href={"/"}
          >
            Home
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
