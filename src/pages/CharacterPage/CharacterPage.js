import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Typography,
  Button,
  CardContent,
  Card,
  CircularProgress,
  CardActions,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { urlSelector } from "store";
import { Api } from "api";
import { dictionary, routes } from "const";
import classes from "./CharacterPage.module.css";

const CharacterPage = () => {
  const url = useSelector(urlSelector);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState(null);
  const [vehicles, setVehickles] = useState([]);
  const [homeworld, setHomeWorld] = useState(null);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    if (url) {
      setLoading(true);
      Api.getDetails(url)
        .then((response) => setCharacter(response.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [url]);

  useEffect(() => {
    if (character) {
      setLoading(true);
      Api.getDetails(character.homeworld)
        .then((response) => setHomeWorld(response.data.name))
        .catch((err) => console.log(err));
      character.vehicles.forEach((vehicle) => {
        Api.getDetails(vehicle).then((response) =>
          setVehickles((state) => state.concat(response.data.name))
        );
      });
      character.starships.forEach((starship) => {
        Api.getDetails(starship).then((response) =>
          setStarships((state) => state.concat(response.data.name))
        );
      });
      setLoading(false);
    }
  }, [character]);

  if (loading) {
    return <CircularProgress size={200} />;
  }
  if (!url) {
    history.push(routes.PEOPLE);
  }

  return (
    <Card className={classes.content}>
      <CardContent>
        <Typography variant="h1">{character?.name}</Typography>
        <Typography variant="body1">{`${dictionary.GENDER} ${character?.gender}`}</Typography>
        <Typography variant="body1">{`${dictionary.BIRTH_YEAR} ${character?.birth_year}`}</Typography>
        <Typography variant="body1">{`${dictionary.HOMEWORLD} ${homeworld}`}</Typography>
        <Typography variant="body1">
          {`${dictionary.VEHICLES} ${vehicles.length !== 0 ? vehicles : "n/a"}`}
        </Typography>
        <Typography variant="body1">
          {`${dictionary.STARSHIPS} ${
            starships.length !== 0 ? starships : "n/a"
          }`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" onClick={() => history.push(routes.PEOPLE)}>
          {dictionary.BACK}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(routes.MAIN)}
        >
          {dictionary.GO_TO_MAIN}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharacterPage;
