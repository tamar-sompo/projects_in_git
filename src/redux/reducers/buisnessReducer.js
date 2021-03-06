import produce from 'immer'
import { string } from 'yup/lib/locale';
import createReducer from "./reducerUtils";

const initialState = {
    newBuisness: {
        socialmedias: {},
        "productionDate": new Date(),
    },
    settingBuisness: {
        socialmedias: {},
    },
    oldbuisness: "",
    buisness: "",
    updateBusiness: {
        socialmedias: {},
    },
    allBuisness: [],
    currentBuisness: {},
    allInvoices: [],
    flagSave: string,
    flagOverPage: false
}
const buisness = {
    setOldBuisness(state, action) {
        state.oldbuisness = action.payload
    },
    setFlagOverPage(state, action) {
        state.flagOverPage = action.payload
    },
    setflagSave(state, action) {
        state.flagSave = action.payload
    },
    setGetBusiness(state, action) {
        state.buisness = action.payload
    },

    setGeCurrenttBuisness(state, action) {

        state.currentBuisness = action.payload
    },
    setUpDateBuisness(state, action) {
        state.updateBusiness = action.payload
    },
    setUpdateBusiness(state, action) {
        // state.updateBusiness[action.payload.key] = action.payload.value
        state.updateBusiness[action.payload.key] = action.payload.value
    },
    setUpdateBusinessWebsite(state, action) {
        state.updateBusiness.socialmedias[action.payload.key] = action.payload.value
    },
    setGetAllBuisness(state, action) {
        state.allBuisness = action.payload
    },
    setPushNewBuisness(state, action) {
        state.buisness = action.payload
    },
    setRemoveBuisnessById(state, action) {
        state.buisness = action.payload
    },
    setGetBuisnessById(state, action) {
        state.buisness = action.payload
    },
    setBuisnessId(state, action) {
        state.buisness = action.payload
    },
    setGetAllInvoicesToBuisness(state, action) {
        state.allInvoices = action.payload
    },
    setGetCurrentBuisness(state, action) {//setC
        state.currentBuisness = action.payload
    },
    setChooseNewBuisness(state, action) {
        state.currentBuisness = action.payload
    },
    setGetCurrenttBuisness(state, action) {
        state.currentBuisness = action.payload
    },
    setBuisness(state, action) {
        state.newBuisness[action.payload.key] = action.payload.value
    },
    setbuisnessWebsite(state, action) {
        state.newBuisness.socialmedias[action.payload.key] = action.payload.value
    },
    setSettingBuisness(state, action) {

        state.settingBuisness[action.payload.key] = action.payload.value
    },
    setSettingBuisnessWebsite(state, action) {
        state.settingBuisness.socialmedias[action.payload.key] = action.payload.value
    },


    setAllBuisness(state, action) {
        state.allBuisness = action.payload
    },
    setGetUserByUserName(state, action) {
        state.newBuisness = action.payload
    },

    setCurrentBuisness(state, action) {
        state.currentBuisness = action.payload
    }
}
export default produce((state, action) => createReducer(state, action, buisness), initialState);