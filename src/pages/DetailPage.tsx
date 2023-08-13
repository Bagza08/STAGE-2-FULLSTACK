import { Grid, GridItem } from "@chakra-ui/react";
import SidebarLeftNew from "../features/sidebar/SidebarLeftNew";
import SidebarRight from "../features/sidebar/SidebarRight";
import ThreadCardDetail from "../features/thread/components/ThreadsCardDetail";

function DetailPage() {
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={3} borderRight={"1px"} borderColor={"grey"}>
          <SidebarLeftNew />
        </GridItem>
        <GridItem colSpan={5}>
          <ThreadCardDetail />
        </GridItem>
        <GridItem colSpan={4} borderLeft={"1px"} borderColor={"grey"}>
          <SidebarRight />
        </GridItem>
      </Grid>
    </>
  );
}

export default DetailPage;
