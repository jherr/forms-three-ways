import React from "react";
import { Form, Field } from "react-final-form";
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

const required = (value) => (value ? undefined : "Required");
const validatePhone = (value) =>
  /^\d\d\d-\d\d\d-\d\d\d\d$/.test(value) ? undefined : "Invalid phone number";

const RadioFormField = ({
  input: { checked, value, name, onChange, ...otherInput },
  meta,
  ...other
}) => (
  <Radio
    {...other}
    name={name}
    value={value}
    checked={checked}
    onChange={onChange}
    inputProps={otherInput}
  />
);

function App() {
  const classes = useStyles();
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4">
        Your best pies are always at Fry's pizza
      </Typography>
      <Form
        onSubmit={() => {}}
        initialValues={{
          name: "Jack",
          phone: "555-867-5309",
          pizza: "Pepperoni",
        }}
        render={({ handleSubmit, values, valid, ...other }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <TextField
                  error={meta.error !== undefined}
                  label="Your name"
                  variant="outlined"
                  fullWidth
                  className={classes.textField}
                  {...input}
                />
              )}
            </Field>
            <Field name="phone" validate={validatePhone}>
              {({ input, meta }) => (
                <TextField
                  variant="outlined"
                  label="Your phone"
                  error={meta.error !== undefined}
                  fullWidth
                  className={classes.textField}
                  {...input}
                />
              )}
            </Field>
            <Grid container>
              <Grid item xs={3}>
                <RadioGroup
                  aria-label="Pizza type"
                  name="pizza"
                  value={values.pizza.name}
                >
                  {pizzaTypes.map((pizza) => (
                    <FormControlLabel
                      value={pizza.name}
                      control={
                        <Field
                          type="radio"
                          name="pizza"
                          value={pizza.name}
                          component={RadioFormField}
                        />
                      }
                      label={pizza.name}
                      key={pizza.name}
                    />
                  ))}
                </RadioGroup>
              </Grid>
              <Grid item xs={9}>
                <img
                  src={`pizzas/${
                    pizzaTypes.find(({ name }) => name === values.pizza).image
                  }`}
                  className={classes.pizzaImage}
                  alt={`${values.pizza} pizza`}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={!valid}
              variant="contained"
              className={classes.textField}
            >
              Where's the Pizzaaaaaahhhh!!!!
            </Button>
            <div>{JSON.stringify({ ...values })}</div>
          </form>
        )}
      ></Form>{" "}
    </Container>
  );
}

export default App;
