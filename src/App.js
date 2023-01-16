import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setChartIsShown] = useState(false)

  const showCartHandler = () => {
    setChartIsShown(true);
  }

  const hideCartHandler = () => {
    setChartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Menu/>
      </main>
    </CartProvider>
  );
}

export default App;
