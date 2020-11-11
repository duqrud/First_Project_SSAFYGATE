import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import SurveyListTemplate from "../../components/Survey/SurveyListTemplate";
import Form from "../../components//Survey/Surveyform";
import SurveyItemList from "../../components/Survey/SurveyItemList";
import { newSurvey, delSurvey } from "./SurveyFunctions";

const Survey = () => {
  // let history = useHistory();
  const [input, setInput] = useState("");
  const [flag, setFlag] = useState(0);
  const [surveys, setSurveys] = useState([]);

  const callApi = async () => {
    const res = await fetch("/pro_surveys");
    const body = await res.json();
    return body;
  };

  console.log(surveys);
  console.log(flag);

  // var id = surveys.length;

  // componentDidMount
  useEffect(() => {
    callApi().then((res) => {
      setSurveys(res);
    });
  }, [flag]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCreate = () => {
    newSurvey(input).then(() => {
      // history.push("/survey");

      setInput("");
      setFlag(flag + 1);
    });
  };

  const handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === "Enter") {
      handleCreate();
    }
  };
  const handleToggle = (id) => {
    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = surveys.findIndex((survey) => survey.id === id);
    const selected = surveys[index]; // 선택한 객체

    const nextsurveys = [...surveys]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextsurveys[index] = {
      ...selected,
      checked: !selected.checked,
    };
    setSurveys(nextsurveys);
  };
  // 지우기 버튼 누르면
  // 1. survey state 값 변경
  const handleRemove = (id) => {
    setSurveys(surveys.filter((survey) => survey.id !== id));
    delSurvey(id).then(() => {
      setFlag(flag + 1);
    });
    // window.location.reload();
  };
  return (
    <SurveyListTemplate
      form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }
    >
      <SurveyItemList
        surveys={surveys}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </SurveyListTemplate>
  );
};
export default Survey;
