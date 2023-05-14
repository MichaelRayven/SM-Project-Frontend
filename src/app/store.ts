import { configureStore } from "@reduxjs/toolkit"
import searchSlice from "../components/Search/SearchSlice"

export const store = configureStore({
	reducer: {
		"searchSlice": searchSlice
	// 	[autocompleteApi.reducerPath]: autocompleteApi.reducer,
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware().concat(autocompleteApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type of reducer
export type AppDispatch = typeof store.dispatch
