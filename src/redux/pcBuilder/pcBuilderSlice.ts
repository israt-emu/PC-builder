import {IProduct} from "@/types/products";
import {createSlice} from "@reduxjs/toolkit";
interface ProductState {
  products: IProduct[];
}
const initialState: ProductState = {
  products: [],
};

export const pcBuilderSlice = createSlice({
  name: "pcbuilder",
  initialState,
  reducers: {
    addToBuild: (state, action) => {
      state.products.push(action?.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToBuild} = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
