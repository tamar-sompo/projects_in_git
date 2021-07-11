
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/All_actions'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Row, Container, Button } from 'react-bootstrap';
import './form.css';
import { event } from 'jquery';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import tempLogo from '../assets/newLogo.png';
import { HiUpload } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import CurrencyInput from 'react-currency-input-field';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useState } from 'react';
// import '../Invoice/invoice.css'
// import { borderRadius } from 'react-select/src/theme';


const useStyles = makeStyles((theme) => ({
  // inputStyle: {
  //   width: 125 + '%',
  //   backgroundColor: 'transparent',
  //   borderTop: 'none',
  //   borderLeft: 'none',
  //   borderRight: 'none',
  //   webkitBoxShadow: 'none',
  //   height: 23 + 'px',
  //   "&:focus": {
  //     border: 'inset',
  //   }
  // },
  // buttonUpload: {
  //   display: 'inline-block',
  //   width: 7 + 'vh',
  //   height: 7 + 'vh',
  //   backgroundColor: 'transparent',
  //   border: '1px solid black',
  //   borderRadius: 50 + '%',
  //   padding: 0
  // },
  // imgUpload: {
  //   display: 'inline-block',
  //   width: 7 + 'vh',
  //   height: 7 + 'vh',
  //   backgroundColor: 'transparent',
  //   // border: '1px solid black',
  //   borderRadius: 50 + '%',
  //   padding: 0
  // }
}))


function ProductForm(props) {
  const classes = useStyles();
  const inputFile = useRef(null);
  const inputText = useRef(null);
  const dispatch = useDispatch();
  // const changeComponent = (component1) => dispatch(actions.setComponentConfigurator(component1))
  // const componentConfigurator = useSelector(state => state.companyReducer.componentConfigurator)
  const newProductTable = useSelector(state => state.productReducer.newProductTable);
  // const isSave = useSelector(state => state.productReducer.isSave);
  // const isSave = useSelector(state => state.productReducer.isSave)
  console.log("newProductTable.images", newProductTable.images);

  useEffect(() => {
    // props.addProduct("sssss")
  }, [])

  const changeFlag = () => {
    console.log('ffllaagg', props.flag);
    props.changeFlag(false)
    dispatch(actions.setFlagNewP(false))
  }
  const [flagName2, setflagName2] = useState(false)
  const [flagPrice2, setflagPrice2] = useState(false)
  const [flagName, setflagName] = useState(true)
  const [flagPrice, setflagPrice] = useState(true)

  const onFieldEdit = (fieldName, e) => {
    debugger
    if (fieldName == 'name') {
      if (e.target.value) {
        setflagName(false)
        setflagName2(false)
      }
      else {
        setflagName(true)
        setflagName2(true)
      }
    }
    dispatch(actions.setIfSave(true))
    const value = e.target.value;
    dispatch(actions.setNewProductTable({ key: fieldName, value: value }))
    // props.setNewProduct({ index: 0, key: fieldName, value: value })
  }
  const isSave = useSelector(state => state.productReducer.isSave)
  useEffect(() => {
    if (isSave) {
      debugger
      addNewProduct()
      // dispatch(actions.setIsSave(false))
    }
  }, [isSave])
  const addNewProduct = () => {
    debugger
    if (!flagName && !flagPrice) {
      dispatch(actions.setNewProductServer())
      dispatch(actions.setFlagNewP(false))
      dispatch(actions.setIfSave(false))
      if (isSave) {
        dispatch(actions.setIsEdit(true))
      }
      dispatch(actions.setIsSave(false))
      // debugger
      // props.changeFlag(false)
    }
    else {
      if (flagName) setflagName2(true)
      else setflagName2(false)
      if (flagPrice) setflagPrice2(true)
      else setflagPrice2(false)
      dispatch(actions.setIsSave(false))
    }
    // props.setNewProduct1({})
    // dispatch(actions.setResetNewProduct(0))
    // inputText.current.value="";
    // document.querySelectorAll("input").forEach(
    //   input => (input.value = "")
    // );
    // props.setNewProduct({});
  }

  const onButtonClick = () => {
    inputFile.current.click();
  };
  const clearObject = () => {
    props.setNewProduct1({})
    // inputText.current.value="";
    document.querySelectorAll("input").forEach(
      input => (input.value = "")
    );
  }

  const addImage = (event) => {
    if (event) {
      let reader = new FileReader();
      let imageToStor = { 'image': '', 'to': "" }
      reader.onloadend = () => {

        imageToStor = { 'image': event, 'to': 'product' }
        dispatch(actions.setImage(imageToStor))
        console.log("imageee12kkkkkkkkkkkk", imageToStor)
      }
      reader.readAsDataURL(event)
    }
  }

  const updateCellPrice = (_value, fieldName) => {
    debugger
    dispatch(actions.setIfSave(true))
    if (fieldName == 'price') {
      if (_value) {
        setflagPrice(false)
        setflagPrice2(false)
      }
      else {
        setflagPrice(true)
        setflagPrice2(true)
      }
    }
    if (!fieldName) {
      return;
    }
    if (!_value) {
      dispatch(actions.setNewProductTable({ key: fieldName, value: '' }))
      return
    }

    const value = Number(_value);
    if (!Number.isNaN(value)) {
      dispatch(actions.setNewProductTable({ key: fieldName, value: value }))
    }
  }

  return (
    <>
      <div className="container" style={{ height: 23 + 'vh', width: '97%', padding: '0px', margin: '0px' }}>
        <div
          className="col-3 col-md-2 col-sm-1"
          style={{ width: "12%", paddingTop: '2%', paddingBottom: '2%', paddingLeft: '0px', paddingRight: '0px' }}>
          <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
            onChange={(e) => addImage(e.target.files[0])} />
          <button onClick={onButtonClick} className="rounded"
            style={{
              width: "13vh",
              height: "13vh",
              marginTop: "2vh",
              borderRadius: "1vh",
              backgroundColor: "#F6F6FA"
            }}
            className={classes.buttonUpload}>
            {
              newProductTable && newProductTable.images ?
                // props.newProduct[0] && props.newProduct[0].images ?
                <img
                  className={classes.imgUpload}
                  src={newProductTable ? newProductTable.images : ""}
                  alt="Logo"
                  title="Your Logo Here"
                  onClick={() => onButtonClick("logo")}
                /> :
                <HiUpload id="icon" className={classes.iconUpload} />
            }
            <br></br>
            <div className="uploadImage">Upload</div>
          </button>
        </div>
        <div className="row">
          <div className="hederN">
            <label> Name</label>
            <TextareaAutosize
              // className="fieldProductCss"
              className={flagName2 ? 'fieldProductCss valid' : 'fieldProductCss'}
              rowsMax="2"
              value={newProductTable ? newProductTable.name : ''}
              onChange={(e) => onFieldEdit('name', e)}
            ></TextareaAutosize>
          </div>
          <div className="hederP">
            <label> Price</label>

            <CurrencyInput
              id="validation-example-3-field2"
              name="price"
              // className="fieldProductCss"
              className={flagPrice2 ? 'fieldProductCss valid' : 'fieldProductCss'}
              value={newProductTable ? newProductTable.price : ''}
              onValueChange={updateCellPrice}
              prefix={'$'}
            />

          </div>
        </div>
        <div className="row">
          <div className="hederD">
            <label> Discription</label>
            <TextareaAutosize className="fieldProductCssD"
              // className={flagPrice && 'validB'}
              rowsMax="2"
              value={newProductTable ? newProductTable.description : ''}
              onChange={(e) => onFieldEdit('description', e)}
            ></TextareaAutosize>
          </div>
          <button type="button" class="btn btn-link1" onClick={changeFlag}>cancel</button>
          <button type="button" class="btn btn-link2" onClick={addNewProduct}>save</button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    // componentConfigurator: state.companyReducer.componentConfigurator,
    new: state.productReducer.newProduct,
    imgProduct: state.productReducer.imgProduct,
    newProduct: state.productReducer.newProduct
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => dispatch(actions.setAddProduct(product)),
  setProduct: (product) => dispatch(actions.setProduct1(product)),
  setNewProduct: (fieldProduct) => dispatch(actions.setNewProduct(fieldProduct)),
  setNewProductServer: (product) => dispatch(actions.setNewProductServer(product)),
  setNewProduct1: (product) => dispatch(actions.setNewProduct1(product)),
  setImage: (objectImage) => dispatch(actions.setImage(objectImage))
  // setImgProduct:(img)=>dispatch(actions.setSignatureToServerP(img))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)