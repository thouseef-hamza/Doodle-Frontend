    import { createSlice } from "@reduxjs/toolkit";
    import { listPayments } from "./PaymentListAction";

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
            state.error = false;
          })
          .addCase(listPayments.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.batches = action.payload;
          })
          .addCase(listPayments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
      },
    });

    export default PaymentListSlice.reducer;
