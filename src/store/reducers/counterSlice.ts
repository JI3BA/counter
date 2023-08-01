import {createSlice} from "@reduxjs/toolkit";

interface CartState {
    counter: number,
    isSettings: boolean
}

const initialState: CartState = {
    counter: 0,
    isSettings: false
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        reset: (state) => {
            state.counter = 0
        },
    }
})

export default counterSlice.reducer