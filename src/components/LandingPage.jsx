import axios from "axios";
import React, { useEffect, useState } from "react";
import { Heading, Box, Text, Stack, useColorModeValue } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { action } from "../Redux/action";

export const LandingPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = ({elem}) => {
    // console.log(elem)
    dispatch(action(elem))
    navigate("/:product")
  }

  return (
    <Box style={{ width: "95%", margin: "auto", marginTop: "50px" }}>
      <Box
        style={{
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gridGap: "25px",
        }}
      >
        {data.map((elem) => (
          <Box
            key={elem.Id}
            // maxW={'270px'}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Box onClick={() => handleClick({elem})}>
              <Stack spacing={0} align={"center"} mb={10} mt={10}>
                <Text color={"gray.500"}>{elem.Menu_Category}</Text>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  {elem.Menu_Items}
                </Heading>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
