import { useState } from "react";
import { produce } from "immer";
import { Trash, RefreshCcw, ArrowDownWideNarrow } from "lucide-react";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  const [showCart, setShowCart] = useState(true);
  
  //Function to remove the ShoppingCart
  const removeCart = () => {
    //This will hide the ShoppingCart
    setShowCart(false)
  };

  return(
    <div style={{ padding: "1rem", maxWidth: "400px", margin: "auto", textAlign: "center"}}>
      {/*Button to remove the ShoppingCart */}
      <button onClick={removeCart}> Remove ShoppingCart </button>
      {/*Conditional rendering to either show or not show the ShoppingCart */}
      { showCart && <ShoppingCart /> }
    </div>
  );
};
export default App;
