import { useContext, useState } from "react";
import CartContext from "../../pages/Cart/Store/CartContext";
import Button from "../../shared/UI/Button/Button";

import classes from "./CartItems.module.css";
import CartItem from "../../shared/UI/CartItem/CartItem";
import Checkout from "../../pages/Cart/Checkout";

const CartItems = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `₽${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-6081b-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <>
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
    </>
  );

  const modalActions = (
    <div className={classes.actions}>
      <Button className={classes["button--alt"]} onClick={props.onClose}>
        Закрыть
      </Button>
      {hasItems && (
        <Button className={classes.button} onClick={orderHandler}>
          Сделать заказ
        </Button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Конечная цена: {totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Отправляю данные заказа...</p>;

  const didSubmitModalContent = (
    <>
      <p>Данные отправлены! Ожидайте обратной связи =)</p>
      <div className={classes.actions}>
        <Button className={classes.button} onClick={props.onClose}>
          Закрыть
        </Button>
      </div>
    </>
  );

  return (
    <>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </>
  );
};

export default CartItems;
