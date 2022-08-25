import React, { useEffect, useState } from "react";
import {
  Heading,
  Box,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { favouriteAction, getData, productAction } from "../Redux/action";
import { useSelector } from "react-redux/es/exports";
import "./LandingPage.css";

export const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);
  console.log(data);

  useEffect(() => {
    getData({ dispatch });
  }, []);

  const handleClick = (elem) => {
    dispatch(productAction(elem));
    navigate("/:product");
  };

  const favoItems = JSON.parse(localStorage.getItem("favourite")) || [];

  const handleFavourite = (elem) => {
    console.log(elem);
    dispatch(favouriteAction(elem));
    favoItems.push(elem);
    localStorage.setItem("favourite", JSON.stringify(favoItems));
  };

  //   const handleChange = (e) => {
  //     setData(data.sort((a, b) => (a.Menu_Items > b.Menu_Items ? 1 : -1)));
  //     // console.log(data);
  //   };

  return (
    <Box id="mainBox">
      <Box>
        <Flex>
          {/* <Box >Menu_Category : </Box>
          <Box border={"1px solid black"}>
            <select onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Regular Menu">Regular Menu</option>
              <option value="Breakfast Menu">Breakfast Menu</option>
            </select>
          </Box> */}
          {/* <Button onClick={handleChange}>Sort Items</Button> */}
        </Flex>
      </Box>
      <Box
        id="showData"
      >
        {data.map((elem) => (
          <Box
            key={elem.Id}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
            id="cards"
          >
            <Box>
              <Stack spacing={10} align={"center"} mb={10} mt={10}>
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
                <Box>
                  <Button
                    w={"full"}
                    size={"md"}
                    py={"7"}
                    bg={useColorModeValue("gray.900", "gray.50")}
                    color={useColorModeValue("white", "gray.900")}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translatey(5px)",
                      bg: "red",
                    }}
                    onClick={() => handleFavourite(elem)}
                  >
                    Add to favourite
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
