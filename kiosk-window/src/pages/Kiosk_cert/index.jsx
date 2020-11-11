import React from "react";
import Certification from "../../components/Certification/";
//style
import { Link, Button, Box, Grid, Typography } from "@material-ui/core";
import Wrapper from "./styles";

const CertPage = () => {
  return (
    <Wrapper>
      <Box bgcolor="white" color="black" padding={4}>
        <Typography variant="h3" gutterBottom>
          아래 사각형에 맞춰서 명찰을 인식시켜주세요
        </Typography>
        <Certification />
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Link href="/surv" underline="none">
            <Button variant="contained" color="primary">
              확인
            </Button>
          </Link>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default CertPage;
