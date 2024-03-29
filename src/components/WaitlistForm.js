import React, { useState } from 'react';
import { makeStyles, TextField, Button, MenuItem, Container } from '@material-ui/core';
import Confetti from 'react-confetti';
import { useForm, ValidationError } from '@formspree/react';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const movingOptions = [
  { value: 'today', label: 'Move Today' },
  { value: 'tomorrow', label: 'Move Tomorrow' },
];

function WaitlistForm() {
  const classes = useStyles();
  const [showConfetti, setShowConfetti] = useState(false);
  const [state, handleSubmit] = useForm("xknljonv"); // Replace "yourFormspreeID" with your actual Formspree form ID

  const handleOnSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    handleSubmit(event).then((response) => {
      if (response && response.ok) {
        setShowConfetti(true);
      } else {
        // Handle the error case
        console.error('Form submission failed', response);
        // Optionally, set state to show an error message to the user
      }
    }).catch((error) => {
      // Catch and log any errors that occur during the submission
      console.error('Submission error', error);
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      {showConfetti && <Confetti />}
      <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          select
          label="Moving Preference"
          fullWidth
          variant="outlined"
          margin="normal"
          name="movingPreference"
          defaultValue=""
          helperText="Please select your moving preference"
        >
          {movingOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={state.submitting}
        >
          Sign Up
        </Button>
      </form>
      {state.succeeded && (
        <p>Thank you for joining the waitlist! We will be in touch.</p>
      )}
      <ValidationError errors={state.errors} />
    </Container>
  );
}

export default WaitlistForm;