import {useState} from "react";
import CartDetails from "./CartDetails";
import AddButton from "./AddButton";
const ShoppingCart = () => {
    const [cart, setCart] = useState({
    });
    const prices  = {Orange: 0.3, Banana: 0.35, Apple: 0.5};

    //function to calculate the total cost of items in the cart
    const getTotal = () =>{
        //returns an array of a given object's own enumerable property [key, value] pairs
        return Object.entries(cart)
            .reduce((total, [item, quantity]) => {
                return total + prices[item] * quantity;
            }, 0)
            .toFixed(2);
    };

    //function to add an item to the cart.
    const addItem = (item) => {
        setCart((prevCart) => ({
            ...prevCart,
            [item]: (prevCart[item] || 0) + 1,
        }));
    };

    
    return ( 
        <div style={{ padding: "1rem", maxWidth: "400px", margin: "auto"}}>
            <h2
                style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                }}
            >
                Shopping cart
            </h2>

            <div
                style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
            >
                <AddButton 
                    item="Orange"
                    prices={prices}
                    color="orange"
                    addItem={addItem}/>
                <AddButton 
                    item="Banana"
                    prices={prices}
                    color="Yellow"
                    addItem={addItem}/>
                <AddButton 
                    item="Apple"
                    prices={prices}
                    color="Red"
                    addItem={addItem}/>
            </div>
                
            <CartDetails cart={cart} prices={prices} getTotal={getTotal} />
            
        </div>
     );

}
 
export default ShoppingCart;