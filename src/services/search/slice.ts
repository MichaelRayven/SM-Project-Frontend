import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const sleep = (ms: number) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchAutocompleteResultsByTitle = createAsyncThunk(
	"autocomplete/fetchByTitle",
	async (title: string, thunkAPI): Promise<string[]> => {
		await sleep(1000)
		const response = [
			"Hello",
			"Title"
		].filter(val => val.match(new RegExp(title, "gi")))

		return response
	}
)

interface AutocompleteState {
  results: string[]
  loading: "idle" | "pending" | "succeeded" | "failed"
}

const initialState = {
	results: [],
	loading: "idle",
} as AutocompleteState

// Then, handle actions in your reducers:
const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchAutocompleteResultsByTitle.fulfilled, (state, action) => {
			state.results.push(...action.payload)
			state.loading = "succeeded"
		})

		builder.addCase(fetchAutocompleteResultsByTitle.pending, (state, action) => {
			state.results = []
			state.loading = "pending"
		})

		builder.addCase(fetchAutocompleteResultsByTitle.rejected, (state, action) => {
			state.results = []
			state.loading = "failed"
		})
	},
})

export default searchSlice.reducer
