import React, { component } from "react";
import { Link, Switch, Route } from "react-router-dom";

import Main from "./pages/Kiosk_main";
import Cert from "./pages/Kiosk_cert";
import Surv from "./pages/Kiosk_surv";
import Fin from "./pages/Kiosk_fin";
import NotFound from "./pages/Kiosk_NotF";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/cert" component={Cert} />
        <Route path="/surv" component={Surv} />
        <Route path="/fin" component={Fin} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
