import { Box, Text, Button } from "@chakra-ui/react";
import {
  BsHeart,
  BsHouseDoor,
  BsSearch,
  BsFillPersonFill,
  BsFillDoorOpenFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SidebarLeftNew() {
  return (
    <>
      <Box position={"fixed"} h={"1vh"} w={"22%"} pt={"10px"} px={"50px"}>
        <Text fontWeight={"bold"} fontSize={"40px"} color={"green"}>
          Circle
        </Text>
        <Text
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
          mt={"20px"}
        >
          <BsHouseDoor /> Home
        </Text>
        <Text
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          <BsSearch /> Search
        </Text>
        <Text
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          <BsHeart /> Follows
        </Text>
        <Text
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          <BsFillPersonFill /> Profile
        </Text>
        <Button
          mt={"20px"}
          colorScheme="green"
          borderStyle={"none"}
          color={"white"}
          bg={"green"}
          w={"100%"}
          borderRadius={"20px"}
        >
          Create Post
        </Button>
        <Link to={"/login"}>
          <Text
            onClick={() => {
              localStorage.removeItem("token");
            }}
            cursor={"pointer"}
            mt={"200px"}
            display={"flex"}
            flexDirection={"row"}
            gap={"3"}
            alignItems={"center"}
            fontSize={"20px"}
            color={"grey.900"}
            mb={"20px"}
          >
            <BsFillDoorOpenFill /> Logout
          </Text>
        </Link>
      </Box>
    </>
  );
}
