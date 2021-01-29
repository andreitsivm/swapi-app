import { DetailsPopup, CharacterCard } from "components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCharacters, charactersSelector } from "store";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import { dictionary, routes } from "const";

const PeoplePage = () => {
  const history = useHistory();
  const [isOpen, setOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);

  const handlePopupOpen = (info) => {
    setOpen(true);
    setInfo(info);
  };

  const handlePopupClose = () => {
    setOpen(false);
    setInfo(null);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCharacters());
    setLoading(false);
  }, []);

  if (loading) {
    return <CircularProgress size={200} />;
  }
  return (
    <Grid container spacing={3} direction="column" style={{ paddingTop: 20 }}>
      <DetailsPopup
        handleClose={handlePopupClose}
        info={info}
        isOpen={isOpen}
      />
      <Grid container item justify="flex-end" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push(routes.MAIN)}
          >
            {dictionary.GO_TO_MAIN}
          </Button>
        </Grid>
      </Grid>

      {characters?.map((character, index) => (
        <Grid key={`${character.name}-${index}`} item xs={12} sm={12}>
          <CharacterCard character={character} handleOpen={handlePopupOpen} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PeoplePage;
