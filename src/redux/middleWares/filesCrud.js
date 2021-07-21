
import $ from 'jquery'
// import invoice from '../../components/Invoice/invoice';
import { actions } from '../../redux/actions/All_actions'



export const uploadImage = ({ dispatch, getState }) => next => action => {
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
        // checkPermission(response).then((ifOk) => {
        // dispatch(actions.setUser(response))
        // })
        if (action.payload.to === "product") {
          dispatch(actions.setNewProductTable({ key: "images", value: response.data.url }))
        }
        // dispatch(actions.setImgProduct(response.data.url))}
        if (action.payload.to === "logo") {
          dispatch(actions.setUpdateInvoiceFields({ key: 'imgLogo', value: response.data.url }))
        }
        if (action.payload.to === "backgroundImg") {
          dispatch(actions.setUpdateInvoiceFields({ key: 'imageFrame', value: response.data.url }))
        }
        if (action.payload.to === "buisness") {
          dispatch(actions.setBuisness({ key: 'imgLogo', value: response.data.url }))
        }
        if (action.payload.to === "buisnessImg") {
          dispatch(actions.setUpdateBusiness({ key: 'imgLogo', value: response.data.url }))
        }
        if (action.payload.to === "buisnessSetting") {

          dispatch(actions.setSettingBuisness({ key: 'imgLogo', value: response.data.url }))
        }
        if (action.payload.to === "design") {
          dispatch(actions.setItemData(response.data.url));
        }

        //   response.data.url + "okImage");
      },
      error: function (err) {

      }
    });
  }
  return next(action);
}
