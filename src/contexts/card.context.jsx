// import { createContext, useState } from "react";

// export const CardContext = createContext({
//   isCardOpen: false,
//   setIsCardOpen: () => {},
//   cardItems: [],
//   addItemToCard: () => {},
// });

// const addCardItem = (cardItems, productToAdd) => {
//   const existingCardItem = cardItems.find(
//     (cardItem) => cardItem.id === productToAdd.id
//   );

//   if (existingCardItem) {
//     return cardItems.map((cardItem) => {
//       cardItem.id === productToAdd.id
//         ? { ...cardItem, quantity: cardItem.quantity + 1 }
//         : cardItem;
//     });
//   }

//   return [...cardItems, { ...productToAdd, quantity: 1 }];
// };

// export const CardProvider = ({ children }) => {
//   const [isCardOpen, setIsCardOpen] = useState(false);
//   const [cardItems, setCardItems] = useState([]);

//   const addItemToCard = (productToAdd) => {
//     setCardItems(addCardItem(cardItems, productToAdd));
//   };

//   const value = { isCardOpen, setIsCardOpen, addItemToCard, cardItems };

//   return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
// };

import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
