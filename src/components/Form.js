import React, { useRef } from 'react';
import { fade, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  iconButton: {
    padding: 10,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));


function Form({onSearchInputChange, getUser}) {
  const classes = useStyles();
  const userInput = useRef(null);

  function handleChange(inputValue) {
    onSearchInputChange(inputValue);
  }

  return (
    <>
      <div className="form-container">
        <form className={classes.search} component="form" noValidate autoComplete="off">
          <InputBase
            className={classes.input}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={(event) => { handleChange(event.target.value)}}
            autoFocus={true}
            type="text" 
            name="userInput" 
            id="user-input"
            inputRef={userInput}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={(event) => {
                event.preventDefault();
                getUser()
                userInput.current.value = "";
            }}
          >
            <SearchIcon />
          </IconButton>
        </form>
      </div>
    </>
  );
}

// Form.propTypes = {};

export default Form;
