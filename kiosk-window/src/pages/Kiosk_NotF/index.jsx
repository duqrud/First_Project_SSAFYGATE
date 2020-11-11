import React from "react";
import { Link, Button, Box, Grid, Typography } from "@material-ui/core";
import Wrapper from "./styles";

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Box bgcolor="white" color="black" padding={4}>
        <Typography variant="h3" gutterBottom>
          Not Found Page
        </Typography>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Link href="/" underline="none">
            <Button variant="contained" color="primary">
              홈으로
            </Button>
          </Link>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default NotFoundPage;
