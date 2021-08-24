import React, { useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { routes } from "./pages/routes";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage"
import AppContext from "./store/AppContext";
import store from "./store/store";


const App = () => {
  const [token, setToken] = React.useState(null);

  useEffect(() => {
    const token = store.getItem("token");
    token && setToken(token);
  }, [])

  return (
    <AppContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Switch>
          {token ? 
            <Route path="/" exact component={HomePage} />
          :
          <>
            <Route path={routes.welcomepage} exact component={WelcomePage} />
            <Route
              path={routes.forgotPasswordPage}
              exact
              component={ForgotPasswordPage}
            />
          </>
          }
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
    )
};

export default App;