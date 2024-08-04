import { createSlice } from '@reduxjs/toolkit'

const bucketSlice = createSlice({
  name: 'bucket',
  initialState: {
    data: [],
  },
  reducers: {
    add: (state, action) => {
      if (Array.isArray(state.data)) {
        state.data.push(action.payload)
      }
    },
    remove: (state, action) => {
      state.data = state.data.filter(
        (product, index) => index !== action.payload
      )
    },
    removeAll: (state) => {
      state.data = []
    },
    addNewProducts: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { add, remove, removeAll, addNewProducts } = bucketSlice.actions

export default bucketSlice.reducer
