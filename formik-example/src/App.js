import React from "react";
import { Formik } from "formik";
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

const App = () => {
  const classes = useStyles();
  return (
    <Container>
      <CssBaseline />
      <Typography variant="h4">
        Your best pies are always at Fry's pizza
      </Typography>
      <Formik
        initialValues={{
          name: "Jack",
          phone: "555-867-5309",
          pizza: "Pepperoni",
        }}
        validate={(values) => {
          const errors = {};
          if (values.name.trim().length < 1) {
            errors.name = "Required";
          }
          if (!/^\d\d\d-\d\d\d-\d\d\d\d$/.test(values.phone)) {
            errors.phone = "Valid phone number required";
          }
          console.log(values);
          return errors;
        }}
        onSubmit={() => {}}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              error={errors.name && touched.name}
              label="Your name"
              variant="outlined"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              fullWidth
              className={classes.textField}
            />
            <TextField
              variant="outlined"
              label="Your phone number"
              error={errors.phone && touched.phone}
              type="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              fullWidth
              className={classes.textField}
            />
            <Grid container>
              <Grid item xs={3}>
                <RadioGroup
                  aria-label="Pizza type"
                  name="pizza"
                  value={values.pizza}
                  onChange={(evt) =>
                    setFieldValue(
                      "pizza",
                      pizzaTypes.find(({ name }) => name === evt.target.value)
                        .name
                    )
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
              disabled={!errors.name && !errors.phone}
              variant="contained"
              className={classes.textField}
            >
              Where's the Pizzaaaaaahhhh!!!!
            </Button>
            <div>{JSON.stringify({ ...values, ...errors })}</div>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default App;
