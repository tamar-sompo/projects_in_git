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
    }, [props.allproduct])

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
        if (searchby === "") {
            searchproduct = props.allproduct;
        }

    }

    const resetFeild = (fieldName, product) => {
        if (newProduct && newProduct[fieldName]) {

        }
        else {
        }
    }


    const onFieldEdit = (fieldName, e) => {

        const value = e.target.value;
        dispatch(actions.setNewProductTable({ key: fieldName, value: value }))
    }


    const setDisable = (product) => {

        setDis({ id: product._id })
        if (dis.flag === 0) {
            // alert("inpDis:")
            setDis({ flag: 1, id: product._id, inpDis: "" })
            // dispatch(actions.setNewProductObject(product))
        }
        else {
            if (dis.inpDis == "") {
                setDis({ flag: 0, id: product._id, inpDis: "disable" })
                // dispatch(actions.setProductId({key: "table", value:product._id}))
                dispatch(actions.editProduct({ key: "table", value: product._id }))
            }
            else
                setDis({ id: product._id, inpDis: "" })
        }

    }
    const onButtonClick = () => {
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
            let reader = new FileReader();
            const image = reader.result;
            reader.onloadend = () => {
                const objectImage = { 'image': event, 'to': 'product' }
                props.setImage(objectImage)
            }
            reader.readAsDataURL(event)
            console.log('imagep', props.imgProduct)
        }
    }


    return (
        <>
            {/* {show &&
                <MassageFormat></MassageFormat>
            } */}
            <div className="container-fluid con" style={{
                height: "88vh",
                width: "98%",
                borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126"
            }}>
                <div className="row ">
                    <div className="col d-flex row" style={{ height: 10 + 'vh' }}>
                        <h1 style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>Products</h1>
                    </div>
                    <div className="col-8 d-flex justify-content-end ">

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
                                            {/* <th style={{ width: "5%", backgroundColor: "white", border: "none" }}></th> */}
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
                                    }
                                    {console.log("producttt", props.allproduct)}
                                    {props.allproduct.length > 0 ?
                                        <tbody >
                                            {(f() || searchby === "") &&
                                                searchproduct.map((product, index) => {
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
                                                                {/* <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={product.images ? product.images : Imgp} />  */}
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
                                                            <td className="td_tt" id="td_hover">
                                                                <div className="td_side_edit_delete_copy " >
                                                                    {
                                                                        chooselinep.isShow && chooselinep.index === product._id && (
                                                                            <div >
                                                                                <button className="btnDis"
                                                                                    onClick={() => setDisable(product)}
                                                                                >
                                                                                    <MdEdit id="icon"
                                                                                    ></MdEdit>
                                                                                </button>
                                                                                <button className="btnDis"
                                                                                    onClick={() => deleteProduct1(product._id, index)}
                                                                                >
                                                                                    <MdDelete id="icon"
                                                                                    />
                                                                                </button>
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