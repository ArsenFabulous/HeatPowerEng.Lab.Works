import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LW {
    number: number;
    variant: number;
}
const initialState: LW = {
    number: 0,
    variant: 0,
}
export const LWSlice = createSlice({
    name: 'LW',
    initialState,
    reducers: {
        numberSelection: (state, action: PayloadAction<number>) => {
            state.number = action.payload
        },
        variantSelection: (state, action: PayloadAction<number>) => {
            state.variant = action.payload
        },
        reset: (state) => {
            state.number = 0
            state.variant = 0

        },

    }
})

export default LWSlice.reducer;