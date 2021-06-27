import React, { useEffect, useRef, useState } from 'react';
import '../invoice.css';
// import '../invoiceTemp1.css';
import '../../notUse/invoiceTemp1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/All_actions';
import { Link, useHistory } from "react-router-dom";
import CurrencyInput from 'react-currency-input-field';
import Cell from './cell'
import { number, object } from 'yup';
import { string } from 'yup/lib/locale';
import { BorderTop } from '@material-ui/icons';
import './new_invoice.css'

function Item(props) {
  const displayInvoice = useSelector(state => state.invoiceReducer.dislayInvoice)
  const p = useSelector(state => state.displayComponents.p);
  const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  const focus = useSelector(state => state.invoiceReducer.focus);
  const setFocus = (focus) => dispatch(actions.setFocus(focus))
  const invoice = useSelector(state => state.invoiceReducer.invoice)
  const allproduct = useSelector(state => state.productReducer.allProducts);
  const product1 = useSelector(state => state.productReducer.product1)
  const new_product = useSelector(state => state.productReducer.newProduct)
  const [dtp, setdtp] = useState({})
  const [flag, setFlag] = useState(false);
  const [flagDtp, setFlagDtp] = useState(false);
  const [flagPro, setFlagPro] = useState(false)
  const userName = useSelector(state => state.publicReducer.userName);
  const amountProductInvoice = useSelector(state => state.invoiceReducer.amountProductInvoice)
  const [amount2, setamount2] = useState()
  const setCalcSumProduct = (sum1) => dispatch(actions.setCalcSumProduct(sum1))
  const calcSumProduct = useSelector(state => state.invoiceReducer.calcSumProduct)
  const [sum, setSum] = useState(null);
  const [flagSumProduct, setflagSumProduct] = useState(false)
  const [discountp, setdiscountp] = useState(100)
  let history = useHistory()
  const [flagcalc, setflagcalc] = useState(false)
  const [flagsetSum, setflagsetSum] = useState(false)
  const colorFlagShowSaveP = useSelector(state => state.productReducer.colorFlagShowSaveP)
  const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
  const setFlagShowSaveP = (status) => dispatch(actions.setFlagShowSaveP(status))
  const flagBorderProduct = useSelector(state => state.invoiceReducer.flagBorderProduct);
  const saveSum = useSelector(state => state.invoiceReducer.saveSum)

  const [indexfocus, setindexof] = useState(null)
  const { vvv } = props
  const dispatch = useDispatch();
  const { onItemChanged, onItemDeleted, productSelect } = props;
  const totalProductRef = useRef([]);

  useEffect(() => {
    dispatch(actions.setflagBorderProduct(false))
  }, [])

  useEffect(() => {
    debugger
    console.log("הגעתתתתת", props.pro)
    if (props.pro.id == "null") {
    }
    else {
      console.log('kkk', props.pro)
      setdtp(allproduct.find(x => x._id === props.pro.id))
      setSum(props.pro.sum_product)
      // setCalcSumProduct(0)
      setamount2(props.pro.amount)
      // setdiscountp(props.pro.discount)

    }
    console.log("totalProductRef")
  }, [allproduct])
  useEffect(() => {
    debugger
    console.log("pppp")
    dispatch(actions.setFlagSavePr(false))
    if (flagPro === false) {

      setFlagPro(true)
    }
    else {
      debugger
      if (props.pro.id === 'null') {
        setdtp(allproduct.length > 0 && allproduct.find(x => x._id === product1._id))
      }
      else {
        console.log("jkj")
        setdtp(allproduct.length > 0 && allproduct.find(x => x._id === props.pro.id))
      }
      if (history.location.pathname === `/${userName}/invoice`) {
        debugger
        if (props.pro.id === 'null') {
          dispatch(actions.setProductId({ id: product1._id, index1: props.index }));
          // dispatch(actions.setProduct1({}))
          // dispatch(actions.setResetNewProduct({}))
        }
      }
      else {
        // dispatch(actions.deleteLastProduct());
        if (props.pro.id === 'null') {
          dispatch(actions.setProductId2({ id: product1._id, index1: props.index }))
          dispatch(actions.setInvoceShow(detailsInvoice))
          // dispatch(actions.setResetNewProduct({}))
        }
      }

    }
  }, [allproduct])
  const vv3 = (e) => {
    dispatch(actions.setColorFlagShowSaveP("#DBD0D7"))

    dispatch(actions.setFlagIfEmpty(true))

    if (invoice.products[0].id == "null") {
      dispatch(actions.setflagBorderProduct(false))
    }
    debugger
    if (history.location.pathname !== `/${userName}/invoice`) {
      vv(e)
    }
    else {
      debugger
      console.log("trfgyuhytfdrtfgh")
      if (allproduct.length > 0 && allproduct.find(x => x.name === e.target.value)) {
        let product6 = allproduct.find(x => x.name === e.target.value)
        console.log("product6", product6)
        dispatch(actions.setProduct1(product6))
        setdtp(product6)
        setamount2(1)
        debugger
        dispatch(actions.setAmountToProduct({ amount: 1, index1: props.index }))
        dispatch(actions.setSum({ sum: product6.discount ? product6.price * 1 * (1 - (product6.discount / 100)) : product6.price * 1, index1: props.index }))
        // dispatch(actions.setResetNewProduct({}))
        // dispatch(actions.deleteLastProductInvoice());
        // if(calcSumProduct)

        dispatch(actions.setProductId({ id: product6._id, index1: props.index }));
        // dispatch(actions.setProducts({ id: product6._id, amount: 1 }));
        dispatch(actions.setP(product6.name))

        // setnameProduct(e.target.value)
      }
      else {
        if (e.target.value && e.target.value != "") {
          setFlagShowSaveP({ index: props.index, value: true })
        }
        else {
          if (e.target.value == "")
            if (!new_product[props.index].description || new_product[props.index].description == "")
              if (!new_product[props.index].price || new_product[props.index].price == "")
                if (!new_product[props.index].discount || new_product[props.index].discount == "")
                  setFlagShowSaveP({ index: props.index, value: false })
        }
      }
      debugger

      if (invoice.products.length === 1)
        dispatch(actions.setPushNewProduct({}))
      dispatch(actions.setNewProduct({ index: props.index, key: "name", value: e.target.value }))
      // setproduct10({ ...product10, "name": e.target.value })
    }
    // setnameProduct(e.target.value)
  }
  const vv = (e) => {
    dispatch(actions.setColorFlagShowSaveP("#DBD0D7"))
    dispatch(actions.setFlagIfEmpty(true))

    if (detailsInvoice.products[0] && detailsInvoice.products[0].id == "null") {
      dispatch(actions.setflagBorderProduct(false))
    }
    if (allproduct.length > 0 && allproduct.find(x => x.name === e.target.value)) {
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
    debugger
    if (detailsInvoice.products.length === 1)
      dispatch(actions.setPushNewProduct({}))
    dispatch(actions.setNewProduct({ index: props.index, key: "name", value: e.target.value }))

  }






  const updateCell = (title1, e) => {
    console.log("ttt", e)
    dispatch(actions.setColorFlagShowSaveP("#DBD0D7"))
    dispatch(actions.setFlagIfEmpty(true))

    if (invoice.products.length > 0 && invoice.products[0].id == "null" || detailsInvoice.products > 0 && detailsInvoice.products[0] == "null") {
      dispatch(actions.setflagBorderProduct(false))
    }
    console.log("e", e)
    console.log("e.typeOf", typeof (e))

    if (e.target.value && e.target.value != "") {
      setFlagShowSaveP({ index: props.index, value: true })
    }


    for (var key in new_product[props.index]) {
      if (new_product[props.index][key] && new_product[props.index][key] != "") {
        if (flagShowSaveP === false)
          setFlagShowSaveP({ index: props.inedx, value: true })
      }
    }
    debugger
    if (title1 === "discount") {
      dtp.price && props.pro.amount ?
        dispatch(actions.setSum({ sum: (1 - (e.target.value / 100)) * dtp.price * props.pro.amount, index1: props.index })) :
        new_product[props.index].price && amountProductInvoice &&
        dispatch(actions.setSum({ sum: (1 - (e.target.value / 100)) * new_product[props.index].price * amountProductInvoice, index1: props.index }))
    }
    if (title1 === "price") {
      amount2 ? dtp.discount ?
        dispatch(actions.setSum({ sum: e.target.value * amount2 * (1 - (dtp.discount / 100)), index1: props.index })) :
        new_product[props.index].discount ?
          dispatch(actions.setSum({ sum: e.target.value * amount2 * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
          dispatch(actions.setSum({ sum: e.target.value * amount2, index1: props.index })) :
        dtp.discount ?
          dispatch(actions.setSum({ sum: e.target.value * amountProductInvoice * (1 - (dtp.discount / 100)), index1: props.index })) :
          new_product[props.index].discount ?
            dispatch(actions.setSum({ sum: e.target.value * amountProductInvoice * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
            dispatch(actions.setSum({ sum: e.target.value * amountProductInvoice, index1: props.index }))

    }
    if (title1 === "amount") {


      dispatch(actions.setAmountToProduct({ amount: e.target.value, index1: props.index }))
      dispatch(actions.setProductAmount(e.target.value))
      dtp.price ? dtp.discount ?
        dispatch(actions.setSum({ sum: e.target.value * dtp.price * (1 - (dtp.discount / 100)), index1: props.index })) :
        new_product[props.index].discount ?
          dispatch(actions.setSum({ sum: e.target.value * dtp.price * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
          dispatch(actions.setSum({ sum: e.target.value * dtp.price, index1: props.index })) :
        dtp.discount ?
          dispatch(actions.setSum({ sum: e.target.value * new_product[props.index].price * (1 - (dtp.discount / 100)), index1: props.index })) :
          new_product[props.index].discount ?
            dispatch(actions.setSum({ sum: e.target.value * new_product[props.index].price * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :

            dispatch(actions.setSum({ sum: e.target.value * new_product[props.index].price, index1: props.index }))



    }
    // setamount2(props.pro.amount)

    else {
      dispatch(actions.setNewProduct({ index: props.index, key: title1, value: e.target.value }))
    }

    if (title1 == "amount") {

      if (e.target.value == "" && product1._id === undefined) {
        if (!new_product[props.index].name || new_product[props.index].name == "")
          if (!new_product[props.index].description || new_product[props.index].description == "")
            if (!new_product[props.index].price || new_product[props.index].price == "")
              if (!new_product[props.index].discount || new_product[props.index].discount == "")
                setFlagShowSaveP({ index: props.index, value: false })
      }


    }
    if (title1 == "name") {
      if (e.target.value == "" && product1._id === undefined
      )
        if (!new_product[props.index].description || new_product[props.index].description == "")
          if (!new_product[props.index].price || new_product[props.index].price == "")
            if (!new_product[props.index].discount || new_product[props.index].discount == "")
              setFlagShowSaveP({ index: props.index, value: false })
    }
    if (title1 == "description") {
      if (e.target.value == "" && product1._id === undefined
      )
        if (!new_product[props.index].name || new_product[props.index].name == "")
          if (!new_product[props.index].price || new_product[props.index].price == "")
            if (!new_product[props.index].discount || new_product[props.index].discount == "")
              setFlagShowSaveP({ index: props.index, value: false })
    }
    if (title1 == "price") {
      if (e.target.value == "" && product1._id === undefined
      )
        if (!new_product[props.index].name || new_product[props.index].name == "")
          if (!new_product[props.index].description || new_product[props.index].description == "")
            if (!new_product[props.index].discount || new_product[props.index].discount == "")
              setFlagShowSaveP({ index: props.index, value: false })
    }
    if (title1 == "discount") {
      if (e.target.value == "" && product1._id === undefined
      )
        if (!new_product[props.index].name || new_product[props.index].name == "")
          if (!new_product[props.index].description || new_product[props.index].description == "")
            if (!new_product[props.index].price || new_product[props.index].price == "")
              setFlagShowSaveP({ index: props.index, value: false })
    }

  }
  const cleanInput1 = (field1) => {
    // setindexof(props.index)
    if (field1 === "amount") {
      debugger
      if (amount2 != undefined) {
        dispatch(actions.setProductAmount(amount2))
        setamount2(undefined)
      }
    }
    else {
      if (dtp && dtp._id) {
        if (dtp[field1] != undefined) {
          // alert("jjjjj")
          // console.log("dtp[field1]", dtp[field1], field1, dtp)
          dispatch(actions.setNewProduct({ index: props.index, key: field1, value: dtp[field1] }))
          setdtp({ ...dtp, [field1]: undefined })
        }
        else {
          dispatch(actions.setRestNewProduct(props.index))
        }
      }
    }
  }
  const savepr = () => {
    debugger
    if (amountProductInvoice != 0) {
      setamount2(amountProductInvoice)
      // dispatch(actions.setAmountToProduct({ id: dtp._id, amount: amountProductInvoice }))
    }
    if (dtp._id) {
      dispatch(actions.setProductId1(dtp._id))
      dispatch(actions.editProduct(props.index))
    }
    else {
      // alert("hhhh", new_product)
      console.log('new_product', new_product[props.index])
      debugger
      if (props.pro.id === "null" || props.pro.id === undefined) {
        dispatch(actions.setNewProductServer(props.index))
      }
    }
  }
  const clearProduct = () => {
    if (invoice.products.length == 1 && history.location.pathname === `/${userName}/invoice` || detailsInvoice.products && detailsInvoice.products.length == 1) {
      debugger
      // document.querySelectorAll("input").forEach(
      //   input => (input.value = "")   
      dispatch(actions.setColorFlagShowSaveP("#DBD0D7"))
      dispatch(actions.setFlagShowSaveP({ index: props.index, value: false }))
      if (saveSum > 0)
        dispatch(actions.setDeleteSaveSum(props.index))
      // setsaveSum2(saveSum-saveSum2)
      dispatch(actions.setResetNewProduct(props.index))
      dispatch(actions.setProductFirst({ index: props.index, id: 'null', amount: null, sum_product: null }))
      debugger
      document.querySelectorAll('input.cell').forEach(
        input => (input.value = "")
      )
      setdtp({})
    }
    else
      onItemDeleted()
  }

  const updateCellprefix = (title1, e) => {

    console.log("ttt", e)
    if (invoice.products.length > 0 && invoice.products[0].id == "null" || detailsInvoice.products > 0 && detailsInvoice.products[0] == "null") {
      dispatch(actions.setflagBorderProduct(false))
    }

    if (e.target.value && e.target.value != "") {
      setFlagShowSaveP({ index: props.index, value: true })
    }


    for (var key in new_product[props.index]) {
      if (new_product[props.index][key] && new_product[props.index][key] != "") {
        if (flagShowSaveP === false)
          setFlagShowSaveP({ index: props.inedx, value: true })
      }
    }
    debugger
    if (title1 === "discount") {
      dtp.price && props.pro.amount ?
        dispatch(actions.setSum({ sum: (1 - (e / 100)) * dtp.price * props.pro.amount, index1: props.index })) :
        new_product[props.index].price && amountProductInvoice &&
        dispatch(actions.setSum({ sum: (1 - (e / 100)) * new_product[props.index].price * amountProductInvoice, index1: props.index }))
    }
    if (title1 === "price") {
      amount2 ? dtp.discount ?
        dispatch(actions.setSum({ sum: e * amount2 * (1 - (dtp.discount / 100)), index1: props.index })) :
        new_product[props.index].discount ?
          dispatch(actions.setSum({ sum: e * amount2 * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
          dispatch(actions.setSum({ sum: e * amount2, index1: props.index })) :
        dtp.discount ?
          dispatch(actions.setSum({ sum: e * amountProductInvoice * (1 - (dtp.discount / 100)), index1: props.index })) :
          new_product[props.index].discount ?
            dispatch(actions.setSum({ sum: e * amountProductInvoice * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
            dispatch(actions.setSum({ sum: e * amountProductInvoice, index1: props.index }))

    }


    else {
      dispatch(actions.setNewProduct({ index: props.index, key: title1, value: e.target.value }))
    }




    if (title1 == "price") {
      if (e.target.value == "" && product1._id === undefined
      )
        if (!new_product[props.index].name || new_product[props.index].name == "")
          if (!new_product[props.index].description || new_product[props.index].description == "")
            if (!new_product[props.index].discount || new_product[props.index].discount == "")
              setFlagShowSaveP({ index: props.index, value: false })
    }
    if (title1 == "discount") {
      if (e.target.value == "" && product1._id === undefined
      )
        if (!new_product[props.index].name || new_product[props.index].name == "")
          if (!new_product[props.index].description || new_product[props.index].description == "")
            if (!new_product[props.index].price || new_product[props.index].price == "")
              setFlagShowSaveP({ index: props.index, value: false })
    }
  }
  const updateCellPrice = (_value, fieldName) => {
    if (!fieldName) {
      return;
    }
    if (!_value) {
      dispatch(actions.setNewProduct({ index: props.index, key: fieldName, value: '' }))
      return
      //  dispatch({
      //   fieldName,
      //   value: {
      //     value: undefined,
      //     validationClass: '',
      //     errorMessage: '',
      //   },
      // });
    }

    const value = Number(_value);
    if (!Number.isNaN(value)) {
      // dispatch({
      //   fieldName,
      //   value: {
      //     value,
      //     validationClass: 'is-valid',
      //     errorMessage: '',
      //   },
      // });
      dispatch(actions.setNewProduct({ index: props.index, key: fieldName, value: value }))

      console.log("ttt", value)
      if (invoice.products.length > 0 && invoice.products[0].id == "null" || detailsInvoice.products > 0 && detailsInvoice.products[0] == "null") {
        dispatch(actions.setflagBorderProduct(false))
      }
      console.log("e", value)
      // console.log("e.typeOf",typeof(e))

      if (value && value != "") {
        setFlagShowSaveP({ index: props.index, value: true })
      }


      for (var key in new_product[props.index]) {
        if (new_product[props.index][key] && new_product[props.index][key] != "") {
          if (flagShowSaveP === false)
            setFlagShowSaveP({ index: props.inedx, value: true })
        }
      }
      debugger
      if (fieldName === "discount") {
        dtp.price && props.pro.amount ?
          dispatch(actions.setSum({ sum: (1 - (value / 100)) * dtp.price * props.pro.amount, index1: props.index })) :
          new_product[props.index].price && amountProductInvoice &&
          dispatch(actions.setSum({ sum: (1 - (value / 100)) * new_product[props.index].price * amountProductInvoice, index1: props.index }))
      }
      if (fieldName === "price") {
        amount2 ? dtp.discount ?
          dispatch(actions.setSum({ sum: value * amount2 * (1 - (dtp.discount / 100)), index1: props.index })) :
          new_product[props.index].discount ?
            dispatch(actions.setSum({ sum: value * amount2 * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
            dispatch(actions.setSum({ sum: value * amount2, index1: props.index })) :
          dtp.discount ?
            dispatch(actions.setSum({ sum: value * amountProductInvoice * (1 - (dtp.discount / 100)), index1: props.index })) :
            new_product[props.index].discount ?
              dispatch(actions.setSum({ sum: value * amountProductInvoice * (1 - (new_product[props.index].discount / 100)), index1: props.index })) :
              dispatch(actions.setSum({ sum: value * amountProductInvoice, index1: props.index }))
      }





      if (fieldName == "price") {
        if (value == "" && product1._id === undefined
        )
          if (!new_product[props.index].name || new_product[props.index].name == "")
            if (!new_product[props.index].description || new_product[props.index].description == "")
              if (!new_product[props.index].discount || new_product[props.index].discount == "")
                setFlagShowSaveP({ index: props.index, value: false })
      }
      if (fieldName == "discount") {
        if (value == "" && product1._id === undefined
        )
          if (!new_product[props.index].name || new_product[props.index].name == "")
            if (!new_product[props.index].description || new_product[props.index].description == "")
              if (!new_product[props.index].price || new_product[props.index].price == "")
                setFlagShowSaveP({ index: props.index, value: false })
      }
    }
  }
  return (
    <>

      <div className="row" style={flagBorderProduct ? { border: '1px solid red', width: '100%' } : { border: "none" }}>
        <div className="col-6 d-flex justify-content-center wrapinputprod" >
          <div style={{ width: "10%" }}></div>
          {props.pro.id == "null" || props.pro.id === undefined ?
            <div className="inputproduct" style={{ width: "35%" }}>
              <input

                onFocus={() => cleanInput1('name')}
                name="product"
                list="productname"
                className='cell'
                size="7"
                value={dtp ? dtp.name ? dtp.name : new_product[props.index] ? new_product[props.index].name ? new_product[props.index].name : '' : '' : new_product[props.index].name}
                onChange={detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0 ? (e) => vv(e) : (e) => vv3(e)}
              />
              <datalist id="productname">
                {allproduct.length > 0 && allproduct.map(x => {
                  return (<option>{x.name}</option>)

                })}
              </datalist>

            </div> :
            <div className="inputproduct" style={{ width: "35%" }}>
              <Cell
                onFocus={() => cleanInput1('name')}
                value={dtp ? dtp.name ? dtp.name : new_product[props.index] ? new_product[props.index].name ? new_product[props.index].name : '' : '' :  new_product[props.index].name}
                disabled={displayInvoice === "true" ? "" : "disable"}
                onChange={(e) => updateCell('name', e)}
                type="text"
              > </Cell>

            </div>}
          <div className="inputproduct" style={{ width: "55%" }} >
            <Cell

              placeholder='descripition'
              onFocus={() => cleanInput1('description')}
              disabled={displayInvoice === "true" ? "" : "disable"}
              value={dtp ? dtp.description ? dtp.description : new_product[props.index] ? new_product[props.index].description ? new_product[props.index].description : '' : '' : new_product[props.index].description}
              onChange={(e) => updateCell('description', e)}
              type="text"
            ></Cell>
          </div>

        </div>
        <div className="col-6 d-flex justify-content-center wrapinputprod" >





          <div className="inputproduct" style={{ width: "25%" }}>
            <CurrencyInput
              // style={{width:"100%", height:"100%"}}
              onFocus={() => cleanInput1('price')}
              id="validation-example-3-field2"
              name="price"
              disabled={displayInvoice === "true" ? "disable" : ""}
              className='cell design_text'
              // className={`form-control ${state.field2.validationClass}`}
              value={dtp ? dtp.price ? dtp.price : new_product[props.index] ? new_product[props.index].price ? new_product[props.index].price : '' : '' : new_product[props.index].price }
              onValueChange={updateCellPrice}
              prefix={'$'}
            />
            {/* <Cell
              onFocus={() => cleanInput1('price')}
              value={dtp ? dtp.price ? dtp.price : new_product[props.index] ? new_product[props.index].price ? new_product[props.index].price : '' : '' : ''}
              disabled={displayInvoice === "true" ? "" : "disable"}
              onChange={(e) => updateCell('price', e)}
              onClick={(e) => setFocus('price')}
              type="number"
            ></Cell> */}
          </div>
          <div className="inputproduct" style={{ width: "25%" }}>
            <Cell
              onFocus={() => cleanInput1('amount')}
              value={props.pro.amount}
              onChange={(e) => updateCell('amount', e)}
              type="number"
            ></Cell>
          </div>
          <div className="inputproduct" style={{ width: "25%" }}>
            <CurrencyInput
              //  style={{width:"15%", height:"60%"}}
              onFocus={() => cleanInput1('discount')}
              id="validation-example-3-field2"
              name="discount"
              disabled={displayInvoice === "true" ? "disable" : ""}
              className='cell design_text'
              // className={`form-control ${state.field2.validationClass}`}
              value={dtp ? dtp.discount ? dtp.discount : new_product[props.index] ? new_product[props.index].discount ? new_product[props.index].discount : '' : '' : new_product[props.index].discount}
              onValueChange={updateCellPrice}
              suffix={'%'}
            />
            {/* <Cell
              onFocus={() => cleanInput1('discount')}
              value={dtp ? dtp.discount ? dtp.discount : new_product[props.index] ? new_product[props.index].discount ? new_product[props.index].discount : '' : '' : ''}
              onChange={(e) => updateCell('discount', e)}
              type="number"
            ></Cell> */}
          </div>
          <div className="calcProducts inputproduct" style={{ width: "15%", backgroundColor: '#DBD0D7' }}>
          <CurrencyInput
              id="validation-example-3-field2"
              name="sumCalcCurrencyInput"
              className="sum1 cell"
              value={props.pro.sum_product ? (props.pro.sum_product).toFixed(2): ''}
              prefix={'$'}
            />
            {/* <input
              className="sum1 cell"
              value={props.pro.sum_product && (props.pro.sum_product).toFixed(2)}
            /> */}


          </div>
          {displayInvoice === "false" &&
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ width: "10%", display: "inline-block" }}>
              {
                flagShowSaveP[props.index] &&
                <button style={{ marginLeft: "33%", width: "100%", height: "39%", backgroundColor: 'transparent', border: "none", color: "white", fonStize: "0.8vw", backgroundColor: colorFlagShowSaveP, marginBottom: "2px" }} onClick={savepr}>save</button>

              }

              <button id='1'
                style={{ visibility: displayInvoice === "true" ? "hidden" : "visible" }}
                onClick={() => {
                  if (displayInvoice === "false") clearProduct()
                }}
                className={invoice.products.length === 1 ? "cinput" : ""} style={{
                  marginLeft: "33%",
                  width: "100%", height: "39%", backgroundColor: 'white', border: "1px solid #DBD0D7", color: "#DBD0D7", padding: "0px", fonStize: "0.8vw", textAlign: "center"
                }}>delete</button>
            </div>}
        </div>
      </div>
      {/*       
        <Col md={1} className='py-3'>
          <Button id='1'
            style={{ visibility: displayInvoice === "true" ? "hidden" : "visible" }}
            onClick={() => {
              if (displayInvoice === "false") clearProduct()
            }}
            className={invoice.products.length === 1 ? "button4 cinput" : "button4"}>X</Button>


          {
            flagShowSaveP[props.index] &&
            <button style={{ width: "25px", height: "20px", backgroundColor: 'transparent', border: "none", color: colorFlagShowSaveP }} onClick={savepr}>save</button>
          }

        </Col>
        {props.pro.id == "null" || props.pro.id === undefined ?
          <Col className='py-3' md={2}>

            <input

              onFocus={() => cleanInput1('name')}
              name="product"
              list="productname"
              className='cell'
              maxlength="15" size="7"
              value={dtp ? dtp.name ? dtp.name : new_product[props.index] ? new_product[props.index].name ? new_product[props.index].name : '' : '' : ''}
              onChange={detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0 ? (e) => vv(e) : (e) => vv3(e)}
            /> */}
      {/* <datalist id="productname">
              {productSelect.map(x => {
                return (<option>{x.name}</option>)

              })}
            </datalist> */}
      {/* <datalist id="productname">
              {allproduct.length > 0 && allproduct.map(x => {
                return (<option>{x.name}</option>)

              })}
            </datalist> */}

      {/* <Select className="select_p" onChange={detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0 ? (e) => vv(e) : (e) => vv2(e)} options={productSelect.map((x)=>{
             return ({
                      "label": x.name,
                      "value": x
                    })
  })} */}
      {/* </Col>
          :
          <Cell
            onFocus={() => cleanInput1('name')}
            value={dtp ? dtp.name ? dtp.name : new_product[props.index] ? new_product[props.index].name ? new_product[props.index].name : '' : '' : ''}
            disabled={displayInvoice === "true" ? "" : "disable"}
            onChange={(e) => updateCell('name', e)}
          > </Cell>}

        <Cell

          placeholder='descripition'
          onFocus={() => cleanInput1('description')}
          disabled={displayInvoice === "true" ? "" : "disable"}
          value={dtp ? dtp.description ? dtp.description : new_product[props.index] ? new_product[props.index].description ? new_product[props.index].description : '' : '' : ''}
          onChange={(e) => updateCell('description', e)}
          type="text"
        ></Cell>
        {/* <Cell
          onFocus={() => cleanInput1('price')}
          value={dtp ? dtp.price ? dtp.price : new_product[props.index] ? new_product[props.index].price ? new_product[props.index].price : '' : '' : ''}
          disabled={displayInvoice === "true" ? "" : "disable"}
          onChange={(e) => updateCell('price', e)}
          onClick={(e) => setFocus('price')}
          type="number"
        ></Cell> */}
      {/* <Col className='py-3' md={2}>
            <CurrencyInput
                style={{width:"100%", height:"100%"}}
                onFocus={() => cleanInput1('price')}
                id="validation-example-3-field2"
                name="price"
                disabled={displayInvoice === "true" ? "disable" : ""}
                className='cell design_text'
                // className={`form-control ${state.field2.validationClass}`}
                value={dtp ? dtp.price ? dtp.price : new_product[props.index] ? new_product[props.index].price ? new_product[props.index].price : '' : '' : ''}
                onValueChange={updateCellPrice}
                prefix={'$'}
              /></Col> */}
      {/* <CurrencyInput
           className='cell design_text'
        disabled={displayInvoice === "true" ? "disable" : ""}
        id="input-example"
        name="input-name"
        onFocus={() => cleanInput1('price')}
        value={props.pro.amount}
        onChange={(e) => updateCellprefix('price', e)}
     
  placeholder="Please enter a number"
  // defaultValue={props.pro.amount}
  decimalsLimit={2}
  prefix={'$'}
  onValueChange={(e) => updateCell('price', e)}
/>; */}
      {/* <Cell
          onFocus={() => cleanInput1('amount')}
          value={props.pro.amount}
          onChange={(e) => updateCell('amount', e)}
          type="number"
        ></Cell> */}

      {/* <Cell
          onFocus={() => cleanInput1('discount')}
          value={dtp ? dtp.discount ? dtp.discount : new_product[props.index] ? new_product[props.index].discount ? new_product[props.index].discount : '' : '' : ''}
          onChange={(e) => updateCell('discount', e)}
          type="number"
        ></Cell> */}
      {/* <Col className='py-3' md={2}>
         <CurrencyInput
        //  style={{width:"15%", height:"60%"}}
        style={{width:"100%", height:"100%"}}
         onFocus={() => cleanInput1('discount')}
                id="validation-example-3-field2"
                name="discount"
                disabled={displayInvoice === "true" ? "disable" : ""}
                className='cell design_text'
                // className={`form-control ${state.field2.validationClass}`}
                value={dtp ? dtp.discount ? dtp.discount : new_product[props.index] ? new_product[props.index].discount ? new_product[props.index].discount : '' : '' : ''}
                onValueChange={updateCellPrice}
                suffix={'%'}
              /></Col> */}
      {/* <Col md={1} style={{ backgroundColor: '#DBD0D7', height: "100%" }}> */}
      {/* <span className="sum1 cell">
            {props.sum_product}
          </span> */}
      {/* <div className='py-3' ref={totalProductRef}>
            <input
              className="sum1 cell"
              value={props.pro.sum_product}
            />

          </div>
        </Col> */}
      {/* </Row>  */}

    </>
  )
}
export default Item