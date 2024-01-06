import { createSlice } from "@reduxjs/toolkit"; 
import { createPayments, listPayments } from "./PaymentListAction";

export const PaymentListSlice = createSlice({
  name: "PaymentList",
  initialState: {
    payments: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(listPayments.pending, (state) => {
        state.loading = true;
        state.error =false
      })
      .addCase(listPayments.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.payments = action.payload;
      })
      .addCase(listPayments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      builder
        .addCase(createPayments.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createPayments.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.payments.push(action.payload);
        })
        .addCase(createPayments.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});

export default PaymentListSlice.reducer;
