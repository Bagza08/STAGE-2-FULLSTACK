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
import { Link } from "react-router-dom";
import { IUser } from "../../../interfaces/user";

export interface IThreadCards {
  id?: number;
  user?: IUser;
  posted_at?: string;
  content?: string;
  image?: string;
  likes_count?: number;
  replies_count?: number;
}

export default function ThreadCard(props: IThreadCards) {
  const [showImage, setShowImage] = useState<boolean>(true);

  return (
    <>
      <Card mt={"10px"}>
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar
                objectFit={"cover"}
                name="Segun Adebayo"
                src={props.user?.profile_picture}
              />
              <Box>
                <Heading size="sm">{props.user?.full_name}</Heading>
                <Box>
                  <Text color={"grey"}>
                    @{props.user?.username} &#9679; {props.posted_at}
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
          <Text>{props.content}</Text>
        </CardBody>

        {showImage && (
          <Image
            objectFit="cover"
            src={props.image}
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
            {props.likes_count} Like
          </Button>

          <Link to={"/threaddetail/" + props.id}>
            <Button flex="1" variant="ghost">
              {props.replies_count} Comment
            </Button>
          </Link>
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
  );
}
