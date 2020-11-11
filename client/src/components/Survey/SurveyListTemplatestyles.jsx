import styled from "styled-components";

const Wrapper = styled.div`
  .survey-list-template {
    background: white;
    width: 60%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); /* 그림자 */
    margin: 0 auto; /* 페이지 중앙 정렬 */
    margin-top: 4rem;
  }

  .title {
    padding: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    background: #22b8cf;
    color: white;
  }

  .form-wrapper {
    padding: 1rem;
    border-bottom: 1px solid #22b8cf;
  }

  .surveys-wrapper {
    min-height: 5rem;
  }
`;
export default Wrapper;
