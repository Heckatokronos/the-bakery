import mealsList from "./DummyMeals";

import classes from "./AvailableMeals.module.css";
import Card from "../../shared/UI/Card/Card";

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
