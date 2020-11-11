import styled from "styled-components";

const Wrapper = styled.div`
  .survey-item {
    padding: 1rem;
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    cursor: pointer;
    transition: all 0.15s;
    user-select: none;
  }

  .survey-item:hover {
    background: #e3fafc;
  }

  /* survey-item 에 마우스가 있을때만 .remove 보이기 */
  .survey-item:hover .remove {
    opacity: 1;
  }

  /* survey-item 사이에 윗 테두리 */
  .survey-item + .survey-item {
    border-top: 1px solid #f1f3f5;
  }

  .remove {
    margin-right: 1rem;
    color: #e64980;
    font-weight: 800;
    opacity: 0;
    font-size: 1.5em;
  }

  .survey-text {
    flex: 1; /* 체크, 엑스를 제외한 공간 다 채우기 */
    word-break: break-all;
  }

  .checked {
    text-decoration: line-through;
    color: #adb5bd;
  }

  .check-mark {
    font-size: 1.5rem;
    line-height: 1rem;
    margin-left: 1rem;
    color: #3bc9db;
    font-weight: 800;
  }
`;
export default Wrapper;
