import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    user: "",
    flagOnClick: false,
    componentConfigurator:"",
    whenMail:''
}

const agent = {
    setUser(state, action) {
        state.company = action.payload
    },
    setFlagonClick(state, action) {
        state.flagOnClick = action.payload
    },
    setUserEdit(state, action) {
        state.user = action.payload
    },
    setComponentConfigurator(state, action){
        state.componentConfigurator = action.payload
    },
    setWhenMail(state, action){
        state.whenMail=action.payload
    }
}
export default produce((state, action) => createReducer(state, action, agent), initialState);





