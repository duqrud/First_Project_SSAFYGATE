import React from "react";

//style
import { Link, Button, Box, Grid, Typography } from "@material-ui/core";
import Wrapper from "./styles";

const FinalPage = () => {
  return (
    <Wrapper>
      <Box bgcolor="white" color="black" padding={4}>
        <Typography variant="h3" gutterBottom>
          수고하셨습니다
        </Typography>
        입실하여 출석체크 잊지마세요
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Link href="/">
            <Button variant="contained" color="primary">
              홈으로
            </Button>
          </Link>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default FinalPage;
