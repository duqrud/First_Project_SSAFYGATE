import React from "react";
import Wrapper from "./SurveyItemstyles";

const SurveyItem = ({ text, checked, id, onToggle, onRemove }) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props.checked !== nextProps.checked;
  // }
  return (
    <Wrapper>
      <div className="survey-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation(); // onToggle 이 실행되지 않도록 함
            // e.preventDefault();
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div className={`survey-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {/* {checked && <div className="check-mark">✓</div>} */}
      </div>
    </Wrapper>
  );
};

export default SurveyItem;
