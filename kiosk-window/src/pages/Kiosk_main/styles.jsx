import styled from "styled-components";
import palette from "../../lib/styles/palette";

//화면 전체
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Wrapper;
