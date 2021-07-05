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


export const getLinkToPayWithPaypal = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_SEND_LINK_PAYPAL') {
    console.log("paypalcrud")
    let status = action.payload
    let items = getState().paymentsReducer.paypalInvoiceProductsTable
    // let num = items.length.toString()
    let totalToPAy = getState().invoiceReducer.saveSum
    console.log("totalToPAy", items, totalToPAy)
    //   let buisnessPaypalDetails = getState().buisnessPaypalDetails;
    let buisnessPaypalDetails = {
      clientId:
        "AWq9mFvKACDopYu_DzcvIQlqrUT3uWfd84-Q2ZtmL-iwuo3ZwruoELFnDD0_PA1joYdfGVi1Pmz3unUy",
      clientSecret:
      "EPuSHNlWC_J-mhED_1g66tdpJEMSD8mCZ0DKV_szBGpD5HHEqbmJQn1WQ0CSvdyd74SD4SUYhkRkWYEk",
amount:{
currency: "USD", 
total: totalToPAy.toString()
},
      description:"Thank you for using the service",
      // products:products,
      //     
      items: items
    }
    let username = getState().publicReducer.userName;
    let urlData = `https://pay.leader.codes/YaelBrenig/payByPaypal`
    console.log("urlData", urlData)
    $.ajax({
      url: urlData,
      method: 'POST',
      // headers: {
      //   Authorization: getState().publicReducer.tokenFromCookies
      // },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(buisnessPaypalDetails),
      success: (link) => {
        console.log("linkToPay", link)
        //   checkPermission(link).then((ifOk) => {
        //     console.log("okGetLink", link)
        dispatch(actions.setSaveLinkPayToContact(link.href))
        dispatch(actions.setUpdateInvoice(link.href, status))
        console.log("oksendlinktostore", link)
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
    console.log("paypalbuisness")
    let currentBuisness = getState().buisnessReducer.currentBuisness._id;
    console.log("currentBuisness", currentBuisness)
    let username = getState().publicReducer.userName;
    let clientId = getState().paymentsReducer.buisnessPaypalDetails.client_id;
    console.log("clientId", clientId)
    let urlData = `https://finance.leader.codes/api/${username}/updateBuisness/60d834db198dd3444b4e2189`
    // console.log("urlData", urlData)
    $.ajax({
      url: urlData,
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ "clientId": clientId }),
      success: (buisness) => {
        //   checkPermission(link).then((ifOk) => {
        //     console.log("okGetLink", link)
        // dispatch(actions.setSaveLinkPayToContact(link.href))
        console.log("oksave", buisness)
        dispatch(actions.setGeCurrenttBuisness(buisness.buisness))
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
    console.log("pay")
    let currentBuisness = getState().buisnessReducer.currentBuisness._id;
    console.log("currentBuisness", currentBuisness)
    let username = getState().publicReducer.userName;
    let paymentDetails = getState().paymentsReducer.buisnessPaypalDetails;
    console.log("paymentDetails", paymentDetails)
    let urlData = `https://pay.leader.codes/api/${username}/craetePaypalSecret`
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
        //     console.log("okGetLink", link)
        // dispatch(actions.setSaveLinkPayToContact(link.href))
        console.log("oksave3", result)
        // dispatch(actions.setGeCurrenttBuisness(buisness.buisness))
        //   })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}
