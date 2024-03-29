import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import nurseImage from "../assets/img/nurse.png"; // Replace with the path to the nurse image
import balloonBackground from "../assets/img/balloonBackground.png"; // Replace with the path to the background image
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Confetti from "react-confetti";

const useStyles = makeStyles((theme) => ({
  birthdayContainer: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${balloonBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  },
  birthdayHeading: {
    color: "gold",
    margin: theme.spacing(2, 0),
    fontSize: "4rem",
    textShadow: "2px 2px 4px #000",
  },
  birthdayContent: {
    backgroundColor: theme.palette.warning.light,
    display: "inline-block",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    position: "relative", // Allows absolute positioning of the nurse image relative to this div
  },
  nurseImage: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    margin: `${theme.spacing(4)}px auto`,
  },
  birthdayButton: {
    fontSize: "1.5rem",
    color: theme.palette.warning.main,
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: theme.palette.warning.light,
    },
    padding: theme.spacing(2, 4),
    margin: theme.spacing(4, 0),
    borderRadius: "20px",
    fontWeight: "bold",
    boxShadow: theme.shadows[4],
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: "60%", // Adjust width as needed
    maxWidth: "500px", // Maximum width
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  // Add a style for the paragraph inside the modal
  modalParagraph: {
    marginTop: theme.spacing(2),
    textAlign: "center",
  },
}));

function KellyBirthday() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
    setConfettiActive(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setConfettiActive(false);
  };

  // Adjust the Confetti component to be more centered
  const confettiComponent = (
    <Confetti
      width={550}
      height={window.innerHeight}
      numberOfPieces={confettiActive ? 200 : 0}
      recycle={true}
      run={confettiActive}
    />
  );

  const body = (
    <div className={classes.paper}>
      {confettiComponent}
      <img
        src={nurseImage}
        alt="Nurse Celebration"
        className={classes.nurseImage}
      />
      <p className={classes.modalParagraph}>
        I hope you have a wonderful 23rd Birthday my Kelly, I love you sooooooo
        very much and can't wait to celebrate many more with you! ❤️❤️❤️
      </p>
    </div>
  );

  return (
    <div className={classes.birthdayContainer}>
      <h1 className={classes.birthdayHeading}>HAPPY BIRTHDAY KELLY</h1>
      <Button className={classes.birthdayButton} onClick={handleOpen}>
        Click me for a Birthday Treat
      </Button>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        className={classes.modal}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        {body}
      </Modal>
    </div>
  );
}

export default KellyBirthday;
