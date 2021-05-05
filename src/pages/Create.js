import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

export default function Create() {
  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">
        Create a new Note
      </Typography>
      <Button
        onClick={() => console.log("you clicked me")}
        type="submit"
        variant="contained"
        color="secondary"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
