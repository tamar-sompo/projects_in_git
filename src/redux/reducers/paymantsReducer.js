import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
  buisnessPaypalDetails:{},
  linkPayToContact:""
 }

const payments = {
    updatePaypalAccountField(state, action) {
        state.buisnessPaypalDetails = action.payload
    },
    setSaveLinkPayToContact(state, action) {
        state.linkPayToContact = action.payload
    }
}
export default produce((state, action) => createReducer(state, action, payments), initialState);





