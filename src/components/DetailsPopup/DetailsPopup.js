import React from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core";
import { saveUrl } from "store";
import { dictionary, routes } from "const";

const DetailsPopup = ({ isOpen, handleClose, info }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleDetails = () => {
    history.push(`${routes.PEOPLE}${routes.DETAILS}`);
    dispatch(saveUrl(info.url));
  };
  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogContent>
        <DialogTitle>{`${dictionary.NAME} ${info?.name}`}</DialogTitle>
        <Typography>{`${dictionary.GENDER} ${info?.gender}`}</Typography>
        <Typography>
          {`${dictionary.BIRTH_YEAR} ${info?.birth_year}`}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          {dictionary.CLOSE}
        </Button>
        <Button variant="contained" color="primary" onClick={handleDetails}>
          {dictionary.DETAILS}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
DetailsPopup.propTypes = {
  isOpen: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  info: propTypes.shape({
    name: propTypes.string,
    gender: propTypes.string,
    birth_year: propTypes.string,
  }),
};
export default DetailsPopup;
