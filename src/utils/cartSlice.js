import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items: [],
        price: 0
    },
    reducers : {
        addItem : (state, action)=>{
            state.items.push(action.payload);
            const price = action.payload?.card?.info?.price/100 || action.payload?.card?.info?.defaultPrice/100;
            state.price += price;
        },
        removeItem : (state, action)=>{
            const arr = state.items.filter((val)=>val?.card?.info?.id !== action.payload?.card?.info?.id);
            state.items = arr;
        },
        clearCart : (state, action)=>{
            state.items.length = 0;
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;