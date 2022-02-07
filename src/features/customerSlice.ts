import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomersState {
  value: Customer[];
}
interface AddFoodToCustomerPayload {
  id: string;
  food: string;
}
interface Customer {
  id: string;
  name: string;
  food: string[];
}

const initialState: CustomersState = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
