import Button from "../../../shared/UI/Button/Button";
import CartIcon from "./CartIcon";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <Button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Ваша корзина</span>
      <span className={classes.badge}>3</span>
    </Button>
  );
};

export default CartButton;
