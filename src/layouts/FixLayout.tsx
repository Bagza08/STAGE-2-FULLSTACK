import {
    CardBody,Card,Image,Stack,  CardFooter , Heading, Text, Divider, ButtonGroup,Button, Grid,GridItem, Box, Avatar, FormControl, Input

  } from '@chakra-ui/react'
import SidebarLeftNew from "../features/sidebar/SidebarLeftNew";
import { useState } from "react";
import data from "../utils/fakedata.json";
import ThreadCard from '../features/thread/components/ThreadsCard';
import SidebarRight from '../features/sidebar/SidebarRight';

function FixLayout() {

  const [thread,] = useState(data)

  console.log(thread)
  
  return(
    <>
    <Grid templateColumns='repeat(12, 1fr)'>
        <GridItem colSpan={3} borderRight={"1px"} borderColor={'grey'}>
        <SidebarLeftNew />
        </GridItem>
        <GridItem colSpan={5} >
        <Box p={"20px"} >
          <Heading size='md' mb={"20px"}>Home</Heading>
          <Box mt={"20px"} display={"flex"} gap={2} alignItems={"center"} flexDirection={"row"}>
            <Avatar objectFit={"cover"} name='Segun Adebayo' src="https://bit.ly/prosper-baba" />
            <FormControl display={"flex"} gap={2} alignItems={"center"} flexDirection={"row"} >
              <Input placeholder='What is happening?!' border={'none'} width={"90%"}/>
              <Button
                colorScheme='green'
                type='submit'
                borderRadius={"20px"}
                bg={"green"}
                color={"white"}
              >
                Post
              </Button>
            </FormControl>
          </Box>
        </Box>
        <ThreadCard />
          {/* {data.map((item,index) => {
                return (
                  <ThreadCard key={index} author_pictures={item.author_pictures} author_full_name={item.author_full_name} author_username={item.author_username} posted_at={item.posted_at} content={item.content} likes_count={item.likes_count} replies_count={item.replies_count} image={item.image}/>
                )
              })} */}
        </GridItem>
        <GridItem colSpan={4} borderLeft={"1px"} borderColor={'grey'}>
          <SidebarRight />
        </GridItem>
    </Grid>
    </>
  )
}


export default FixLayout
