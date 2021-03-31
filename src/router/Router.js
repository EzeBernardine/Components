import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../pages/landing";
import { theme } from "../config/theme";
import { ThemeProvider } from "styled-components";

const NotFound = () => <h1>Oops not found..</h1>;

const Router = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className="AppRoute">
        <Switch>
          <Route path="/" component={Landing} exact={true} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </ThemeProvider>
);
export default Router;
