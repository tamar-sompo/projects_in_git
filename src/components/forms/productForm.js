import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/All_actions'
// import './invoice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Col, Row, Container, Button } from 'react-bootstrap';
import './form.css';
import { event } from 'jquery';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tempLogo from '../assets/newLogo.png';
import { HiUpload } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';

// import { borderRadius } from 'react-select/src/theme';


const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: 125 + '%',
    backgroundColor: 'transparent',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    webkitBoxShadow: 'none',
    height: 23 + 'px',
    "&:focus": {
      border: 'inset',
    }
  },
  buttonUpload: {
    display: 'inline-block',
    width: 7 + 'vh',
    height: 7 + 'vh',
    backgroundColor: 'transparent',
    border: '1px solid black',
    borderRadius: 50 + '%',
    padding: 0
  },
  imgUpload: {
    display: 'inline-block',
    width: 7 + 'vh',
    height: 7 + 'vh',
    backgroundColor: 'transparent',
    // border: '1px solid black',
    borderRadius: 50 + '%',
    padding: 0
  }
}))

{/* <td>{item.name}</td>
                            <td>{item.text}</td>
                            <td>{item.price}</td>
                            <td>{item.katalogNumber}</td> */}
function ProductForm(props) {
  const classes = useStyles();
  const inputFile = useRef(null);
  const inputText = useRef(null);
  const dispatch = useDispatch();
  // const changeComponent = (component1) => dispatch(actions.setComponentConfigurator(component1))
  const componentConfigurator = useSelector(state => state.companyReducer.componentConfigurator)
  const newProductTable = useSelector(state => state.productReducer.newProductTable)



  useEffect(() => {
    // props.addProduct("sssss")
  }, [])

  const changeFlag = () => {
    console.log('ffllaagg', props.flag);
    props.changeFlag(false)
  }

  const onFieldEdit = (fieldName, e) => {
    const value = e.target.value;
    dispatch(actions.setNewProductTable({ key: fieldName, value: value }))
    // props.setNewProduct({ index: 0, key: fieldName, value: value })
  }
  const addNewProduct = () => {
    dispatch(actions.setNewProductServer())
    props.changeFlag(false)
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
    console.log('vdhggggg');
    if (event) {
      console.log('event', event)
      let reader = new FileReader();
      const image = reader.result;
      reader.onloadend = () => {
        // console.log('reader.result',reader.result[0])
        const objectImage = { 'image': event, 'to': 'product' }
        props.setImage(objectImage)
      }
      reader.readAsDataURL(event)
      console.log('imagep', props.imgProduct)
    }
  }
  return (
    <>
      {/* <Box
                                        alignSelf="center" style={{width:30+"%"}}> */}
      <div class="container row" style={{ height: 16 + 'vh', width: '100%' }}>

        <div class="col-3 d-flex justify-content-start flex-column align-items-center ">
          <div  >
            {/* <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
              onChange={(e) => addImage(e.target.files[0])} /> */}

            <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
              onChange={(e) => addImage(e.target.files[0])} />

            {/* <button onClick={onButtonClick} className="rounded" className={classes.buttonUpload}>
              <HiUpload id="icon" className={classes.iconUpload} />
            </button> */}

            <button onClick={onButtonClick} className="rounded" className={classes.buttonUpload}>
              {props.newProduct[0] && props.newProduct[0].images ?
                <img
                  className={classes.imgUpload}
                  src={newProductTable ? newProductTable.images : ""}
                  alt="Logo"
                  title="Your Logo Here"
                  onClick={() => onButtonClick("logo")}
                /> :
                <HiUpload id="icon" className={classes.iconUpload} />}
            </button>

          </div>

          <div>
            <p style={{ fontSize: "60%" }}>upload image</p>
          </div>
        </div>




        <div class="container col-9" style={{ height: 16 + 'vh', width: '67%' }}>
          <div class="row">
            <div className="col-3">
              <p className="ff">name product:</p>
            </div>
            <div className="col-3 in">
              <input className="form-control form-control-sm"
                value={newProductTable ? newProductTable.name : ''}
                className={classes.inputStyle} onChange={(e) => onFieldEdit('name', e)} />
            </div>
            <div className="col-3">
              <p className="ff">description:</p>
            </div>
            <div className="col-3 in">
              <input className="form-control form-control-sm" className={classes.inputStyle}
                value={newProductTable ? newProductTable.description : ''}
                onChange={(e) => onFieldEdit('description', e)} />

            </div>
          </div>

          <div class="row">
            <div className="col-3">
              <p className="ff">price:</p>
            </div>
            <div className="col-3 in">
              <input className="form-control form-control-sm" className={classes.inputStyle}
                value={newProductTable ? newProductTable.price : ''}
                onChange={(e) => onFieldEdit('price', e)} />
            </div>
            <div className="col-3">
              <p className="ff">amount:</p>
            </div>

            <div className="col-3 in">
              <input className="form-control form-control-sm" className={classes.inputStyle}
                value={newProductTable ? newProductTable.amount : ''}
                onChange={(e) => onFieldEdit('amount', e)} />
            </div>
          </div>

          <div class="row">
            <div className="col-4 in" style={{ right: -80 + '%' }}>
              <button type="button" class="btn btn-link" onClick={changeFlag}>close</button>
              {/* <button type="button" class="btn btn-link" onClick={clearObject}>delete</button> */}
              <button type="button" class="btn btn-link" onClick={addNewProduct}>save</button>
            </div>
          </div>
        </div>

        <div>
          {console.log('imagep', props.imgProduct)}
        </div>
      </div>
      {/* <button onClick={addNewProduct}></button> */}

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    componentConfigurator: state.companyReducer.componentConfigurator,
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