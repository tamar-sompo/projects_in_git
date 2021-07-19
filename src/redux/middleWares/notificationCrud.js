
import $ from 'jquery';
import { actions } from '../actions/All_actions';

function checkPermission(result) {
    return new Promise((resolve, reject) => {
        if (result.status === "401") {
            result.routes ?
                window.location.assign(`https://dev.accounts.codes/finance/login‏?des=${result.des}'&routes='${result.routes}`) :
                window.location.assign(`https://dev.accounts.codes/finance/login?des=${result.des}`)
            reject(false)
        }
        resolve(true)
    })
}

export const sendNotificationToAll = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SEND_NOTIFICATION_TO_ALL') {
        console.log('in send notification')
        // const notification=action.payload
        const userDesktopToken = action.payload
        console.log("userDesktopTokenNotif", userDesktopToken)
        let body = {
            "title": "An invoice has been created in your finance account",
            //  "body": `https://finance.leader.codes/${getState().publicReducer.userName}/view/${getState().invoiceReducer.invoiceSave.invoice._id}`,
            "body": "Your Box-account has been notified of invoice creation",
            "icon": "https://files.codes/uploads/ruthCohen/img/1623048638069__Artboard – 3.png",
            "fcmToken": userDesktopToken
        }
        console.log('notification', body)
        let urlData = `https://finance.leader.codes/api/${getState().publicReducer.userName}/notification`;
        console.log('urlDatanoti', urlData)
        $.ajax({
            url: urlData,
            type: 'POST',
            headers: {
                authorization: getState().publicReducer.tokenFromCookies
            },
            // data: notification,
            data: body,
            // data: JSON.stringify(body),
            success: function (result) {
                console.log("success send notification!!", result)
            },
            error: function (err) {
                checkPermission(err).then((res) => { })
            }
        })
    }
    return next(action)
}




export const fcmToken = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_FCMTOKEN') {
        console.log("not1fcmToken")
        let urlData = `https://dev.accounts.codes/api/${getState().publicReducer.userName}`;
        console.log("urlData", urlData)
        $.ajax({
            url: urlData,
            method: 'GET',
            headers: {
                authorization: getState().publicReducer.tokenFromCookies
            },
            withCradentials: true,
            async: false,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: (user) => {
                console.log("not2dataSucsessGetUserByUserName", user)
                checkPermission(user).then((ifOk) => {
                    console.log("not3desktopFcmToken", user.user.desktopFcmToken)
                    // dispatch(actions.setdesktopFcmToken(user.user.desktopFcmToken));
                    dispatch(actions.setdesktopFcmToken(user.user.desktopFcmToken));
                    // dispatch(actions.setdesktopFcmToken());
                    dispatch(actions.sendNotificationToAll(user.user.desktopFcmToken));
                })
            },
            error: (err) => {
                console.log("error", err)
            },
        });
    }
    return next(action);
}