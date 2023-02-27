import Button from "../../shared/UI/Button/Button";

import classes from "./CartItems.module.css";

const CartItems = (props) => {
  return (
    <>
      <div className={classes["cart-items"]}></div>
      <div className={classes.total}>
        <span>Конечная цена: {}</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes["button--alt"]} onClick={props.onClose}>
          {" "}
          Закрыть{" "}
        </Button>
        <Button className={classes.button}> Сделать заказ </Button>
      </div>
    </>
  );
};

export default CartItems;
