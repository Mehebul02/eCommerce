/* eslint-disable @typescript-eslint/no-explicit-any */
// redux/feature/orderSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Order {
  id: string;
  items: any[];
  customerInfo: {
    fullName: string;
    shippingAddress: string;
    phoneNumber: string;
  };
  total: number;
  date: string;
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
