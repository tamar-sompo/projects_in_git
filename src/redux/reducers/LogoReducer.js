// import produce from 'immer'

// const initialState = { 
//     logoDesign:{
//       currentComponent:"",
//     //   flag_logo:false
//     } 
// }
// export default produce((state, action) => {
//         // setCurrentComponent(state, action) {
//         //     state.logoDesign.currentComponent = action.payload
//         // }
//         switch (action.type) {

//             case 'SET_CURRENT_COMPONENT':
//                  ;
//                 state.logoDesign.currentComponent = action.payload;
//             break;
//         }



// },initialState)
import produce from 'immer';
// import tempLogo from '../../components/assets/newLogo.png';
import createReducer from "./reducerUtils";
const initialState = {
    logoDesign: {
        // logo: tempLogo,
        logo: "",
        LogoYOrN: true,
        logoCNYOrN: false,
        logoCompanyName: "",
        logoBorderRadiusLogo: "",
        // logoBorderRadiusLogo1: "",
        // logoBorderRadiusLogo2: "",
        // logoBorderRadiusLogo3: "",
        // logoBorderRadiusLogo4: "",
        logoWidth: "40%",
        logoHeight: "",
        logoBackgroundOnlyPng: "",
        logoSelectRadiuseView: "",
        logoSelect: false,
        currentComponent: ""
    }

}



const logo = {
    setCurrentComponent(state, action) {
        state.logoDesign.currentComponent = action.payload
    },
    setLogo(state, action) {
        state.logoDesign.logo = action.payload;
    },
    setLogoyorn(state, action) {
        state.logoDesign.LogoYOrN = !state.logoDesign.LogoYOrN;
    },
    setLogocnyorn(state, action) {
        state.logoDesign.logoCNYOrN = action.payload;
    },
    setLogoCompanyName(state, action) {
        state.logoDesign.logoCompanyName = action.payload;
    },
    setLogoBorderRadiusLogo(state, action) {
        state.logoDesign.logoBorderRadiusLogo = action.payload;
    },
    setLogoWidth(state, action) {
        state.logoDesign.logoWidth = action.payload;
    },
    setLogoHeight(state, action) {
        state.logoDesign.logoHeight = action.payload;
    },
    setLogoBackgroundOnlyPng(state, action) {
        state.logoDesign.logoBackgroundOnlyPng = action.payload;
    },
    setLogoSelectRadiuseView(state, action) {
        state.logoDesign.logoSelectRadiuseView = action.payload;
    },
    setLogoSelect(state, action) {
        state.logoDesign.logoSelect = action.payload;

    }
}
export default produce((state, action) => createReducer(state, action, logo), initialState);

