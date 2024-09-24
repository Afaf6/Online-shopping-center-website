
import create from 'zustand';

const useShoppingCartStore = create((set) => ({
    cartItems: [],
    addItemAtCart: (id) => {
        set((state) => ({

                cartItems: [...state.cartItems, { id, quantity: 1 }]

            // const existingItem = state.cartItems.find(item => item.id === id);
            // return existingItem ? existingItem.quantity : 0;
        }));
    },
    increaseQuantityItem: (id) => {
        set((state) => {
            const existingItem = state.cartItems.find(product => product.id === id);
            if (!existingItem) {
                return { cartItems: [...state.cartItems, { id, quantity: 1 }] };
            } else {
                return {
                    cartItems: state.cartItems.map(product =>
                        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
                    ),
                };
            }
        });
    },
    decreaseQuantityItem: (id) => {
        set((state) => {
            const existingItem = state.cartItems.find(product => product.id === id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    return { cartItems: state.cartItems.filter(product => product.id !== id) };
                } else {
                    return {
                        cartItems: state.cartItems.map(product =>
                            product.id === id ? { ...product, quantity: product.quantity - 1 } : product
                        ),
                    };
                }
            }
            return state;
        });
    },
    removeItem: (id) => {
        set((state) => ({
            cartItems: state.cartItems.filter(product => product.id !== id),
        }));
    },
}));

export default useShoppingCartStore;



// import { createContext, useState } from "react";
// import { useParams } from "react-router-dom";

// export const ShoppingCartContext = createContext();

// const ShoppingCart = ({ children }) => {
//     const { id } = useParams();
//     console.log(id);

//     const [cartItems, setCartItems] = useState([]);

//     const AddItemAtCart = (id) => {
//         return cartItems.find((item) => item.id === id)?.quantity || 0;
//     };

//     const increaseQuantityItem = (id) => {
//         setCartItems((currentItems) => {
//             if (currentItems.find(item => item.id === id) == null) {
//                 return [...currentItems, { id, quantity: 1 }];
//             } else {
//                 return currentItems.map((item) => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity + 1 };
//                     } else {
//                         return item;
//                     }
//                 });
//             }
//         });
//     };

//     const decreaseQuantityItem = (id) => {
//         setCartItems((currentItems) => {
//             const item = currentItems.find(item => item.id === id);
//             if (item && item.quantity > 1) {
//                 return currentItems.map((item) => {
//                     if (item.id === id) {
//                         return { ...item, quantity: item.quantity - 1 };
//                     } else {
//                         return item;
//                     }
//                 });
//             } else {
//                 return currentItems.filter((item) => item.id !== id);
//             }
//         });
//     };

//     const removeItem = (id) => {
//         setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
//     };

//     return (
//         <ShoppingCartContext.Provider 
//             value={{ 
//                 cartItems, 
//                 AddItemAtCart, 
//                 increaseQuantityItem, 
//                 decreaseQuantityItem, 
//                 removeItem 
//             }}>
//             {children}
//         </ShoppingCartContext.Provider>
//     );
// }

// export default ShoppingCart;
