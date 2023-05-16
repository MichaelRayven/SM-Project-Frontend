import { configureStore } from "@reduxjs/toolkit"
import searchSlice from "@/services/search/slice"

export const store = configureStore({
	reducer: {
		"searchSlice": searchSlice
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
