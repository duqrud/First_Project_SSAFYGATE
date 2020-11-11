import React from "react";
import Survey from "../../components/Survey/";

import { Link, Button, Box, Grid, Typography } from "@material-ui/core";

import Wrapper from "./styles";

const SurvPage = () => {
  return (
    <Wrapper>
      <Box bgcolor="white" color="black" padding={4}>
        <Typography variant="h3" gutterBottom>
          설문 항목입니다
        </Typography>
        <Survey />
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Link href="/fin" underline="none">
            <Button variant="contained" color="primary">
              확인
            </Button>
          </Link>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default SurvPage;
