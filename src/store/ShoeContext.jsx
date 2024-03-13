import { createContext, useState } from "react";

export const shoeContext = createContext({
  items: [],
  addToCart: () => {},
  updateCart: () => {},
});

export const ShoeContextProvider = ({ children }) => {
  const [shoes, setShoes] = useState({
    items: [],
  });

  function addToCart(data) {
    const myData = {
      ...data,
      quantity: 1,
      totalPrice: data.price,
    };
    setShoes((prevState) => {
      const existingShoeItem = [...prevState.items];
      const checkIfCreated = existingShoeItem.some(
        (item) => item.id === data.id
      );
      if (checkIfCreated) return { items: [...existingShoeItem] };
      return {
        ...prevState,
        items: [myData, ...prevState.items],
      };
    });
  }

  function updateCart(data, action) {
    const { id, price } = data;
    setShoes((prevState) => {
      let findMatch = prevState.items.map((item) => {
        if (item.id === id) {
          let totalQuantity = item.quantity;
          if (action === "+") {
            totalQuantity++;
          } else if (action === "-") {
            totalQuantity--;
            if (totalQuantity < 0) totalQuantity = 0;
          }

          let totalPriceOfItems = price * totalQuantity;

          return {
            ...item,
            totalPrice: totalPriceOfItems,
            quantity: totalQuantity,
          };
        }
        return item;
      });

      findMatch = findMatch.filter((item) => item.quantity > 0);

      return {
        ...prevState,
        items: findMatch,
      };
    });
  }

  // console.log(shoes)

  // function updateCart (data){
  //   const { id, price, quantity } = data;
  //   setShoes(prevState => {
  //       const updatedItems = prevState.items.map(item => {
  //           if (item.id === id) {
  //               // Increment quantity by 1 for the specified item
  //               const newQuantity = item.quantity + 1;
  //               // Calculate the new total price by multiplying the price with the new quantity
  //               const newTotalPrice = price * newQuantity;
  //               // Return the updated item object
  //               return {
  //                   ...item,
  //                   quantity: newQuantity,
  //                   totalPrice: newTotalPrice
  //               };
  //           }
  //           return item; // Return unchanged items
  //       });
  //       return {
  //           ...prevState,
  //           items: updatedItems
  //       };
  //   });
  //   // const {id, price, quantity} =  data;
  //   // setShoes(prevState => {
  //   //   const exactItem = prevState.items.filter((item)=> item.id === id);
  //   //   const count = exactItem[0].quantity + 1

  //   //   return {
  //   //     ...prevState,
  //   //     items: [{id, price, count}]
  //   //   }
  //   // })
  // }

  // console.log(shoes)
  return (
    <shoeContext.Provider value={{ items: shoes.items, addToCart, updateCart }}>
      {children}
    </shoeContext.Provider>
  );
};

// function updateCart(data, action) {
//   const { id, price, quantity } = data;
//   setShoes((prevState) => {
//     let updatedItems = prevState.items.map((item) => {
//       if (item.id === id) {
//         let newQuantity = item.quantity;
//         if (action === "+") {
//           newQuantity += 1; // Increase the quantity by 1 if the action is 'increase'
//         } else if (action === "-") {
//           newQuantity -= 1; // Decrease the quantity by 1 if the action is 'decrease'
//           if (newQuantity < 0) newQuantity = 0; // Ensure the quantity doesn't go below 0
//         }
//         const newTotalPrice = price * newQuantity;
//         return {
//           ...item,
//           quantity: newQuantity,
//           totalPrice: newTotalPrice,
//         };
//       }
//       return item;
//     });

//     // Filter out the item if its quantity becomes zero
//     updatedItems = updatedItems.filter((item) => item.quantity > 0);

//     return {
//       ...prevState,
//       items: updatedItems,
//     };
//   });
// }
