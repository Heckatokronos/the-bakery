import { useState } from "react";
import Cart from "../pages/Cart/Cart";
import Main from "../pages/Main/Main";
import Header from "../widgets/Header/Header";
import CartProvider from "../pages/Cart/Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandlerAction = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandlerAction} />
      <main>
        <Main />
      </main>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
