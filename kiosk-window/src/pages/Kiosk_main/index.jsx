import React from "react";

//component
import Notice from "../../components/Notice/";

//style
import { Link, Button, Box, Grid, Typography } from "@material-ui/core";

import Wrapper from "./styles";

const MainPage = () => {
  return (
    <Wrapper>
      <Box bgcolor="white" color="black" padding={4}>
        <Typography variant="h3" gutterBottom>
          SSAFY GATE
        </Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Notice />
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Link href="/cert" underline="none">
            <Button variant="contained" color="primary">
              확인
            </Button>
          </Link>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default MainPage;
