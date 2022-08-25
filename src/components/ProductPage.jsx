import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  Box,
  Container,
  Stack,
  Text,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { favouriteAction } from "../Redux/action";

export const ProductPage = () => {
  const data = useSelector((state) => state.product.elem);
  console.log(data);
  const dispatch = useDispatch();

  const favoItems = JSON.parse(localStorage.getItem("favourite")) || [];

  const handleFavourite = () => {
    console.log(data);
    dispatch(favouriteAction(data));
    favoItems.push(data);
    localStorage.setItem("favourite", JSON.stringify(favoItems));
  };

  return (
    <div>
      <Container
        maxW={"4xl"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        mt={10}
        pt={10}
        pb={10}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <Box>
              <Text
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                fontSize={"3xl"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>
              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Menu_Category:
                  </Text>{" "}
                  {data.Menu_Category}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Menu_Items:
                  </Text>{" "}
                  {data.Menu_Items}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Per_Serve_Size:
                  </Text>{" "}
                  {data.Per_Serve_Size}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Energy_kCal:
                  </Text>{" "}
                  {data.Energy_kCal}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Protein_g:
                  </Text>{" "}
                  {data.Protein_g}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Total_fat_g:
                  </Text>{" "}
                  {data.Total_fat_g}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Sat_Fat_g:
                  </Text>{" "}
                  {data.Sat_Fat_g}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Trans_fat_g:
                  </Text>{" "}
                  {data.Trans_fat_g}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Cholesterols_mg:
                  </Text>{" "}
                  {data.Cholesterols_mg}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Total_carbohydrate_g:
                  </Text>{" "}
                  {data.Total_carbohydrate_g}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Total_Sugars_g:
                  </Text>{" "}
                  {data.Total_Sugars_g}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Added_Sugars_g:
                  </Text>{" "}
                  {data.Added_Sugars_g}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Sodium_mg:
                  </Text>{" "}
                  {data.Sodium_mg}{" "}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
            }}
            onClick={handleFavourite}
          >
            Add to favorite
          </Button>
        </Stack>
      </Container>
    </div>
  );
};
