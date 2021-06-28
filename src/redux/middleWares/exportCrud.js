import { faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { ModalBody } from 'react-bootstrap'
import { actions } from '../../redux/actions/All_actions'

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


export const sendLinkToMail = ({ dispatch, getState }) => next => action => {
  console.log("mail")
  if (action.type === 'SET_SEND_LINK_TO_EMAIL') {
    console.log("mail2")
    let userName = getState().publicReducer.userName;
    let invoiceSave = getState().invoiceReducer.invoiceSave.invoice
    console.log(userName, invoiceSave)
    var url = `https://finance.leader.codes/${userName}/view/${invoiceSave._id}`;
    console.log("url", url)
    let text = getState().exportInvoiceReducer.emailDetails.html
    let html = `${text} <br /> ${url}`
    const email = {
      from: `${userName}@mails.codes`,
      to: getState().exportInvoiceReducer.emailDetails.to,
      subject: getState().exportInvoiceReducer.emailDetails.subject,
      html: html
    }
    console.log("eemail", email)
    fetch(`https://mails.codes/mail/sendEmail`, {
      method: 'POST',
      headers: {
        Authorization: "secretKEY@2021",
        Accept: 'appylication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json()).then((res) => {
        console.log("resJsonFromSendEmail", res.statusCode)
        dispatch(actions.setSuccessSendEmail("true"))
      })
      .catch((err) => {
        console.log("errorFromMail", err)
      })
  }
  return next(action);
}