import React, { useState, useRef, useEffect } from 'react';
// import { connect } from 'react-redux';
// import SearchProduct from './searchproduct'
import '../customers/customers.css'
import Imgp from '../assets/newLogo.png'
import { actions } from '../../redux/actions/All_actions'
import { MdEdit, MdDelete, MdContentCopy } from 'react-icons/md'
// import ContactForm from '../forms/cotactForm'
// import ButtonPlus from '../forms/buttonPlus'
import ProductForm from '../forms/productForm'
// import $ from 'jquery'
import './product.css'
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import { HiUpload } from "react-icons/hi";
import CurrencyInput from 'react-currency-input-field';
// import e from 'cors';
// import MassageFormat from '../Useful/messageFormat'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
    iconUpload: {
        // border:'1px solid black',
        // borderRadius:50+'%'  
    },
    buttonUpload1: {
        display: 'inline-block',
        width: 6 + 'vh',
        height: 6 + 'vh',
        backgroundColor: 'transparent',
        border: '1px solid black',
        borderRadius: 50 + '%',
        padding: 0
    },

}))

function Products(props) {
    const inputFile = useRef(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [flag1, setFlag1] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchby, setSearchby] = useState('');
    const [dis, setDis] = useState({ flag: 0, id: '', inpDis: "" });
    const newProduct = useSelector(state => state.productReducer.newProduct)
    // const show = useSelector(state => state.designReducer.show);
    // console.log("ssssssssssshow",show)
    const setNewProduct = (fieldProduct) => dispatch(actions.setNewProduct(fieldProduct))
    const newProductTable = useSelector(state => state.productReducer.newProductTable)
    const buisness = useSelector(state => state.buisnessReducer.buisness)
    const [flagField, setFlagField] = useState(false)
    let contacts = [];
    const [chooselinep, setChooselinep] = useState({
        flag1: false,
        index: "",
        isShow: false
    })
    const [productLocal, setProductLocal] = useState()

    const setPL = (p) => {
        if (productLocal)
            setProductLocal();
        else
            setProductLocal(p)

    }

    useEffect(() => {
        // alert("allp")
        // dispatch(actions.getAllProduct())
    }, [])

    useEffect(() => {
        // dispatch(actions.getAllProduct())
    }, [buisness])

    let searchproduct = [];
    const [flag, setFlag] = useState(false);
    const handlesearchby = (value) => {
        setSearchby(value);
    }
    const changeInput = (val) => {
        setSearchTerm(val)
    }
    const fff = (key) => {
        setChooselinep({
            flag1: true,
            index: key,
            isShow: true
        })
    }
    const ggg = (key) => {
        setChooselinep({
            flag1: true,
            index: key,
            isShow: true
        })
    }
    const mmm = (description) => {
        //   console.log("jjjj",email.length)

        if (description.length > 10) {
            return description.substring(0, description.length - (description.length - 25)) + '...';
        }
        return description;


    }

    const changeFlag = (value) => {
        // dispatch(actions.setPushNewProduct({}))
        dispatch(actions.setNewProductTableFull({}))
        setFlag1(value)
    }

    const f = () => {
        if (searchby === "productName") {



            searchproduct = props.allproduct.filter(product =>
                (product.name != null && product.name.toLowerCase().includes(searchTerm)));
            return true

        }
        if (searchby === "userProduct") {
            debugger;
            //  searchcontact.push
            searchproduct = props.allproduct.filter(product =>
                (product.user != null && product.user.toLowerCase().includes(searchTerm)));
            return true
        }
        // if(searchby==="productAmount")
        // {

        //     searchproduct=props.allproduct.filter(product => 
        //         (product.amount != null && product.amount .toLowerCase().includes(searchTerm)));
        //         return true   
        // }
        if (searchby === "") {
            searchproduct = props.allproduct;
        }

    }

    const resetFeild = (fieldName, product) => {
        if (newProduct && newProduct[fieldName]) {

        }
        else {
            // dispatch(actions.setNewProductTable(product))
        }
    }


    const onFieldEdit = (fieldName, e) => {

        setFlagField(true)
        const value = e.target.value;
        dispatch(actions.setNewProductTable({ key: fieldName, value: value }))
    }


    //     $('.disableInput').on('click',function(){    
    //         // $(`.input11${index}`)                  
    //         var input = $(this).closest('tr').find('input');
    //         var currstatus = input.prop('disabled');
    //         console.log("currstatusssssssss", currstatus)
    //         input.prop('disabled',!currstatus);
    //    });





    const setDisable = (product) => {

        setDis({ id: product._id })
        if (dis.flag === 0) {
            // alert("inpDis:")
            setFlagField(false)
            setDis({ flag: 1, id: product._id, inpDis: "" })
            // dispatch(actions.setNewProductObject(product))
        }
        else {
            if (dis.inpDis == "") {
                setDis({ flag: 0, id: product._id, inpDis: "disable" })
                // dispatch(actions.setProductId({key: "table", value:product._id}))
                if (flagField === true) {
                    dispatch(actions.editProduct({ key: "table", value: product._id }))
                    setFlagField(false)
                }


            }
            else
                setDis({ id: product._id, inpDis: "" })
        }

    }
    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    const deleteProduct1 = (id, i) => {

        props.deleteProduct(chooselinep.index)
        let arr1 = [...props.allproduct]
        arr1.splice(i, 1)
        dispatch(actions.setAllProducts(arr1));
        dispatch(actions.deleteProduct(id))
    }
    const addImage = (event) => {
        console.log('vdhggggg');
        if (event) {
            console.log('event', event)
            setFlagField(true)
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


    const updateCellPrice = (_value, fieldName) => {
        if (!fieldName) {
            return;
        }
        if (!_value) {
            dispatch(actions.setNewProductTable({ key: fieldName, value: '' }))
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
            dispatch(actions.setNewProductTable({ key: fieldName, value: value }))
        }
    }






    return (
        <>
            {/* {show &&
                <MassageFormat></MassageFormat>
            } */}
            <div className="container-fluid con" style={{
                height: "95%",
                width: "86%",

            }}>
                <div className="row ">
                    {/* <div className="col d-flex flex-row style={{ height: 15 + 'vh' }}"> */}
                    <div className="col d-flex row" style={{ height: 10 + 'vh' }}>
                        <h1 style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>Products</h1>
                        {/* <div onClick={() => changeFlag(true)} style={{ width: 50 + '%' }}> */}
                        {/* <ButtonPlus ></ButtonPlus> */}
                        {/* <button className="newProd">New Product +</button>
                        </div> */}
                    </div>
                    <div className="col-8 d-flex justify-content-end ">

                        {/* <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">@</span>
                    </div> */}

                        {/* <SearchProduct changeInput={changeInput} handlesearchby={handlesearchby}></SearchProduct> */}

                        {/* <FontAwesomeIcon className="serch"
                            icon={['fas', 'search']}
                        ></FontAwesomeIcon> */}
                        {/* <div class="d-flex justify-content-end">
                            <div className="serch">
                                <FontAwesomeIcon className="serch"
                                    icon={['fas', 'search']}
                                ></FontAwesomeIcon>
                            </div>
                        </div> */}
                        {/* style={{ width: 50 + '%' }} */}
                        <div onClick={() => changeFlag(true)} >
                            {/* <ButtonPlus ></ButtonPlus> */}
                            <button className="newProd11">New Product +</button>
                        </div>

                    </div>
                    {/* <div className="serch">
                        <FontAwesomeIcon className="serch"
                            icon={['fas', 'search']}
                        ></FontAwesomeIcon>
                    </div> */}
                </div>


                {/* <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">@</span>
                            </div> */}



                <div className="wrap_table" >
                    <div className="row">
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table table-hover" style={{ backgroundColor: "white", fontSize: "14px" }}>
                                    <thead style={{ backgroundColor: "#F5F5FA", opacity: "100%" }}>
                                        <tr>
                                            {/* <th style={{ width: "5%", backgroundColor: "white", border: "none" }}></th> */}
                                            <th></th>
                                            <th>NAME</th>
                                            <th>DESCRIPTION</th>
                                            <th>PRICE</th>
                                            <th>SKU</th>
                                            <th>DATE CREATE</th>


                                        </tr>

                                    </thead>
                                    {flag1 == true &&
                                        //   <tr>
                                        <td colSpan="7" style={{
                                            "border": "none",
                                            "height": "0px",
                                            /* padding-top: 0px; */
                                            "padding": "3px",
                                            marginTop: "12px"
                                        }}>
                                            <div className="d-flex justify-content-around">
                                                <ProductForm changeFlag={changeFlag} flag1={flag1}></ProductForm>
                                            </div>
                                        </td>
                                        //   </tr>
                                    }
                                    {console.log("producttt", props.allproduct)}
                                    {props.allproduct.length > 0 ?
                                        <tbody >
                                            {(f() || searchby === "") &&
                                                searchproduct.map((product, index) => {

                                                    return (

                                                        <tr key={product._id} onMouseEnter={() => fff(product._id)} onMouseLeave={() => ggg(product._id)}>
                                                            {/* <td className="td_checbox" id="td_hover"> */}
                                                            {/* <input className="cb" name="select_test" type="checkbox" /> */}
                                                            {/* </td> */}

                                                            <td style={{ paddingLeft: "2%" }}>
                                                                {dis.id == product._id ? dis.inpDis == "disable" ?
                                                                    <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} />
                                                                    :
                                                                    <>
                                                                        <div>


                                                                            <div>
                                                                                <p style={{ fontSize: "60%" }}>upload image</p>
                                                                                <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                                                                                    onChange={(e) => addImage(e.target.files[0])} />
                                                                                <img
                                                                                    // style={{ width: props.logowidth, borderRadius: props.borderlogo }}
                                                                                    // placeholder={require('../../../src/Img/Untitled-1.jpg')}
                                                                                    //   id='userLogo-temp1'
                                                                                    className={classes.buttonUpload1}
                                                                                    // onMouseOver={() => {
                                                                                    //   if (displayInvoice === "false") setBorderLogo(true)
                                                                                    // }}
                                                                                    // onMouseLeave={() => {
                                                                                    //   if (displayInvoice === "false") setBorderLogo(false)
                                                                                    // }}
                                                                                    src={newProductTable.images ? newProductTable.images : product.images ? product.images : Imgp}
                                                                                    alt="Logo"
                                                                                    title="Your Logo Here"
                                                                                    onClick={onButtonClick}
                                                                                // style={isLoading ? { display: "none" } : {}}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        {/* <div>bbbbb</div> */}
                                                                    </>
                                                                    // {/* <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} /> */}
                                                                    :
                                                                    <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} />
                                                                    // {/* <div>jjjj</div> */}
                                                                    //  <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} />
                                                                }

                                                                {/* <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} />  */}
                                                            </td>
                                                            {/* <td >{product._id}</td> */}
                                                            <td>
                                                                {/* {console.log("ggggg",(dis.id===product._id) } */}
                                                                <input type="text" style={{ background: "transparent" }}
                                                                    className="allInput"
                                                                    className={dis.id === product._id ? dis.inpDis == "disable" ? "inputF" : "inputP" : "inputF"}
                                                                    value={dis.id === product._id && dis.inpDis == "" ?
                                                                        newProductTable.name :
                                                                        dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                            newProductTable.name : product.name}
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                    onChange={(e) => onFieldEdit('name', e)}
                                                                    onFocus={() => resetFeild('name', product)}
                                                                />
                                                                {/* {product.name} */}
                                                            </td>
                                                            <td>




                                                                {chooselinep.index === product._id && chooselinep.flag1 === true || !product.description ?
                                                                    <>
                                                                        <input type="text"
                                                                            className="allInput"
                                                                            className={dis.id === product._id ? dis.inpDis == "disable" ? "inputF" : "inputP" : "inputF"}
                                                                            value={dis.id === product._id && dis.inpDis == "" ?
                                                                                newProductTable.description :
                                                                                dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                                    newProductTable.description : product.description}
                                                                            onChange={(e) => onFieldEdit('description', e)}
                                                                            onFocus={() => resetFeild('description', product)}
                                                                            disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                        // onBlur={onFieldEdit('description')} 
                                                                        />
                                                                        {/* {product.name} */}</>
                                                                    // <div className="tgtg">{product.description}</div>
                                                                    : <div>
                                                                        {/* <input type="text"
                                                                className={dis.id===product._id ? dis.inpDis=="disable"? "inputF" : "inputP":"inputF"}
                                                                    defaultValue= {mmm(product.description)}
                                                                    disabled={dis.id === product._id ? dis.inpDis :  "disable"}
                                                                    onBlur={onFieldEdit('description')}/> */}
                                                                        {mmm(product.description)}

                                                                    </div>
                                                                }</td>

                                                            <td>


                                                                {/* //  style={{width:"15%", height:"60%"}} */}

                                                                <CurrencyInput
                                                                    //  style={{width:"15%", height:"60%"}}
                                                                    style={{ width: "100%", height: "100%" }}
                                                                    //  onFocus={() => cleanInput1('discount')}
                                                                    id="validation-example-3-field2"
                                                                    name="price"
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                    className="allInput"
                                                                    className={dis.id === product._id ? dis.inpDis == "disable" ? "inputF" : "inputP" : "inputF"}
                                                                    // className={`form-control ${state.field2.validationClass}`}
                                                                    value={dis.id === product._id && dis.inpDis == "" ?
                                                                        newProductTable.price :
                                                                        dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                            newProductTable.price : product.price}

                                                                    onValueChange={updateCellPrice}
                                                                    prefix={'$'}
                                                                />


                                                                {/* <input type="text" disabled={dis.id===product._id ? dis.inpDis : "disable"} /> */}
                                                                {/* <input type="text"





                                                                    // className="inputP"
                                                                    className="allInput"
                                                                    className={dis.id === product._id ? dis.inpDis == "disable" ? "inputF" : "inputP" : "inputF"}
                                                                    value={dis.id === product._id && dis.inpDis == "" ?
                                                                        newProductTable.price :
                                                                        dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                            newProductTable.price : product.price}
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                    onChange={(e) => onFieldEdit('price', e)}
                                                                    onFocus={() => resetFeild('price', product)}

                                                                // onBlur={onFieldEdit('price')}

                                                                /> */}
                                                            </td>
                                                            <td>{product.codeSKU}</td>
                                                            <td >
                                                                <input type="text"
                                                                    //  className="inputP"
                                                                    className="allInput"
                                                                    className={dis.id === product._id ? dis.inpDis == "disable" ? "inputF" : "inputP" : "inputF"}
                                                                    value={dis.id === product._id && dis.inpDis == "" ?
                                                                        newProductTable.amount :
                                                                        dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                            newProductTable.amount : product.amount}
                                                                    style={{ display: "inline-block", paddingLeft: "5%" }}
                                                                    onChange={(e) => onFieldEdit('amount', e)}
                                                                    onFocus={() => resetFeild('amount', product)}
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                // onBlur={onFieldEdit('amount')} 
                                                                />
                                                                {/* <div style={{ display: "inline-block", paddingLeft: "5%" }}>{product.amount}</div> */}
                                                            </td>
                                                            <td className="td_tt" id="td_hover">
                                                                <div className="td_side_edit_delete_copy " >
                                                                    {
                                                                        chooselinep.isShow && chooselinep.index === product._id && (
                                                                            <div >
                                                                                <button className="btnDis"
                                                                                    onClick={() => setDisable(product)}
                                                                                >
                                                                                    <MdEdit id="icon"
                                                                                    // onClick={() => props.editProduct(chooselinep.index)}
                                                                                    ></MdEdit>
                                                                                </button>
                                                                                <button className="btnDis"
                                                                                    onClick={() => deleteProduct1(product._id, index)}
                                                                                >
                                                                                    <MdDelete id="icon"
                                                                                    // onClick={(() => props.deleteProduct(chooselinep.index)) &&
                                                                                    //    searchproduct.splice(index, 1)
                                                                                    // } 
                                                                                    />
                                                                                </button>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div></td>
                                                            {/* <td>{product.SKU}</td> */}



                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody> :
                                        <div></div>
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <Setting></Setting> */}
            </div>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (id) => dispatch(actions.deleteProduct(id)),
        editProduct: (id, product) => dispatch(actions.editProduct(id, product)),
        product11: () => dispatch(actions.getAllProduct()),
        setImage: (objectImage) => dispatch(actions.setImage(objectImage))
    }
}
const mapStateToProps = (state) => {
    return {
        allproduct: state.productReducer.allProducts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);