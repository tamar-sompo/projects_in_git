// import $ from 'jquery'
// import { ModalBody } from 'react-bootstrap'
// import { actions } from '../../redux/actions/All_actions'

// function checkPermission(result) {
//   return new Promise((resolve, reject) => {
//     if (result.status == "401") {
//       result.routes ?
//         window.location.assign(`https://dev.leader.codes/login?des=${result.des}'&routes='${result.routes}`) :
//         window.location.assign(`https://dev.leader.codes/login?des=${result.des}`)
//       reject(false)
//     }
//     resolve(true)
//   })
// }

// export const getAllProducts = ({ dispatch, getState }) => next => action => {
//     "p")
//   let url = 'https://finance.leader.codes/allProducts/DYc3VUmEHScqaZBw300lv89fna82'
//   if(action.type === "GET_ALL_PRODUCT")
//   {
//       "productsssssssssss")
//     return fetch(url, {
//       method: 'GET',
//       headers: {
//         // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzeXhoOTQwNnJ3ZkNYNFBTQnh3NmtoWFNGZ0UyIiwiZW1haWwiOiJjaGVkdmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwMDE3MzgyfQ.7UzIXce8QO-Tn6uLWgVOmiyOv0pXWHse8KbZ9INc9mU"
//         // ,
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//     }).then((res) => res.json()).then((resJson) => {
//       // checkPermission(resJson).then((ifOk) => {
//       //    dispatch({ type: 'GET_ALL_CONTACT_BY_USER', payload:resJson  })
//       // })
//       dispatch(actions.setAllProducts(resJson));
//   }).catch((err) => {
//         err)
//     })
//   }
//   return next(action);
//   }
  // export const  deleteProductbyID=({ dispatch, getState }) => next => action => {
  //   let id_product=action.payload
  //   let url = `https://finance.leader.codes/deleteProduct/${id_product}`
  //   if(action.type === "DELETE_PRODUCT")
  //   {
  //     return fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzeXhoOTQwNnJ3ZkNYNFBTQnh3NmtoWFNGZ0UyIiwiZW1haWwiOiJjaGVkdmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwMDE3MzgyfQ.7UzIXce8QO-Tn6uLWgVOmiyOv0pXWHse8KbZ9INc9mU"
  //         // ,
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //     }).then((res) => res.json()).then((resJson) => {
  //       // dispatch(actions.getAllProduct());
  //   }).catch((err) => {
  //         err)

  //     })
  //   }
  //   return next(action);
  //   }


    // export const  editProductbyID=({ dispatch, getState }) => next => action => {
    //     action.payload)
    //   let id_product=action.payload
    //   let url = `https://finance.leader.codes/editProduct/${id_product}`
    //   if(action.type === "EDIT_PRODUCT")
    //   {
    //     return fetch(url, {
    //       method: 'POST',
    //       headers: {
    //         // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzeXhoOTQwNnJ3ZkNYNFBTQnh3NmtoWFNGZ0UyIiwiZW1haWwiOiJjaGVkdmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwMDE3MzgyfQ.7UzIXce8QO-Tn6uLWgVOmiyOv0pXWHse8KbZ9INc9mU"
    //         // ,
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       // body:json.stringify()
    //     }).then((res) => res.json()).then((resJson) => {
    //       // dispatch(actions.getAllProduct());
    //   }).catch((err) => {
    //         err)

    //     })
    //   }
    //   return next(action);
    //   }
// export const getContactById = ({ dispatch, getState }) => next => action => {

//   if (action.type === 'GET_CONTACT_BY_ID') {
//     const id = action.payload
//     //  ;
//     return fetch(`https://api.dev.leader.codes/blabla101/getContact/${id}`
//       , {
//         method: 'GET',
//         headers: {
//           Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzaW1kc01ycmNKZHBRZ3RhOGtnWHlRQmRERnkyIiwiZW1haWwiOiJjdG9AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwNDM3MDcxfQ.vn3nemrfKrW2TKQqwtkIoyaRZRjS8JBEhTtmIWzdc04',
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//         }
//       }).then((res) => res.json()).then((resJson) => {
//          
//           "ressss",resJson);
//          ;
//         dispatch({ type: "SET_DETAILS_CONTACT", payload: resJson });
//       }).catch((err) => {
//           err)
//       })

//   }
//   return next(action);
// }
// export const postnewContact = ({ dispatch, getState }) => next => action => {

//   if (action.type === 'SET_NEW_CONTACT') {
//       "rrrrrrrrrrr")
//     const newcontact = getState().form.values
//     const newContact1 = action.payload.values;
//     const userName = 'chedva'
//       newContact1)

//     return fetch("http://api.dev.leader.codes/chedva/saveGoogleContacts"
//       , {
//         method: 'POST',
//         headers: {
//           Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzeXhoOTQwNnJ3ZkNYNFBTQnh3NmtoWFNGZ0UyIiwiZW1haWwiOiJjaGVkdmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwMDE3MzgyfQ.7UzIXce8QO-Tn6uLWgVOmiyOv0pXWHse8KbZ9INc9mU',
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newContact1)

//       }).then((res) => res.json()).then((resJson) => {
//           resJson);
//         dispatch(actions.setNewContact(resJson));

//       }).catch((err) => {
//           err)
//       })

//   }
//   return next(action);

// }
// export const getInvoicesbyIdb=({ dispatch, getState }) => next => action => {
//   if (action.type === 'GET_ALLINVOICES_BY_IDB') {

//     return new Promise((resolve, reject) => {
//       // DYc3VUmEHScqaZBw300lv89fna82
//       // let userId = "simdsMrrcJdpQgta8kgXyQBdDFy2"
//        ;
//       let urlData = "https://finance.leader.codes/getAllInvoicesForBuisness/603f53b49545978cd254f47a" 
//       $.ajax({
//         // headers: { Authorization: jwtFromCookie },
//         url: urlData,
//         type: 'GET',
//         withCradentials: true,
//         async: false,
//         contentType: "application/json; charset=utf-8",
//         dataType: 'json',
//         success: function (allInvoices) {
//            ;
//             "all",allInvoices)
//           dispatch(actions.setAllInvoices(allInvoices))
//         },

//       });
//     })
//   }
//   return next(action);
// }

// export const getFromServer = ({ dispatch, getState }) => next => action => {
//     "invoices")
//   if (action.type === 'GET_ALLINVOICES') {
//       "invoicessss")
//     return new Promise((resolve, reject) => {
//       // DYc3VUmEHScqaZBw300lv89fna82
//       // let userId = "simdsMrrcJdpQgta8kgXyQBdDFy2"
//        ;
//       let urlData = "https://finance.leader.codes/gyVR6pQYwfPUDYztGfv3Rmsy3Rv1" 
//       $.ajax({
//         // headers: { Authorization: jwtFromCookie },
//         url: urlData,
//         type: 'GET',
//         withCradentials: true,
//         async: false,
//         contentType: "application/json; charset=utf-8",
//         dataType: 'json',
//         success: function (allInvoices) {
//            ;
//             "all",allInvoices)
//           dispatch(actions.setAllInvoices(allInvoices))
//         },

//       });
//     })
//   }
//   return next(action);
// }

// export const getAllReciptes = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'GET_ALLRECIPRES') {
//     return new Promise((resolve, reject) => {
//       let userId = "DYc3VUmEHScqaZBw300lv89fna82"
//       let urlData = "https://finance.leader.codes/recipte/" + userId
//       $.ajax({
//         // headers: { Authorization: jwtFromCookie },
//         url: urlData,
//         type: 'GET',
//         withCradentials: true,
//         async: false,
//         contentType: "application/json; charset=utf-8",
//         dataType: 'json',
//         success: function (allReciptes) {
//           dispatch(actions.setAllReciptes(allReciptes))
//         },

//       });
//     })
//   }
//   return next(action);
// }


// export const getAllShippings = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'GET_ALLSHIPPINGS') {
//     return new Promise((resolve, reject) => {
//       let userId = "DYc3VUmEHScqaZBw300lv89fna82"
//       let urlData = "https://finance.leader.codes/shipping/" + userId
//       $.ajax({
//         // headers: { Authorization: jwtFromCookie },
//         url: urlData,
//         type: 'GET',
//         withCradentials: true,
//         async: false,
//         contentType: "application/json; charset=utf-8",
//         dataType: 'json',
//         success: function (allShippings) {
//           dispatch(actions.setAllShipping(allShippings))
//         },
//       });
//     })
//   }
//   return next(action);
// }



// export const getallAccep = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'GET_ALLACCEP') {
//     return new Promise((resolve, reject) => {
//       let userId = "DYc3VUmEHScqaZBw300lv89fna82"
//       let urlData = "https://finance.leader.codes/accep/" + userId
//       $.ajax({
//         // headers: { Authorization: jwtFromCookie },
//         url: urlData,
//         type: 'GET',
//         withCradentials: true,
//         async: false,
//         contentType: "application/json; charset=utf-8",
//         dataType: 'json',
//         success: function (allAccep) {
//             "success")
//           dispatch(actions.setAllAccep(allAccep))
//         },
//       });
//     })
//   }
//   return next(action);
// }


// export const getLastInvoicePublicNote = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'GET_PUBLICNOTE') {
//     return new Promise((resolve, reject) => {
//       let userId = "DYc3VUmEHScqaZBw300lv89fna82"
//       let urlData = "https://finance.leader.codes/last/" + userId
//       $.ajax({
//         // headers: { Authorization: jwtFromCookie },
//         url: urlData,
//         type: 'GET',
//         withCradentials: true,
//         async: false,
//         contentType: "application/json; charset=utf-8",
//         dataType: 'json',
//         success: function (lastInvoice) {
//           dispatch(actions.setPublicNote(lastInvoice.publicNotes))
//         },
//       });
//     })
//   }
//   return next(action);
// }
// export const getBuisnessbyId = ({ dispatch, state }) => next => action => {
//   //  ;
//   // userId=action.payload;
//   // let userId = "DYc3VUmEHScqaZBw300lv89fna82"
//   //  let userName="chedva2"
//   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzeXhoOTQwNnJ3ZkNYNFBTQnh3NmtoWFNGZ0UyIiwiZW1haWwiOiJjaGVkdmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwMDE3MzgyfQ.7UzIXce8QO-Tn6uLWgVOmiyOv0pXWHse8KbZ9INc9mU
//   let url = `https://finance.leader.codes/getBuinessById/6040b0205a718e4cc48af1b8`
//   //  ;
//   if (action.type === 'GET_BUSINESS_BY_ID') {

//     return fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzaW1kc01ycmNKZHBRZ3RhOGtnWHlRQmRERnkyIiwiZW1haWwiOiJjdG9AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwNDM3MDcxfQ.vn3nemrfKrW2TKQqwtkIoyaRZRjS8JBEhTtmIWzdc04"
//         ,
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//     }).then((res) => res.json()).then((resJson) => {
//       // checkPermission(resJson).then((ifOk) => {
//       //    dispatch({ type: 'GET_ALL_CONTACT_BY_USER', payload:resJson  })
//       // })
//       dispatch(actions.setBusiness(resJson))
//     }).catch((err) => {
//         err)
//     })
//   }
//   return next(action);
// }

// export const getAllCustomersToUser = ({ dispatch, state }) => next => action => {
//   // userId=action.payload;
//   // let userId = "DYc3VUmEHScqaZBw300lv89fna82"
//   //  let userName="chedva2"
//   // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzeXhoOTQwNnJ3ZkNYNFBTQnh3NmtoWFNGZ0UyIiwiZW1haWwiOiJjaGVkdmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwMDE3MzgyfQ.7UzIXce8QO-Tn6uLWgVOmiyOv0pXWHse8KbZ9INc9mU
//   let url = "https://api.dev.leader.codes/blabla101/getContacts/?includesConversations=false"
//   if (action.type === 'GET_ALL_CONTACT_BY_USER') {
//       "all_contact")

//     return fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzaW1kc01ycmNKZHBRZ3RhOGtnWHlRQmRERnkyIiwiZW1haWwiOiJjdG9AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwNDM3MDcxfQ.vn3nemrfKrW2TKQqwtkIoyaRZRjS8JBEhTtmIWzdc04"
//         ,
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//     }).then((res) => res.json()).then((resJson) => {
//       // checkPermission(resJson).then((ifOk) => {
//       //    dispatch({ type: 'GET_ALL_CONTACT_BY_USER', payload:resJson  })
//       // })
//         "all_contact", resJson);
//       dispatch(actions.setAllContacts(resJson))
//     }).catch((err) => {
//         err)
//     })
//   }
//   return next(action);
// }

// export const getCompany = ({ dispatch, getState }) => next => action => {
//   let userName = "ruthCohen"
//   let url = "https://finance.leader.codes/getUserByUserName/" + userName
//   if (action.type === 'SET_USER') {
//       "crudddhhh")
//     // const data= getState().CRMReducer;
//     // const company=action.payload.values
//     // let userId = "DYc3VUmEHScqaZBw300lv89fna82"
//     return fetch(url).then((res) => res.json()).then((resJson) => {
//       dispatch({ type: "SET_USER_EDIT", payload: resJson })
//     }).catch((err) => {
//         err)
//     })
//   }
//   return next(action);
// }


// export const updateCompany = ({ dispatch, getState }) => next => action => {
//   let userName = "ruthCohen"
//   let id = "KLZnS9AS0tg4OP4rlkwNOQOv5e72"
//   let url = "https://finance.leader.codes/patchUser/" + id
//     "editedit")
//   if (action.type === 'SET_COMPANY_EDIT') {
//     const data = getState().CRMReducer;
//     const company = action.payload.values;
//       "gggggg", JSON.stringify(company))
//     // let userId = "DYc3VUmEHScqaZBw300lv89fna82"
//     return fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8',
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(company)
//     }).then((res) => res.json()).then((resJson) => {
//         "editCompany", resJson);
//       dispatch(action.setCompany(resJson))
//     }).catch((err) => {
//         "errorReact", err)
//     })
//   }
//   return next(action);
// }

// export const uploadImageLogo = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'SET_LOGO') {
//     var myFile = new FormData()
//       action.payload)
//       "myFile", myFile)
//     myFile.append("file", action.payload)
//       "append", myFile)
//     $.ajax({
//       type: "POST",
//       url: "https://files.leader.codes/api/KLZnS9AS0tg4OP4rlkwNOQOv5e72/upload",
//       headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8" },
//       data: myFile,
//       processData: false,
//       contentType: false,
//       success: function (response) {
//         // checkPermission(response).then((ifOk) => {
//         // dispatch(actions.setUser(response))
//         // })
//         // dispatch(SET_LOGO_TO_INVOICE(response.data.url));
//         dispatch(actions.setLogoToInvoice(response.data.url));
//           "success response logo", response.data.url);
//       },
//       error: function (err) {
//         alert('please try again later upload logo');
//       }
//     });
//   }
//   return next(action);
// }


// export const uploadImageSignature = ({ dispatch, getState }) => next => action => {
//     "img")
//   if (action.type === 'SET_SIGNATURE_TO_SERVER') {
//     // if (action.type === 'setSignatureToServer') {
//       "img2")
//     // let e = action.payload
//     // const reader1 = new FileReader()
//     // reader1.readAsDataURL(action.payload)
//     // var fileToUpload = 
//     var myFile = new FormData()
//     myFile.append("file", action.payload)
//     $.ajax({
//       type: "POST",
//       // url: "https://files.leader.codes/api/" + getState().managerComponent.managerComponent.userId + "/upload",
//       url: "https://files.leader.codes/api/KLZnS9AS0tg4OP4rlkwNOQOv5e72/upload",
//       headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8" },
//       data: myFile,
//       processData: false,
//       contentType: false,
//       success: function (response) {
//         // checkPermission(response).then((ifOk) => {
//         // dispatch(actions.setUser(response))
//         // })
//         dispatch(actions.setSignatureToInvoice(response.data.url));
//           "responeToDispatch", response.data.url);
//       },
//       error: function (err) {
//         alert('please try again');
//       }
//     });
//   }
//   return next(action);
// }

// export const sendLinkToMail = ({ dispatch, getState }) => next => action => {
//     "mail")
//   if (action.type === 'SET_SEND_LINK_TO_EMAIL') {
//       "mail-action")
//     var url = (action.payload)
//       "url", url)
//     // var userName = (url.pathname.split('/')[1]);
//     var userName = "ruthCohen"
//       "userName", userName)
//     var mailTo = "r0527645207@gmail.com";
//     // var mailTo = props.contact.email;
//     //   "mailTo", mailTo)
//     fetch('https://finance.leader.codes/' + userName + '/sendEmail', {
//       method: 'POST',
//       headers: {
//         Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8",
//         Accept: 'appylication/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "body": url, "mailTo": mailTo, "from": userName + "@leader.codes"
//         , "subject": "Your Tax-Invoice"
//       }),
//     })
//       .then((res) => res.json()).then((resJson) => {
//           "resJsonFromSendEmail", resJson)
//         // dispatch({ type: 'SET_EMAILMESSAGE', payload: resJson })
//       })
//       .catch((err) => {
//           "errorFromMail", err)
//         // dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });
//       })
//   }
//   return next(action);
// }

// export const showinvoice=({ dispatch, getState }) => next => action => {
//   if (action.type === 'SHOW_INVOICE') {
//    let id_invoice=action.payload
//     fetch(`https://finance.leader.codes/show/${id_invoice}`, {
//       method: 'GET',
//       headers: {
//         Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8",
//         Accept: 'appylication/json',
//         'Content-Type': 'application/json'
//       },

//     })
//       .then((res) => res.json()).then((resJson) => {
//          dispatch(actions.setInvoiceShow(resJson))
//         // dispatch({ type: 'SET_EMAILMESSAGE', payload: resJson })
//       })
//       .catch((err) => {
//           err)
//         // dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });
//       })
//   }
//   return next(action)
// }
// export const saveInvoice = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'SET_SAVE_INVOICE') {
//     let invoice = action.payload;
//       "invoice", invoice)
//       "SAVE-action")
//     fetch('https://finance.leader.codes/KLZnS9AS0tg4OP4rlkwNOQOv5e72', {
//       method: 'POST',
//       headers: {
//         // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8",
//         Accept: 'appylication/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ invoice }),
//     })
//       .then((res) => res.json()).then((resJson) => {
//           "resJsonFromSendEmail", resJson)
//         // dispatch({ type: 'SET_EMAILMESSAGE', payload: resJson })
//       })
//       .catch((err) => {
//           err)
//         // dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });
//       })
//   }
//   return next(action);
// }

// export const postNewProduct = ({ dispatch, getState }) => next => action => {

//   if (action.type === 'SET_NEW_PRODUCT_SERVER') {
//       "new product server", action.payload)
//     const newProduct = action.payload;
//     const uid = "KLZnS9AS0tg4OP4rlkwNOQOv5e72"
//     const buisnessId="603f53b49545978cd254f47a"
//       "newproductcrud", newProduct)




//     return fetch(`https://finance.leader.codes/newProductForBuisness/${buisnessId}`
//       , {
//         method: 'POST',
//         headers: {
//           // Authentication: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8',
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           newProduct
//         })

//       }).then((res) => {
//           "res",res)
//         res.json()
//       })
//       .then(
//         (resJson) => {
//             "newproductcrudcrudcrud", resJson);
//           dispatch(actions.setAddProduct(resJson));

//         }).catch((err) => {
//             "errorrrrrrproduct");
//             err)
//         })
//   }
//   return next(action);

// }



// export const uploadImageLogo = ({ dispatch, getState }) => next => action => {
//   if (action.type === 'SET_LOGO') {
//     var myFile = new FormData()
//       action.payload)
//       "myFile", myFile)
//     myFile.append("file", action.payload)
//       "append", myFile)
//     $.ajax({
//       type: "POST",
//       url: "https://files.leader.codes/api/KLZnS9AS0tg4OP4rlkwNOQOv5e72/upload",
//       headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8" },
//       data: myFile,
//       processData: false,
//       contentType: false,
//       success: function (response) {

//         dispatch(actions.setLogoToInvoice(response.data.url));
//           "success response logo", response.data.url);
//       },
//       error: function (err) {
//         alert('please try again later upload logo');
//       }
//     });
//   }
//   return next(action);
// }




// export const uploadImage = ({ dispatch, getState }) => next => action => {
//     "uploadImg")
//   // if (action.type === 'SET_LOGO_TO_FILES_SERVER') {
//   if (action.type === 'SET_IMAGE') {
//       "uploadImgAfterAction")
//       "action image", action.payload.image,action.payload.to )
//     // let e = action.payload
//     // const reader1 = new FileReader()
//     // reader1.readAsDataURL(action.payload)
//     // var fileToUpload = 

//     var myFile = new FormData()
//       "myFile", myFile)
//     myFile.append("file", action.payload.image)
//       "append")
//     $.ajax({
//       type: "POST",
//       // url: "https://files.leader.codes/api/" + getState().managerComponent.managerComponent.userId + "/upload",
//       url: "https://files.leader.codes/api/KLZnS9AS0tg4OP4rlkwNOQOv5e72/upload",
//       headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8" },
//       data: myFile,
//       processData: false,
//       contentType: false,
//       success: function (response) {
//           'res',response)
//         // checkPermission(response).then((ifOk) => {
//         // dispatch(actions.setUser(response))
//         // })
//         if(action.payload.to==="product"){
//             action.payload.to)
//           dispatch(actions.setNewProduct({ ["images"]: response.data.url }))}
//           // dispatch(actions.setImgProduct(response.data.url))}
//           if(action.payload.to==="logo"){
//               action.payload.to)
//             // props.setNewProduct({ ["images"]:  })

//             dispatch(actions.setLogo(response.data.url))}
//         if(action.payload.to==="design"){
//               action.payload.to)
//           dispatch(actions.setItemData(response.data.url));}
//           "success response", response);

//         //   response.data.url + "okImage");
//       },
//       error: function (err) {
//         alert('please try again later');
//       }
//     });
//   }
//   return next(action);
// }



// export const uploadImageD = ({ dispatch, getState }) => next => action => {
//     "uploadImg")
//   // if (action.type === 'SET_LOGO_TO_FILES_SERVER') {
//   if (action.type === 'SET_IMAGE_D') {
//       "uploadImgAfterAction")
//       "action image", action.payload.image,action.payload.to )
//     // let e = action.payload
//     // const reader1 = new FileReader()
//     // reader1.readAsDataURL(action.payload)
//     // var fileToUpload = 
//     var myFile = new FormData()
//       "myFile", myFile)
//         'action.payload.image.img',action.payload.image.img)
//     myFile.append("file", action.payload.image.img)

//     // myFile.append("file", action.payload.image)
//       "append")
//     $.ajax({
//       type: "POST",
//       // url: "https://files.leader.codes/api/" + getState().managerComponent.managerComponent.userId + "/upload",
//       url: "https://files.leader.codes/api/KLZnS9AS0tg4OP4rlkwNOQOv5e72/upload",
//       headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8" },
//       data: myFile,
//       processData: false,
//       contentType: false,
//       success: function (response) {
//           'res',response)
        // checkPermission(response).then((ifOk) => {
        // dispatch(actions.setUser(response))
        // })

//         if(action.payload.to=="design"){
//           action.payload.to)
//           "url",response.data.url)
//         const image1={img:response.data.url, title:action.payload.image.title}

//           dispatch(actions.setItemData(image1));}
//           "success response", response);

//         //   response.data.url + "okImage");
//       },
//       error: function (err) {
//         alert('please try again later');
//       }
//     });
//   }
//   return next(action);
// }


// export const sendLinkToMail = ({ dispatch, getState }) => next => action => {
//     "mail")
//   if (action.type === 'SET_SEND_LINK_TO_EMAIL') {
//       "mail-action")
//     // var url = (action.payload)
//     //   "url", url)
//     // var userName = (url.pathname.split('/')[1]);
//     var userName = "ruthCohen"
//       "userName", userName)
//     var mailTo = action.payload.mail;
//     // var mailTo = props.contact.email;
//     //   "mailTo", mailTo)
//     fetch('https://finance.leader.codes/' + userName + '/sendEmail', {
//       method: 'POST',
//       headers: {
//         Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8",
//         Accept: 'appylication/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "body": url, "mailTo": mailTo, "from": userName + "@leader.codes"
//         , "subject": "Your Tax-Invoice"
//       }),
//     })
//       .then((res) => res.json()).then((resJson) => {
//           "resJsonFromSendEmail", resJson)
//         // dispatch({ type: 'SET_EMAILMESSAGE', payload: resJson })
//       })
//       .catch((err) => {
//           "errorFromMail", err)
//         // dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });
//       })
//   }
//   return next(action);
// }




// export const sendMail = ({ dispatch, getState }) => next => action => {
//     "mail")
//   if (action.type === 'SEND_MAIL') {
//       "mail-action")
//     // var userName = (url.pathname.split('/')[1]);
//     var userName = "ruthCohen"
//       "userName", userName)
//     var mailTo = "shirags321@gmail.com";
//     var whenSend={
//       "second":0,
//       "minute":0,
//       "hour":0,
//       "dayOfMonth":0,
//       "month":0,
//       "dayOfWeek":0
//     }
    // var mailTo = props.contact.email;
    //   "mailTo", mailTo)
//     fetch('https://finance.leader.codes/' + userName + '/sendEmailOtomat', {
//       method: 'POST',
//       headers: {
//         Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8",
//         Accept: 'appylication/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "whenSend":whenSend,
//         "body": 'abcd', "mailTo": mailTo, "from": userName + "@leader.codes"
//         , "subject": "Your Tax-Invoice"
//       }),
//     })
//       .then((res) => res.json()).then((resJson) => {
//           "resJsonFromSendEmail", resJson)
//         // dispatch({ type: 'SET_EMAILMESSAGE', payload: resJson })
//       })
//       .catch((err) => {
//           "errorFromMail", err)
//         // dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });
//       })
//   }
//   return next(action);
// }

// export const createInvoiceOtomat= ({ dispatch, getState }) => next => action => {
//   if (action.type === 'CREATE_INVOICE') {
//       "create-action")
//     var uId = "KLZnS9AS0tg4OP4rlkwNOQOv5e72"
//       "payload",action.payload)
//     // var mailTo = props.contact.email;
//     //   "mailTo", mailTo)
//     fetch(`https://finance.leader.codes/KLZnS9AS0tg4OP4rlkwNOQOv5e72/sendEmailOtomat`, {
//       method: 'POST',
//       headers: {
//         // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJLTFpuUzlBUzB0ZzRPUDRybGt3Tk9RT3Y1ZTcyIiwiZW1haWwiOiJydXRoY29oZW5AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA5NjYwOTMwfQ.hPceBLHdb30KeMPZVljoBUgTZSuRQYxnCCZhJ9ZZ3f8",
//         Accept: 'appylication/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "date":action.payload.time,
//         "invoice":action.payload.invoice
//         // "whenSend":whenSend
//       }),
//     })
//       .then((res) => res.json()).then((resJson) => {
//           "resJsonFromSendEmail", resJson)
//         dispatch(actions.setPushInvoices(resJson));
//         // dispatch({ type: 'SET_EMAILMESSAGE', payload: resJson })
//       })
//       .catch((err) => {
//           "errorFromMail", err)
//         // dispatch({ type: "SET_ALERTSTATUSE", payload: 6 });
//       })
//   }
//   return next(action);
// }

// export const updateContat = ({dispatch, getState}) => next => action => {  
//   const userName =  getState().publicReducer.userName
//   const TokenToString= getState().publicReducer.tokenFromCookies;
//   if(action.type=='UPDATE_CONTACT'){
//     // let contact = Object.assign({},getState().contactDetails.contactDetails);
//     // if (result)
//     //     contact.thumbnail = result;
//     const contactId = getState().invoiceReducer.contactId;
//     return fetch('https://api.dev.leader.codes/' + userName + '/editContact/' + contactId, {
//         method: 'PUT',
//         headers: {
//             Authorization: TokenToString,
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(action.payload)
//     }).
//         then((response) => {
//             if (response.status != 200) {
//                 response.json().then(function (object) {
//                       object.type, object.message)
//                                        })
//             }
//             else {
//                 response.json().then(function (resJson) {
//                     checkPermission(resJson).then((ifOk) => {
//                         "successsss",resJson)
//                         dispatch(actions.setAlert({
//                             alertType: 'success',
//                             message: resJson.message,
//                             openAlert: true,
//                         }))
//                     })
//                 })
//             }

//   })
// }
// return next(action);
// }


// export const createContact = ({ dispatch, getState}) => next => action => {
//   const userName =  getState().publicReducer.userName
//   const TokenToString= getState().publicReducer.tokenFromCookies;
//   const contactId=""
//   //   id)
//   if (action.type == "CREATE_CONTACT") {
//     const contactDetails = action.payload
//       "userName", userName, "TokenToString", TokenToString)
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
//       return fetch(`https://api.dev.leader.codes/${userName}/createContact`, {
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
//                     "objecttttt",object.type, object.message)
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
//                       // contactId = resJson.newContact._id;
//                         "ffff", resJson)
//                       dispatch(actions.setUpdateInvoiceFields({key:"contact",value:resJson.newContact.email}))
//                       dispatch(actions.getAllContactByUser())
//                       // dispatch(actions.setNewContact(resJson))


//                   })
//               })
//           }
//       })

//           .catch((err) => {
//                 err)
//           })
//   }
//   return next(action);
// }