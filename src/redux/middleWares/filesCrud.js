
import $ from 'jquery'
import { ModalBody } from 'react-bootstrap'
// import invoice from '../../components/Invoice/invoice';
import { actions } from '../../redux/actions/All_actions'



export const uploadImage = ({ dispatch, getState }) => next => action => {
  debugger
  if (action.type === 'SET_IMAGE') {
    // var fileToUpload = $("#uploadInput")[0].files[0];
    var myFile = new FormData();
    myFile.append("file", action.payload.image);

    $.ajax({
      type: "POST",
      url: "https://files.codes/api/" + getState().publicReducer.userName + "/upload",
      headers: { Authorization: getState().publicReducer.tokenFromCookies },
      data: myFile,
      processData: false,
      contentType: false,

      success: function (response) {
        console.log('res', response)
        // checkPermission(response).then((ifOk) => {
        // dispatch(actions.setUser(response))
        // })
        if (action.payload.to === "product") {
          console.log(action.payload.to)
          dispatch(actions.setNewProductTable({ key:"images" , value: response.data.url}))
        }
        // dispatch(actions.setImgProduct(response.data.url))}
        if (action.payload.to === "logo") {
          console.log(actions.payload.to)

          //    else
          dispatch(actions.setUpdateInvoiceFields({ key: 'imgLogo', value: response.data.url }))
        }
        if (action.payload.to === "backgroundImg") {
          // console.log(actions.payload.to)
          // if(invoice.imageFrame)

          //    else
          dispatch(actions.setUpdateInvoiceFields({ key: 'imageFrame', value: response.data.url }))
        }
        if (action.payload.to === "buisness") {
          dispatch(actions.setBuisness({ key: 'imgLogo', value: response.data.url }))
        }
        if (action.payload.to === "buisnessImg") {
          dispatch(actions.setUpdateBusiness({ key: 'imgLogo', value: response.data.url }))
        }
        if (action.payload.to === "design") {
          console.log(action.payload.to)
          dispatch(actions.setItemData(response.data.url));
        }
        console.log("success response", response);

        // console.log(response.data.url + "okImage");
      },
      error: function (err) {

      }
    });
  }
  return next(action);
}
