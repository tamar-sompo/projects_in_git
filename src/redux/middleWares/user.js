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


export const getUserByUserName = ({ dispatch, getState }) => next => action => {
    console.log("UserByUserName")
    if (action.type === 'SET_GET_USER_BY_USERNAME') {
      console.log("UserByUserNameafterAction")
      let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/getUserByUserName`
      console.log("urlData", urlData)
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
        success: (data) => {
          console.log("dataSucsessGetUserByUserName", data)
          checkPermission(data).then((ifOk) => {
            console.log("okGetUserByUserName", data)
            dispatch(actions.setGetUserByUserName(data))
            console.log("successDispatchUserByUserName", data)
          })
        },
        error: (err) => {
          console.log("error", err)
        },
      });
    }
    return next(action);
  }
  