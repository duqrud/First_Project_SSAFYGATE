import React, { useState } from "react";

//style
import {
  Link,
  Button,
  Box,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { FormControl, FormLabel } from "@material-ui/core/";
import Wrapper from "./styles";

//data

const Survey = () => {
  const [body_temperature, setTemp] = useState("");
  const [danger, setDanger] = useState("");
  const [body_check, setCheck] = useState("");

  const handleDangerChange = (event) => {
    setDanger(event.target.value);
  };

  const handleChackChange = (event) => {
    setCheck(event.target.value);
  };

  return (
    <Wrapper>
      <Grid>
        <Typography variant="subtitle1">1. 체온측정</Typography>
        <input placeholder="센서를 이용하여 측정해주세요"></input>
        <Typography variant="subtitle1">2. 위험지역을 방문했습니까?</Typography>
        <RadioGroup name="danger" value={danger} onChange={handleDangerChange}>
          <FormControlLabel value="Yes" control={<Radio />} label="네" />
          <FormControlLabel value="No" control={<Radio />} label="아니오" />
        </RadioGroup>
        <Typography variant="subtitle1">3. 몸상태는 어떻습니까?</Typography>
        <RadioGroup
          name="body_check"
          value={body_check}
          onChange={handleChackChange}
        >
          <FormControlLabel value="Good" control={<Radio />} label="좋음" />
          <FormControlLabel value="Bad" control={<Radio />} label="나쁨" />
        </RadioGroup>
      </Grid>
    </Wrapper>
  );
};

export default Survey;
