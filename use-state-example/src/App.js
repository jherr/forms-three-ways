import React, { useReducer } from "react";
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

const useStyles = makeStyles({
  textField: {
    marginTop: "1em",
  },
  pizzaImage: {
    width: "100%",
  },
});

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

const validate = (state) => {
  const validName = state.name.trim().length > 0;
  const validPhone = /^\d\d\d-\d\d\d-\d\d\d\d$/.test(state.phone);
  return {
    ...state,
    validName,
    validPhone,
    valid: validName && validPhone,
  };
};

const App = () => {
  const [state, stateReducer] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setName":
          return validate({
            ...state,
            ...action.payload,
          });
        case "setPhone":
          return validate({
            ...state,
            ...action.payload,
          });
        case "setPizza":
          return validate({
            ...state,
            ...action.payload,
          });
        default:
          return state;
      }
    },
    validate({
      name: "Jack",
      phone: "555-867-5309",
      pizza: pizzaTypes.find(({ name }) => name === "Pepperoni"),
    })
  );
  const classes = useStyles();

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4">
        Your best pies are always at Fry's pizza
      </Typography>
      <TextField
        label="Your name"
        error={!state.validName}
        value={state.name}
        onChange={(evt) =>
          stateReducer({
            type: "setName",
            payload: { name: evt.target.value },
          })
        }
        fullWidth
        variant="outlined"
        className={classes.textField}
      />
      <TextField
        label="Your phone number"
        error={!state.validPhone}
        value={state.phone}
        fullWidth
        onChange={(evt) =>
          stateReducer({
            type: "setPhone",
            payload: { phone: evt.target.value },
          })
        }
        className={classes.textField}
        variant="outlined"
      />
      <Grid container>
        <Grid item xs={3}>
          <RadioGroup
            aria-label="Pizza type"
            name="pizza"
            value={state.pizza.name}
            onChange={(evt) =>
              stateReducer({
                type: "setPizza",
                payload: {
                  pizza: pizzaTypes.find(
                    ({ name }) => name === evt.target.value
                  ),
                },
              })
            }
          >
            {pizzaTypes.map((pizza) => (
              <FormControlLabel
                value={pizza.name}
                control={<Radio />}
                label={pizza.name}
                key={pizza.name}
              />
            ))}
          </RadioGroup>
        </Grid>
        <Grid item xs={9}>
          <img
            src={`pizzas/${state.pizza.image}`}
            className={classes.pizzaImage}
            alt={`${state.pizza.name} pizza`}
          />
        </Grid>
      </Grid>
      <Button variant="contained" disabled={!state.valid}>
        Where's the Pizzaaaaaahhhh!!!!
      </Button>
      <div>{JSON.stringify(state)}</div>
    </Container>
  );
};

export default App;
