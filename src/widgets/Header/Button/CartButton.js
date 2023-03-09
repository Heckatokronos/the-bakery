import { useContext } from "react";
import Button from "../../../shared/UI/Button/Button";
import CartIcon from "./CartIcon";
import CartContext from "../../../pages/Cart/Store/CartContext";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Ваша корзина</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
  );
};

export default CartButton;
