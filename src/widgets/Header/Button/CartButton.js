import { useContext, useEffect, useState } from "react";
import Button from "../../../shared/UI/Button/Button";
import CartIcon from "./CartIcon";
import CartContext from "../../../pages/Cart/Store/CartContext";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [btnIsAnimated, setBtnIsAnimated] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsAnimated ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsAnimated(true);

    const timer = setTimeout(() => {
      setBtnIsAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Ваша корзина</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </Button>
  );
};

export default CartButton;
