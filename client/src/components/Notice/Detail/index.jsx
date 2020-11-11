import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

//style
import { Grid, Typography, AppBar, Button } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const NoticeItem = ({ noticedata }) => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const [notice, setNotice] = useState(noticedata);

  const noticeDelete = (id) => {
    return axios.delete(`articles/${id}`).then((res) => {
      console.log("Delete");
    });
  };

  const Handledelete = (e) => {
    e.preventDefault();
    noticeDelete(notice.id).then(handleClose);
  };

  const [form, setForm] = useState({ notice });

  const { title, content } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const noticePatch = (id, newNotice) => {
    return axios
      .patch(`articles/${id}`, {
        title: newNotice.title,
        content: newNotice.content,
      })
      .then((res) => {
        console.log("Update");
      });
  };

  const HandlePatch = (e) => {
    e.preventDefault();
    noticePatch(notice.id, form).then(handleClose);
  };

  return (
    <div>
      <Button onClick={handleClickOpen("paper")}>{notice.title}</Button>

      <Dialog
        open={open}
        fullWidth="true"
        maxWidth="md"
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <input
            type="text"
            id="title_txt"
            name="title"
            value={title}
            defaultValue={notice.title}
            onChange={onChange}
          />
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            마지막 수정 날짜 : {notice.updatedAt}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            multiline="true"
            id="content_txt"
            name="content"
            value={content}
            defaultValue={notice.content}
            onChange={onChange}
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={HandlePatch} color="primary">
            수정
          </Button>
          <Button onClick={Handledelete} color="primary">
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NoticeItem;
