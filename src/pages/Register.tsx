"use client";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../hooks/registerHook";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegister, handchange } = useRegister();
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={5} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Create Account
          </Heading>
          <Text fontSize={"3xl"} color={"green"}>
            Circle
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w={"350px"}
        >
          <Stack spacing={4}>
            {/* <HStack>
              <Box></Box>
            </HStack> */}
            <FormControl id="firstName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" onChange={handchange} name="full_name" />
            </FormControl>
            <FormControl id="firstName" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" onChange={handchange} name="username" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handchange} name="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  onChange={handchange}
                  name="password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleRegister}
                borderRadius={"30px"}
                loadingText="Submitting"
                size="lg"
                bg={"green"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                Create Account
              </Button>
            </Stack>
            <Stack
              pt={2}
              align={"center"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              gap={2}
            >
              <Text align={"center"}>Already a user?</Text>
              <Link to={"/login"}>
                <Text color={"green"}>Login</Text>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
