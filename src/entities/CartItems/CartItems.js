import { useContext } from "react";
import CartContext from "../../pages/Cart/Store/CartContext";
import Button from "../../shared/UI/Button/Button";

import classes from "./CartItems.module.css";
import CartItem from "../../shared/UI/CartItem/CartItem";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `₽${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};

  return (
    <>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Конечная цена: {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes["button--alt"]} onClick={props.onClose}>
          Закрыть
        </Button>
        {hasItems && (
          <Button className={classes.button}> Сделать заказ </Button>
        )}
      </div>
    </>
  );
};

export default CartItems;
