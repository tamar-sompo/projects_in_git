
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actions } from './actions/All_actions.js';
import keys from '../config/env/keys.js';

import {
    newBuisnessToUser,
    updateBuisnessById,
    updateSettingBuisnessById,
    removeBuisnessById,
    getBuisnessById,
    getAllbuisnessToUser,
    getUserByUserName,
    getLastBuisness
} from './middleWares/buisnessCrud';

import {
    newInvoiceToBuisness,
    updateInvoiceById,
    getAllInvoicesToBuisness,
    getInvoiceById, newSystemWave
} from './middleWares/invoicesCrud';
import {
    updateProductById,
    // removeProductById,
    getAllProductsToBuisness,
    getProductById,
    newProductToBuisness,
    deleteProductbyID
} from './middleWares/productsCrud';
import {
    // newContactToBuisness, 
    getAllContactsToUser,
    getContactToUserById,
    createContact,
    updateContat
    // createContact
} from './middleWares/contactsCrud';
import {
    getAllCitiesByCountry,
    getAllCountry
} from './middleWares/cityByCounty';

import {
    uploadImage
} from './middleWares/filesCrud.js';

import {
    sendNotificationToAll,
    fcmToken,
} from './middleWares/notificationCrud.js';

// import {
//     getAllCountry,
//     getAllCitiesByCountry
// } from './middleWares/cityByCountry.js'
import {
    sendLinkToMail
} from './middleWares/exportCrud';
import {
    setClientIdToBuisness,
    getLinkToPayWithPaypal,
    setPaymentDetailsToPayServer
} from './middleWares/paymentsCrud';

import publicReducer from './reducers/publicReducer';
import invoiceReducer from './reducers/invoiceRreducer';
import userReducer from './reducers/userReducer';
import customerReducer from './reducers/customerReducer';
import LogoReducer from './reducers/LogoReducer'
import productReducer from './reducers/productReducer';
import exportInvoiceReducer from './reducers/exportInvoiceReducer';
import designReducer from './reducers/designReducer';
import displayComponents from './reducers/displayComponents';
import buisnessReducer from './reducers/buisnessReducer';
import companyReducer from '../components/notUse/companyReducer';
import cityByCountryReducer from './reducers/cityByCountryReducer'
import messageReducer from './reducers/messageReducer'
import paymentsReducer from './reducers/paymentsReducer.js'

//?????????? ????????????????
const reducer = combineReducers({
    LogoReducer, displayComponents, invoiceReducer, customerReducer, userReducer, publicReducer, cityByCountryReducer, paymentsReducer,
    productReducer, exportInvoiceReducer, companyReducer, designReducer, buisnessReducer, form: formReducer, messageReducer
})
// ?????????? ?????????????????? ?????? ?????? ??????????????????
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            setClientIdToBuisness,
            setPaymentDetailsToPayServer,
            getLinkToPayWithPaypal,
            getAllCountry,
            getAllCitiesByCountry,
            // deleteProductbyID,
            // getFromServer,
            // getContactById,
            // getAllCustomersToUser,
            // getAllProductsToBuisness,
            // getContactById,
            // postNewProduct,
            // postNewProduct,
            sendLinkToMail,
            // uploadImage,
            createContact,
            updateContat,
            uploadImage,
            // the new controllers
            deleteProductbyID,
            sendNotificationToAll,
            fcmToken,
            getAllContactsToUser,
            getContactToUserById,
            getProductById,
            // removeProductById,
            updateProductById,
            newProductToBuisness,
            newInvoiceToBuisness,
            updateInvoiceById,
            getAllProductsToBuisness,
            // duplicateDoc,
            getAllInvoicesToBuisness,
            getInvoiceById,
            getBuisnessById,
            removeBuisnessById,
            updateBuisnessById,
            updateSettingBuisnessById,
            getBuisnessById,
            newBuisnessToUser,
            getAllbuisnessToUser,
            getAllCitiesByCountry,
            getAllCountry,
            getUserByUserName,
            getLastBuisness,
            newSystemWave
            // uploadImage,
            // sendLinkToMail
        ))
)

var url = window.location;

store.dispatch(actions.setUserName(url.pathname.split('/')[1]))
if (window.location.hostname === "localhost") {
    let userName = "ruthF"
    let jwtFromCookie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJEdGN4dFJueERlWXhNcjNZUWZxWWtQWDhsUmgyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIzMzE0NzM5fQ.lvFAravaFf6h_A3BQPMjKu1831pwM3ySvqtkAmNrOJw"

    store.dispatch(actions.setTokenFromCookies(jwtFromCookie));
    store.dispatch(actions.setUserName(userName))
    if (window.location.href.indexOf("view") !== -1) {
        store.dispatch({ type: 'GET_ALL_CONTACT_BY_USER' })

        store.dispatch(actions.setDislayInvoice("true"))
        if (window.location.pathname.split("/").pop() !== "") {

            store.dispatch(actions.setGetInvoiceByIdFull(window.location.pathname.split("/").pop()))
        }
    }
}
else {
    if (window.location.href.indexOf("view") !== -1) {
        store.dispatch({ type: 'GET_ALL_CONTACT_BY_USER' })

        store.dispatch(actions.setDislayInvoice("true"))
        if (window.location.pathname.split("/").pop() !== "") {

            store.dispatch(actions.setGetInvoiceByIdFull(window.location.pathname.split("/").pop()))
        }
    }
    let params = (new URL(document.location)).searchParams;
    let jwtGlobal = params.get('jwt');

    if (jwtGlobal) {

        let newUrl = window.location.href
        newUrl = newUrl.split('?jwt=')
        newUrl = newUrl[0]
        let date = new Date(Date.now() + 86400e3);
        date = date.toUTCString();
        var expires = "expires=" + date;

        if (!(document.cookie.split(";").filter(s => s.includes('devJwt'))[0]) || document.cookie.split(";").filter(s => s.includes('devJwt'))[0] === '')
            document.cookie = `${keys.JWT}` + "=" + jwtGlobal + ";" + expires + ";domain=leader.codes;path=/";

        window.location.replace(newUrl)

        store.dispatch(actions.setTokenFromCookies(jwtGlobal));

        // if (window.location.href.indexOf("view") != -1) {
        //      
        //       "njnj")
        //     store.dispatch(actions.setDislayInvoice("true"))
        //     if (window.location.pathname.split("/").pop() != "") {
        //       store.dispatch(actions.setGetInvoiceByIdFull(window.location.pathname.split("/").pop()))
        //     }
        //   }
    }
}




store.dispatch({ type: 'GET_ALL_CONTACT_BY_USER' })
store.dispatch({ type: 'SET_GET_ALL_BUISNESS' })
// store.dispatch({ type: 'SET_GET_BUISNESS_BY_ID' })
// store.dispatch({ type: "SET_GET_ALL_INVOICES_TO_BUISNESS" })
store.dispatch({ type: "SET_RESET_ALL_NEW_PRODUCT" })
store.dispatch(actions.setFlagPush(true))

// store.dispatch({ type: "GET_CITY_BY_COUNTRY" })
// store.dispatch({ type: "GET_COUNRTY" })
store.dispatch({ type: 'GET_LAST_BUISNESS' })

window.store = store;
export default store;
