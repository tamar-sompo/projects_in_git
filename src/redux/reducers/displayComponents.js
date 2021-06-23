import produce from 'immer';
import createReducer from "./reducerUtils";


const initialState = {
    // displayComponentsSettings: {
    // displayComponentSteps {
    openDesignBySteps:false,
    displaySetting:true,
    openSetting:false,
    openDesign:false,
    isCompanyDetails: false,
    isNewCustomerDetails: false,
    isCreatProduction: false,
    isExportInvoice: false,
    isNewEmailDetailsOpen: false,
    prevPath:'',
    bordeRequire:false,
    // isComponentStep: "",
    // isComponentDesign: false,
    // isComponentContent: false,
    // isComponentConvrsion: false,    }
    flag: "false",
    isSubmit: false,
    p:['']
}
// }


const displayComponents = {
    setBorderRequire(state, action)
    {
      state.bordeRequire=action.payload
    },
    setPrevPath(state,action){
       state.prevPath=action.payload
    },
    setP(state,action){
       state.p.push(action.payload)
    },
    setPDelete(state,action){
        state.p=action.payload
    //    let ba=state.p.filter(x=>x==action.payload)
     },
    setOpenSetting(state, action){
        state.openSetting=action.payload;

    },
    setOpenDesignBySteps(state,action){
        state.openDesignBySteps=action.payload
    },
    setOpenDesign(state, action){
        state.openDesign=action.payload;
    },
    setDisplaySetting(state,action){
        state.displaySetting=action.payload
    }
//     setCurrentComponentStep(state, action) {
//         state.isComponentStep = action.payload;
    }
    // setComponentDesign(state, action) {
    //     state.displayComponentSteps.isComponentDesign = action.payload;
    // },
    // setComponentContent(state, action) {
    //     state.displayComponentSteps.isComponentContent = action.payload;
    // },
    // setComponentConversion(state, action) {
    //     state.displayComponentSteps.isComponentConversion = action.payload;
    // },

export default produce((state, action) => createReducer(state, action, displayComponents), initialState);
