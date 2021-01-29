import React from "react";
import propTypes from "prop-types";
import { Typography } from "@material-ui/core";
import classes from "./CharacterCard.module.css";

const CharacterCard = ({ character, handleOpen }) => {
  return (
    <div className={classes.card}>
      <Typography
        className={classes.title}
        onClick={() => handleOpen(character)}
        variant="h2"
      >
        {character.name}
      </Typography>
    </div>
  );
};
CharacterCard.propTypes = {
  character: propTypes.shape({
    name: propTypes.string,
  }),
  handleOpen: propTypes.func,
};

export default CharacterCard;
