import React from "react";
import queryString from "query-string";

const About = ({ location, match }) => {
  const query = queryString.parse(location.search);
  //   console.log(query);
  const detail = query.detail === "true";
  return (
    <div>
      <h2>About {match.params.name}</h2>
      {detail && "detail: 블라 블라 ~~"}
    </div>
  );
};

export default About;

// 여기서 url 쿼리 값들은 모두 String 이다.
