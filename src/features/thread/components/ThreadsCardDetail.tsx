import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  Avatar,
  Image,
  Button,
} from "@chakra-ui/react";
// import {axios}  from "axios"
import { useState } from "react";
import { useHook } from "../../../hooks/useHook";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ThreadCardDetail() {
  const { detailThreads } = useHook();
  const [showImage, setShowImage] = useState<boolean>(true);

  return detailThreads ? (
    <>
      <Box p={"10px"} mt={"10px"}>
        <Link to={"/"}>
          <Button
            bg={"green"}
            borderStartRadius={"100px"}
            colorScheme="gray"
            color={"white"}
          >
            <BsFillArrowLeftCircleFill />
            <Text ml={"10px"}>Back</Text>
          </Button>
        </Link>
      </Box>
      <Card mt={"10px"}>
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                objectFit={"cover"}
                name="Segun Adebayo"
                src={detailThreads.user?.profile_picture}
              />
              <Box>
                <Heading size="sm">{detailThreads.user?.full_name}</Heading>
                <Box>
                  <Text color={"grey"}>
                    @{detailThreads.user?.username} &#9679;{" "}
                    {detailThreads.posted_at}
                  </Text>
                </Box>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              //icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{detailThreads.content}</Text>
        </CardBody>

        {showImage && (
          <Image
            objectFit="cover"
            src={detailThreads.image}
            onError={() => setShowImage(false)}
            alt="Chakra UI"
          />
        )}

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost">
            {detailThreads.likes_count} Like
          </Button>
          <Button flex="1" variant="ghost">
            {detailThreads.replies_count} Comment
          </Button>
          <Button flex="1" variant="ghost">
            Share
          </Button>
        </CardFooter>
      </Card>
      {/* {
        threads?.map((item) => {
          return (
            <>
            
          </>
          )
        })
      } */}
    </>
  ) : (
    <h1>gagal</h1>
  );
}
