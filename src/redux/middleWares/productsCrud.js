import $ from 'jquery'
import { actions } from '../actions/All_actions'
import keys from '../../config/env/keys'

function checkPermission(result) {
  return new Promise((resolve, reject) => {
    if (result.status === "401") {
      result.routes ?
        window.location.assign(`${keys.LOGIN_URL}‏?des=${result.des}'&routes='${result.routes}`) :
        window.location.assign(`${keys.LOGIN_URL}?des=${result.des}`)
      reject(false)
    }
    resolve(true)
  })

}
export const getAllProductsToInvoice = ({ dispatch, getState }) => next => action => {
  if (action.type === "GET_ALL_PRODUCT_To_Invoice") {
    let buisnessId = getState().buisnessReducer.buisness
    if (action.payload)
      buisnessId = action.payload
    let url = `${keys.API_URL_BASE_CLIENT}/${getState().publicReducer.userName}/getAllProductToInvoice/${buisnessId}`;
    return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json()).then((resJson) => {
      // checkPermission(resJson).then((ifOk) => {
      //    dispatch({ type: 'GET_ALL_CONTACT_BY_USER', payload:resJson  })
      // })
      dispatch(actions.getAllProductToInvoice(resJson.reverse()))
      // dispatch(actions.setAllProducts(resJson.reverse()));
      //   "reverse", resJson.reverse())

    }).catch((err) => {
      console.log(err)
    })
  }
  return next(action);
}

export const getAllProductsToBuisness = ({ dispatch, getState }) => next => action => {
  if (action.type === "GET_ALL_PRODUCT") {
    let buisnessId = getState().buisnessReducer.buisness
    if (action.payload)
      buisnessId = action.payload
    let url = `${keys.API_URL_BASE_CLIENT}/${getState().publicReducer.userName}/getAllProductsToBuisness/${buisnessId}`;
    return fetch(url, {
      method: 'GET',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json()).then((resJson) => {
      // checkPermission(resJson).then((ifOk) => {
      //    dispatch({ type: 'GET_ALL_CONTACT_BY_USER', payload:resJson  })
      // })
      dispatch(actions.setAllProducts(resJson.reverse()));

    }).catch((err) => {
      console.log(err)
    })
  }
  return next(action);
}

export const deleteProductbyID = ({ dispatch, getState }) => next => action => {
  let id_product = action.payload
  let url = `${keys.API_URL_BASE_CLIENT}/${getState().publicReducer.userName}/removeProductFromBuisnessById/${id_product}`
  if (action.type === "DELETE_PRODUCT") {
    return fetch(url, {
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((res) => res.json()).then((resJson) => {
      dispatch(actions.setShow(true))
      dispatch(actions.setNameAction("Delete a product successfully"))
      dispatch(actions.getAllProduct());


    }).catch((err) => {
      console.log(err)
    })
  }
  return next(action);
}




export const newProductToBuisness = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_NEW_PRODUCT_SERVER') {
    // let buisnessId = getState().buisnessReducer.buisness._id;

    let newProduct;
    let buisnessId = getState().buisnessReducer.buisness
    let urlData = `${keys.API_URL_BASE_CLIENT}/${getState().publicReducer.userName}/newProductForBuisness/${buisnessId}`
    if (action.payload || action.payload === 0)
      newProduct = getState().productReducer.newProduct[action.payload]
    else
      newProduct = getState().productReducer.newProductTable
    $.ajax({
      url: urlData,
      method: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(newProduct),

      success: function (data) {

        if (action.payload || action.payload === 0) {

          dispatch(actions.setShow(true))
          dispatch(actions.setNameAction("Adding a product successfully"))
          dispatch(actions.setProduct1(data))
          dispatch(actions.setAddProduct(data))
          dispatch(actions.setFlagShowSaveP({ index: action.payload, value: false }))
          dispatch(actions.setColorFlagShowSaveP("#707071"))
        }
        else {
          dispatch(actions.setNewProductTableFull({}))
          dispatch(actions.setShow(true))
          dispatch(actions.setNameAction("Adding a product successfully"))
          dispatch(actions.setProduct1(data))
          dispatch(actions.setAddProduct(data))
        }





        // dispatch(actions.deleteLastProductInvoice());
        // dispatch(actions.setProducts(data._id)); 

        // dispatch(actions.setAddProduct(data));



      },
      error: function (err) {
        //בדיקה אם חוזר 401 זאת אומרת שצריך לזרוק אותו ללוגין
        console.log(err)
      }
    });
  }
  return next(action);
}
// }



export const updateProductById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'EDIT_PRODUCT') {
    // alert("editProduct")
    let allP = getState().productReducer.allProducts
    // return new Promise((resolve, reject) => {
    let productId
    let newproduct
    let buisnessId = getState().buisnessReducer.buisness;
    if (action.payload.key === "table") {
      productId = action.payload.value
      newproduct = getState().productReducer.newProductTable;
    }
    else {
      newproduct = getState().productReducer.newProduct[action.payload];
      productId = getState().productReducer.productId
    }
    let urlData = `${keys.API_URL_BASE_CLIENT}/${getState().publicReducer.userName}/updateProductForBuisness/${buisnessId}/${productId}`
    $.ajax({
      url: urlData,
      type: 'POST',
      headers: {
        Authorization: getState().publicReducer.tokenFromCookies
      },
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(newproduct),

      // withCradentials: true,
      // async: false,

      // dataType: 'json',
      success: function (product1) {
        if (action.payload.key === "table")
          dispatch(actions.setNewProductTableFull({}))
        dispatch(actions.setShow(true))
        dispatch(actions.setNameAction("Update a product successfully"))
        dispatch(actions.setProduct1(product1))
        let pIndex = allP.findIndex(x => x._id === productId)
        dispatch(actions.editProduct11({ i: pIndex, objectProduct: product1 }))
        // dispatch(actions.getAllProduct())
        if (!action.payload.key) {
          dispatch(actions.setFlagShowSaveP({ index: action.payload, value: false }))
          dispatch(actions.setColorFlagShowSaveP("#707071"))
        }
        // dispatch(actions.setGetAllBuisness(product))
      },
    });
  }
  return next(action);
}



export const getProductById = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_GET_PRODUCT') {
    // return new Promise((resolve, reject) => {
    let product = getState().productReducer.product;
    let urlData = `${keys.API_URL_BASE_CLIENT}/${getState().publicReducer.userName}/getProductForBuisnessById/${product._id}`
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
      success: function (product) {
        //   "updateProduct",product)
        dispatch(actions.setProduct1(product))
      },
    });
  }
  return next(action);
}


// export const removeProductById = ({ dispatch, getState }) => next => action => {
//   if (action.type === "DELETE_PRODUCT") {
//     // return new Promise((resolve, reject) => {
//     let product = getState().productReducer.product;
//     let urlData = `${keys.API_URL_BASE_CLIENT}/${getState().publicReducer.userName}/updateProductForBuisness/${product._id}`
//     $.ajax({
//       headers: {
//         Authorization: getState().publicReducer.tokenFromCookies
//       },
//       url: urlData,
//       type: 'POST',
//       withCradentials: true,
//       async: false,
//       contentType: "application/json; charset=utf-8",
//       dataType: 'json',
//       success: function (product) {
//           "updateProduct", product)
//         // dispatch(actions.setGetAllBuisness(product))
//       },
//     });
//   }
//   return next(action);
// }

