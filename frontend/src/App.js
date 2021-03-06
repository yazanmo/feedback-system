import React, { useState} from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Login from "./components/login/login";
import Signup from "./components/signUp/signUp";
import Home from "./components/Home/index"
import Forma from "./components/Form/Form";
import AllForm from "./components/allform/AllForm"

const App = () => {
  const [homePageSection, setHomePageSection] = useState("");
  
  return (
    <>
      <div className="App">
        <Navigation setHomePageSection={setHomePageSection} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                homePageSection={homePageSection}
                setHomePageSection={setHomePageSection}
              />
            )}
          />         
          <Route exact path="/login" render={() => <Login/>} />
          <Route exact path="/signup" render={() => <Signup/>} />
          <Route exact path="/form" render={() => <Forma/>} />
          <Route exact path="/allform" render={() => <AllForm/>} />
        </Switch>
      </div>
    </>
  );
};

export default App;
