import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      //state.quantity += 1;
      //state.products.push(action.payload);
      //state.total += action.payload.price * action.payload.quantity;
        const product = action.payload;
        //const existingProduct = state.products.find(p => p._id === product._id);
        const existingProduct = state.products.find(p => 
          JSON.stringify(p) === JSON.stringify(product)
        );
        if (existingProduct) {
          existingProduct.quantity += 1;
          //state.quantity += 1;
          state.total += existingProduct.price;
        } else {
          product.quantity = action.payload.quantity;
          state.products.push(product);
          state.quantity += 1;
          state.total = state.total + (action.payload.price * action.payload.quantity);
        }
      },
  

    removeProduct: (state, action) => {
      //state.products = state.products.filter((product) => product._id !== action.payload._id)
      //const index1 = state.products.findIndex(product => product === action.payload);
      //console.log(index1);
      //let index = state.products.findIndex(product => product._id === action.payload._id);
      //console.log(index);
      //state.products.splice(index1, 1);
      //state.quantity -= 1;
    //  state.total -= action.payload.price * action.payload.quantity;
    const index = state.products.findIndex(product => product === action.payload);
    if (index === -1) {
      state.products.splice(index, 1);
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
    }
    },

    reduceQntity: (state, action) => {
      const product = action.payload;
     // const existingProduct = state.products.find(p => p._id === product._id);
     const existingProduct = state.products.find(p => 
      JSON.stringify(p) === JSON.stringify(product)); 
     if (existingProduct) {
        existingProduct.quantity -= 1;
        //state.quantity -= 1;
        state.total -= existingProduct.price;
        if (existingProduct.quantity === 0) {
          state.products = state.products.filter(p => p !== product);
        }
      }
    },
  


    logoutCart:(state) => {
      //const { products } = state;  
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },

    clearCart: (state) =>{
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },

    updateProduct: (state, action) => {
      const product = action.payload;
      console.log(product);
      //product.quantity += 1;
      console.log(product);
    }
  },
});
export const { addProduct, removeProduct, logoutCart, clearCart, reduceQntity} = cartSlice.actions;
export default cartSlice.reducer;
