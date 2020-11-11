import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";

const StudentManagementTemplate = () => {
  const { region, classno } = useParams();
  const [studentsDatas, setStudentsDatas] = useState([]);
  useEffect(() => {
    axios
      .get(`/students/${encodeURIComponent(region)}/${classno}`)
      .then((res) => {
        setStudentsDatas(res.data[0].students);
      });
  }, []);

  return (
    <>
      <h2>
        {studentsDatas
          ? studentsDatas.map((studentsData) => (
              <Typography> {studentsData.name}</Typography>
            ))
          : ""}
      </h2>
    </>
  );
};
const SelectClass = () => {
  let history = useHistory();
  const onClickRedirectPathHandler = (name) => (e) => {
    history.push(name);
  };

  const { region } = useParams();

  return (
    <>
      <Button onClick={onClickRedirectPathHandler(`/stdmgt/${region}/1`)}>
        1반
      </Button>
      <Button onClick={onClickRedirectPathHandler(`/stdmgt/${region}/2`)}>
        2반
      </Button>
      <Button onClick={onClickRedirectPathHandler(`/stdmgt/${region}/3`)}>
        3반
      </Button>
      <Button onClick={onClickRedirectPathHandler(`/stdmgt/${region}/4`)}>
        4반
      </Button>
      <Button onClick={onClickRedirectPathHandler(`/stdmgt/${region}/5`)}>
        5반
      </Button>
    </>
  );
};
const SelectClassTemplate = () => {
  const { classno } = useParams();
  return (
    <>
      {!classno ? (
        <SelectClass />
      ) : (
        <>
          <SelectClass />
          <br />
          <StudentManagementTemplate />
        </>
      )}
    </>
  );
};
const SelectRegion = ({ regionData }) => {
  let history = useHistory();
  const onClickRedirectPathHandler = (name) => (e) => {
    history.push(name);
  };
  return (
    <>
      <Button
        onClick={onClickRedirectPathHandler(`/stdmgt/${regionData.name}`)}
      >
        {regionData.name}
      </Button>
    </>
  );
};
const StudentManagement = () => {
  // 학생관리 클릭 후
  const [regionDatas, setRegionDatas] = useState([]);
  useEffect(() => {
    axios.get("students").then((res) => {
      setRegionDatas(res.data);
    });
  }, []);
  // 지역 클릭 후
  const { region } = useParams();
  return (
    <>
      {regionDatas
        ? regionDatas.map((regionData) => (
            <SelectRegion regionData={regionData} />
          ))
        : ""}
      <br />
      {region ? <SelectClassTemplate /> : ""}
    </>
  );
};

export default StudentManagement;

// 여기서 url 쿼리 값들은 모두 String 이다.
