import $ from 'jquery';
import { actions } from '../actions/All_actions';

function checkPermission(result) {
  return new Promise((resolve, reject) => {
    if (result.status == "401") {
      result.routes ?
        window.location.assign(`https://dev.accounts.leader.codes/login?des=${result.des}'&routes='${result.routes}`) :
        window.location.assign(`https://dev.accounts.leader.codes/login?des=${result.des}`)
      reject(false)
    }
    resolve(true)
  })
}

export const newSystemWave = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_SYSTEM_WAVE') {
    console.log("wave")
    const id = getState().invoiceReducer.invoiceSave.invoice._id
    console.log("id", id)
    let userName = getState().publicReducer.userName
    var link =
      `https://finance.leader.codes/${userName}/view/${id}`
    console.log('link', link)
    let urlData = `https://api.dev.leader.codes/createSystemWave`
    let body = {
      subject: "Invoice created",
      body: 'New Invoice created successfuly, you can see it in:' + link,
      to: [userName],
      from: "@extansions",
      source: "Finance",
      files: 'null'
    }
    $.ajax({
      url: urlData,
      method: 'POST',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(body),
      success: function (data) {
        checkPermission(data).then((ifOk) => {
          console.log('box success', data)
        })
      },
      error: (err) => {
        console.log("box error ", err)
      },
    });
  }
  return next(action);
}

export const newInvoiceToBuisness = ({ dispatch, getState }) => next => action => {

  if (action.type === 'SET_SAVE_INVOICE') {

    let buisnessId = getState().buisnessReducer.buisness
    let currentBuisness = getState().buisnessReducer.currentBuisness
    console.log("buisnessId", buisnessId)
    let invoice = action.payload
    console.log("iiinvoice", invoice)
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/newInvoiceForBuisness/${buisnessId}`
    $.ajax({
      url: urlData,
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(invoice),
      success: async function (data) {
        console.log("success add invoice", data)

        dispatch(actions.setShow(true))
        dispatch(actions.setNameAction("Adding an invoice successfully"))
        await dispatch(actions.setInvoiceShow(data.invoice))
        await dispatch(actions.setInvoiceSave(data))
        await dispatch(actions.setViewConversion("true"))
        await dispatch(actions.setFlagPush1(true))
        await dispatch(actions.setFlagPush(true))
        dispatch(actions.setShowInInvoice(false))
        // dispatch(actions.setsendMessage("true"))
        dispatch(actions.setGetAllInvoicesToBuisness())
        dispatch(actions.setSystemWave())
        dispatch(actions.getFcmtoken())
        dispatch(actions.setFlagModal(""))
        dispatch(actions.setShowMessage(false))
        dispatch(actions.setButtonClick(""))
        dispatch(actions.setModalBody(""))
        dispatch(actions.setSubmitSaveInvoice(false))
        // if(currentBuisness.clientId){
        //   console.log("if")
        dispatch(actions.setSendLinkPaypal())
        //   console.log("ifff")
        // }
        // dispatch(actions.getFcmtoken());
      },
      error: function (err) {
        //בדיקה אם חוזר 401 זאת אומרת שצריך לזרוק אותו ללוגין
        console.log("error", err)
      }
    });
  }
  return next(action);
}
// export const newInvoiceToBuisness = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'SET_SAVE_INVOICE') {
//     // let buisnessId = getState().buisnessReducer.buisness._id;
//     let invoice=action.payload
//     console.log("iiinvoice",invoice)
//         let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/newInvoiceForBuisness/6087a5d6fef08c840a4558f6`
//         $.ajax({
//             url: urlData,
//             method: 'POST',
//             headers: {
//                 Authorization: getState().publicReducer.tokenFromCookies
//             },
//             contentType: "application/json; charset=utf-8",
//           data:JSON.stringify(invoice),
//             success: function (data) {
//                 console.log("success add invoice", data)
//                 // dispatch(actions.setPushInvoices2(data))
//                 dispatch(actions.setGetAllInvoicesToBuisness())
//             },
//             error: function (err) {
//                 //בדיקה אם חוזר 401 זאת אומרת שצריך לזרוק אותו ללוגין
//                 console.log("error", err)
//             }
//         });
//     }
//     return next(action);
// }

export const updateInvoiceById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_UPDATE_INVOICE') {
    console.log("setUpdateInvoice")
    let invoice
    if (action.payload) {
      invoice = action.payload
      console.log("ap", invoice)
    }
    else {
      invoice = getState().invoiceReducer.invoice;
      console.log("ap2", invoice)
    }
    console.log("action.payload", action.payload)
    let invoiceId = getState().invoiceReducer.invoiceId;
    console.log("invoice", invoiceId)
    let vv = getState().invoiceReducer.viewConversion
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/updateInvoiceForBuisness/${invoiceId}`
    $.ajax({
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      url: urlData,
      type: 'POST',
      withCradentials: true,
      async: false,
      data: JSON.stringify(invoice),
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: async function (invoice1) {
        console.log("updateInvoice", invoice1, vv)
        // dispatch(actions.setSendLinkPaypal("edit"))
        dispatch(actions.setShow(true))
        dispatch(actions.setNameAction("Update an invoice successfully"))
        await dispatch(actions.setInvoiceShow(invoice1.invoice))
        await dispatch(actions.setInvoiceSave(invoice1))
        // console.log()

        await dispatch(actions.setViewConversion("true"))
        await dispatch(actions.setFlagPush1(true))
        await dispatch(actions.setFlagPush(true))
        dispatch(actions.setGetAllInvoicesToBuisness(invoice1))
        dispatch(actions.setShowInInvoice(false))
        dispatch(actions.setFlagModal(""))
        dispatch(actions.setShowMessage(false))
        dispatch(actions.setButtonClick(""))
        dispatch(actions.setModalBody(""))
        dispatch(actions.setSubmitSaveInvoice(false))
      },
    });
  }
  return next(action);
}


// export const removeInvoiceById = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'SET_REMOVE_INVOICE') {
//     // return new Promise((resolve, reject) => {
//     let invoiceId = getState().invoiceReducer.invoiceId;
//     let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/removeInvoiceForBuisnessById/${invoiceId}`
//     $.ajax({
//       headers: {
//         Authorization: getState().publicReducer.tokenFromCookies
//       },
//       url: urlData,
//       type: 'POST',
//       withCradentials: true,
//       async: false,
//       contentType: "application/json; charset=utf-8",
//       dataType: 'json',
//       success: function (buisness) {
//         console.log("upDateBuisness", buisness)
//         dispatch(actions.setGetAllBuisness(buisness))
//       },
//     });
//   }
//   return next(action);
// }

export const getInvoiceById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_GET_INVOICE_BY_ID_FULL') {
    // return new Promise((resolve, reject) => {
    // let invoiceId = getState().invoiceReducer.invoiceId;
    let invoiceId = action.payload

    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/getInvoiceForBuisnessById/${invoiceId}`
    $.ajax({
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      url: urlData,
      type: 'GET',
      withCradentials: true,
      async: false,
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: function (invoice) {
        console.log("getInvoice", invoice)

        dispatch(actions.setInvoiceShow(invoice))
        dispatch(actions.getAllProduct(invoice.buisness))
        dispatch(actions.setGetBusiness(invoice.buisness))
        dispatch(actions.setGetBuisnessById(invoice.buisness))

      },
    });
  }
  return next(action);
}


export const getAllInvoicesToBuisness = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_GET_ALL_INVOICES_TO_BUISNESS') {
    console.log("yyeshhhhhhhhhhhhhhhhhhhhhh")
    let buisnessId = getState().buisnessReducer.currentBuisness._id
    // let buisnessId = getState().publicReducer.buisness
    console.log("buisnessIIIIIIIIIIIIIIIddddddd", buisnessId)
    //זה הביזנס עם הנתוניםםםםםםםםםםםםםם
    // 6081530bdec1f741b4fca0e1
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/getAllInvoicesForBuisness/${getState().buisnessReducer.buisness}`
    console.log("urlData", urlData)
    $.ajax({
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      url: urlData,
      type: 'GET',
      withCradentials: true,
      async: false,
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: function (allInvoices) {
        console.log("allInvoices1111", allInvoices)
        dispatch(actions.setPushInvoices(allInvoices))
      },
      error: function (err) {
        console.log("err", err)
      }
    });
  }
  return next(action);
}


