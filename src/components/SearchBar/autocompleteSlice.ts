import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"
import { AutocompleteResult } from "../../types"

// Define a type for the slice state
interface AutocompleteState {
  loading: boolean
  error: string | undefined
  results: AutocompleteResult[]
}

// Define the initial state using that type
const initialState: AutocompleteState = {
  loading: false,
  error: "",
  results: [],
}

export const fetchAutocomplete = createAsyncThunk<AutocompleteResult[]>(
  "autocomplete/fetchResults",
  () => {
    return new Promise<AutocompleteResult[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { title: "Number 1" },
          { title: "Number 2" },
          { title: "Number 3" },
          { title: "Number 4" },
          { title: "Number 5" },
        ] as AutocompleteResult[])
      }, 1000)
    }).then((data) => data)
  }
)

export const autocompleteSlice = createSlice({
  name: "autocomplete",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAutocomplete.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAutocomplete.fulfilled, (state, action) => {
      state.results = action.payload
      state.loading = false
      state.error = ""
    })
    builder.addCase(fetchAutocomplete.rejected, (state, action) => {
      state.results = []
      state.loading = false
      state.error = action.error.message
    })
  },
  reducers: {
    setAutocompleteResults: (
      state,
      action: PayloadAction<AutocompleteResult[]>
    ) => {
      state.results = action.payload
    },
  },
})

export const { setAutocompleteResults } = autocompleteSlice.actions

export const selectAutocomplete = (state: RootState) => state.autocomplete

export default autocompleteSlice.reducer
