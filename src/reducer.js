export const getCartTotal = (cart) =>
  //ES6 function
  cart?.reduce((amount, item) => item.price + amount, 0);
//setting initial state of datalayer
export const initialState = {
  cart: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "ADD_TO_CART":
      //add to cart logic
      return { ...state, cart: [...state.cart, action.item] }; //update the state, by adding action item from dispatch to current state.

    case "REMOVE_FROM_CART":
      //remove logic

      let newCart = [...state.cart]; //clone the cart
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        //if item exists in cart, remove it...
        newCart.splice(index, 1);
      } else {
        console.warn("cant remove product");
      }
      return { ...state, cart: newCart };

    default:
      return state;
  }
}

export default reducer;
