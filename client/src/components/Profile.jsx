import React, { useState, useEffect } from "react";
import { Grid, Typography, AppBar, Button } from "@material-ui/core";

import jwt_decode from "jwt-decode";

const Profile = () => {
  const [name, setName] = useState("");
  const [userid, setUserid] = useState("");
  const [region_id, setRegion_id] = useState("");

  useEffect(() => {
    const token = localStorage.usertoken;
    if (token) {
      const decoded = jwt_decode(token);
      setName(decoded.name);
      setUserid(decoded.userid);
      setRegion_id(decoded.region_id);
    }
  }, []);

  const onRegion = (e) => {
    let region = "";
    if (region_id === 1) {
      region = "서울";
    } else if (region_id === 2) {
      region = "대전";
    } else if (region_id === 3) {
      region = "광주";
    } else if (region_id === 4) {
      region = "구미";
    }
    return region;
  };

  return (
    <>
      <Typography>{name}님 환영합니다.</Typography>
    </>
  );
};
export default Profile;
