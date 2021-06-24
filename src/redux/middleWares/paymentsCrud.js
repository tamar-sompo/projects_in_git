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
    //   let buisnessPaypalDetails = getState().buisnessPaypalDetails;
      let buisnessPaypalDetails = {
        clientId:
        "AWq9mFvKACDopYu_DzcvIQlqrUT3uWfd84-Q2ZtmL-iwuo3ZwruoELFnDD0_PA1joYdfGVi1Pmz3unUy",
        clientSecret:
        "EPuSHNlWC_J-mhED_1g66tdpJEMSD8mCZ0DKV_szBGpD5HHEqbmJQn1WQ0CSvdyd74SD4SUYhkRkWYEk",
      }

      let  username = getState().publicReducer.userName;
    //   let buisnessPaypalClientId = getState().buisnessPaypalDetails.clientId;
      let urlData = `https://pay.leader.codes/ohevzion/payByPaypal/`
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
            console.log("oksendlinktostore", link)
        //   })
        },
        error: (err) => {
          console.log("error", err)
        },
      });
    }
    return next(action);
  }
  