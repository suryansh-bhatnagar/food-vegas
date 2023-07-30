import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: { items: [] },
    reducers: {
        addToCart: (state, action) => {

            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
         state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        incrQuantity: (state, action) => {
            state.items = state.items.map((item) => (item.id === action.payload.id) ? { ...item, quantity: item.quantity + 1 } : item)
        },
        decrQuantity: (state, action) => {
            state.items = state.items.map((item) => (item.id === action.payload.id) ? { ...item, quantity: item.quantity - 1 } : item)
        },
        clearCart: (state,) => {
            state.items = [];
        }
    }
});

export const { addToCart, removeFromCart, incrQuantity,decrQuantity,clearCart } = CartSlice.actions;

export default CartSlice.reducer;