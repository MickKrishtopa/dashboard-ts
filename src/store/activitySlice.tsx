import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import response from "../utils/data";

export const fetchData = createAsyncThunk(
    "activity/fetchData",
    async function (_, { rejectWithValue }) {
        try {
            const data = response;
            return data;
        } catch (error: any) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

interface IInterval {
    current: number;
    previous: number;
}

interface ITimeframes {
    daily: IInterval;
    weekly: IInterval;
    monthly: IInterval;
}

type IActivity = {
    title: string;
    timeframes: ITimeframes;
};

interface IState {
    data: IActivity[];
    interval: string;
    status: string;
    error: string;
}

const initialState: IState = {
    data: [],
    interval: "week",
    status: "",
    error: "",
};

const setError = (state: IState, action: any) => {
    state.status = "rejected";
    state.error = action.payload;
};

const activitySlice = createSlice({
    name: "activity",
    initialState,
    reducers: {
        setData(state, action) {
            state.data = action.payload.data;
        },
        setInterval(state, action: PayloadAction<string>) {
            state.interval = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.status = "loading";
            state.error = "";
        });
        builder.addCase(fetchData.fulfilled, (state, action: any) => {
            state.data = action.payload;
            state.status = "resolved";
        });
        builder.addCase(fetchData.rejected, setError);
    },
});

export const { setData, setInterval } = activitySlice.actions;

export default activitySlice.reducer;
