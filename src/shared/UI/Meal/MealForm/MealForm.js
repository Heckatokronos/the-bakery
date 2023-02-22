import Button from "../../Button/Button";

import classes from "./MealForm.module.css";

const MealForm = (props) => {
  return (
    <form className={classes.form}>
      <Button onClick> Добавить в корзину </Button>
    </form>
  );
};

export default MealForm;
