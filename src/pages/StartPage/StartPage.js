import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { dictionary, routes } from "const";
import classes from "./StartPage.module.css";

const StartPage = () => {
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <Button
        color="primary"
        variant="contained"
        onClick={() => history.push(routes.PEOPLE)}
      >
        {dictionary.START}
      </Button>
    </div>
  );
};

export default StartPage;
