import axios from "axios";

export const newSurvey = (input) => {
  return axios
    .post("pro_surveys", {
      text: input,
      checked: false,
    })
    .then(() => {
      console.log("make Survey");
    });
};

export const delSurvey = (input_id) => {
  return axios
    .delete(`pro_surveys/${input_id}`, {
      id: input_id,
    })
    .then(() => {
      console.log("delete Survey");
    });
};
