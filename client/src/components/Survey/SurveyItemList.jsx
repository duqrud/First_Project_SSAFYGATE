import React from "react";
import SurveyItem from "./SurveyItem";

const SurveyItemList = ({ surveys, onToggle, onRemove }) => {
  const surveyList = surveys.map(({ id, text, checked }) => (
    <SurveyItem
      id={id}
      text={text}
      checked={checked}
      onToggle={onToggle}
      onRemove={onRemove}
      key={id}
    />
  ));
  return <div>{surveyList}</div>;
};

export default SurveyItemList;
