import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

//style
import { Grid, Typography, AppBar, Button } from "@material-ui/core";

import NoticeItem from "./Detail/index";
import NoticeMaker from "./Create/index";

///////////////////////////////////////////////
//burn notice//
////////////////////////////////////////
const Notice = ({ id }) => {
  const [proId, setProId] = useState(id);
  const [notices, setNotice] = useState([]);
  const NoticeGet = async (id) => {
    const res = await fetch(`/articles/${id}`);
    const body = await res.json();
    return body;
  };
  // componentDidMount()
  useEffect(() => {
    setProId(id);
    NoticeGet(id).then((res) => {
      setNotice(res.articles);
    });
  });
  return (
    <div>
      <NoticeMaker proId={proId} />
      {notices
        ? notices.map((notice) => (
            <div>
              <hr />
              <NoticeItem noticedata={notice} proId={proId} />
            </div>
          ))
        : "loading..."}
    </div>
  );
};

export default Notice;
