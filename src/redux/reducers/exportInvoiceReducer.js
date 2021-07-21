
import produce from 'immer'
import createReducer from "./reducerUtils";

const initialState = {
    linkToMail: "",
    emailDetails: {},
    isSendMessage: "false",
    successSendEmail: "false"
}
const conversion = {
    setEmailDetails(state, action) {
        state.emailDetails[action.payload.key] = action.payload.value
    },
    setsendMessage(state, action) {
        state.isSendMessage = action.payload;
    },
    setSuccessSendEmail(state, action) {
        state.successSendEmail = action.payload;
    }
}

export default produce((state, action) => createReducer(state, action, conversion), initialState);

