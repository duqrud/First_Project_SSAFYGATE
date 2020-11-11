import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, AppBar, Button } from "@material-ui/core";
import Wrapper from "./styles";

const Menu = () => {
  let history = useHistory();
  const onClickRedirectPathHandler = (name) => (e) => {
    history.push(name);
  };

  return (
    <>
      <Wrapper>
        <AppBar position="fixed" className="appbar">
          <Grid container justify="space-between" alignItems="center">
            {/* LOGO */}
            <Grid item>
              <Typography
                variant="h6"
                className="logo"
                onClick={onClickRedirectPathHandler("/")}
              >
                Home
              </Typography>
            </Grid>

            {/* NAV */}

            <Grid item className="title display-none">
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Button onClick={onClickRedirectPathHandler("/notice")}>
                    공지사항
                  </Button>
                </Grid>

                <Grid item>
                  <Button onClick={onClickRedirectPathHandler("/about")}>
                    About
                  </Button>
                </Grid>

                <Grid item>
                  <Button onClick={onClickRedirectPathHandler("/about/foo")}>
                    About Foo
                  </Button>
                </Grid>

                <Grid item>
                  <Button onClick={onClickRedirectPathHandler("/tab")}>
                    TabTest
                  </Button>
                </Grid>

                <Grid item>
                  <Button onClick={onClickRedirectPathHandler("/survey")}>
                    Survey
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="Menu-login">
              <Grid item>
                <Button onClick={onClickRedirectPathHandler("/login")}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </Wrapper>
    </>
  );
};
export default Menu;
