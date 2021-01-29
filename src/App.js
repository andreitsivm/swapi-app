import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { StartPage, PeoplePage, CharacterPage } from "pages";
import { Container } from "@material-ui/core";
import { routes } from "const";
import "./App.css";

function App() {
  return (
    <Container maxWidth="md" className="app">
      <Router>
        <Route exact path={routes.MAIN} component={StartPage} />
        <Route exact path={routes.PEOPLE} component={PeoplePage} />
        <Route
          exact
          path={`${routes.PEOPLE}${routes.DETAILS}`}
          component={CharacterPage}
        />
      </Router>
    </Container>
  );
}

export default App;
