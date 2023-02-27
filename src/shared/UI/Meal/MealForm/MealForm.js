import Button from "../../Button/Button";
import Input from "../../Input/Input";

import classes from "./MealForm.module.css";

const MealForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Количество"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button onClick> Добавить в корзину </Button>
    </form>
  );
};

export default MealForm;
