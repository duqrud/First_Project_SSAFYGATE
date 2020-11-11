import React, { useState, useEffect } from "react";
import { Notice } from "components";

import jwt_decode from "jwt-decode";

//style
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Wrapper from "./styles";
import { Container } from "@material-ui/core";

const NoticePage = ({ history }) => {
  //const category = match.params.category || "all";
  const [id, setID] = useState("");

  useEffect(() => {
    const token = localStorage.usertoken;
    if (token) {
      const decoded = jwt_decode(token);
      setID(decoded.id);
    } else {
      alert("로그인해주세요!!");
      history.push("/");
    }
  }, []);

  return (
    <Wrapper>
      <Container fixed>
        <Paper variant="outlined">
          <Notice id={id} />
        </Paper>
      </Container>
    </Wrapper>
  );
};

export default NoticePage;
