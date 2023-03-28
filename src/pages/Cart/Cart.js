import CartItems from "../../entities/CartItems/CartItems";
import Modal from "../../shared/UI/Modal/Modal";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <CartItems onClose={props.onClose} />
    </Modal>
  );
};

export default Cart;
