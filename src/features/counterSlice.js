import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ],
}

const counterSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value.map((c) => {
        if (c.id === action.payload) {
          c.value++
        }
        return c
      })
    },
    reset: (state) => {
      state.value = state.value.map((c) => {
        c.value = 0
        return c
      })
    },
    deleteCounter: (state, action) => {
      state.value = state.value.filter((c) => c.id !== action.payload)
    }
  },
})

export const { increment,deleteCounter, reset } = counterSlice.actions

export default counterSlice.reducer