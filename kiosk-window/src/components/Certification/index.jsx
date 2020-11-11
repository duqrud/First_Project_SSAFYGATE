import React, { useState } from "react";

//style
import { Link, Button, Box, Grid, Typography } from "@material-ui/core";
import Wrapper from "./styles";

//data
import dump from "./dump.json";

const Certification = () => {
  const [data, setData] = useState(dump);

  return (
    <Wrapper>
      <Grid container direction="row" justify="center" alignItems="center">
        <div
          style={{
            width: "64px",
            height: "64px",
            background: "yellow",
            border: "2px solid black",
          }}
        />
      </Grid>
    </Wrapper>
  );
};

export default Certification;
