import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    company: "",
    flagOnClick: false,
    componentConfigurator:"",
    whenMail:''
}

const agent = {
    setCompany(state, action) {
        state.company = action.payload
    },
    setFlagonClick(state, action) {
        state.flagOnClick = action.payload
    },
    setCompanyEdit(state, action) {
        state.company = action.payload
    },
    setComponentConfigurator(state, action){
        state.componentConfigurator = action.payload
    },
    setWhenMail(state, action){
        state.whenMail=action.payload
    }
}
export default produce((state, action) => createReducer(state, action, agent), initialState);

