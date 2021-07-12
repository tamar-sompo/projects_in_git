
import produce from 'immer'
import createReducer from "./reducerUtils";


const initialState = {
    showMessage: false,
    // handleClose:false,
    //         const handleShow = () => setShow(true);
    flagMessageContact: false,
    flagModal: "",
    buttonClick: "",
    flagSaveInvoice: false,
    modalBody: "",
    showViewInvoiceInModal: false,
    showModalName: false,
    showMessagePr: false,
    showModalDelete: false,

}
const message = {
    setShowModalDelete(state, action) {
        state.showModalDelete = action.payload
    },
    setShowModalName(state, action) {
        state.showModalName = action.payload
    },
    setShowMessagePr(state, action) {
        // debugger
        state.showMessagePr = action.payload
    },
    setShowViewInvoiceInModal(state, action) {
        state.showViewInvoiceInModal = action.payload
    },

    setButtonClick(state, action) {
        state.buttonClick = action.payload
    },

    setFlagModal(state, action) {
        state.flagModal = action.payload
    },

    setFlagSaveInvoice(state, action) {
        state.flagSaveInvoice = action.payload
    },
    setModalBody(state, action) {
        state.modalBody = action.payload
    },
    setFlagMessageContact(state, action) {
        state.flagMessageContact = action.payload
    },
    setShowMessage(state, action) {
        state.showMessage = action.payload
    }
}
export default produce((state, action) => createReducer(state, action, message), initialState);