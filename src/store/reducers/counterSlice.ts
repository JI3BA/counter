import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
    counter: number,
    isSettings: boolean,
    minValue: number,
    maxValue: number,
}

const initialState: CounterState = {
    counter: 0,
    isSettings: false,
    minValue: 0,
    maxValue: 0
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: state => {
            state.counter += 1
        },
        reset: state => {
            state.counter = 0
        },
        isSetting: state => {
            state.isSettings = !state.isSettings
        },
        increaseMinValue: state => {
            state.minValue += 1
        },
        decreaseMinValue: state => {
            state.minValue -= 1
        },
        increaseMaxValue: state => {
            state.maxValue += 1
        },
        decreaseMaxValue: state => {
            state.maxValue += 1
        },
        changeMinValue: (state, action: PayloadAction<string>) => {
            state.minValue = Number(action.payload)
        },
        changeMaxValue: (state, action: PayloadAction<string>) => {
            state.maxValue = Number(action.payload)
        }
    }
})

export default counterSlice.reducer