import { configureStore } from "@reduxjs/toolkit"
import searchSlice from "../components/SearchBar/autocompleteSlice"

export const store = configureStore({
  reducer: {
    autocomplete: searchSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type of reducer
export type AppDispatch = typeof store.dispatch
