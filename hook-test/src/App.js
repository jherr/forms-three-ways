import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";
import {
  Button,
  TextField,
  Container,
  CssBaseline,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
} from "@material-ui/core";

const pizzaTypes = [
  {
    name: "Alfredo",
    image: "alfredo.png",
  },
  {
    name: "BBQ Pork",
    image: "bbq_pork.png",
  },
  {
    name: "Beef",
    image: "beef.png",
  },
  {
    name: "Buffalo Chicken",
    image: "buffalo_chicken.png",
  },
  {
    name: "Ham",
    image: "ham.png",
  },
  {
    name: "Kansas City",
    image: "kansas_city.png",
  },
  {
    name: "Mac and Cheese",
    image: "mac_and_cheese.png",
  },
  {
    name: "Meat Eater",
    image: "meat_eater.png",
  },
  {
    name: "Pepperoni",
    image: "pepperoni.png",
  },
  {
    name: "Pepperoni and Sausage",
    image: "pepperoni_sausage.png",
  },
  {
    name: "Vegetarian",
    image: "vegetarian.png",
  },
];

const useStyles = makeStyles({
  textField: {
    marginTop: "1em",
  },
  pizzaImage: {
    width: "100%",
  },
});

function App() {
  const { register, errors, handleSubmit, control, watch, getValues } = useForm(
    {
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: {
        name: "Jack",
        phone: "888-867-5309",
        pizza: "Pepperoni",
      },
    }
  );
  const classes = useStyles();

  return (
    <Container>
      <DevTool control={control} />
      <CssBaseline />
      <Typography variant="h4">
        Your best pies are always at Fry's pizza.
      </Typography>
      <form onSubmit={handleSubmit(() => {})}>
        <TextField
          label="Your name"
          fullWidth
          variant="outlined"
          type="text"
          name="name"
          className={classes.textField}
          error={!!errors.name}
          inputRef={register({ required: true })}
        />
        <TextField
          label="Your phone"
          fullWidth
          variant="outlined"
          type="text"
          name="phone"
          className={classes.textField}
          error={!!errors.phone}
          inputRef={register({ pattern: /^\d\d\d-\d\d\d-\d\d\d\d$/ })}
        />
        <Grid container>
          <Grid item xs={3}>
            <Controller
              as={
                <RadioGroup aria-label="Pizza type">
                  {pizzaTypes.map((pizza) => (
                    <FormControlLabel
                      value={pizza.name}
                      control={<Radio />}
                      label={pizza.name}
                      key={pizza.nam}
                    />
                  ))}
                </RadioGroup>
              }
              name="pizza"
              control={control}
            />
          </Grid>
          <Grid item xs={9}>
            <img
              src={`/pizzas/${
                pizzaTypes.find(({ name }) => name === watch("pizza")).image
              }`}
              className={classes.pizzaImage}
              alt={`${watch("pizza")} image`}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          disabled={!!errors.name || !!errors.phone}
          className={classes.textField}
        >
          Where's the pizzzzzaaaahhhh!
        </Button>
        <div>{JSON.stringify(getValues())}</div>
      </form>
    </Container>
  );
}

export default App;
