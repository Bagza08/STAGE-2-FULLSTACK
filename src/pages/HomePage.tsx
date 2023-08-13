import {
  Heading,
  Button,
  Box,
  Avatar,
  FormControl,
  Input,
} from "@chakra-ui/react";
import ThreadCard from "../features/thread/components/ThreadsCard";
import { useHook } from "../hooks/useHook";
import { Form } from "react-router-dom";

function HomePage() {
  const { thread, fetchCreatePost, formData, handchange } = useHook();

  return (
    <>
      <Box p={"20px"}>
        <Heading size="md" mb={"20px"}>
          Home
        </Heading>
        <Box
          mt={"20px"}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <Avatar
            objectFit={"cover"}
            name="Segun Adebayo"
            src="https://bit.ly/prosper-baba"
          />
          <form onSubmit={fetchCreatePost}>
            <FormControl
              display={"flex"}
              gap={2}
              alignItems={"center"}
              flexDirection={"row"}
            >
              <Input
                onChange={handchange}
                name="content"
                value={formData.content}
                placeholder="What is happening?!"
                border={"none"}
                width={"100%"}
              />
              <Button
                colorScheme="green"
                type="submit"
                borderRadius={"20px"}
                bg={"green"}
                color={"white"}
              >
                Post
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
      {thread.map((item, index) => {
        return (
          <ThreadCard
            id={item.id}
            key={index}
            user={item.user}
            posted_at={item.posted_at}
            content={item.content}
            likes_count={item.likes_count}
            replies_count={item.replies_count}
            image={item.image}
          />
        );
      })}
    </>
  );
}

export default HomePage;
