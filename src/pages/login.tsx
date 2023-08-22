"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useLogin } from "../hooks/loginHook";
import { useSelector } from "react-redux";
import { RootState } from "../stores/types/rootState";

export default function Login() {
  const { handleLogin, handChange } = useLogin();

  // const auth = useSelector((state: RootState) => state.auth);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login In Here!</Heading>
          <Text fontSize={"3xl"} color={"green"}>
            Circle
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          {/* <Button
            onClick={() => console.log("ini data user dari redux:", auth)}
          >
            LIHAT USER REDUX KLIK DISINI
          </Button> */}
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handChange} name="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handChange} name="password" />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"green"}>Forgot password?</Text>
              </Stack>
              <Button
                onClick={handleLogin}
                borderRadius={"20px"}
                bg={"green"}
                color={"white"}
                _hover={{
                  bg: "green",
                }}
              >
                Login
              </Button>
              <Stack>
                <Text
                  align={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  gap={2}
                >
                  Create Account ?
                  <Link to={"/register"}>
                    <Text color={"green"}>Create</Text>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
