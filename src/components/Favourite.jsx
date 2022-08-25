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

export const Favourite = () => {
  const fData = JSON.parse(localStorage.getItem("favourite")) || [];
  // console.log(fData);
  const fdata = useSelector(state => state);
  console.log(fdata)
  return (
    <Box w={"95%"} m={"auto"} mt={"50px"}>
      <Box>
        <Heading>Favourites</Heading>
      </Box>
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
        style={{
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gridGap: "25px",
          marginTop : "10px"
        }}
      >
        {fData.map((elem) => (
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
