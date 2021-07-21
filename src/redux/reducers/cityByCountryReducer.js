import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    // business:{
    // _id:"605c6841c9ef6cdadedaab0a"},
    //    updateBusiness:{},
    //    currentbuisness:"",
    allCities: [],
    allCountry: [],
    country: ""
}
// מעלה את הפעולות
const cities = {
    setAllCities(state, action) {
        state.allCities = action.payload;
    },
    setCountry(state, action) {
        state.allCountry = action.payload;
    }
}
export default produce((state, action) => createReducer(state, action, cities), initialState);
