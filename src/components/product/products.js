
import React, { useState, useRef, useEffect } from 'react';
// import { connect } from 'react-redux';
// import SearchProduct from './searchproduct'
import '../customers/customers.css'
import Imgp from '../assets/newLogo.png'
import { actions } from '../../redux/actions/All_actions'
import { MdEdit, MdDelete } from 'react-icons/md'
// import ContactForm from '../forms/cotactForm'
// import ButtonPlus from '../forms/buttonPlus'
import ProductForm from '../forms/productForm'
// import $ from 'jquery'
import './product.css'
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs'
import Tooltip from '@material-ui/core/Tooltip';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MessageProduct from './messageProduct'
// import MessageProduct from './messageProduct'
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
    const [searchby, setSearchby] = useState('');
    const [dis, setDis] = useState({ flag: 0, id: '', inpDis: "" });
    const newProduct = useSelector(state => state.productReducer.newProduct)
    const setNewProduct = (fieldProduct) => dispatch(actions.setNewProduct(fieldProduct))
    // const show = useSelector(state => state.designReducer.show);
    const flagNewP = useSelector(state => state.productReducer.flagNewP)
    const isEdit = useSelector(state => state.productReducer.isEdit)
    const tmpPr = useSelector(state => state.productReducer.tmpPr)
    const newProductTable = useSelector(state => state.productReducer.newProductTable)
    const buisness = useSelector(state => state.buisnessReducer.buisness)
    const showMessagePr = useSelector(state => state.messageReducer.showMessagePr)
    const savePr = useSelector(state => state.productReducer.ifSave);
    const [flagField, setFlagField] = useState(false)

    const [chooselinep, setChooselinep] = useState({
        flag1: false,
        index: "",
        isShow: false
    })

    useEffect(() => {
        dispatch(actions.setDisplayBoxShadow(false))
    }, [])
    useEffect(() => {

        if (isEdit) {
            // if (degel == '10') {
            //     dispatch(actions.setdegel1(2))
            // }
            dispatch(actions.setIsEdit(false))
            setDis({ id: tmpPr._id })
            if (dis.flag === 0) {
                // alert("inpDis:")
                setFlagField(false)
                setDis({ flag: 1, id: tmpPr._id, inpDis: "" })
                // dispatch(actions.setNewProductObject(product))
            }
            else {
                if (dis.inpDis === "") {
                    // setDis({ flag: 0, id: product._id, inpDis: "disable" })
                    // dispatch(actions.setProductId({key: "table", value:product._id}))
                    if (flagField === true) {
                        // if (newProductTable.name && newProductTable.price) {
                        if (!flagPrice && !flagName) {
                            // if (degel == '10') {
                            //     dispatch(actions.setdegel1(2))
                            // }
                            dispatch(actions.editProduct({ key: "table", value: tmpPr._id }))
                            setDis({ flag: 0, id: tmpPr._id, inpDis: "disable" })
                            setFlagField(false)
                            setflagName(false)
                            setflagPrice(false)
                        }
                        else {
                            // if (!newProductTable.name)
                            if (flagName) setflagName(true)
                            if (flagPrice) setflagPrice(true)
                        }
                    }
                    else {
                        // dispatch(actions.editProduct({ key: "table", value: product._id }))
                        setDis({ flag: 0, id: tmpPr._id, inpDis: "disable" })
                        // setDis({ id: product._id, inpDis: "" })

                    }
                }
                else {
                    setDis({ id: tmpPr._id, inpDis: "" })
                    // dispatch(actions.editProduct({ key: "table", value: product._id }))
                    // setDis({ flag: 0, id: product._id, inpDis: "disable" })
                }
            }
        }
    }, [isEdit])

    useEffect(() => {
        // dispatch(actions.getAllProduct())
    }, [buisness])

    const mouseEnter = (key) => {
        setChooselinep({
            flag1: true,
            index: key,
            isShow: true
        })
    }
    const mouseLeave = (key) => {
        setChooselinep({
            flag1: true,
            index: key,
            isShow: true
        })
    }
    const degel = useSelector(state => state.productReducer.degel1)
    useEffect(() => {
        if (degel === '10') {
            setDisable(tmpPr)
        }
    }, [degel])

    useEffect(() => {
        if (flagNewP) {
            dispatch(actions.setNewProductTableFull({}))
            setFlag1(true)
        }
        else {
            setFlag1(false)
        }
    }, [flagNewP])

    const changeFlag = (value) => {
        // dispatch(actions.setPushNewProduct({}))
        // כדי להתחל מס לחצה על הedit
        setflagNumClick(false)
        //כדי לסגור עריכה בעת יצירת חדש
        filtersearchProducts && filtersearchProducts.filter((product, index) => {
            if (dis.flag === 1) {
                setDis({ flag: 0, id: product._id, inpDis: "disable" })
                // break;
            }
        })
        // setFlagNewP(true)
        dispatch(actions.setFlagNewP(true))
        // dispatch(actions.setNewProductTableFull({}))
        // setFlag1(value)
    }
    const resetFeild = (fieldName, product) => {
        if (newProduct && newProduct[fieldName]) {

        }
        else {
            // dispatch(actions.setNewProductTable(product))
        }
    }

    const onFieldEdit = (fieldName, e) => {
        if (fieldName === 'name') {
            if (e.target.value) {
                setflagName(false)

            }
            else setflagName(true)
        }
        else {
            if (fieldName === 'price') {
                if (e.target.value) {
                    setflagPrice(false)
                }
                else setflagPrice(true)
            }
        }
        dispatch(actions.setIfSave(true))
        setFlagField(true)
        const value = e.target.value;
        dispatch(actions.setNewProductTable({ key: fieldName, value: value }))
    }
    const [tmpId, setTmpId] = useState()
    const [flagNumClick, setflagNumClick] = useState(false)
    const [flagName, setflagName] = useState(false)
    const [flagPrice, setflagPrice] = useState(false)
    const setDisable = (product) => {// after clicking the edit icon - open / close + save the product
        if (flagNewP) { //flag if new product is open
            if (savePr) { //flag that checks if product valus changed
                dispatch(actions.setShowMessagePr(true))
            }
            else {
                dispatch(actions.setFlagNewP(false))
                dispatch(actions.setIsEdit(true))
                dispatch(actions.setIfSave(false))
            }
            //  שמירה למשתנה זמני ברידאקס את המוצר עליו אני עובדת
            dispatch(actions.saveTmpPr(product))
            // dispatch(actions.saveTmpPr(product))
        }
        else {
            if (degel === '10') {
                dispatch(actions.setdegel1(4))//route user selection page
            }
            setDis({ id: product._id })
            if (!flagNumClick) {
                //לחיצה ראשונה
                setTmpId(product._id)
                setflagNumClick(true)
            }

            if (dis.flag === 0) {
                // alert("inpDis:")
                setFlagField(false)
                setDis({ flag: 1, id: product._id, inpDis: "" })
                // dispatch(actions.setNewProductObject(product))
            }
            else {
                setflagNumClick(false)
                if (dis.inpDis === "") {

                    // setDis({ flag: 0, id: product._id, inpDis: "disable" })
                    // dispatch(actions.setProductId({key: "table", value:product._id}))
                    if (flagField === true) {
                        // if (newProductTable.name && newProductTable.price) {
                        if (!flagPrice && !flagName) {
                            // אם לחץ על מוצר אחר לפני שמירה
                            if (tmpId !== product._id) {

                                dispatch(actions.editProduct({ key: "table", value: tmpId }))
                                dispatch(actions.setIfSave(false))
                                setDis({ flag: 0, id: product._id, inpDis: "disable" })
                                setFlagField(false)
                                setflagName(false)
                                setflagPrice(false)
                                setflagNumClick(false)
                                setTmpId(product._id)
                                setFlagField(false)
                                setDis({ flag: 1, id: product._id, inpDis: "" })
                            }
                            else {
                                dispatch(actions.editProduct({ key: "table", value: product._id }))
                                setDis({ flag: 0, id: product._id, inpDis: "disable" })
                                dispatch(actions.setIfSave(false))
                                setFlagField(false)
                                setflagName(false)
                                setflagPrice(false)
                            }
                        }
                        else {

                            // if (!newProductTable.name)
                            if (flagName) setflagName(true)
                            if (flagPrice) setflagPrice(true)
                        }
                    }
                    else {
                        // dispatch(actions.editProduct({ key: "table", value: product._id }))
                        // setDis({ flag: 0, id: product._id, inpDis: "disable" })
                        if (tmpId !== product._id) {
                            setflagNumClick(false)
                            setTmpId(product._id)
                            setFlagField(false)
                            setDis({ flag: 1, id: product._id, inpDis: "" })
                        }
                        else {
                            setDis({ flag: 0, id: product._id, inpDis: "disable" })

                        }
                        // setDis({ id: product._id, inpDis: "" })

                    }
                }
                else {
                    setDis({ id: product._id, inpDis: "" })
                    // dispatch(actions.editProduct({ key: "table", value: product._id }))
                    // setDis({ flag: 0, id: product._id, inpDis: "disable" })
                }
            }
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
        if (event) {
            setFlagField(true)
            let reader = new FileReader();

            reader.onloadend = () => {
                //   'reader.result',reader.result[0])
                const objectImage = { 'image': event, 'to': 'product' }
                props.setImage(objectImage)
            }
            reader.readAsDataURL(event)
        }
    }
    const updateCellPrice = (_value, fieldName) => {
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
    const [flagSearch, setFlagSearch] = useState("false")
    const clickSearch = (value) => {
        setFlagSearch(value)
    }
    var AllProduct = props.allproduct;
    useEffect(() => {
        dispatch(actions.setFilteredProducts(AllProduct))
    }, [AllProduct])

    const filtersearchProducts = useSelector(state => state.productReducer.filteredProducts);

    //   const [filteredinvoices, setfilteredinvoices] = useState()
    const searchProducts = (searchproduct) => {
        dispatch(actions.setFilteredProducts([]))
        var products = props.allproduct
        products.forEach(prod => {
            if (prod.name !== undefined && prod.name.toLowerCase().indexOf(searchproduct) > -1) {
                dispatch(actions.setFilteredProducts1(prod))
            }
        });
    }

    const search = (result) => {
        if (result !== "") {
            searchProducts(result)
        }
        else {
            dispatch(actions.setFilteredProducts(props.allproduct))
        }
    }

    const myRef = useRef(null)
    const scrollToTop = () => {
        myRef.current.scrollIntoView({ behavior: "smooth" })
    };

    return (
        <>
            {/* <form onSubmit={setDisable}> */}
            {/* {show &&
            <MassageFormat></MassageFormat>
        } */}

            {/* <div className="container-fluid con" style={{
                height: "86vh",
                width: "98%",
            }}>
                <div className="row ">
                    <div className="col d-flex row" style={{ height: 10 + 'vh' }}>
                        <h1 style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>Products</h1>
                    </div>
                    <div className="col-8 d-flex justify-content-end ">
                        <div className="d-flex flex-row" style={{ display: "inline" }}
                            onClick={() => clickSearch(true)}
                        >
                            <div>
                                <input className={flagSearch === true ? "backgroundSearchClick" : "backgroundSearch"}
                                    onChange={(e) => search(e.target.value)}
                                    onMouseOut={() => clickSearch(false)}
                                >
                                </input>
                            </div>
                            <div className={flagSearch === true ? "SearchIconClick d-flex justify-content-center align-items-center " : "SearchIcon d-flex justify-content-center align-items-center "}>
                                <BsSearch
                                    style={{ color: "gray", fontWeight: "bold" }}>
                                </BsSearch>
                            </div>
                        </div>
                        <div onClick={() => changeFlag(true)} >
                            <button className="newProd11">New Product +</button>
                        </div>
                    </div>
                </div>
                <div className="wrap_table" >
                    <div className="row">
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table table-hover" style={{ backgroundColor: "white", fontSize: "14px" }}>
                                    <thead style={{ backgroundColor: "#F5F5FA", opacity: "100%" }}>
                                        <tr>
                                            <th></th>
                                            <th>NAME</th>
                                            <th>DESCRIPTION</th>
                                            <th>PRICE</th>
                                            <th>SKU</th>
                                            <th>DATE CREATE</th>
                                            <th style={{ width: "2%" }}></th>
                                        </tr>
                                    </thead>
                                    {flag1 == true &&
                                        <td
                                            colSpan="6"
                                            style={{
                                                "border": "none",
                                                "height": "0px",
                                                "padding": "3px",
                                                marginTop: "12px"
                                            }}
                                        >
                                            <div className="d-flex justify-content-around">
                                                <ProductForm changeFlag={changeFlag} flag1={flag1}></ProductForm>
                                            </div>
                                        </td>
                                    }
                                    {  "producttt", props.allproduct)}
                                    {filtersearchProducts && filtersearchProducts.length > 0 ?
                                        <tbody >
                                            {(searchby === "") &&
                                                filtersearchProducts.map((product, index) => {
                                                    return (
                                                        <tr key={product._id} onMouseEnter={() => fff(product._id)} onMouseLeave={() => ggg(product._id)}>
                                                            <td style={{ paddingLeft: "3%" }}>
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
                                                                                    className={classes.buttonUpload1}
                                                                                    src={newProductTable.images ? newProductTable.images : product.images ? product.images : Imgp}
                                                                                    alt="Logo"
                                                                                    title="Your Logo Here"
                                                                                    onClick={onButtonClick}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} />
                                                                }
                                                            </td>
                                                            <td>
                                                                <input type="text" style={{ background: "transparent" }}
                                                                    className={dis.id === product._id ? dis.inpDis == "disable" ? "inputF" : "inputP" : "inputF"}
                                                                    value={dis.id === product._id && dis.inpDis == "" ?
                                                                        newProductTable.name :
                                                                        dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                            newProductTable.name : product.name}
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                    onChange={(e) => onFieldEdit('name', e)}
                                                                    onFocus={() => resetFeild('name', product)}
                                                                />
                                                            </td>
                                                            <td>
                                                                {chooselinep.index === product._id && chooselinep.flag1 === true || !product.description ?
                                                                    <>
                                                                        <input type="text"
                                                                            className={dis.id === product._id ? dis.inpDis == "disable" ? "inputF" : "inputP" : "inputF"}
                                                                            value={dis.id === product._id && dis.inpDis == "" ?
                                                                                newProductTable.description :
                                                                                dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                                    newProductTable.description : product.description}
                                                                            onChange={(e) => onFieldEdit('description', e)}
                                                                            onFocus={() => resetFeild('description', product)}
                                                                            disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                        /></>
                                                                    : <div>
                                                                        {mmm(product.description)}
                                                                    </div>
                                                                }
                                                            </td>
                                                            <td>
                                                                <input type="text"
                                                                    className="allInput"
                                                                    className={dis.id === product._id ? dis.inpDis == "disable" ? "inputF" : "inputP" : "inputF"}
                                                                    value={dis.id === product._id && dis.inpDis == "" ?
                                                                        newProductTable.price :
                                                                        dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                            newProductTable.price : product.price}
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                    onChange={(e) => onFieldEdit('price', e)}
                                                                    onFocus={() => resetFeild('price', product)}
                                                                />
                                                            </td>
                                                            <td>{product.codeSKU}</td>
                                                            <td >
                                                                <input type="text"
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
                                                                />
                                                            </td>
                                                            <td className="td_tt" >
                                                                <div className="td_side_edit_delete_copy " >
                                                                    {
                                                                        chooselinep.isShow && chooselinep.index === product._id && (
                                                                            <div >
                                                                                <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Edit</p>} placement="bottom">
                                                                                    <button className="btnDis"
                                                                                        onClick={() => setDisable(product)}
                                                                                    >
                                                                                        <MdEdit id="icon"
                                                                                        ></MdEdit>
                                                                                    </button>
                                                                                </Tooltip>
                                                                                <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Delete</p>} placement="bottom">
                                                                                    <button className="btnDis"
                                                                                        onClick={() => deleteProduct1(product._id, index)}
                                                                                    >
                                                                                        <MdDelete id="icon"
                                                                                        />
                                                                                    </button>
                                                                                </Tooltip>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            </td>
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
            </div> */}
            {showMessagePr && <MessageProduct flag={0}></MessageProduct>}
            <div className="container-fluid con" style={{
                height: "86vh",
                width: "98%"
                // , borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126"
            }}>
                <div className="row" style={{ height: '6%', marginTop: '-1%' }}>
                    <div className="col d-flex row" style={{ height: 10 + 'vh' }}>
                        <h1 style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>Product</h1>
                    </div>
                    <div className="col-8 d-flex justify-content-end ">
                        <div className="d-flex flex-row" style={{ display: "inline" }}
                            onClick={() => clickSearch(true)}
                        >
                            <div>
                                <input className={flagSearch === true ? "backgroundSearchClick" : "backgroundSearch"}
                                    onChange={(e) => search(e.target.value.toLowerCase())}
                                    onMouseOut={() => clickSearch(false)}
                                >
                                </input>
                            </div>
                            <div className={flagSearch === true ? "SearchIconClick d-flex justify-content-center align-items-center " : "SearchIcon d-flex justify-content-center align-items-center "}>
                                <BsSearch
                                    style={{ color: "gray", fontWeight: "bold" }}>
                                </BsSearch>
                            </div>
                        </div>
                        <div >
                            <div onClick={() => changeFlag(true)} >
                                <button onClick={scrollToTop}
                                    className="newProd11">New Product +</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrap_table" style={{ marginTop: "2%" }}>
                    <div className="row" >
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table table-hover" style={{ backgroundColor: "white", fontSize: "14px", marginBottom: "0rem" }}>
                                    <thead style={{ backgroundColor: "rgb(250, 250, 250)", opacity: "100%" }}>
                                        <tr ref={myRef}>
                                            <th style={{ width: "9%", backgroundColor: "rgb(250, 250, 250)", borderBottom: "0px" }}></th>
                                            <th style={{ borderBottom: "0px" }}>NAME</th>
                                            <th style={{ borderBottom: "0px" }}>DESCRIPTION</th>
                                            <th style={{ borderBottom: "0px" }}>PRICE</th>
                                            <th style={{ borderBottom: "0px" }}>SKU</th>
                                            {/* <th>DATE CREATE</th> */}
                                            <th style={{ width: "3%", backgroundColor: "rgb(250, 250, 250)", borderBottom: "0px" }}></th>
                                        </tr>
                                    </thead>
                                    {flag1 === true &&
                                        <td
                                            colSpan="6"
                                            style={{
                                                "border": "none",
                                                "height": "0px",
                                                "padding": "3px",
                                                marginTop: "12px"
                                            }}
                                        >
                                            <div className="d-flex justify-content-around">
                                                <ProductForm changeFlag={changeFlag} flag1={flag1}></ProductForm>
                                            </div>
                                        </td>
                                    }
                                    <tbody >
                                        {(searchby === "") && filtersearchProducts &&
                                            filtersearchProducts.length > 0 && filtersearchProducts.map((product, index) => {
                                                return (
                                                    <>
                                                        {/* <form> */}
                                                        <tr className="tr"
                                                            style={{ height: "55px" }}
                                                            // id={"flag" + index}
                                                            onMouseEnter={() => mouseEnter(product._id)}
                                                            onMouseLeave={() => mouseLeave(product._id)}
                                                            key={product._id}>
                                                            <td style={{ paddingLeft: "3%" }}>
                                                                {dis.id === product._id ? dis.inpDis === "disable" ?
                                                                    <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} />
                                                                    :
                                                                    <>

                                                                        <div>
                                                                            <div>
                                                                                <p style={{ fontSize: "60%" }}>upload image</p>
                                                                                <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                                                                                    onChange={(e) => addImage(e.target.files[0])}
                                                                                    accept="image/*"
                                                                                />
                                                                                <img
                                                                                    className={classes.buttonUpload1}
                                                                                    src={newProductTable.images ? newProductTable.images : product.images ? product.images : Imgp}
                                                                                    alt="Logo"
                                                                                    title="Your Logo Here"
                                                                                    onClick={onButtonClick}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} />
                                                                }
                                                            </td>
                                                            <td>
                                                                <TextareaAutosize type="text" style={{ background: "transparent" }}
                                                                    // required
                                                                    rowsMax="2"
                                                                    className={dis.id === product._id ?
                                                                        dis.inpDis === "disable" ? "inputF" :
                                                                            flagName ?
                                                                                "inputP validB"
                                                                                :
                                                                                "inputP" : "inputF"}
                                                                    value={dis.id === product._id && dis.inpDis === "" && newProductTable && newProductTable.name && !flagNewP ?
                                                                        newProductTable.name :
                                                                        dis.id === product._id && dis.inpDis === "disable" && newProductTable && newProductTable.name && !flagNewP ?
                                                                            newProductTable.name :
                                                                            dis.id === product._id && flagName ?
                                                                                newProductTable.name :
                                                                                dis.id === product._id && !dis.inpDis && newProductTable && newProductTable.name && !flagNewP ?
                                                                                    newProductTable.name :
                                                                                    product.name}
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                    onChange={(e) => onFieldEdit('name', e)}
                                                                // onFocus={() => resetFeild('name', product)}
                                                                />
                                                            </td>
                                                            <td>
                                                                {/* {chooselinep.index === product._id && chooselinep.flag1 === true || !product.description ? */}
                                                                <>
                                                                    <TextareaAutosize type="text"

                                                                        rowsMax="2"
                                                                        className={dis.id === product._id ? dis.inpDis === "disable" ? "inputF" : "inputP" : "inputF"}
                                                                        value={dis.id === product._id && dis.inpDis === "" && newProductTable && !flagNewP ?
                                                                            newProductTable.description :
                                                                            dis.id === product._id && dis.inpDis === "disable" && newProductTable && newProductTable.name && !flagNewP ?
                                                                                newProductTable.description : product.description}
                                                                        onChange={(e) => onFieldEdit('description', e)}
                                                                        onFocus={() => resetFeild('description', product)}
                                                                        disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                    />
                                                                </>
                                                                {/* : <div>
                                                                    {mmm(product.description)}
                                                                </div>
                                                                 } */}
                                                            </td>
                                                            <td>
                                                                <input type="number"
                                                                    // required
                                                                    className="allInput"
                                                                    className={dis.id === product._id ? dis.inpDis === "disable" ? "inputF" :
                                                                        flagPrice ? "inputP validB" :
                                                                            "inputP" : "inputF"}
                                                                    // value={dis.id === product._id && dis.inpDis == "" ?
                                                                    //     newProductTable.price :
                                                                    //     dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                    //         newProductTable.price :
                                                                    //         flagPrice ?
                                                                    //             newProductTable.price : product.price}
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}

                                                                    value={dis.id === product._id && dis.inpDis === "" && newProductTable && newProductTable.price && !flagNewP ?
                                                                        newProductTable.price :
                                                                        dis.id === product._id && dis.inpDis === "disable" && newProductTable && newProductTable.price && !flagNewP ?
                                                                            newProductTable.price :
                                                                            dis.id === product._id && flagPrice ?
                                                                                newProductTable.price :
                                                                                dis.id === product._id && !dis.inpDis && newProductTable && newProductTable.price && !flagNewP ?
                                                                                    newProductTable.price :
                                                                                    product.price}
                                                                    onChange={(e) => onFieldEdit('price', e)}
                                                                    onFocus={() => resetFeild('price', product)}
                                                                />
                                                                {/* {dis.id === product._id && dis.inpDis == "" ?
                                                                newProductTable.price :
                                                                dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                    newProductTable.price : product.price} */}
                                                            </td>
                                                            <td>
                                                                <input type="text"
                                                                    className="allInput"
                                                                    className={dis.id === product._id ? dis.inpDis === "disable" ? "inputF" : "inputP" : "inputF"}
                                                                    value={dis.id === product._id && dis.inpDis === "" && newProductTable && !flagNewP ?
                                                                        newProductTable.amount :
                                                                        dis.id === product._id && dis.inpDis === "disable" && newProductTable && newProductTable.name && !flagNewP ?
                                                                            newProductTable.amount : product.amount}
                                                                    style={{ display: "inline-block", paddingLeft: "5%" }}
                                                                    onChange={(e) => onFieldEdit('amount', e)}
                                                                    onFocus={() => resetFeild('amount', product)}
                                                                    disabled={dis.id === product._id ? dis.inpDis : "disable"}
                                                                />
                                                                {/* {dis.id === product._id && dis.inpDis == "" ?
                                                                newProductTable.amount :
                                                                dis.id === product._id && dis.inpDis == "disable" && newProductTable && newProductTable.name ?
                                                                    newProductTable.amount : product.amount} */}
                                                            </td>
                                                            {/* <td>{convertdate(product.date)}</td> */}
                                                            <td className="td_tt" >
                                                                <div className="td_side_edit_delete_copy d-flex-justify-content-center" style={{ display: "inline-block" }}>
                                                                    {
                                                                        chooselinep.isShow && chooselinep.index === product._id && (
                                                                            <div >
                                                                                <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Edit</p>} placement="bottom">
                                                                                    <button className="btnDis"
                                                                                        // type="submit"
                                                                                        onClick={() => setDisable(product)}
                                                                                    >
                                                                                        <MdEdit id="icon" style={{ width: "16px", height: "16px" }}
                                                                                        ></MdEdit>
                                                                                    </button>
                                                                                </Tooltip>
                                                                                <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Delete</p>} placement="bottom">
                                                                                    <button className="btnDis"
                                                                                        onClick={() => deleteProduct1(product._id, index)}
                                                                                    >
                                                                                        <MdDelete id="icon" style={{ width: "16px", height: "16px" }}
                                                                                        />
                                                                                    </button>
                                                                                </Tooltip>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        {/* </form> */}
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* </form> */}
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




