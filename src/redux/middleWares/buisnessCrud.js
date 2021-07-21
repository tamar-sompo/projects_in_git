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

export const newBuisnessToUser = ({ dispatch, getState }) => next => action => {
  // if (action.type === 'SET_SEND_NEW_BUISNESS') 
  if (action.type === 'SET_BUISNESS_TO_SERVER') {
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/newBuisness`
    // let buisness = getState().buisnessReducer.newBuisness
    let buisness = action.payload;
    $.ajax({
      url: urlData,
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(buisness),
      success: (result) => {

        checkPermission(result).then((ifOk) => {
          dispatch(actions.setShow(true))
          dispatch(actions.setNameAction("Adding a business successfully"))
          dispatch(actions.setGetBusiness(result.buisness._id))
          dispatch(actions.setGeCurrenttBuisness(result.buisness))
          // dispatch(actions.setSaveInvoice("true"))
          dispatch(actions.setGetAllBuisness())
          dispatch(actions.getAllProduct(result.buisness._id))

          // alert('Your new business has been successfully saved!');
        })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}

export const getAllbuisnessToUser = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_GET_ALL_BUISNESS') {
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/allBuisness`
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
          dispatch(actions.setAllBuisness(data))
        })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}


export const updateBuisnessById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_UPDATE_BUSINESS_CARD') {

    //   "update", update)
    //   "current", current)
    const body = getState().buisnessReducer.updateBusiness;
    const buisnessId = action.payload;
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/updateBuisness/${buisnessId}`
    $.ajax({
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      url: urlData,
      type: 'POST',
      withCradentials: true,
      async: false,
      contentType: "application/json; charset=utf-8",
      // dataType: 'json',
      data: JSON.stringify(body),
      success: (data) => {
        dispatch(actions.getAllProduct(data._id))
        dispatch(actions.setGetBusiness(data._id))
        dispatch(actions.setGeCurrenttBuisness())
        // if (update == current) {
        //   dispatch(actions.getLastBuisness())
        //     "currentUpdate")
        //     'success update business num ' + buisnessId)
        // }
        // )

      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}

export const updateSettingBuisnessById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_UPDATE_SETTING_BUSINESS_CARD') {

    // let update = getState().buisnessReducer.updateBusiness.id;
    // const body = getState().buisnessReducer.settingBuisness;
    const body = action.payload;
    const buisnessId = action.payload._id;
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/updateBuisness/${buisnessId}`
    $.ajax({
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      url: urlData,
      type: 'POST',
      withCradentials: true,
      async: false,
      contentType: "application/json; charset=utf-8",
      // dataType: 'json',
      data: JSON.stringify(body),
      success: (data) => {

        dispatch(actions.setShow(true))
        dispatch(actions.setNameAction("Update a business successfully"))
        dispatch(actions.setGeCurrenttBuisness(data.buisness))
        dispatch(actions.setGetAllBuisness())
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}

export const removeBuisnessById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_REMOVE_BUISNESS_BY_ID') {
    const buisnessId = action.payload;
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/removeBuinessById/${buisnessId}`
    $.ajax({
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      url: urlData,
      type: 'POST',
      withCradentials: true,
      async: false,
      contentType: "application/json; charset=utf-8",
      dataType: 'json',
      success: function (buisnessId) {
        // {update == current?  dispatch(actions.getLastBuisness()):""}
        dispatch(actions.setGetAllBuisness())
        // if (update == current) {
        dispatch(actions.getLastBuisness())
        // }
      },
    });
  }
  return next(action);
}


export const getBuisnessById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_GET_BUISNESS_BY_ID') {
    // return new Promise((resolve, reject) => {
    // let buisness = getState().buisnessReducer.buisness;
    //להחזיר דחוףףףףףףף אם זה עושה בעיות
    // let id_buisness="6081530bdec1f741b4fca0e1"

    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/getBuinessById/${action.payload}`
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
      success: function (buisness) {
        dispatch(actions.setGetCurrenttBuisness(buisness))
      },
    });
  }
  return next(action);
}


export const getUserByUserName = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_GET_USER_BY_USERNAME') {
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/getUserByUserName`
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
          delete data._id;
          delete data.uid;
          dispatch(actions.setGetUserByUserName(data))
          dispatch(actions.setBuisnessToServer(data))
          // dispatch(actions.set_Buisness_Id(''))
        })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}


export const getLastBuisness = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GET_LAST_BUISNESS') {
    // setOldBuisness(getState().buisnessReducer.buisness)
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/getLastBuisness`
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
          dispatch(actions.setGetCurrenttBuisness(data))
          // dispatch(actions.setGetAllBuisness(data))
          // dispatch(actions.setBuisnessId(data._id))
          dispatch(actions.setGetBusiness(data._id))
          dispatch(actions.getAllProduct(data._id))
        })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}