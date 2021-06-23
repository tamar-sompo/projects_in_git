
import $ from 'jquery';
import { actions } from '../actions/All_actions';

function checkPermission(result) {
  return new Promise((resolve, reject) => {
    if (result.status == "401") {
      result.routes ?
        window.location.assign(`https://dev.acoounts.leader.codes/login?des=${result.des}'&routes='${result.routes}`) :
        window.location.assign(`https://dev.accounts.leader.codes/login?des=${result.des}`)
      reject(false)
    }
    resolve(true)
  })
}

export const getContactToUserById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GET_CONTACT_BY_ID') {

    const id = action.payload;
    console.log("id", id)
    let userName = getState().publicReducer.userName;
    return fetch(`https://api.dev.leader.codes/${userName}/getContact/${id}`
      , {
        method: 'GET',
        headers: {
          Authorization: getState().publicReducer.tokenFromCookies,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json()).then((resJson) => {
        console.log("ressss", resJson);
        dispatch({ type: "SET_DETAILS_CONTACT", payload: resJson });

      }).catch((err) => {
        console.log(err)
      })
  }
  return next(action);
}

export const getAllContactsToUser = ({ dispatch, getState }) => next => action => {
  if (action.type === 'GET_ALL_CONTACT_BY_USER') {
    // let id = action.payload
    debugger
    console.log('llll')
    let userName = getState().publicReducer.userName
    console.log('llll', getState().publicReducer.userName, getState().publicReducer.tokenFromCookies)
    return fetch(`https://api.dev.leader.codes/${userName}/getContacts/?includesConversations=false`
      , {
        method: 'GET',
        headers: {
          Authorization: getState().publicReducer.tokenFromCookies,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json()).then((resJson) => {
        debugger
        dispatch(actions.setAllContacts(resJson))

        // dispatch(actions.setShowMessage(false))
      }).catch((err) => {
        console.log(err)
      })
  }
  return next(action);
}


// export const createContact = ({ dispatch, getState }) => next => action => {
//   const userName = "ruthkremer"
//   const TokenToString='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ0bUpSQVd3cTdGYkFnUjhudDlNT1U5dHdpZHkyIiwiZW1haWwiOiJydXRoa0BsZWFkZXIuY29kZXMiLCJpYXQiOjE2MTUzNjcyNDV9.c_IeZ8ylhJ1QvWWja_93VahZixyvGuBN23sIaY-4pxQ'
//   const contactId=""
//   // console.log(id)
//   if (action.type == "CREATE_CONTACT") {
//     const contactDetails = action.payload
//     console.log("userName", userName, "TokenToString", TokenToString)
//       // const contactDetails = getState().contactDetails;
//       const newContact = contactDetails
//       // const newContact = contactDetails.contactDetails;
//       const keys = Object.keys(newContact);
//       const nessary = ["conversations", "active", "starred", "waves", "email"]

//       let message = `<h5>The details of your new contact:</h5>
//       <table border="1" ><tr> <td><b>email:</b></td><td><a href='https://contacts.dev.leader.codes/${userName}?c=${newContact["email"]}'>${newContact['email']}</a></td></tr>`;
//       keys.forEach((key) => {
//           if (newContact[key] && !nessary.some(nessary => nessary == key))
//               message += `<tr> <td><b>${key}:<b/></td><td>${newContact[key]}</td></tr>`;
//       })
//       message += `</table>`;
//       // `https://api.dev.leader.codes/chedva/getContact/${id}`
//       return fetch('https://api.dev.leader.codes/ruthkremer/createContact', {
//           method: 'POST',
//           headers: {
//               Authorization: TokenToString,
//               Accept: 'application/json',
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//               "conversation": {
//                   "subject": "created new contact",
//                   "source": "Manual",
//                   "Readed": true
//               },
//               "wave": { "body": message, "from": "CRM@mail.leader.codes" },
//               "emailInfo": {
//                   "from": "CRM@mail.leader.codes",
//                   "to": userName + "@mail.leader.codes",
//                   "subject": "you create sucsses a new contact",
//                   "text": message
//               },
//               "contact": newContact,
//               "withConversation": true,
//               "source": { "type": "Manual" }
//           })
//       }).then((response) => {
//           if (response.status != 201) {
//               response.json().then(function (object) {
//                   console.log(object.type, object.message)
//                   // dispatch(actions.setAlert({
//                   //     alertType: 'error',
//                   //     message: object.message,
//                   //     openAlert: true,
//                   // }))
//               })
//           } else if (response.status === 201) {
//               response.json().then(function (resJson) {
//                   checkPermission(resJson).then((ifOk) => {
//                       // dispatch(actions.setAlert({
//                       //     alertType: 'success',
//                       //     message: resJson.message ? resJson.message : "ERROR!!",
//                       //     openAlert: true,
//                       // }))
//                       // dispatch(actions.setContactide(resJson.newContact._id));
//                       contactId = resJson.newContact._id;
//                       console.log("ffff", resJson)

//                   })
//               })
//           }
//       })

//           .catch((err) => {
//               console.log(err)
//           })
//   }
//   return next(action);
// }
export const updateContat = ({ dispatch, getState }) => next => action => {
  const userName = getState().publicReducer.userName
  const TokenToString = getState().publicReducer.tokenFromCookies;
  // const contact1={
  //     "contact":action.payload
  //   }

  if (action.type == 'UPDATE_CONTACT') {
    let contact = Object.assign({}, action.payload);
    // if (result)  
    const contact1 = {
      "contact": action.payload
    }
    const contactId = getState().invoiceReducer.contactId;
    const allC = getState().customerReducer.allContact;
    //     contact.thumbnail = result;

    return fetch('https://api.dev.leader.codes/' + userName + '/editContact/' + contactId, {
      method: 'PUT',
      headers: {
        Authorization: TokenToString,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact1)
    }).
      then((response) => {
        if (response.status != 200) {
          response.json().then(function (object) {
            console.log(object.type, object.message)
          })
        }
        else {
          response.json().then(function (resJson) {
            checkPermission(resJson).then((ifOk) => {
              console.log("successsss", resJson)
              let cIndex = allC.findIndex(x => x._id == contactId)
              dispatch(actions.editContact11({ i: cIndex, objectContact: resJson.result }))
              dispatch(actions.setUpdateInvoiceFields({ key: 'contact', value: resJson.result.email }))

              // dispatch(actions.getAllContactByUser())
              dispatch(actions.setAlert({
                alertType: 'success',
                message: resJson.message,
                openAlert: true,
              }))
              dispatch(actions.setFlagMessageContact(false))
              dispatch(actions.setFlagModal("successContact"))
              dispatch(actions.setShowMessage(false))
              dispatch(actions.setButtonClick(""))
              dispatch(actions. setModalBody(""))
            })
          })
        }

      })
  }
  return next(action);
}


export const createContact = ({ dispatch, getState }) => next => action => {
  const userName = getState().publicReducer.userName
  const TokenToString = getState().publicReducer.tokenFromCookies;
  const contactId = ""
  // console.log(id)
  if (action.type == "CREATE_CONTACT") {
    const contactDetails = action.payload
    console.log("userName", userName, "TokenToString", TokenToString)
    // const contactDetails = getState().contactDetails;
    const newContact = contactDetails
    // const newContact = contactDetails.contactDetails;
    const keys = Object.keys(newContact);
    const nessary = ["conversations", "active", "starred", "waves", "email"]

    let message = `<h5>The details of your new contact:</h5>
        <table border="1" ><tr> <td><b>email:</b></td><td><a href='https://contacts.dev.leader.codes/${userName}?c=${newContact["email"]}'>${newContact['email']}</a></td></tr>`;
    keys.forEach((key) => {
      if (newContact[key] && !nessary.some(nessary => nessary == key))
        message += `<tr> <td><b>${key}:<b/></td><td>${newContact[key]}</td></tr>`;
    })
    message += `</table>`;
    // `https://api.dev.leader.codes/chedva/getContact/${id}`
    return fetch(`https://api.dev.leader.codes/${userName}/createContact`, {
      method: 'POST',
      headers: {
        Authorization: TokenToString,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "conversation": {
          "subject": "created new contact",
          "source": "Manual",
          "Readed": true
        },
        "wave": { "body": message, "from": "CRM@mail.leader.codes" },
        "emailInfo": {
          "from": "CRM@mail.leader.codes",
          "to": userName + "@mail.leader.codes",
          "subject": "you create sucsses a new contact",
          "text": message
        },
        "contact": newContact,
        "withConversation": true,
        "source": { "type": "Manual" }
      })
    }).then((response) => {
      if (response.status != 201) {
        response.json().then(function (object) {
          console.log("objecttttt", object.type, object.message)
          // dispatch(actions.setAlert({
          //     alertType: 'error',
          //     message: object.message,
          //     openAlert: true,
          // }))
        })
      } else if (response.status === 201) {
        response.json().then(function (resJson) {
          checkPermission(resJson).then((ifOk) => {

            // dispatch(actions.setAlert({
            //     alertType: 'success',
            //     message: resJson.message ? resJson.message : "ERROR!!",
            //     openAlert: true,
            // }))
            // dispatch(actions.setContactide(resJson.newContact._id));
            // contactId = resJson.newContact._id;
            console.log("ffff", resJson)


            dispatch(actions.setUpdateInvoiceFields({ key: "contact", value: resJson.newContact.email }))
            dispatch(actions.setAddContact(resJson.newContact))
            // dispatch(actions.getAllContactByUser())
            dispatch(actions.setFlagMessageContact(false))
            dispatch(actions.setFlagModal("successContact"))
            dispatch(actions.setShowMessage(false))
            dispatch(actions.setButtonClick(""))
            dispatch(actions.setModalBody(""))
            // alert("oooo");
            // dispatch(actions.setNewContact(resJson))


          })
        })
      }
    })

      .catch((err) => {
        console.log(err)
      })
  }
  return next(action);
}