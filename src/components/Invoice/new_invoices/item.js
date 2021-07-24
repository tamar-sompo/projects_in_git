import React, { useEffect, useRef, useState } from 'react';
import '../invoice.css';
// import '../invoiceTemp1.css';
import '../../notUse/invoiceTemp1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/All_actions';
import { useHistory } from "react-router-dom";
import CurrencyInput from 'react-currency-input-field';
import Cell from './cell'
// import { number, object } from 'yup';
// import { string } from 'yup/lib/locale';
// import { BorderTop } from '@material-ui/icons';
import './new_invoice.css'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import $ from 'jquery'

function Item(props) {
  const setClickSave = (status) => dispatch(actions.setClickSave(status))
  const clickSave = useSelector(state => state.invoiceReducer.clickSave);
  const displayInvoice = useSelector(state => state.invoiceReducer.dislayInvoice)
  // const p = useSelector(state => state.displayComponents.p);
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  // const focus = useSelector(state => state.invoiceReducer.focus);
  const setFocus = (focus) => dispatch(actions.setFocus(focus))
  const invoice = useSelector(state => state.invoiceReducer.invoice)
  const allproduct = useSelector(state => state.productReducer.allProducts);
  const product1 = useSelector(state => state.productReducer.product1)
  const new_product = useSelector(state => state.productReducer.newProduct)
  const [dtp, setdtp] = useState({})
  // const [flag, setFlag] = useState(false);
  // const [flagDtp, setFlagDtp] = useState(false);
  const [flagPro, setFlagPro] = useState(false)
  const userName = useSelector(state => state.publicReducer.userName);
  const amountProductInvoice = useSelector(state => state.invoiceReducer.amountProductInvoice)
  const [amount2, setamount2] = useState()
  // const setCalcSumProduct = (sum1) => dispatch(actions.setCalcSumProduct(sum1))
  // const calcSumProduct = useSelector(state => state.invoiceReducer.calcSumProduct)
  const [sum, setSum] = useState(null);
  // const [flagSumProduct, setflagSumProduct] = useState(false)
  // const [discountp, setdiscountp] = useState(100)
  let history = useHistory()
  // const [flagcalc, setflagcalc] = useState(false)
  // const [flagsetSum, setflagsetSum] = useState(false)
  const colorFlagShowSaveP = useSelector(state => state.productReducer.colorFlagShowSaveP)
  const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
  const setFlagShowSaveP = (status) => dispatch(actions.setFlagShowSaveP(status))
  // const flagBorderProduct = useSelector(state => state.invoiceReducer.flagBorderProduct);
  const saveSum = useSelector(state => state.invoiceReducer.saveSum)
  // const validProduct = useSelector(state => state.invoiceReducer.validProduct);
  // const [indexfocus, setindexof] = useState(null)
  // const { vvv } = props
  const dispatch = useDispatch();
  const { onItemDeleted } = props;
  // const totalProductRef = useRef([]);
  const setFlagSaveP = (status) => dispatch(actions.setFlagSaveP(status))
  const borderProductInvoice = useSelector(state => state.invoiceReducer.borderProductInvoice)
  // const invalidProduct = useSelector(state => state.invoiceReducer.invalidProduct)
  // const flagValidPrice = useSelector(state => state.invoiceReducer.flagValidPrice)
  const setflagValidPrice = (status) => dispatch(actions.setflagValidPrice(status))
  // const flagValidName = useSelector(state => state.invoiceReducer.flagValidName)
  // const setflagValidName = (status) => dispatch(actions.setflagValidName(status))
  const [flagToBroder, setFlagToBroder] = useState(false)
  const [validated, setValidated] = useState(false);
  // const [flagValidPrice, setflagValidPrice] = useState(false);
  // const [flagValidName, setflagValidName] = useState(false);
  useEffect(() => {
    // let form = document.querySelector('#form_item').checkValidity(true);
    // form.checkValidity()=true
  }, [])

  useEffect(() => {

    if (borderProductInvoice) {
      if (history.location.pathname === `/${userName}/invoice`) {
        if (props.index) {
          if (invoice.products[props.index]) {
            if (invoice.products[props.index].id === "null" || invoice.products[props.index].id === undefined)
              setFlagToBroder(true)
          }
        }
        else {
          if (invoice.products[0]) {
            if (invoice.products[0].id === "null" || invoice.products[0].id === undefined)
              setFlagToBroder(true)
          }
        }
      }
      else {
        if (props.index) {
          if (detailsInvoice.products[props.index]) {
            if (detailsInvoice.products[props.index].id === "null" || detailsInvoice.products[props.index].id === undefined)
              setFlagToBroder(true)
          }
        }
      }
    }
    else
      setFlagToBroder(false)
  }, [borderProductInvoice])


  useEffect(() => {

    if (clickSave === true) {
      setClickSave(false)
      // alert("clickkkk")
      // setClickSave(false)
      if (dtp && dtp._id) {
        // if ((dtp.name || new_product[props.index].name) && (dtp.price || new_product[props.index].price)) {
        //   setflagValidPrice(false)
        //   setflagValidName(false)
        //   dispatch(actions.setValidProduct(true))
        // }
        // else {
        //   if (!new_product[props.index].name) {
        //     setflagValidName(true)
        //     // dispatch(actions.setInvalidProduct(true))
        //       "flagValidName", flagValidName)
        //   }
        //   if (dtp && !dtp.price) {
        //     setflagValidPrice(true)
        //     // dispatch(actions.setInvalidProduct(true))
        //       "flagValidPhone", flagValidPrice)
        //   }
      }
    }
    else {
      // alert("hhhh", new_product)

      // if (props.pro.id === "null" || props.pro.id === undefined) {
      //   if (new_product[props.index].name && new_product[props.index].price) {
      //     setflagValidPrice(false)
      //     setflagValidName(false)
      //     dispatch(actions.setValidProduct(true))
      //   }
      //   else {

      //     if (!new_product[props.index].name) {
      //       setflagValidName(true)
      //       dispatch(actions.setValidProduct(false))
      //       // dispatch(actions.setInvalidProduct(true))
      //         "flagValidName", flagValidName)
      //     }
      //     if (!new_product[props.index].price) {
      //       //  alert("nm,n,mhjhjjjjjj" +new_product[props.index].price )
      //       setflagValidPrice(true)
      //       dispatch(actions.setValidProduct(false))
      //       // dispatch(actions.setInvalidProduct(true))
      //         "flagValidPhone", flagValidPrice)
      // }
      // }
      // }
      // }
    }
  }, [clickSave])


  useEffect(() => {

    if (props.pro.id == "null") {
    }
    else {
      setdtp(allproduct.find(x => x._id === props.pro.id))
      setSum(props.pro.sum_product)
      // setCalcSumProduct(0)
      setamount2(props.pro.amount)
      // setdiscountp(props.pro.discount)

    }
  }, [allproduct])



  useEffect(() => {

    dispatch(actions.setFlagSavePr(false))
    if (flagPro === false) {

      setFlagPro(true)
    }
    else {

      if (props.pro.id === 'null') {
        setdtp(allproduct.length > 0 && allproduct.find(x => x._id === product1._id))
      }
      else {
        setdtp(allproduct.length > 0 && allproduct.find(x => x._id === props.pro.id))
      }
      if (history.location.pathname === `/${userName}/invoice`) {

        if (props.pro.id === 'null') {
          dispatch(actions.setProductId({ id: product1._id, index1: props.index }));
        }
      }
      else {
        if (props.pro.id === 'null') {
          dispatch(actions.setProductId2({ id: product1._id, index1: props.index }))
          dispatch(actions.setInvoceShow(detailsInvoice))
        }
      }
    }
  }, [allproduct])


  const vv3 = (e) => {

    // setflagValidName(false)
    dispatch(actions.setColorFlagShowSaveP("#707071"))
    setFlagSaveP(false)
    dispatch(actions.setFlagIfEmpty(true))
    if (history.location.pathname !== `/${userName}/invoice`) {
      vv(e)
    }
    else {
      if (e.target.value) {

        let id_product = $("#productname").find("option[data-value=" + e.target.value + "]").data("id")
        if (id_product) {
          let product6 = allproduct.find(x => x._id === id_product)
          dispatch(actions.setProduct1(product6))
          // dispatch(actions.setFlagMessageContact(false))
          setdtp(product6)
          setamount2(1)
          dispatch(actions.setAmountToProduct({ amount: 1, index1: props.index }))
          dispatch(actions.setSum({ sum: product6.discount ? product6.price * 1 * (1 - (product6.discount / 100)) : product6.price * 1, index1: props.index }))
          dispatch(actions.setProductId({ id: product6._id, index1: props.index }));
          dispatch(actions.setP(product6.name))
        }

        else {
          setdtp({})
          dispatch(actions.setAmountToProduct({ amount: '', index1: props.index }))
          if (e.target.value && e.target.value !== "") {
            setFlagShowSaveP({ index: props.index, value: true })
          }
          else {
            if (e.target.value === "")
              if (!new_product[props.index].description || new_product[props.index].description === "")
                if (!new_product[props.index].price || new_product[props.index].price === "")
                  if (!new_product[props.index].discount || new_product[props.index].discount === "")
                    setFlagShowSaveP({ index: props.index, value: false })
          }
        }
      }
      if (invoice.products.length === 1)
        dispatch(actions.setPushNewProduct({}))
      dispatch(actions.setNewProduct({ index: props.index, key: "name", value: e.target.value }))
      // setproduct10({ ...product10, "name": e.target.value })
    }
    // setnameProduct(e.target.value)
  }
  const vv = (e) => {

    // setflagValidName(false)
    // setflagValidName(false)
    setFlagSaveP(false)
    dispatch(actions.setColorFlagShowSaveP("#707071"))
    dispatch(actions.setFlagIfEmpty(true))



    if (allproduct.length > 0 && allproduct.find(x => x.name === e.target.value)) {
      // setflagValidPrice(false)
      let product6 = allproduct.find(x => x.name === e.target.value)
      dispatch(actions.setProduct1(product6))
      // dispatch(actions.setProduct1(product6))
      setdtp(product6)
      setamount2(1)
      dispatch(actions.setAmountToProduct({ amount: 1, index1: props.index }))
      dispatch(actions.setSum({ sum: product6.discount ? product6.price * 1 * (1 - (product6.discount / 100)) : product6.price * 1, index1: props.index }))
      // dispatch(actions.setResetNewProduct({}))
      // dispatch(actions.deleteLastProduct());
      dispatch(actions.setProductId2({ id: product6._id, index1: props.index }))
      dispatch(actions.setInvoceShow(detailsInvoice))
      dispatch(actions.setP(product6._id))
      // setnameProduct(e.target.value)
    }
    else {
      if (e.target.value && e.target.value !== "") {
        setFlagShowSaveP({ index: props.index, value: true })
      }
      else {
        if (e.target.value === "")
          if (!new_product[props.index].description || new_product[props.index].description === "")
            if (!new_product[props.index].price || new_product[props.index].price === "")
              if (!new_product[props.index].discount || new_product[props.index].discount === "")
                setFlagShowSaveP({ index: props.index, value: false })
      }
    }
    if (detailsInvoice.products.length === 1)
      dispatch(actions.setPushNewProduct({}))
    dispatch(actions.setNewProduct({ index: props.index, key: "name", value: e.target.value }))
  }



  const updateCellAmount = (title) => {

    if (title === "amount") {
      dispatch(actions.setAmountToProduct({ amount: 1, index1: props.index }))
      dispatch(actions.setProductAmount(1))
      dtp && dtp.price ? dtp && dtp.discount ?
        dispatch(actions.setSum({ sum: 1 * dtp.price * (1 - (dtp.discount / 100)), index1: props.index })) :
        new_product[props.index].discount ?
          dispatch(actions.setSum({ sum: 1 * dtp.price * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
          dispatch(actions.setSum({ sum: 1 * dtp.price, index1: props.index })) :
        dtp && dtp.discount ?
          dispatch(actions.setSum({ sum: 1 * new_product[props.index].price * (1 - (dtp.discount / 100)), index1: props.index })) :
          new_product[props.index].discount ?
            //  alert("yy") : alert("xx")
            dispatch(actions.setSum({ sum: 1 * new_product[props.index].price * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
            // alert("xx")
            dispatch(actions.setSum({ sum: 1 * new_product[props.index].price, index1: props.index }))


    }

    // else {
    //   dispatch(actions.setNewProduct({ index: props.index, key: title, value: e.target.value }))
    // }

    // if (title === "amount") {

    //   if (e.target.value === "" && product1._id === undefined && dtp._id === undefined) {
    //     if (!new_product[props.index].name || new_product[props.index].name == "")
    //       if (!new_product[props.index].description || new_product[props.index].description == "")
    //         if (!new_product[props.index].price || new_product[props.index].price == "")
    //           if (!new_product[props.index].discount || new_product[props.index].discount == "")
    //             setFlagShowSaveP({ index: props.index, value: false })
    //   }


    // }
  }


  const updateCell = (title1, e) => {

    dispatch(actions.setColorFlagShowSaveP("#707071"))
    dispatch(actions.setFlagIfEmpty(true))
    setFlagSaveP(false)

    if (e.target.value && e.target.value !== "") {
      setFlagShowSaveP({ index: props.index, value: true })
    }

    for (var key in new_product[props.index]) {
      if (new_product[props.index][key] && new_product[props.index][key] !== "") {
        if (flagShowSaveP === false)
          setFlagShowSaveP({ index: props.inedx, value: true })
      }
    }
    if (title1 === "discount") {
      dtp && dtp.price && props.pro.amount ?
        dispatch(actions.setSum({ sum: (1 - (e.target.value / 100)) * dtp.price * props.pro.amount, index1: props.index })) :
        new_product[props.index].price && amountProductInvoice &&
        dispatch(actions.setSum({ sum: (1 - (e.target.value / 100)) * new_product[props.index].price * amountProductInvoice, index1: props.index }))
    }

    if (title1 === "amount") {
      dispatch(actions.setAmountToProduct({ amount: e.target.value, index1: props.index }))
      dispatch(actions.setProductAmount(e.target.value))
      dtp && dtp.price ? dtp && dtp.discount ?
        dispatch(actions.setSum({ sum: e.target.value * dtp.price * (1 - (dtp.discount / 100)), index1: props.index })) :
        new_product[props.index].discount ?
          dispatch(actions.setSum({ sum: e.target.value * dtp.price * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
          dispatch(actions.setSum({ sum: e.target.value * dtp.price, index1: props.index })) :
        dtp && dtp.discount ?
          dispatch(actions.setSum({ sum: e.target.value * new_product[props.index].price * (1 - (dtp.discount / 100)), index1: props.index })) :
          new_product[props.index].discount ?
            //  alert("yy") : alert("xx")
            dispatch(actions.setSum({ sum: e.target.value * new_product[props.index].price * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
            // alert("xx")
            dispatch(actions.setSum({ sum: e.target.value * new_product[props.index].price, index1: props.index }))


    }

    else {
      dispatch(actions.setNewProduct({ index: props.index, key: title1, value: e.target.value }))
    }

    if (title1 === "amount") {

      if (e.target.value === "" && product1._id === undefined && dtp._id === undefined) {
        if (!new_product[props.index].name || new_product[props.index].name === "")
          if (!new_product[props.index].description || new_product[props.index].description === "")
            if (!new_product[props.index].price || new_product[props.index].price === "")
              if (!new_product[props.index].discount || new_product[props.index].discount === "")
                setFlagShowSaveP({ index: props.index, value: false })
      }


    }
    if (title1 === "name") {
      if (e.target.value === "" && product1._id === undefined && dtp._id === undefined)
        if (!new_product[props.index].description || new_product[props.index].description === "")
          if (!new_product[props.index].price || new_product[props.index].price === "")
            if (!new_product[props.index].discount || new_product[props.index].discount === "")
              setFlagShowSaveP({ index: props.index, value: false })
    }
    if (title1 === "description") {
      if (e.target.value === "" && product1._id === undefined && dtp._id === undefined)
        if (!new_product[props.index].name || new_product[props.index].name === "")
          if (!new_product[props.index].price || new_product[props.index].price === "")
            if (!new_product[props.index].discount || new_product[props.index].discount === "")
              setFlagShowSaveP({ index: props.index, value: false })
    }
    if (title1 === "price") {
      if (e.target.value === "" && product1._id === undefined && dtp._id === undefined)
        if (!new_product[props.index].name || new_product[props.index].name === "")
          if (!new_product[props.index].description || new_product[props.index].description === "")
            if (!new_product[props.index].discount || new_product[props.index].discount === "")
              setFlagShowSaveP({ index: props.index, value: false })
    }
    if (title1 === "discount") {
      if (e.target.value === "" && product1._id === undefined && dtp._id === undefined
      )
        if (!new_product[props.index].name || new_product[props.index].name === "")
          if (!new_product[props.index].description || new_product[props.index].description === "")
            if (!new_product[props.index].price || new_product[props.index].price === "")
              setFlagShowSaveP({ index: props.index, value: false })
    }

  }
  const cleanInput1 = (field1) => {

    // setindexof(props.index)
    if (field1 === "amount") {

      if (amount2 !== undefined) {
        dispatch(actions.setProductAmount(amount2))
        setamount2(undefined)
      }
    }
    else {
      if (dtp && dtp._id) {
        if (dtp[field1] !== undefined) {
          // alert("jjjjj")
          //   "dtp[field1]", dtp[field1], field1, dtp)
          dispatch(actions.setNewProduct({ index: props.index, key: field1, value: dtp[field1] }))
          setdtp({ ...dtp, [field1]: undefined })
        }
        else {
          dispatch(actions.setRestNewProduct(props.index))
        }
      }
    }
  }

  function savepr() {

    //  
    // event.preventDefault()
    // alert("jjjj")
    if (amountProductInvoice !== 0) {
      setamount2(amountProductInvoice)
      // dispatch(actions.setAmountToProduct({ id: dtp._id, amount: amountProductInvoice }))
    }
    if (dtp && dtp._id) {
      dispatch(actions.setProductId1(dtp._id))
      dispatch(actions.editProduct(props.index))
    }
    else {
      if (props.pro.id === "null" || props.pro.id === undefined) {
        if (new_product[props.index].name && new_product[props.index].price) {
          // alert("nnn")
          dispatch(actions.setNewProductServer(props.index))
        }
      }
    }
  }
  const clearProduct = () => {

    if (invoice.products.length === 1 && history.location.pathname === `/${userName}/invoice` || detailsInvoice.products && detailsInvoice.products.length === 1) {

      // document.querySelectorAll("input").forEach(
      //   input => (input.value = "")   
      dispatch(actions.setBorderProductInvoice(false))
      dispatch(actions.setColorFlagShowSaveP("#707071"))
      dispatch(actions.setFlagShowSaveP({ index: props.index, value: false }))
      if (saveSum > 0)
        dispatch(actions.setDeleteSaveSum(props.index))
      // setsaveSum2(saveSum-saveSum2)
      dispatch(actions.setResetNewProduct(props.index))
      dispatch(actions.setProductFirst({ index: props.index, id: 'null', amount: null, sum_product: null }))

      document.querySelectorAll('input.cell').forEach(
        input => (input.value = "")
      )
      setdtp({})
    }
    else
      onItemDeleted()
  }

  // const updateCellprefix = (title1, e) => {

  //     "ttt", e)
  //   if (invoice.products.length > 0 && invoice.products[0].id == "null" || detailsInvoice.products > 0 && detailsInvoice.products[0] == "null") {
  //     dispatch(actions.setflagBorderProduct(false))
  //   }

  //   if (e.target.value && e.target.value != "") {
  //     setFlagShowSaveP({ index: props.index, value: true })
  //   }


  //   for (var key in new_product[props.index]) {
  //     if (new_product[props.index][key] && new_product[props.index][key] != "") {
  //       if (flagShowSaveP === false)
  //         setFlagShowSaveP({ index: props.inedx, value: true })
  //     }
  //   }
  //   
  //   if (title1 === "discount") {
  //     dtp.price && props.pro.amount ?
  //       dispatch(actions.setSum({ sum: (1 - (e / 100)) * dtp.price * props.pro.amount, index1: props.index })) :
  //       new_product[props.index].price && amountProductInvoice &&
  //       dispatch(actions.setSum({ sum: (1 - (e / 100)) * new_product[props.index].price * amountProductInvoice, index1: props.index }))
  //   }
  //   if (title1 === "price") {
  //     amount2 ? dtp.discount ?
  //       dispatch(actions.setSum({ sum: e * amount2 * (1 - (dtp.discount / 100)), index1: props.index })) :
  //       new_product[props.index].discount ?
  //         dispatch(actions.setSum({ sum: e * amount2 * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
  //         dispatch(actions.setSum({ sum: e * amount2, index1: props.index })) :
  //       dtp.discount ?
  //         dispatch(actions.setSum({ sum: e * amountProductInvoice * (1 - (dtp.discount / 100)), index1: props.index })) :
  //         new_product[props.index].discount ?
  //           dispatch(actions.setSum({ sum: e * amountProductInvoice * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
  //           dispatch(actions.setSum({ sum: e * amountProductInvoice, index1: props.index }))

  //   }


  //   else {
  //     dispatch(actions.setNewProduct({ index: props.index, key: title1, value: e.target.value }))
  //   }




  //   if (title1 == "price") {
  //     if (e.target.value == "" && product1._id === undefined
  //     )
  //       if (!new_product[props.index].name || new_product[props.index].name == "")
  //         if (!new_product[props.index].description || new_product[props.index].description == "")
  //           if (!new_product[props.index].discount || new_product[props.index].discount == "")
  //             setFlagShowSaveP({ index: props.index, value: false })
  //   }
  //   if (title1 == "discount") {
  //     if (e.target.value == "" && product1._id === undefined
  //     )
  //       if (!new_product[props.index].name || new_product[props.index].name == "")
  //         if (!new_product[props.index].description || new_product[props.index].description == "")
  //           if (!new_product[props.index].price || new_product[props.index].price == "")
  //             setFlagShowSaveP({ index: props.index, value: false })
  //   }
  // }
  const updateCellPrice = (_value, fieldName) => {

    setflagValidPrice(false)
    let value
    setFlagSaveP(false)
    if (!fieldName) {
      return;
    }
    if (!_value) {
      value = Number('0');
      // dispatch(actions.setNewProduct({ index: props.index, key: fieldName, value: '' }))
      // return
      //  dispatch({
      //   fieldName,
      //   value: {
      //     value: undefined,
      //     validationClass: '',
      //     errorMessage: '',
      //   },
      // });
    }
    else
      value = Number(_value);
    if (!Number.isNaN(value)) {
      // setflagValidPrice(false)
      // dispatch({
      //   fieldName,
      //   value: {
      //     value,
      //     validationClass: 'is-valid',
      //     errorMessage: '',
      //   },
      // });
      dispatch(actions.setNewProduct({ index: props.index, key: fieldName, value: value }))

      if (value && value !== "") {
        setFlagShowSaveP({ index: props.index, value: true })
      }


      for (var key in new_product[props.index]) {
        if (new_product[props.index][key] && new_product[props.index][key] !== "") {
          if (flagShowSaveP === false)
            setFlagShowSaveP({ index: props.inedx, value: true })
        }
      }

      if (fieldName === "discount") {
        dtp && dtp.price && props.pro.amount ?
          dispatch(actions.setSum({ sum: (1 - (value / 100)) * dtp.price * props.pro.amount, index1: props.index })) :
          new_product[props.index].price && amountProductInvoice &&
          dispatch(actions.setSum({ sum: (1 - (value / 100)) * new_product[props.index].price * amountProductInvoice, index1: props.index }))
      }
      if (fieldName === "price") {
        if (!amountProductInvoice) {
          dispatch(actions.setAmountToProduct({ amount: 1, index1: props.index }))
          //  ()=>updateCell("amount",1)
          updateCellAmount("amount")
        }

        amount2 ? dtp && dtp.discount ?
          dispatch(actions.setSum({ sum: value * amount2 * (1 - (dtp.discount / 100)), index1: props.index })) :
          new_product[props.index].discount ?
            dispatch(actions.setSum({ sum: value * amount2 * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
            dispatch(actions.setSum({ sum: value * amount2, index1: props.index })) :
          dtp ? dtp.discount ?
            dispatch(actions.setSum({ sum: value * amountProductInvoice * (1 - (dtp.discount / 100)), index1: props.index })) :
            new_product[props.index].discount ?
              dispatch(actions.setSum({ sum: value * amountProductInvoice * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
              dispatch(actions.setSum({ sum: value * amountProductInvoice, index1: props.index })) :
            new_product[props.index].discount ?
              dispatch(actions.setSum({ sum: value * amountProductInvoice * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
              dispatch(actions.setSum({ sum: value * amountProductInvoice, index1: props.index }))

      }

      if (fieldName === "price") {
        if (value === "" && product1._id === undefined && dtp._id === undefined
        )
          if (!new_product[props.index].name || new_product[props.index].name === "")
            if (!new_product[props.index].description || new_product[props.index].description === "")
              if (!new_product[props.index].discount || new_product[props.index].discount === "")
                setFlagShowSaveP({ index: props.index, value: false })
      }
      if (fieldName === "discount") {
        if (value === "" && product1._id === undefined && dtp._id === undefined
        )
          if (!new_product[props.index].name || new_product[props.index].name === "")
            if (!new_product[props.index].description || new_product[props.index].description === "")
              if (!new_product[props.index].price || new_product[props.index].price === "")
                setFlagShowSaveP({ index: props.index, value: false })
      }
    }
  }

  const submitInvoice = useSelector(state => state.invoiceReducer.submitInvoice);
  const submitSaveInvoice = useSelector(state => state.invoiceReducer.submitSaveInvoice)
  // dispatch(actions.setSubmitSaveInvoice(false))

  const handleSubmit = (event, title) => {

    // alert("submitInvoice"+ submitInvoice)
    // if (submitInvoice === false) {
    event.stopPropagation();

    // dispatch(actions.setSubmitItem(true))
    // alert("item")
    // props.submitItem(true)
    event.preventDefault();
    // alert("submit")
    //  
    const form = event.currentTarget;
    if (form.flagModal !== "otherPageInvoices" === false) {
      // alert("item1")
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === true) {
      // alert("item2")
      savepr()
    }
  };


  //listener the changes of validated variable
  // useEffect(() => {
  //   if (props.setValidateItemF) {
  //     alert("fsdfds")
  //     props.setValidateItemF(validated);
  //   }
  // }, [validated])

  return (


    <Form id="form_item" noValidate validated={validated} onSubmit={(e) => handleSubmit(e, "itemForm")}>
      <div
        className="row rowOneProduct"
        style={flagToBroder ? { border: '1px solid red', width: '100%' } : { border: "none" }}      >


        <div className="col-6 d-flex justify-content-center wrapinputprod" >
          <div style={{ width: "10%" }}></div>
          {/* {props.pro.id == "null" || props.pro.id === undefined ? */}
          <div className="inputproduct" style={{ width: "35%" }}>
            <input aria-label="empty textarea"
              autoComplete="off"
              rowsMax="2"
              required
              onFocus={() => cleanInput1('name')}
              name="product"
              list="productname"
              // className='cell'
              className='cell'
              // maxlength="15" 
              size="7"
              value={new_product[props.index] ? new_product[props.index].name ? new_product[props.index].name : dtp && dtp.name ? dtp.name : '' : ''}
              onChange={detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0 ? (e) => vv(e) : (e) => vv3(e)}
            ></input>
            <datalist id="productname">
              {allproduct.length > 0 && allproduct.map(pro => {
                return (<option data-id={pro._id} data-value={pro.name}>
                  {pro.name}
                </option>)

              })}
            </datalist>
            <Form.Control.Feedback type="invalid">
              require
            </Form.Control.Feedback>
          </div>
          {/* :
            <div className="inputproduct" style={{ width: "35%" }}>
              <TextareaAutosize aria-label="empty textarea"
                required
                autoComplete="new-password"
                rowsMax="2"
                style={displayInvoice == "true" ? { backgroundColor: "transparent" } : {}}
                disabled={displayInvoice === "true" ? "disable" : ""}
                className={
                  // flagValidName && new_product[props.index] && !new_product[props.index].name && !dtp.name ?
                  //  'cell  design_text ffgf validB' :
                  'cell design_text ffgf'
                }
                onFocus={() => cleanInput1('name')}
                value={new_product[props.index] ? new_product[props.index].name ? new_product[props.index].name : dtp && dtp.name ? dtp.name : '' : ''}
                // disabled={displayInvoice === "true" ? "" : "disable"}
                onChange={(e) => updateCell('name', e)}
                type="text"
              // maxRows={2}
              > </TextareaAutosize>

            </div>} */}
          <div className="inputproduct" style={{ width: "55%" }} >
            <TextareaAutosize aria-label="empty textarea"
              autoComplete="new-password"
              rowsMax="2"
              style={displayInvoice == "true" ? { backgroundColor: "transparent" } : {}}
              disabled={displayInvoice === "true" ? "disable" : ""}
              className='cell design_text ffgf'
              onFocus={() => cleanInput1('description')}
              // disabled={displayInvoice === "true" ? "" : "disable"}
              value={new_product[props.index] ? new_product[props.index].description ? new_product[props.index].description : dtp && dtp.description ? dtp.description : '' : ''}
              onChange={(e) => updateCell('description', e)}
              type="text"
            />
          </div>

        </div>
        <div className="col-6 d-flex justify-content-center wrapinputprod" >
          <div className="inputproduct" style={{ width: "25%" }}>
            <CurrencyInput
              required
              aria-describedby="inputGroupPrepend"
              id="validationCustomUsername"
              autoComplete="new-password"
              onFocus={() => cleanInput1('price')}
              // id="validation-example-3-field2"
              name="price"
              style={displayInvoice === "true" ? { backgroundColor: "transparent" } : {}}
              disabled={displayInvoice === "true" ? "disable" : ""}
              className='cell design_text '
              // className='cell design_text'
              // className={`form-control ${state.field2.validationClass}`}
              value={new_product[props.index] ? new_product[props.index].price ? new_product[props.index].price : dtp && dtp.price ? dtp.price : '' : ''}
              onValueChange={updateCellPrice}
              prefix={'$'}
            />

            <Form.Control.Feedback type="invalid">
              req
            </Form.Control.Feedback>
          </div>
          {/* <Form.Control.Feedback type="invalid">
          {validated}
          </Form.Control.Feedback> */}
          <div className="inputproduct" style={{ width: "25%" }}>
            <Cell
              autoComplete="off"
              onFocus={() => cleanInput1('amount')}
              value={props.pro.amount}
              onChange={(e) => updateCell('amount', e)}
              type="number"
              maxLength={6}
              min="1"
            // max="999999"
            ></Cell>
          </div>
          <div className="inputproduct" style={{ width: "25%" }}>
            <CurrencyInput
              onFocus={() => cleanInput1('discount')}
              id="validation-example-3-field2"
              name="discount"
              disabled={displayInvoice === "true" ? "disable" : ""}
              className='cell design_text'
              value={new_product[props.index] ? new_product[props.index].discount ? new_product[props.index].discount : dtp && dtp.discount ? dtp.discount : '' : ''}
              onValueChange={updateCellPrice}
              suffix={'%'}
            />
          </div>
          <div className="calcProducts inputproduct" style={{ width: "15%", backgroundColor: '#DBD0D7' }}>
            <CurrencyInput
              id="validation-example-3-field2"
              name="sumCalcCurrencyInput"
              className="cursor_default sum1 cell"
              value={props.pro.sum_product ? (props.pro.sum_product).toFixed(2) : ''}
              prefix={'$'}
            />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: "10%", display: "inline-block" }}>
            {
              flagShowSaveP[props.index] &&
              <input
                style={{ marginLeft: "33%", width: "100%", height: "39%", border: "none", color: "white", fonStize: "0.8vw", backgroundColor: colorFlagShowSaveP, marginBottom: "2px" }}
                // onClick={savepr}backgroundColor: 'transparent',
                value="save"
                className="btn "
                type="submit"
              />
            }
            {displayInvoice === "false" &&
              <button id='1'
                style={{ visibility: displayInvoice === "true" ? "hidden" : "visible" }}
                style={{ marginLeft: "33%", display: "none", width: "100%", height: "39%", backgroundColor: 'white', border: "1px solid #707071", color: "#707071", padding: "0px", fonStize: "0.8vw", textAlign: "center" }}
                onClick={() => {
                  if (displayInvoice === "false") clearProduct()
                }}
                className={invoice.products.length === 1 ? "cinput delete_hover" : "delete_hover"}
              >
                delete
              </button>}
          </div>
        </div>
      </div>
    </Form>
  )
}
export default Item