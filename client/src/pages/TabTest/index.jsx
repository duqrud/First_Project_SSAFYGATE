import React, { useState, useEffect } from "react";
import { Tabs, Tab, Typography, Box, AppBar } from "@material-ui/core";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";
import Wrapper from "./styles";
import axios from "axios";
// https://material-ui.com/components/tabs/

import categoryData from "./category.json";

const StudentItemList = ({ regionData, classData }) => {
  const [studentsDatas, setStudentsDatas] = useState([]);
  useEffect(() => {
    console.log(regionData);
    console.log(classData);
    axios
      .get(
        `/students/${encodeURIComponent(regionData.city_title)}/${
          classData.class_no
        }`
      )
      .then((res) => {
        console.log(res);
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
const useGetCategoryDatas = (url) => {
  const [data, setData] = useState([]);

  /* 서버에서 json 파일 요청*/
  const getDatas = async () => {
    // let respone = [];
    setData(categoryData);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return data;
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabTest = () => {
  const categoryDatas = useGetCategoryDatas("/categoty");
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setValue2(0);
  };

  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <Wrapper>
      <AppBar position="static" className="appbar">
        <Tabs
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          centered
        >
          {categoryDatas.map((categoryData, categoryIndex) => (
            <Tab
              label={categoryData.city_title}
              {...a11yProps(categoryIndex)}
              className="tab"
            />
          ))}
        </Tabs>
      </AppBar>

      {categoryDatas.map((categoryData, categoryIndex) => (
        <TabPanel value={value} index={categoryIndex}>
          <AppBar position="static" color="inherit">
            <Tabs value={value2} onChange={handleChange2} centered>
              {categoryData.city_class.map((classDatas, classIndex) => (
                <Tab
                  label={classDatas.class_title}
                  {...a11yProps(classIndex)}
                  className="tab"
                ></Tab>
              ))}
            </Tabs>
          </AppBar>
          {categoryData.city_class.map((classDatas, classIndex) => (
            <TabPanel value={value2} index={classIndex}>
              <StudentItemList
                regionData={categoryData}
                classData={classDatas}
              />
            </TabPanel>
          ))}
        </TabPanel>
      ))}
    </Wrapper>
  );
};
export default TabTest;
