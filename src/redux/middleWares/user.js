import $ from 'jquery';
import { actions } from '../actions/All_actions';
import keys from '../../config/env/keys'

function checkPermission(result) {
  return new Promise((resolve, reject) => {
    if (result.status == "401") {
      result.routes ?
        window.location.assign(`${keys.LOGIN_URL}‏?des=${result.des}'&routes='${result.routes}`) :
        window.location.assign(`${keys.LOGIN_URL}?des=${result.des}`)
      reject(false)
    }
    resolve(true)
  })
}


export const getUserByUserName = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_GET_USER_BY_USERNAME') {
    let urlData = `${keys.API_URL_BASE_CLIENT}/${getState().publicReducer.userName}/getUserByUserName`
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
        checkPermission(data).then((ifOk) => {
          dispatch(actions.setGetUserByUserName(data))
        })
      },
      error: (err) => {
        console.log(err)
      },
    });
  }
  return next(action);
}
