import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  StudentManagement,
  Login,
  TabTest,
  NoticePage,
  Register,
  Survey,
} from "pages";
// import { Menu } from "components";
// import Survey from "./pages/Survey";
import { Header } from "components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route path="/stdmgt/:region/:classno" component={StudentManagement} />
        <Route path="/stdmgt/:region" component={StudentManagement} />
        <Route path="/stdmgt" component={StudentManagement} />
        <Route path="/tab" component={TabTest} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/notice" component={NoticePage} />
        <Route path="/survey" component={Survey} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/* 
1. exact 대신 Switch 가능
2. about/:name이 about 보다 위에 있어야 한다.
*/
