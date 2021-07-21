import { actions } from '../../redux/actions/All_actions'

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


export const sendLinkToMail = ({ dispatch, getState }) => next => action => {

  if (action.type === 'SET_SEND_LINK_TO_EMAIL') {
    let userName = getState().publicReducer.userName;
    let invoiceSave = getState().invoiceReducer.invoiceSave.invoice;
    const linkPayToContact = getState().paymentsReducer.linkPayToContact;
    var url = `https://finance.leader.codes/${userName}/view/${invoiceSave._id}`;
    let text = getState().exportInvoiceReducer.emailDetails.html
    let textToPaypal = "Click here to pay"
    // let html
    // if(linkPayToContact){
    let html = `${text} <br /> ${url} <br /> <br /> <br />
       <a href=${linkPayToContact} class="btn btn-primary">${textToPaypal}</a>
       `
    // }
    //  ${textToPaypal} <br /> ${linkPayToContact}`
    // }
    // else{
    //  html = `${text} <br /> ${url}`
    // }
    const email = {
      from: `${userName}@mails.codes`,
      to: getState().exportInvoiceReducer.emailDetails.to,
      subject: getState().exportInvoiceReducer.emailDetails.subject,
      html: html
    }
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
        dispatch(actions.setSuccessSendEmail("true"))
        dispatch(actions.setNameAction("The Email Send Success!"))
      })
      .catch((err) => {
      })
  }
  return next(action);
}