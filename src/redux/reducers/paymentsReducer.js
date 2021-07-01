import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
  buisnessPaypalDetails:{},
  linkPayToContact:"",
  paypalSubscription:false,
  paypalInvoiceProductsTable:[],
  totalProductsTable:""
 }

const payments = {
    updatePaypalAccountField(state, action) {
        state.buisnessPaypalDetails[action.payload.key] = action.payload.value
    },
    setSaveLinkPayToContact(state, action) {
        state.linkPayToContact = action.payload
    },
    setBuisnessPaypalSubscription(state, action) {
        state.paypalSubscription = action.payload
    },
    setPaypalInvoiceProductsTable(state, action) {
        state.paypalInvoiceProductsTable = action.payload
    },
    setTotalProductsTable(state, action) {
        state.totalProductsTable = action.payload
    }
}
export default produce((state, action) => createReducer(state, action, payments), initialState);





