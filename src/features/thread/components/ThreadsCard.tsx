import { Card, CardHeader, CardBody, CardFooter,Box,Flex,Text,Heading,IconButton,Avatar,Image,Button,Input, FormControl } from '@chakra-ui/react'
// import {axios}  from "axios"
import data from "../../../utils/fakedata.json";
import { useState } from 'react';

interface ThreadCard{
    author_pictures? : string,
    author_full_name? : string,
    author_username? : string,
    //user : User
    posted_at? : string,
    content? : string,
    image? : string,
    likes_count? : number,
    replies_count?: number,
}

// interface User{
//     author_pictures : string,
//     author_full_name : string,
//     author_username : string
// }


export default function ThreadCard(props : ThreadCard) {
  
  
  const [alldata] = useState(data)
 

    return(
      <>
      {
        alldata.map((item) => {
          return (
            <Card mt={"10px"} >
            <CardHeader>
              <Flex>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar objectFit={"cover"} name='Segun Adebayo' src={item.author_pictures} />
                  <Box>
                    <Heading size='sm' >{item.author_full_name}</Heading>
                    <Box>
                      <Text color={'grey'}>@{item.author_username} &#9679; {item.posted_at}</Text>
                    </Box>
                  </Box>
                </Flex>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                  //icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
              {item.content}
              </Text>
            </CardBody>
            <Image
              objectFit='cover'
              src={item.image}
              alt='Chakra UI'
            />

            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              <Button flex='1' variant='ghost'>
              {item.likes_count} Like
              </Button>
              <Button flex='1' variant='ghost'>
              {item.replies_count} Comment
              </Button>
              <Button flex='1' variant='ghost'>
                Share
              </Button>
            </CardFooter>
          </Card>
          )
        })
      }
      
      </>


    )
  }
