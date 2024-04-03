import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initState: IUiSlice = {}

export const UiSlice = createSlice({
  name: 'ui',
  initialState: initState,
  reducers: {
    loadingPage: (state: IUiSlice, action: PayloadAction<boolean>) => {
      state.loadingHeader = action.payload
      state.loadingPage = action.payload
    },
    loadingHeader: (state: IUiSlice, action: PayloadAction<boolean>) => {
      state.loadingHeader = action.payload
    },
  },
})

export interface IUiSlice {
  loadingHeader?: boolean
  loadingPage?: boolean
}
