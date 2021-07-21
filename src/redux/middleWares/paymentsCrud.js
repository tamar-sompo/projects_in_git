import $ from 'jquery';
import { actions } from '../actions/All_actions';

function checkPermission(result) {
  return new Promise((resolve, reject) => {
    if (result.status === "401") {
      result.routes ?
        window.location.assign(`https://dev.accounts.leader.codes/login?des=${result.des}'&routes='${result.routes}`) :
        window.location.assign(`https://dev.accounts.leader.codes/login?des=${result.des}`)
      reject(false)
    }
    resolve(true)
  })
}


export const getLinkToPayWithPaypal = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_SEND_LINK_PAYPAL') {
    // let status = action.payload
    let items = getState().paymentsReducer.paypalInvoiceProductsTable
    // let num = items.length.toString()
    let totalToPAy = getState().invoiceReducer.saveSum
    //   let buisnessPaypalDetails = getState().buisnessPaypalDetails;
    let buisnessPaypalDetails = {
      clientId:
        "AQsk0Hocr28b3fHgojgASbazi8cS99QTI6iTzU_UZOTxEmSdcOi5bAonEM0cm8re-QjTspk_l1YjzHoE",
      // clientSecret:
      // "EPuSHNlWC_J-mhED_1g66tdpJEMSD8mCZ0DKV_szBGpD5HHEqbmJQn1WQ0CSvdyd74SD4SUYhkRkWYEk",
      amount: {
        currency: "USD",
        total: totalToPAy.toString()
      },
      description: "Thank you for using the service",
      // products:products,
      //     
      items: items
    }
    // let username = getState().publicReducer.userName;
    let urlData = `https://pay.leader.codes/YaelBrenig/payByPaypal`
    $.ajax({
      url: urlData,
      method: 'POST',
      // headers: {
      //   Authorization: getState().publicReducer.tokenFromCookies
      // },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(buisnessPaypalDetails),
      success: (link) => {
        //   checkPermission(link).then((ifOk) => {
        //       "okGetLink", link)
        dispatch(actions.setSaveLinkPayToContact(link.href))
        dispatch(actions.setUpdateInvoice({ "paypalLink": link.href }))
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}

// after paypal_buisness_form
export const setClientIdToBuisness = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_CLIENT_ID_TO_BUISNESS') {
    let currentBuisness = getState().buisnessReducer.buisness;
    let username = getState().publicReducer.userName;
    let clientId = getState().paymentsReducer.buisnessPaypalDetails.client_id;
    let urlData = `https://finance.leader.codes/api/${username}/updateBuisness/${currentBuisness}`
    $.ajax({
      url: urlData,
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ "clientId": clientId }),
      success: async (buisness) => {
        //   checkPermission(link).then((ifOk) => {
        //       "okGetLink", link)
        // dispatch(actions.setSaveLinkPayToContact(link.href))
        dispatch(actions.setGeCurrenttBuisness(buisness.buisness))
        dispatch(actions.setShow(true))
        await dispatch(actions.setNameAction("We have attached you to the service"))
        dispatch(actions.setClosePaypalForm(false))
        // dispatch(actions.setPaymentDetailsToPayServer(buisness.buisness))
        // להעביר בהמשך למידלוואר של pay
        //   })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}

// after paypal_buisness_form
export const setPaymentDetailsToPayServer = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_PAYMENT_DETAILS_TO_PAY_SERVER') {
    let currentBuisness = getState().buisnessReducer.buisness;
    // let currentBuisness = getState().buisnessReducer.currentBuisness._id;
    // let username = getState().publicReducer.userName;
    let paymentDetails = getState().paymentsReducer.buisnessPaypalDetails;
    let urlData = `https://pay.leader.codes/api/YaelBrenig‏/craetePaypalSecret`
    $.ajax({
      url: urlData,
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ paymentDetails }),
      success: (result) => {
        //   checkPermission(link).then((ifOk) => {
        //       "okGetLink", link)
        // dispatch(actions.setSaveLinkPayToContact(link.href))
        // dispatch(actions.setShow(true))
        // dispatch(actions.setNameAction("We have attached you to the service"))
        //   })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}
