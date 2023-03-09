import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    car: ["Model 3", "Model Y","Model S","Model X","Solar Panel","Solar Roof","Accessories"]
}
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.car
export default carSlice.reducer