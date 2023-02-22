import Meals from "../features/Meals/Meals";
import Cart from "../pages/Cart/Cart";
import Main from "../pages/Main/Main";
import Header from "../widgets/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
      <Cart />
      <Main />
    </>
  );
}

export default App;
