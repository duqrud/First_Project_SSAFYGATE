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

const NoticeMaker = ({ proId }) => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    pro_id: "",
  });

  const { title, content, pro_id } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
      pro_id: proId,
    };
    console.log(nextForm);
    setForm(nextForm);
  };

  const noticemake = (newNotice) => {
    return axios
      .post("articles/", {
        title: newNotice.title,
        content: newNotice.content,
        pro_id: newNotice.pro_id,
      })
      .then((res) => {
        console.log("Registered");
      })
      .then(
        setForm({
          title: "",
          content: "",
        })
      );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    noticemake(form).then(handleClose);
  };

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

  return (
    <div>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen("paper")}
        >
          공지사항 등록
        </Button>
      </Grid>

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
            placeholder="제목"
            onChange={onChange}
          />
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <TextField
            autoFocus
            margin="dense"
            multiline="true"
            id="content_txt"
            name="content"
            value={content}
            placeholder="내용"
            onChange={onChange}
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={onSubmit} color="primary">
            등록
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NoticeMaker;
