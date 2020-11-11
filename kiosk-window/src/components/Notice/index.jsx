import React, { useState } from "react";

//style
import Wrapper from "./styles";

//data
import dump from "./dump.json";

//아이디에 따른 스위치??
//날짜에 맞는 것만 출력
const Notice = () => {
  const [data, setData] = useState(dump);

  let today = new Date();
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜

  let sysDate = year + "-0" + month + "-" + date;

  return (
    <Wrapper>
      {data.map(
        (notice, index) =>
          notice.updated_at == sysDate && (
            <>
              <p>{notice.title}</p>
              <p>{notice.content}</p>
            </>
          )
      )}
    </Wrapper>
  );
};

export default Notice;
