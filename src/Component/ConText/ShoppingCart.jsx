
import { createContext, useState } from "react";


export const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);
     console.log(cartItems);

     function getTotalQuantity() {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    function getTotalPrice(products) {
        return cartItems.reduce((total, item) => {
            const product = products.find((p) => p.id === item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    function addItemAtCart(id) {

        const existingItem = cartItems.find((item) => item.id === id);
        console.log(`Item ID: ${id}, Existing Quantity: ${existingItem ? existingItem.quantity : 0}`);
        return existingItem ? existingItem.quantity : 0;
        
    }

    function increaseQuantityItem(id) {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(item => item.id === id);
            if (existingItem) {
                return currentItems.map(item => 
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...currentItems, { id, quantity: 1 }];
            }
        });
    }
    

    // function increaseQuantityItem(id) {
    //     setCartItems((currentItems) => {
    //         const existingItem = currentItems.find(item => item.id === id);
    //         if (!existingItem) {
    //             return [...currentItems, { id, quantity: 1 }];
    //         } else {
    //             return currentItems.map((item) => {
    //                 if (item.id === id) {
    //                     return { ...item, quantity: item.quantity + 1 };
    //                 }
    //                 return item;
    //             });
    //         }
    //     });
    // }

    function decreaseQuantityItem(id) {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    return currentItems.filter(item => item.id !== id);
                } else {
                    return currentItems.map((item) => {
                        if (item.id === id) {
                            return { ...item, quantity: item.quantity - 1 };
                        }
                        return item;
                    });
                }
            }
            return currentItems;
        });
    }

    function removeItem(id) {
        setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
    }

    return (
        <ShoppingCartContext.Provider value={{ cartItems, addItemAtCart, increaseQuantityItem, decreaseQuantityItem, removeItem, getTotalQuantity, getTotalPrice }}>
            {children}
           
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;