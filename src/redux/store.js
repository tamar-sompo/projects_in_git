
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { actions } from './actions/All_actions.js';

// old functions 
// import {
//     // getAllReciptes, deleteProductbyID,
//     sendEmail, getUserName, getLastInvoicePublicNote,
//     postnewContact, getCompany,
//     uploadImageLogo, uploadImageSignature, getContactByEmail,
//     getFromServer,
//     endLinkToMail, saveInvoice,
//     //  getAllProducts,
//     // postNewProduct,
//     // updateContat,
//     // createContact,
//     getInvoicesbyIdb,
//     createInvoiceOtomat
// } from './middleWares/oldCrud';

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

import publicReducer from './reducers/publicReducer';
import invoiceReducer from './reducers/invoiceRreducer';
import userReducer from './reducers/userReducer';
import customerReducer from './reducers/customerReducer';
import LogoReducer from './reducers/LogoReducer'
import listReducer from './reducers/listReducer';
import productReducer from './reducers/productReducer';
import exportInvoiceReducer from './reducers/exportInvoiceReducer';
import designReducer from './reducers/designReducer';
import displayComponents from './reducers/displayComponents';
import buisnessReducer from './reducers/buisnessReducer';
import companyReducer from './reducers/companyReducer';
import cityByCountryReducer from './reducers/cityByCountryReducer'
import messageReducer from './reducers/messageReducer'

//רשימת הרדוסרים
const reducer = combineReducers({
    LogoReducer, displayComponents, invoiceReducer, customerReducer, userReducer, publicReducer, cityByCountryReducer,
    productReducer, exportInvoiceReducer, companyReducer, designReducer, buisnessReducer, form: formReducer, listReducer, messageReducer
})
// רשימת הפונקציות שיש בכל המידלוורס
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(

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
console.log(url);
store.dispatch(actions.setUserName(url.pathname.split('/')[1]))
if (window.location.hostname == "localhost") {
    console.log("localhost");
    let userName = "ruthF"
    let jwtFromCookie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJEdGN4dFJueERlWXhNcjNZUWZxWWtQWDhsUmgyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjIzMzE0NzM5fQ.lvFAravaFf6h_A3BQPMjKu1831pwM3ySvqtkAmNrOJw"
    console.log("jwtFromCookie", jwtFromCookie)

    store.dispatch(actions.setTokenFromCookies(jwtFromCookie));
    store.dispatch(actions.setUserName(userName))
    if (window.location.href.indexOf("view") != -1) {
        store.dispatch({ type: 'GET_ALL_CONTACT_BY_USER' })
        debugger
        console.log("njnj")
        store.dispatch(actions.setDislayInvoice("true"))
        if (window.location.pathname.split("/").pop() != "") {

            store.dispatch(actions.setGetInvoiceByIdFull(window.location.pathname.split("/").pop()))
        }
    }
}
else {
    if (window.location.href.indexOf("view") != -1) {
        store.dispatch({ type: 'GET_ALL_CONTACT_BY_USER' })
        debugger
        console.log("njnj")
        store.dispatch(actions.setDislayInvoice("true"))
        if (window.location.pathname.split("/").pop() != "") {

            store.dispatch(actions.setGetInvoiceByIdFull(window.location.pathname.split("/").pop()))
        }
    }
    console.log("sharat")
    let params = (new URL(document.location)).searchParams;
    console.log("params", params)
    let jwtGlobal = params.get('jwt');
    console.log("jwtGlobal", jwtGlobal)
    debugger
    if (jwtGlobal) {
        debugger
        let newUrl = window.location.href
        newUrl = newUrl.split('?jwt=')
        newUrl = newUrl[0]
        let date = new Date(Date.now() + 86400e3);
        date = date.toUTCString();
        var expires = "expires=" + date;
        debugger
        if (!(document.cookie.split(";").filter(s => s.includes('devJwt'))[0]) || document.cookie.split(";").filter(s => s.includes('devJwt'))[0] === '')
            document.cookie = "devJwt" + "=" + jwtGlobal + ";" + expires + ";domain=leader.codes;path=/";
        debugger
        window.location.replace(newUrl)

        store.dispatch(actions.setTokenFromCookies(jwtGlobal));

        // if (window.location.href.indexOf("view") != -1) {
        //     debugger
        //     console.log("njnj")
        //     store.dispatch(actions.setDislayInvoice("true"))
        //     if (window.location.pathname.split("/").pop() != "") {
        //       store.dispatch(actions.setGetInvoiceByIdFull(window.location.pathname.split("/").pop()))
        //     }
        //   }
    }
}




store.dispatch({ type: 'GET_ALL_CONTACT_BY_USER' })
// if (window.location.href.indexOf("view") == -1) {
store.dispatch({ type: 'SET_GET_ALL_BUISNESS' })
// store.dispatch({ type: 'EXTRACT_JWT' });
// store.dispatch({ type: "GET_ALL_PRODUCT" })
// store.dispatch({ type: 'GET_ALLINVOICES_BY_IDB' })
// store.dispatch({ type: 'GET_PUBLICNOTE' })
// store.dispatch({ type: 'SET_GET_ALL_INVOICES_TO_BUISNESS'})

// store.dispatch({ type: 'GET_ALL_PRODUCTS_TO_USER' })
store.dispatch({ type: 'SET_COMPANY' })
store.dispatch({ type: 'SEND_MAIL' })
store.dispatch({ type: 'SET_GET_ALL_BUISNESS' })
// store.dispatch({ type: 'SET_GET_BUISNESS_BY_ID' })
// store.dispatch({ type: "SET_GET_ALL_INVOICES_TO_BUISNESS" })
store.dispatch({ type: "SET_RESET_ALL_NEW_PRODUCT" })
store.dispatch(actions.setFlagPush(true))

store.dispatch({ type: "GET_CITY_BY_COUNTRY" })
store.dispatch({ type: "GET_COUNRTY" })
store.dispatch({ type: 'GET_LAST_BUISNESS' })
// store.dispatch({ type: 'EXTRACT_JWT' });

// }





export default store;
