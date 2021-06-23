import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    // business:{
    // _id:"605c6841c9ef6cdadedaab0a"},
    //    updateBusiness:{},
    //    currentbuisness:"",
    allCities: [],
    allCountry:[],
    country: ""
}
// מעלה את הפעולות
const cities = {
    setAllCities(state, action) {
        state.allCities = action.payload;
        console.log("aaaaaaaaaaaa", state.allCities);
    },
    setCountry(state, action) {
        state.allCountry = action.payload;
        console.log("nnnnnnnnnnnnnn", state.allCountry);
    } 
}
export default produce((state, action) => createReducer(state, action, cities), initialState);
