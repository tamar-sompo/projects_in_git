import $ from 'jquery';
// import { actions } from '../actions/action';
import { actions } from '../actions/All_actions';

export const newSystemWave = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_SYSTEM_WAVE') {
    let urlData = `https://api.dev.leader.codes/${getState().publicReducer.userName}/createSystemWave`
    let body = {
      "subject": "Invoice created",
      "body": `You can see the invice 
       ${<a href='https://leader.codes/login#'>at this link </a>}`,
      "to": 'leah@leader.codes',
      "from": "finance@noreply.leader.codes",
      "source": "Finance",
      "files": [
        // https://files.codes/uploads/michalgiladi/others/1618390184619__calendarIcon.svg
      ]
    }
    $.ajax({
      url: urlData,
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({ body }),
      success: function (data) {
        checkPermission(data).then((ifOk) => {
          console.log('box success', data)
        })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}

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

export const newBuisnessToUser = ({ dispatch, getState }) => next => action => {
  console.log("arrived to newBuisnessToUser crud")
  // if (action.type === 'SET_SEND_NEW_BUISNESS') 
  if (action.type === 'SET_BUISNESS_TO_SERVER') {

    console.log("setBuisness")
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/newBuisness`
    // let buisness = getState().buisnessReducer.newBuisness
    let buisness = action.payload;
    console.log("bbbbb", buisness)
    $.ajax({
      url: urlData,
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(buisness),
      success: (result) => {

        console.log("dresult", result)
        checkPermission(result).then((ifOk) => {
          console.log("okNewBuisness", result)
          dispatch(actions.setShow(true))
          dispatch(actions.setNameAction("Adding a business successfully"))
          dispatch(actions.setGetBusiness(result.buisness._id))
          dispatch(actions.setGeCurrenttBuisness(result.buisness))
          // dispatch(actions.setSaveInvoice("true"))
          dispatch(actions.setGetAllBuisness())
          dispatch(actions.getAllProduct(result.buisness._id))

          console.log("successDispatchNewBuisness", result)
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
  console.log("allBuisnessCrud")
  if (action.type === 'SET_GET_ALL_BUISNESS') {
    console.log("allBuisnessafterAction")
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/allBuisness`
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
        console.log("dataSucsessGetAllbuisness", data)
        checkPermission(data).then((ifOk) => {
          console.log("okGetAllBuisness", data)
          dispatch(actions.setAllBuisness(data))
          console.log("successDispatchAllBuisness", data)
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
    let update = getState().buisnessReducer.updateBusiness.id;
    let current = getState().buisnessReducer.currentBuisness._id;
    console.log("update", update)
    console.log("current", current)
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
        // checkPermission(data).then((ifOk) => {
        // dispatch(actions.setGetAllBuisness(data))
        // dispatch(actions.setUpDateBuisness({}))
        if (update == current) {
          dispatch(actions.getLastBuisness())
          console.log("currentUpdate")
          // }
          // console.log('success update business num ' + buisnessId)
        }
        // )
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
    let update = getState().buisnessReducer.updateBusiness.id;
    let current = getState().buisnessReducer.currentBuisness._id;
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
        console.log("removeBuisness", buisnessId)
        // {update == current?  dispatch(actions.getLastBuisness()):""}
        dispatch(actions.setGetAllBuisness())
        if (update == current) {
          dispatch(actions.getLastBuisness())
        }
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
        console.log("upDateBuisness", buisness)


        dispatch(actions.setGetCurrenttBuisness(buisness))

      },
    });
  }
  return next(action);
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
          delete data._id;
          delete data.uid;
          dispatch(actions.setGetUserByUserName(data))
          dispatch(actions.setBuisnessToServer(data))
          // dispatch(actions.set_Buisness_Id(''))
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


export const getLastBuisness = ({ dispatch, getState }) => next => action => {
  console.log("arriveToLastBuisness")
  if (action.type === 'GET_LAST_BUISNESS') {
    // setOldBuisness(getState().buisnessReducer.buisness)
    console.log("actionLastBuisness")
    let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/getLastBuisness`
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
        console.log("dataSucsessLastBuisness", data)
        checkPermission(data).then((ifOk) => {
          console.log("okGetLastBuisness", data)
          dispatch(actions.setGetCurrenttBuisness(data))
          // dispatch(actions.setGetAllBuisness(data))
          // dispatch(actions.setBuisnessId(data._id))
          dispatch(actions.setGetBusiness(data._id))
          dispatch(actions.getAllProduct(data._id))

          console.log("successDispatchLastBuisness", data._id)
        })
      },
      error: (err) => {
        console.log("error", err)
      },
    });
  }
  return next(action);
}