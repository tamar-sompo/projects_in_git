import React, { useEffect, useRef, useState } from 'react';
import './invoice.css';
// import './invoiceTemp1.css';
import '../notUse/invoiceTemp1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container, Button } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'react-select'
import { FiUpload } from "react-icons/fi";
import MouseTooltip from 'react-sticky-mouse-tooltip';
// import styled from 'styled-components';
import LeaderLouder from '../../components/Useful/leaderLouder'
// import {Link} from "react-router-dom";
import DigitalSignature from './digitalSignature';
import flowersLogo from '../../Img/flowersLogo.png';
import signature from '../../Img/signature.png'
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import ShowCompany from '../showCompany'
import flowerbackground from '../assets/flo.jpg'
import Untitled from '../../../src/Img/Untitled-1.jpg'
import { debounce, ListItemIcon } from '@material-ui/core';
import {
    useLocation
} from "react-router-dom";
import $ from 'jquery'
import MessageSave from './messageSave'




const Input = styled.input`
::placeholder {
  color: ${(props) => props.bgColor};
}
`;
function Invoice(props) {
    const Location = useLocation()
    const dispatch = useDispatch();
    const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
    const dispatchgetbusiness = () => dispatch({ type: "GET_BUSINESS_BY_ID" })
    // const allcontact = useSelector(state => state.customerReducer.allContact);
    // const changeCurrentComponent = (event) => dispatch(actions.setCurrentComponentStep(event))
    const invoiceNumber = useSelector(state => state.invoiceReducer.lastInvoice.invoiceNumber);
    const invoiceDetails = useSelector(state => state.invoiceReducer.invoice);
    const focus = useSelector(state => state.invoiceReducer.focus);
    const setFocus = (focus) => dispatch(actions.setFocus(focus));
    // const theId = useSelector(state => state.invoiceReducer.invoiceId);
    const displayInvoice = useSelector(state => state.invoiceReducer.dislayInvoice)
    const setDisplayInvoice = (status) => dispatch(actions.setDislayInvoice(status));

    // const companyChangesDetails = useSelector(state => state.invoiceReducer.companyChangesDetails);
    const allcontact1 = useSelector(state => state.customerReducer.allContact);
    const contactedit1 = useSelector(state => state.invoiceReducer.updateContact)
    const setupdateContact = (fieldToUpdate) => dispatch(actions.setUpdateContact(fieldToUpdate))
    const publicNoteInvoice = useSelector(state => state.invoiceReducer.publicNote);
    const contactDetails = useSelector(state => state.customerReducer.contact);
    const allproduct = useSelector(state => state.productReducer.allProducts);
    const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
    const detailscontact = useSelector(state => state.customerReducer.detailscontact);
    const detailsBusiness = useSelector(state => state.buisnessReducer.currentBuisness);
    const allInvoices = useSelector(state => state.invoiceReducer.allInvoices);
    const userName = useSelector(state => state.publicReducer.userName);
    const updatedetailsBusiness = (fieldToUpdate) => dispatch(actions.setUpdateBusiness(fieldToUpdate))
    const invoice = useSelector(state => state.invoiceReducer.invoice);
    const setImage = (objectImage) => dispatch(actions.setImage(objectImage))
    const logoDesign = useSelector(state => state.LogoReducer.logoDesign)
    const setinvoiceDetailsViewContact = (invoiceEdit) => dispatch(actions.setinvoiceDetailsViewContact(invoiceEdit))
    const prodactions = [...invoice.products];
    const [str, setStr] = useState()
    const setInvoiceShow = ({ }) => dispatch(actions.setInvoiceShow({}))
    const inputFile = useRef();
    const inputFile1 = useRef();
    const [isMouseTooltipVisible, setIsMouseTooltipVisible] = useState(false);
    let productSelect = useSelector(state => state.productReducer.productSelect);
    const newContact = useSelector(state => state.customerReducer.newContact)
    const product1 = useSelector(state => state.productReducer.product1)
    const new_product = useSelector(state => state.productReducer.newProduct)
    const [contactFromInvoice, setContactFromInvoice] = useState({})
    const invoiceeye = useSelector(state => state.invoiceReducer.invoiceeye)
    // const product1 = useSelector(state => state.productReducer.product1)
    const [saveContactOne, setsaveContactOne] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        flag: false
    })
    const colorFlagShowSaveP = useSelector(state => state.productReducer.colorFlagShowSaveP)
    const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
    const setFlagShowSaveP = (status) => dispatch(actions.setFlagShowSaveP(status))
    const saveSum = useSelector(state => state.invoiceReducer.saveSum)
    // const setDeleteSaveSum = (sum) => dispatch(actions.setDeleteSaveSum(sum))
    const [saveSum2, setsaveSum2] = useState(0)
    const calcSumProduct = useSelector(state => state.invoiceReducer.calcSumProduct)
    // const [flagcontactfrominvoice, setflagcontactfrominvoice] = useState(false)
    const [flagcontactFromInvoice1, setflagcontactFromInvoice1] = useState(false)
    const [flagdetailsContact, setflagdetailsContact] = useState(false)
    const setIslevel = (level) => dispatch(actions.setIsLevel(level))
    const [flag, setFlag] = useState(false)
    let history = useHistory()
    const p = useSelector(state => state.displayComponents.p);
    const showMessage = useSelector(state => state.messageReducer.showMessage);
    const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
    const [contactedit, setcontactedit] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const flagSavePr = useSelector(state => state.invoiceReducer.flagSavePr)
    // useEffect(()=>{
    //   if (window.location.href.indexOf("view") != -1){
    //     dispatch(actions.setInvoiceShow(detailsInvoice))
    //   }
    // },[detailsBusiness])
    // useEffect(() => {
    //   alert('ffff')
    //   // dispatch(actions.setGetBuisnessById(invoice.buisness))
    //   dispatch(actions.getContactById(invoice.contact))
    // }, [allcontact1])

    // useEffect(()=>{
    //   dispatch(actions.getAllProduct())

    // },[detailsBusiness])
    const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave)
    const flagLoud = useSelector(state => state.invoiceReducer.showLoud)
    console.log("flagLoud", flagLoud)
    useEffect(() => {

        console.log("invoiceSave", invoiceSave)
        dispatch(actions.setShowInInvoice(false))
    }, [invoiceSave])

    useEffect(() => {

        // if (window.location.href.indexOf("view") != -1) {
        //    
        //   console.log("njnj")
        //   setDisplayInvoice("true")
        //   if (window.location.pathname.split("/").pop() != "") {
        //     console.log("yyyyyy", props.match.params.theId)
        //     dispatch(actions.setGetInvoiceByIdFull(props.match.params.theId))
        //     // dispatch(actions.setInvoiceShow())
        //   }
        // }

        // if(history.location.pathname==="/")
        console.log("111s")
        dispatch(actions.setViewConversion('false'))
        console.log("detailsInvoice111", detailsInvoice, detailscontact)
        setIslevel(1);
        console.log("props.invoice1", props.invoice1)
        $(".step1").click()
        if (history.location.pathname === `/${userName}/invoice`) {
            // dispatch(actions.setProducts({ id: 'null', amount: null, sum_product: null }))

            dispatch(actions.setPDelete(['']))

        }
        else {
            if (detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.flag === true) {

                console.log("heree111", detailsInvoice.contactOneTime.name, detailsInvoice.contactOneTime.email, detailsInvoice.contactOneTime.phone)
                setsaveContactOne({
                    flag: true,
                    name: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.name : '',
                    email: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.email : '',
                    phone: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.phone : '',
                    address: detailsInvoice.contactOneTime ? detailsInvoice.contactOneTime.address : '',
                })

                setcontactedit({
                    name: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.name,
                    email: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.email,
                    phone: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.phone,
                    address: detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.address
                })
            }
            else {

                console.log("hiiiiiiiiiiiiiiiiii", detailsInvoice)
                let ojectContact = allcontact1.find(x => x.email == detailsInvoice.contact)
                setContactFromInvoice(ojectContact)
                console.log("ojectContact", ojectContact)
                if (contactFromInvoice) {
                    setcontactedit({
                        name: contactFromInvoice.name,
                        email: contactFromInvoice.email,
                        phone: contactFromInvoice.phone,
                        address: contactFromInvoice.address
                    })
                }

            }

            // }
            if (history.location.pathname !== `/${userName}/allDocuments` && history.location.pathname !== `/${userName}/Invoice/Conversion` && history.location.pathname !== `/${userName}/Invoice/Content` && history.location.pathname !== `/${userName}/Invoice/Design` && history.location.pathname !== `/${userName}/Invoice/Production`) {




                // dispatch(actions.setProduction({ id: 'null', amount: null, sum_product: null }))
                console.log("dp", invoice.products)
                if (window.location.href.indexOf("view") != -1) {
                    if (allproduct.length > 0) {
                        detailsInvoice.products.map(p =>
                            dispatch(actions.setP(allproduct.find(x => x._id == p.id).name)))
                    }
                }
                else {
                    detailsInvoice.products.map(p =>
                        dispatch(actions.setP(allproduct ? allproduct.find(x => x._id == p.id).name : '')))
                }
                // }
                console.log("vvvv", history.location.pathname)
            }
        }
        {
        }

    }, [allcontact1, detailsBusiness, allproduct])
    useEffect(() => {

        console.log("saveContactOne", saveContactOne)
        console.log("contactedit", contactedit)
        updateinvoiceField({ key: "contactOneTime", value: saveContactOne });
        setShowMessage(false)

    }, [saveContactOne])
    useEffect(() => {
    }, [invoiceeye])
    useEffect(() => {

        if (flagcontactFromInvoice1 == false)
            setflagcontactFromInvoice1(true)
        else {

            setcontactedit({
                name: contactFromInvoice && contactFromInvoice.name,
                email: contactFromInvoice && contactFromInvoice.email,
                phone: contactFromInvoice && contactFromInvoice.phone ? contactFromInvoice.phone : detailscontact.phone,
                address: contactFromInvoice && contactFromInvoice.address
            })
        }
    }, [contactFromInvoice])
    let date1 = new Date();
    const [isLoading, setIsLoading] = useState(false);
    const [borderLogo, setBorderLogo] = useState(false);
    const [borderBgImage, setBorderBgImage] = useState("true");
    const [contactName, setcontactName] = useState()
    console.log("props", props)
    const focus_steps = (url_string, num) => {
        // console.log("url_string", url_string)
        // window.location.href.indexOf('Invoice') != -1 &&
        //   history.push("/ruthChoen/Invoice/" + url_string)
        // $(".step" + num).click()
    }

    const saveContact1 = () => {

        if (!detailscontact.contact) {

            console.log(contactFromInvoice, contactedit)
            setsaveContactOne({
                flag: true,
                name: contactedit.name ? contactedit.name : contactFromInvoice ? contactFromInvoice.name : '',
                email: contactedit.email ? contactedit.email : contactFromInvoice ? contactFromInvoice.email : '',
                phone: contactedit.phone ? contactedit.phone : contactFromInvoice ? contactFromInvoice.phone : '',
                address: contactedit.address ? contactedit.address : contactFromInvoice ? contactFromInvoice.address : '',
            })
        }
        else
            setsaveContactOne({
                flag: true,
                name: contactedit.name ? contactedit.name : saveContactOne ? saveContactOne.name : '',
                email: contactedit.email ? contactedit.email : saveContactOne ? saveContactOne.email : '',
                phone: contactedit.phone ? contactedit.phone : saveContactOne ? saveContactOne.phone : '',
                address: contactedit.address ? contactedit.address : saveContactOne ? saveContactOne.address : '',
            })
    }







    //-------------------------------------------validaton--------------------------------------------------
    const flagValidation = useSelector(state => state.invoiceReducer.flagValidation);
    const flagTmpSave = useSelector(state => state.invoiceReducer.flagTmpSave);
    const [errorMessage1, setErrorMessage1] = useState(false);
    const [errorMessage2, setErrorMessage2] = useState(false);
    const [firstTmp, setfirstTmp] = useState(false);

    const validatorPhone = (v) => {

        const tmp = v.length == 13 && v.includes('+');
        return tmp || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v);
    }
    const validatorEmail = (v) => {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
    }
    useEffect(() => {

        if (firstTmp) {
            let tmp3 = true;
            if (contactedit.phone) {
                tmp3 = validatorPhone(contactedit.phone);
            }
            if (validatorEmail(contactedit.email) && tmp3) {

                setErrorMessage1(false)
                setErrorMessage2(false)
                dispatch(actions.setFlagValidation(false))
                if (!flagTmpSave) {
                    dispatch(actions.setFlagOfterValidation(true))
                }
                else { dispatch(actions.setFlagTmpSave(false)) }
            }
            else {
                if (!contactedit.email) {
                    setErrorMessage1(true)
                    dispatch(actions.setFlagValidation(false))
                }
                else {
                    if (!validatorEmail(contactedit.email)) {
                        dispatch(actions.setFlagValidation(false))
                        setErrorMessage1(true)
                    }
                    else {
                        setErrorMessage1(false)
                    }
                }
                if (!tmp3) {
                    setErrorMessage2(true)
                    dispatch(actions.setFlagValidation(false))
                }
                else { setErrorMessage2(false) }
            }
        }
        else (setfirstTmp(true))
    }, [flagValidation])

    useEffect(() => {

    }, [])
    const saveContact = () => {

        // let tmp1 = true;
        // let tmp3 = true;
        // if (contactedit.phone) {
        //   tmp3 = validatorPhone(contactedit.phone);
        // }
        // if (validatorEmail(contactedit.email) && tmp3) {
        setFlag(false)
        if (contactFromInvoice && contactFromInvoice._id || detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.flag && detailsInvoice.contactOneTime.flag == true) {
            console.log("contacteditttt", contactedit)
            dispatch(actions.setContactId(contactFromInvoice._id))
            dispatch(actions.updateContact(contactedit))
            // setErrorMessage1(false)
            // setErrorMessage2(false)
        }
        else {
            if (detailscontact && detailscontact.contact && detailscontact.contact._id) {
                console.log("contacteditttt", contactedit)
                dispatch(actions.setContactId(detailscontact.contact._id))

                dispatch(actions.updateContact(contactedit))
                // setErrorMessage1(false)
                // setErrorMessage2(false)
            }
            else {

                console.log("contacteditttt", contactedit)
                dispatch(actions.createContact(contactedit))
                console.log("newContact.emai", newContact.email)
                // setErrorMessage1(false)
                // setErrorMessage2(false)
            }
        }
        // }
        // else {
        //   if (!contactedit.email) {
        //     setErrorMessage1(true)
        //   }
        //   else {
        //     if (!validatorEmail(contactedit.email)) {
        //       setErrorMessage1(true)
        //     }
        //   }
        //   if (!tmp3) {
        //     setErrorMessage2(true)
        //   }
        // }
    }
    useEffect(() => {

        console.log("detailscontact", detailscontact)
        if (flagdetailsContact == false)
            setflagdetailsContact(true)
        else {
            console.log("contactedit444", contactedit)
            console.log("contactedit444", contactFromInvoice)

            setsaveContactOne({
                name: detailscontact.contact && detailscontact.contact.name,
                email: detailscontact.contact && detailscontact.contact.email,
                phone: detailscontact.contact && detailscontact.contact.phone,
                address: detailscontact.contact && detailscontact.contact.address
            })
        }
    }, [detailscontact])
    const onFieldChangeContact = (fieldName, e) => {
        if (fieldName == 'email') {
            if (e.target.value) {
                if (validatorEmail(e.target.value)) {
                    setErrorMessage1(false)
                }
                else { setErrorMessage1(true) }
            }
            else { setErrorMessage1(true) }
        }
        else {
            if (fieldName == 'phone') {
                if (e.target.value) {
                    if (validatorPhone(e.target.value)) {
                        setErrorMessage2(false)
                    }
                    else { setErrorMessage2(true) }
                }
                else {
                    setErrorMessage2(false)
                }
            }
        }

        if (fieldName === "name") {
            if (allcontact1.find(x => x.name == e.target.value)) {
                let dc = allcontact1.find(x => x.name == e.target.value).email
                // setinvoiceDetailsViewContact(dc)
                dispatch(actions.getContactById(dc))
                if (!detailscontact) {
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>

                }
                updateinvoiceField({ key: "contact", value: dc })
                setcontactedit({ [fieldName]: e.target.value })
            }
            else {
                dispatch(actions.setFlagMessage(true))
                setcontactedit({ ...contactedit, [fieldName]: e.target.value })
            }
        }
        else {
            dispatch(actions.setFlagMessage(true))
            setcontactedit({ ...contactedit, [fieldName]: e.target.value })
        }
    }

    const resetfieldcontactname = (field, e) => {

        // e.currentTarget.value = ''  

        if (detailsInvoice && detailsInvoice.contact && !detailsInvoice.contactOneTime.flag) {
            setContactFromInvoice({ ...contactFromInvoice, [field]: undefined })

            //להחזיר אם לא עובדד

            // updateinvoiceField({ key: "contact", value: '' })
        }
        if (contactedit && contactedit.name)
            dispatch(actions.setresetcontactedit(field))
        dispatch(actions.setContactReset(field))


    }


    const onFieldChanged = (fieldName) => (e) => {
        const value = e.target.value;
        if (fieldName = "dueDate")
            updateinvoiceField({ key: fieldName, value: convertdate(value) })
        else
            updateinvoiceField({ key: fieldName, value: value })
    }














    const updatedetailsBusiness1 = (fieldName) => (e) => {
        updatedetailsBusiness({ [fieldName]: e.target.value })
    }
    const saveItemToStore = (index, fieldChanged) => {
        prodactions[index] = { ...prodactions[index], ...fieldChanged }
        updateinvoiceField({ key: "productions", value: prodactions });
    }
    const createInvoicenumber1 = () => {
        console.log("allInvoices.length+1", allInvoices.length + 1)
        return allInvoices.length + 1
    }

    const convertdate = (date1) => {
        console.log("date", date1)

        let date = new Date(date1)
        console.log("date11111", date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1))
        if (date.getDate() < 10 && date.getMonth() > 9)
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + '0' + (date.getDate())
        if (date.getDate() < 10 && date.getMonth() < 10)
            return date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + '0' + (date.getDate())
        if (date.getDate() > 9 && date.getMonth() < 10)
            return date.getFullYear() + "-" + '0' + (date.getMonth() + 1) + "-" + (date.getDate())
        else
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    }
    const addItem = () => {
        dispatch(actions.setProductAmount(0))
        // setsaveSum2(saveSum + saveSum2)


        dispatch(actions.setFlagSavePr(true))
        // dispatch(actions.setProductAmount(0))

        if (flagShowSaveP === true) {
            dispatch(actions.setColorFlagShowSaveP("red"))
        }
        else {
            dispatch(actions.setColorFlagShowSaveP("#707071"))
            dispatch(actions.setResetNewProduct({}))
            dispatch(actions.setProductSelectLimit([]))
            allproduct.length > 0 && allproduct.map(
                function (x) {
                    console.log("p", p)
                    let oo = p.find(y => y === x.name);
                    if (oo == undefined) {
                        console.log("hi")
                        dispatch(actions.setProductSelect(x))
                        console.log("productSelect", productSelect)
                    }
                })
            console.log("productSelect5", productSelect)
            if (detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) {

                console.log("gjdkhghhfkfkfkhk", detailsInvoice.products)
                    ;
                const newProdactions = [...detailsInvoice.products];
                // console.log("newProdactions",newProdactions)
                // newProdactions.push({ id: 'null', amount: 0 });
                dispatch(actions.setProduction({ id: 'null', amount: null, sum_product: null }))
                console.log("dp", invoice.products)
                // updateinvoiceField({ products: newProdactions });
            }

            //  }
            else {


                console.log("ghg")
                // dispatch(actions.setProducts('null'));
                dispatch(actions.setProducts({ id: 'null', amount: null, sum_product: null }))
                // console.log("invoiceee", invoice)
                // focus_steps('Content', 3)
            }
        }
    }


    // }

    const save = () => {
        if (history.location.pathname === `/${userName}/invoice`) {
            dispatch(actions.setSaveInvoice(invoice))
        }
        else {
            dispatch(actions.setGetInvoiceById(detailsInvoice._id))
            console.log("detailsInvoice", detailsInvoice._id)
            updateinvoiceField({ key: "products", value: detailsInvoice.products });
            dispatch(actions.setUpdateInvoice(invoice))
        }

        console.log("saveeee", invoice)
    }
    const deleteItemFromStore = (index) => {

        dispatch(actions.setColorFlagShowSaveP("#707071"))
        dispatch(actions.setFlagShowSaveP(false))
        dispatch(actions.setDeleteSaveSum(index))
        // setsaveSum2(saveSum-saveSum2)
        dispatch(actions.setResetNewProduct({}))
        // let productss=[...detailsInvoice.products]
        // productss.splice(index, 1)
        if (detailsInvoice.products && detailsInvoice.products.length > 0) {
            let productSelect3id = detailsInvoice.products[index].id;
            console.log("productSelect3id", productSelect3id)
            let productSelect3 = allproduct.find(x => x._id === productSelect3id)
            console.log("productSelect3id", productSelect3)
            if (p.length !== detailsInvoice.products.length && productSelect3id != "null") {
                let prr = [...p]
                prr.map((pr, ind) => {
                    if (pr === productSelect3.name) {
                        console.log("ind", ind, pr)
                        prr.splice(ind, 1)
                        dispatch(actions.setPDelete(prr));
                    }
                })
            }
            console.log("productss", detailsInvoice.products)
            let productss = [...detailsInvoice.products]
            productss.splice(index, 1);
            dispatch(actions.setProductionAfterDelete(productss))
        }
        else {

            let productSelect3id = invoice.products[index].id;
            console.log("productSelect3", productSelect3id)
            let productSelect3 = allproduct.find(x => x._id === productSelect3id)
            console.log("productSelect3", productSelect3)

            if (p.length !== invoice.products.length && productSelect3id != "null") {

                let prr = [...p]
                prr.map((pr, ind) => {
                    if (pr === productSelect3.name) {
                        console.log("ind", ind, pr)
                        prr.splice(ind, 1)
                        dispatch(actions.setPDelete(prr));
                    }
                })
            }
            //  dispatch(actions.setProductSelect(productSelect3))
            console.log("productSelect2", productSelect)
            let productss = [...invoice.products]
            console.log("productss1111", productss)
            productss.splice(index, 1)
            console.log("productss", productss)
            dispatch(actions.setProductAfterDelete(productss))

        }
        // prodactions.splice(index, 1);
        // updateinvoiceField({ productions: prodactions });
    }
    const setcustomer = (e) => {

    }

    const calculateProductions = (f) => detailsInvoice.prodactions.reduce((oldVal, item) => +oldVal + +item[f], 0)

    const onButtonClick = (str1) => {
        setStr(str1)
        console.log("flag1", str)
        // history.push(`/${userName}/Invoice/Design`)
        inputFile.current.click();
        setIslevel(2);
    };

    const onButtonClick1 = (str1) => {
        setStr(str1)
        console.log("flag1", str)
        // history.push(`/${userName}/Invoice/Design`)
        inputFile1.current.click();
        setIslevel(2);
    }



    const addImageList = (event) => {

        if (event) {
            let reader = new FileReader();
            let imageToStor = { 'image': '', 'to': "" }

            reader.onloadend = () => {
                if (str === "frame") {
                    imageToStor = { 'image': event, 'to': 'backgroundImg' }
                }
                if (str === "logo") {
                    imageToStor = { 'image': event, 'to': 'logo' }
                }
                setImage(imageToStor)
                console.log("imageee", reader.result)
            }
            reader.readAsDataURL(event)
        }
    }



    //  const setFlagAndBtn=()=>{
    //   setFlag1(0)
    //   onButtonClick()
    //   }

    const shortDate = new Date().toLocaleDateString()

    const refLevel3 = useRef(null)

    const setRefLevel3 = () => refLevel3.current.scrollIntoView()
    const func1 = (event) => {
        setIsMouseTooltipVisible(false)
        console.log("func11111")
        event.stopPropagation();
    }

    const func2 = (event) => {
        setIsMouseTooltipVisible(false)
        event.stopPropagation();
    }

    const func3 = (event) => {
        setIsMouseTooltipVisible(true)
        event.stopPropagation();
    }

    const changeBg = (event) => {
        if (event.target === event.currentTarget) {
            ;
            setBorderBgImage("true")
            setIsMouseTooltipVisible(true)
        }
        else
            setIsMouseTooltipVisible(false)
    }
    const changeBg1 = () => {
        setIsMouseTooltipVisible(false)
    }
    const changetooltip = () => {
        setIsMouseTooltipVisible(false)
    }

    // useEffect(() => {
    //    
    //   console.log(invoice.imageFrame);
    //   console.log(invoice.imgLogo);
    // }, [invoice])

    const resetfieldcontact = (fieldName, e) => {

        // alert('p')
        console.log("resetfieldcontact")
        if (detailsInvoice.contact && !detailsInvoice.contactOneTime.flag) {
            setcontactedit({ ...contactedit, [fieldName]: e.target.value })
            setContactFromInvoice({ ...contactFromInvoice, [fieldName]: undefined })
        }
        if (detailsInvoice.contactOneTime && detailsInvoice.contactOneTime.flag && detailsInvoice.contactOneTime.flag == true) {
            setcontactedit({ ...contactedit, [fieldName]: e.target.value })
            setsaveContactOne({ ...saveContactOne, [fieldName]: undefined })
        }
        else {
            setcontactedit({ ...contactedit, [fieldName]: e.target.value })
            dispatch(actions.setContactReset(fieldName))
        }
    }
    const ooo = () => {

        console.log("enterrrrrrr", detailsInvoice)
    }

    return (
        <>
            {/*
      <h1>{detailsInvoice}</h1> */}

            {/* <div className={flagLoud ? 'flagLoudOp' : ''}> */}
            {/* <div> */}
            <MessageSave saveContact={saveContact} saveContact1={saveContact1}></MessageSave>
            <div className="wrap_invoice" style={{ height: window.location.href.indexOf("view") != -1 ? '100vh' : '80vh' }}>
                <div className={flagLoud ? 'flagLoudOp' : ''}>
                    {console.log("allcontacttttt20", detailsInvoice)}
                    <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                        onChange={(e) => addImageList(e.target.files[0])} />
                    <div id="bgImg" className={isMouseTooltipVisible ? "frameInvoice" : ""} style={{ border: 8 + 'px solid red' }}
                        onClick={() => {
                            if (displayInvoice === "false") onButtonClick("frame")
                        }}
                        style={{
                            opacity: isMouseTooltipVisible ? '0.5' : '1',
                            backgroundImage: invoice.imageFrame ? `url('${invoice.imageFrame}')` : detailsInvoice.imageFrame ? `url('${detailsInvoice.imageFrame}')` : `url(${Untitled})`
                        }}>


                        <Container className="main-temp1"
                            onClick={(event) => {
                                if (displayInvoice === "false") func1(event)
                            }}
                            // onMouseEnter={(event) => {
                            //   if (displayInvoice === "false") func2(event)
                            // }}
                            // onMouseLeave={(event) => {
                            //   if (displayInvoice === "false") func3(event)
                            // }}
                            style={{ border: setBorderBgImage === true ? '50px solid red' : 'none' }}>

                            <Row className="justify-content-md-center py-3">
                                {/* <button style={{ backgroundColor: "red" }} onClick={saveContact}>saveContact</button> */}
                                {/* <Link to="/Invoice/Design" style={{ backgroundColor: "white", border: "none" }}> */}
                                <input type='file' id='file' ref={inputFile1} style={{ display: 'none' }}
                                    onChange={(e) => addImageList(e.target.files[0])} />

                                {/* <Link to="/Invoice/Design" style={{ backgroundColor: "white", border: "none" }}> */}

                                {console.log('logoooo', detailsInvoice.imgLogo)}

                                <img style={{ width: props.logowidth, borderRadius: props.borderlogo }}
                                    // placeholder={require('../../../src/Img/Untitled-1.jpg')}
                                    id='userLogo-temp1'
                                    style={{ border: borderLogo === true ? '1px dashed lightgray' : 'none' }}
                                    // onMouseOver={() => {
                                    //   if (displayInvoice === "false") setBorderLogo(true)
                                    // }}
                                    // onMouseLeave={() => {
                                    //   if (displayInvoice === "false") setBorderLogo(false)
                                    // }}
                                    src={detailsBusiness && detailsBusiness.imgLogo ? detailsBusiness.imgLogo : flowersLogo}
                                    alt="Logo"
                                    title="Your Logo Here"
                                // onClick={() => {
                                //   if (displayInvoice === "false") onButtonClick1("logo")
                                // }}
                                // style={isLoading ? { display: "none" } : {}}
                                />
                                <div
                                // style={{ width: props.logowidth, borderRadius: props.borderlogo }}
                                // id='user-logo'
                                // src={props.logo}
                                // alt="Logo"
                                // title="Your Logo Here"
                                // onload={onLoad}
                                // style={isLoading ? {} : { display: "none" }}
                                >
                                </div>
                                {/* </Link> */}
                            </Row>
                            <Row className="justify-content-md-center mb-0">
                                <Col md={8} >
                                    <Row onClick={() => focus_steps('Production', 1)}>
                                        <Col md={4} className='m-auto'>
                                            <input disabled={displayInvoice === "true" ? "disable" : ""} readOnly
                                                size='15'
                                                type="text"

                                                className={focus === 'companyWebsite' ? 'focus-temp1 text-center design_text' : 'editable-temp1 text-center design_text'}
                                                placeholder={detailsBusiness && detailsBusiness.socialmedias ? detailsBusiness.socialmedias.website ? detailsBusiness.socialmedias.website : "business website" : "business website"}
                                                //placeholder={detailsBusiness ? detailsBusiness.phone ? detailsBusiness.phone : "business phone" : "business phone"}
                                                onClick={displayInvoice === "false" && (() => setFocus('companyWebsite'))}
                                                onBlur={displayInvoice === "false" && updatedetailsBusiness1('website')}
                                                // onChange={('companyWebsite')}
                                                // value={companyChangesDetails.companyWebsite}
                                                // value={invoice.companyWebsite}
                                                value={detailsBusiness && detailsBusiness.socialmedias && detailsBusiness.socialmedias.website}
                                            />
                                        </Col>
                                        {/* <Col md={4} className='m-auto'>
                    <input disabled={displayInvoice === "true" ? "disable" : ""} readOnly
                      size='15'
                      className={focus === 'companyAddress' ? 'focus-temp1 text-center' : 'editable-temp1 text-center'}
                      placeholder={detailsBusiness ? detailsBusiness.city ? detailsBusiness.city : "City" : "City"}
                      onClick={displayInvoice === "false" && (() => setFocus('companyCity'))}
                      onBlur={displayInvoice === "false" && updatedetailsBusiness1('city')}
                      // onChange={('companyWebsite')}
                      // value={companyChangesDetails.companyWebsite}
                      // value={invoice.companyAddress}
                      value={detailsBusiness && detailsBusiness.city}
                    />
                  </Col> */}
                                        <Col md={4} className='m-auto'>
                                            {flagLoud &&
                                                <div class="d-flex justify-content-end">
                                                    <LeaderLouder></LeaderLouder>
                                                </div>}
                                            <div class="d-flex justify-content-start">
                                                <input disabled={displayInvoice === "true" ? "disable" : ""} readOnly
                                                    style={{ width: "10vh" }}
                                                    // className="inpt"
                                                    size='15'
                                                    type="text"
                                                    className={focus === 'companyAddress' ? 'focus-temp1 text-center design_text' : 'editable-temp1 text-center design_text'}
                                                    placeholder={detailsBusiness ? detailsBusiness.city ? detailsBusiness.city : "city" : "city"}
                                                    onClick={displayInvoice === "false" && (() => setFocus('companyAddress'))}
                                                    onBlur={displayInvoice === "false" && updatedetailsBusiness1('address')}
                                                    // onChange={('companyWebsite')}
                                                    // value={companyChangesDetails.companyWebsite}
                                                    // value={invoice.companyAddress}
                                                    value={detailsBusiness && detailsBusiness.city}
                                                // value={{a:detailsBusiness && detailsBusiness.city, b: detailsBusiness && detailsBusiness.address }}
                                                />
                                                <input disabled={displayInvoice === "true" ? "disable" : ""} readOnly
                                                    style={{ width: "10vh" }}
                                                    // className="inpt"
                                                    size='15'
                                                    type="text"
                                                    placeholder={detailsBusiness ? detailsBusiness.address ? detailsBusiness.address : "street" : "street"}
                                                    className={focus === 'companyAddress' ? 'focus-temp1 text-center design_text' : 'editable-temp1 text-center design_text'}
                                                    value={detailsBusiness && detailsBusiness.address}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={4} className='m-auto'>
                                            {/* <Link to="/" */}
                                            <input readOnly
                                                type="text"
                                                disabled={displayInvoice === "true" ? "disable" : ""}
                                                size='15'
                                                className={focus === 'companyPhone' ? 'focus-temp1 text-center design_text' : 'editable-temp1 text-center design_text'}
                                                placeholder={detailsBusiness ? detailsBusiness.phone ? detailsBusiness.phone : "business phone" : "business phone"}
                                                onClick={() => setFocus('companyPhone')}
                                                // onChange={onFieldChanged('companyWebsite')}
                                                onChange={(e) => onFieldChanged('companyPhone')}
                                                onBlur={updatedetailsBusiness1('phone')}
                                                // onChange={('companyWebsite')}
                                                // value={companyChangesDetails.companyWebsite}
                                                // value={invoice.companyPhone}
                                                value={detailsBusiness && detailsBusiness.phone}
                                            />
                                        </Col>
                                    </Row></Col></Row>
                            <Row className="justify-content-center align-items-center">
                                <Col md={9}>
                                    <hr
                                        style={props.colors ? { backgroundColor: props.colors[1] } : {}}
                                    />
                                </Col>
                            </Row>
                            <Row className="my-5"></Row>
                            <Row className='m-0'>
                                <Col md={8} className='' onClick={() => focus_steps('Production', 1)}>
                                    <Row className='static-temp1'>To:</Row>
                                    <Row className="font-weight-bold mb-2" >
                                        <input
                                            // type="text"
                                            name="city" list="contactname"
                                            id='headers-name'
                                            disabled={displayInvoice === "true" ? "disable" : ""}
                                            placeholder="contact name"
                                            autoComplete='new-password'
                                            // placeholder={
                                            //   'costomers name'
                                            // }
                                            // placeholder={
                                            //   detailsInvoice && !detailscontact.contact ? detailsInvoice.contact ? allcontact1.find(x => x.email == detailsInvoice.contact) ? allcontact1.find(x => x.email == detailsInvoice.contact).name : "Customer's name" : "Customer's name" :
                                            //     detailsInvoice ? detailscontact.contact.name : detailscontact.contact ? detailscontact.contact.name : "Customer's name"}
                                            className={focus === 'customerName' ? 'focus-temp1 design_text' : 'editable-temp1 design_text'}
                                            onClick={() => setFocus('customerName')}
                                            onFocus={(e) => resetfieldcontact('name', e)}
                                            // type="text"
                                            value={
                                                detailsInvoice ?
                                                    detailsInvoice.contactOneTime &&
                                                        detailsInvoice.contactOneTime.flag == true ?
                                                        saveContactOne.name ?
                                                            saveContactOne.name : contactedit.name ? contactedit.name : '' :
                                                        detailsInvoice.contact ?
                                                            contactFromInvoice ?
                                                                contactFromInvoice.name : contactedit.name ? contactedit.name : ''
                                                            :
                                                            detailscontact && detailscontact.contact ?
                                                                detailscontact.contact.name :
                                                                contactedit.name ? contactedit.name : "" : ""

                                            }
                                            onChange={(e) => onFieldChangeContact('name', e)}
                                        // onBlur={onFieldChangeContact2('name')}
                                        />
                                        <datalist style={{ zIndex: "999" }} id="contactname">
                                            {console.log("allcontact1", allcontact1)}
                                            {allcontact1.length > 0 ? allcontact1.map(x => {
                                                return (
                                                    <option>{x.name}</option>)
                                            }) : ''}
                                        </datalist>
                                    </Row>
                                    <Row >
                                        <input
                                            disabled={displayInvoice === "true" ? "disable" : ""}
                                            placeholder="contact email"
                                            autoComplete='new-password'
                                            // placeholder={
                                            //   detailsInvoice && !detailscontact.contact ? detailsInvoice.contact ? allcontact1.find(x => x.email == detailsInvoice.contact) ? allcontact1.find(x => x.email == detailsInvoice.contact).email : "contact_email" : "contact_email" :
                                            //     detailsInvoice ? detailscontact.contact.email : detailscontact.contact ? detailscontact.contact.email : "contact_email"}
                                            type='email'
                                            onFocus={(e) => resetfieldcontact('email', e)}
                                            className={errorMessage1 ?
                                                'editable-temp1 design_text validB' : 'editable-temp1 design_text'
                                            }
                                            // className='editable-temp1 design_text'
                                            // className={focus === 'customerEmail' ? 'focus-temp1' : 'editable-temp1'}
                                            // onClick={() => setFocus('customerEmail')}
                                            value={detailsInvoice ?
                                                detailsInvoice.contactOneTime &&
                                                    detailsInvoice.contactOneTime.flag == true ?
                                                    saveContactOne.email ?
                                                        saveContactOne.email : contactedit.email ? contactedit.email : '' :
                                                    detailsInvoice.contact ? contactFromInvoice ?
                                                        contactFromInvoice.email : contactedit.email ? contactedit.email : '' :
                                                        detailscontact && detailscontact.contact ? detailscontact.contact.email :
                                                            contactedit.email ? contactedit.email : '' : ''}
                                            // value={detailscontact && detailscontact.contact && detailscontact.contact.email}
                                            onChange={(e) => onFieldChangeContact('email', e)}
                                        // onBlur={onFieldChangeContact2('email')}
                                        >
                                        </input>
                                    </Row>
                                    <Row >
                                        <input

                                            disabled={displayInvoice === "true" ? "disable" : ""}
                                            placeholder="contact phone"
                                            autoComplete='new-password'
                                            onFocus={(e) => resetfieldcontact('phone', e)}
                                            // detailsInvoice?detailsInvoice.customerPhone? detailsInvoice.customerPhone:"xxxx":"xxxx"
                                            // placeholder={contactDetails ? contactDetails.phone ? contactDetails.phone : "02.5864321" : "02.5864321"}
                                            // placeholder={detailsInvoice && !detailscontact.contact ? detailsInvoice.contact ? allcontact1.find(x => x.email == detailsInvoice.contact) ? allcontact1.find(x => x.email == detailsInvoice.contact).phone : "contact_phone" : "contact_phone" :
                                            //   detailsInvoice ? detailscontact.contact.phone : detailscontact.contact ? detailscontact.contact.phone : "contact_phone"}
                                            // className={focus === 'customerPhone' ? 'focus-temp1' : 'editable-temp1'}
                                            // className='editable-temp1 design_text'
                                            className={errorMessage2 ?
                                                'editable-temp1 design_text validB' : 'editable-temp1 design_text'
                                            }
                                            // onClick={() => setFocus('customerPhone')}
                                            value={detailsInvoice ?
                                                detailsInvoice.contactOneTime &&
                                                    detailsInvoice.contactOneTime.flag == true ?
                                                    saveContactOne.phone ?
                                                        saveContactOne.phone : contactedit.phone ? contactedit.phone : '' :
                                                    detailsInvoice.contact ? contactFromInvoice ? contactFromInvoice.phone : contactedit.phone ? contactedit.phone : '' :
                                                        detailscontact && detailscontact.contact ? detailscontact.contact.phone :
                                                            contactedit.phone ? contactedit.phone : '' : ''}
                                            onChange={(e) => onFieldChangeContact('phone', e)}>
                                        </input>
                                    </Row>
                                    <Row >
                                        <input

                                            disabled={displayInvoice === "true" ? "disable" : ""}
                                            placeholder="contact address "
                                            autoComplete='new-password'
                                            onFocus={(e) => resetfieldcontact('address', e)}
                                            // detailsInvoice?detailsInvoice.customerAddress? detailsInvoice.customerAddress:"xxxx":"xxxx"
                                            // placeholder={contactDetails ? contactDetails.address ? contactDetails.address : "Arlozerov 2,Tel-Aviv" : "Arlozerov 2,Tel-Aviv"}
                                            // placeholder={detailsInvoice && !detailscontact.contact ? detailsInvoice.contact ? allcontact1.find(x => x.email == detailsInvoice.contact) ? allcontact1.find(x => x.email == detailsInvoice.contact).phone : "contact_adrress" : "contact_adrress" :
                                            //   detailsInvoice ? detailscontact.contact.address : detailscontact.contact ? detailscontact.contact.address : "contact_adrress"}
                                            // className={focus === 'customerAddress' ? 'focus-temp1' : 'editable-temp1'}
                                            className='editable-temp1 design_text'
                                            value={detailsInvoice ?
                                                detailsInvoice.contactOneTime &&
                                                    detailsInvoice.contactOneTime.flag == true ?
                                                    saveContactOne.address ?
                                                        saveContactOne.address : contactedit.address ? contactedit.address : '' :
                                                    detailsInvoice.contact ? contactFromInvoice ? contactFromInvoice.address : contactedit.address ? contactedit.address : '' :
                                                        detailscontact && detailscontact.contact ? detailscontact.contact.address :
                                                            contactedit.address ? contactedit.address : '' : ''}
                                            onChange={(e) => onFieldChangeContact('address', e)}>
                                        </input>
                                        {/* <button onClick={saveContact}>saveContactTocCrm</button> */}
                                        {/* <button onClick={saveContact1}>saveContact</button> */}
                                    </Row>
                                </Col>
                                <Col md={4} className='' onClick={() => focus_steps('Content', 3)}>
                                    <Row ><br /></Row>
                                    <Row className="font-weight-bold mb-2">
                                        <Col md={6} id='headers-numInvoice' className='static-temp1 text-left'>Invoice</Col>
                                        <Col md={6} id='headers-numInvoice' className='static-temp1 text-right p-0'>{detailsInvoice ? detailsInvoice.invoiceNumber ? detailsInvoice.invoiceNumber : allInvoices.length + 3000 : allInvoices.length + 3000}</Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} className='static-temp1 text-left'>Date:{() => convertdate(detailsInvoice.date)}</Col>
                                        <Col md={6}
                                            className='static-temp1 text-right right p-0'
                                            readOnly>
                                            {shortDate}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6} className='static-temp1 text-left'>Due Date:
                                        </Col>
                                        <Col md={6} className='text-right p-0'>
                                            {/* <Link to="Invoice/Content"
              style={{ color: "black", border: "none" }}
            >*/}
                                            {/* {console.log("detailsInvoice.dueDate", detailsInvoice && detailsInvoice.dueDate && detailsInvoice.dueDate)} */}
                                            <input
                                                disabled={displayInvoice === "true" ? "disable" : ""}
                                                className={focus === 'dueDate' ? 'focus-temp1' : 'editable-temp1'}
                                                type="Date"
                                                size="6"
                                                // placeholder='09-08-1999'

                                                defaultValue={detailsInvoice ? detailsInvoice.dueDate ? convertdate(detailsInvoice.dueDate) : convertdate(invoice.dueDate) ? convertdate(invoice.dueDate) : convertdate(new Date()) : convertdate(new Date())}
                                                //  value="2020-08-09"
                                                // onClick={changeCurrentComponent("Content")}
                                                onChange={onFieldChanged('dueDate')}
                                                onClick={() => setFocus('dueDate')}
                                            >
                                            </input>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>

                            <Row
                                // id='invoiceName'
                                className="font-weight-bold  justify-content-md-center py-5 mt-3 mb-3" onClick={() => focus_steps('Content', 3)}
                            >


                                <input
                                    disabled={displayInvoice === "true" ? "disable" : ""}
                                    placeholder='Invoice Name'
                                    id='title-temp1'
                                    className={focus === 'invoiceName' ? 'focus-temp1' : 'editable-temp1'}
                                    maxlength="15"
                                    // size="10"
                                    // onClick={changeCurrentComponent("Content")}
                                    // onChange={onFieldChanged('title')}
                                    ref={refLevel3}
                                    defaultValue={detailsInvoice ? detailsInvoice.type ? detailsInvoice.type : '' : ''}
                                    onClick={(e) => setRefLevel3()}
                                    onBlur={() => onFieldChanged('type')}
                                    // onClick={() => setFocus('invoiceName')}
                                    bgColor={props.colors ? props.colors[2] : 'black'}
                                // style={props.colors? {placeholderColor:props.colors[2]}:{}}
                                >
                                </input>

                                <Button
                                    className='button4'>
                                </Button>
                            </Row>
                            <Row className='mr-0 text-left font-weight-bold'>
                                <Col md={1}>
                                </Col>
                                <Col md={2}>Product Name</Col>
                                <Col md={2}>Description</Col>
                                <Col md={2}>Unit Price</Col>
                                <Col md={2}>Quantity</Col>
                                <Col md={2}>Discount</Col>
                                <Col md={1}></Col>
                            </Row>

                            <div id='table-temp1' className=''>
                                {console.log("window.location.href.indexOf", window.location.href.indexOf("view"))}
                                {(allproduct.length > 0 && window.location.href.indexOf("view") != -1 &&
                                    detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) ||
                                    (window.location.href.indexOf("view") == -1 &&
                                        detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0) ?
                                    detailsInvoice.products.map((p, index) =>
                                        <Item key={index}
                                            pro={p}
                                            arrColor={props.colors}
                                            index={index}
                                            productSelect={productSelect}
                                            onItemChanged={(fieldChanged) =>
                                                saveItemToStore(index, fieldChanged)}
                                            onItemDeleted={() => deleteItemFromStore(index)} />) :
                                    (allproduct.length > 0 && window.location.href.indexOf("view") != -1) ||
                                    (window.location.href.indexOf("view") == -1) && invoice.products.map((p, index) =>
                                        <Item key={index}
                                            productSelect={productSelect}
                                            pro={p}
                                            index={index}
                                            arrColor={props.colors}
                                            onItemChanged={(fieldChanged) =>
                                                saveItemToStore(index, fieldChanged)}
                                            onItemDeleted={() => deleteItemFromStore(index)} />)}
                            </div>

                            <Row className='mt-2'>
                                <Col className='m-0 p-0'>
                                    {displayInvoice === "false" &&
                                        <Row>
                                            <Button diabled={flagSavePr} variant="light"
                                                className='plusIcon-temp1 mb-2'
                                                onClick={addItem} >
                                                <FontAwesomeIcon
                                                    size='1x'
                                                    icon={['fas', 'plus']}
                                                />

                                            </Button>
                                        </Row>
                                    }
                                    <Row>
                                        {displayInvoice === "false" &&
                                            <Button variant="light"
                                                id='comment-temp1'
                                                // className={focus === 'comment' ? 'focus-temp1' : 'editable-temp1'}
                                                // style={{backgroundColor:focus==='comment'?'green':'unset'}}
                                                className={focus === 'comment' ? 'focus-temp1' : ''}
                                                nClick={() => setFocus('comment')}
                                            // onClick={changeCurrentComponent("Content")}        
                                            >
                                                Comment +
                                            </Button>}
                                    </Row>
                                </Col>

                                <Col md={{ span: 4, offset: 9 }} className="total-temp1 text-right">
                                    {/* <Row>
                  <Col md={4} className='font-weight-bold text-left'>SubTotal:</Col>

                  <Col md={4} className='text-right p-0'>{saveSum ? saveSum : ''}</Col>
                </Row> */}
                                    {/* <Row>
                 
                  <Col md={4} className='font-weight-bold text-left'>Discounts:</Col>
         
                  <Col md={4} className='text-right p-0'></Col>
                </Row> */}
                                    {/* <Row>
     
                  <Col md={4} className='font-weight-bold text-left'>Taxes:</Col>
               
                  <Col md={4} className='text-right p-0'>000</Col>
                </Row> */}
                                    <Row className=' font-weight-bold'>
                                        {/* <Link to="/Content" style={{ color: "black", border: "none" }}> */}
                                        <Col md={4} className='totalSum-temp1 text-left pt-4'>Total:</Col>
                                        {/* </Link> */}
                                        <Col md={4} className='totalSum-temp1 text-right pt-4 p-0'>{saveSum ? saveSum : ''}</Col>


                                    </Row>
                                </Col>
                            </Row>
                            <div id='signatue' className='justify-content-md-center'>
                                <div>
                                    {/* <DigitalSignature /> */}
                                </div>
                            </div>
                        </Container>
                        {/* <Setting></Setting> */}
                    </div>
                </div>
            </div>
        </>
    )
}
const productTotalCalculate = (a, b, c) => a * b - c
// export const Hi = () => {
//   // console.log("hiiii")
// }


export const Item = (props) => {
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
    // const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave)
    // const flagLoud = useSelector(state => state.invoiceReducer.showLoud)
    // console.log("flagLoud", flagLoud)
    // useEffect(() => {
    //    
    //   console.log("invoiceSave", invoiceSave)
    //   dispatch(actions.setShowInInvoice(false))
    // }, [invoiceSave])


    useEffect(() => {
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
        console.log("pppp")
        dispatch(actions.setFlagSavePr(false))
        if (flagPro === false) {

            setFlagPro(true)
        }
        //  setSum(props.pro.sum_product)}
        else {

            if (props.pro.id === 'null') {
                // alert('null')
                setdtp(allproduct.find(x => x._id === product1._id))
            }
            else {
                console.log("jkj")
                setdtp(allproduct.find(x => x._id === props.pro.id))
            }
            if (history.location.pathname === `/${userName}/invoice`) {
                // dispatch(actions.deleteLastProductInvoice());

                if (props.pro.id === 'null') {
                    dispatch(actions.setProductId({ id: product1._id, index1: props.index }));
                    // dispatch(actions.setProduct1({}))
                    dispatch(actions.setResetNewProduct({}))
                }
            }
            else {
                // dispatch(actions.deleteLastProduct());
                if (props.pro.id === 'null') {
                    dispatch(actions.setProductId2({ id: product1._id, index1: props.index }))
                    dispatch(actions.setInvoceShow(detailsInvoice))
                    dispatch(actions.setResetNewProduct({}))
                }
            }

        }
    }, [allproduct])



    const vv3 = (e) => {

        setflagValidPrice(false)
        setflagValidName(false)
        if (history.location.pathname !== `/${userName}/invoice`) {

            setflagValidPrice(false)
            setflagValidName(false)
            vv(e)
        }
        else {
            // setflagValidPrice(false)
            setflagValidName(false)
            console.log("trfgyuhytfdrtfgh")
            if (allproduct.length > 0 && allproduct.find(x => x.name === e.target.value)) {
                let product6 = allproduct.find(x => x.name === e.target.value)
                dispatch(actions.setProduct1(product6))
                setdtp(product6)
                setamount2(1)

                dispatch(actions.setAmountToProduct({ amount: 1, index1: props.index }))
                dispatch(actions.setSum({ sum: product6.discount ? product6.price * 1 * (1 - (product6.discount / 100)) : product6.price * 1, index1: props.index }))
                dispatch(actions.setResetNewProduct({}))
                // dispatch(actions.deleteLastProductInvoice());
                // if(calcSumProduct)

                dispatch(actions.setProductId({ id: product6._id, index1: props.index }));
                // dispatch(actions.setProducts({ id: product6._id, amount: 1 }));
                dispatch(actions.setP(product6.name))

                // setnameProduct(e.target.value)
            }

            dispatch(actions.setNewProduct({ key: "name", value: e.target.value }))
            // setproduct10({ ...product10, "name": e.target.value })
        }
        // setnameProduct(e.target.value)
    }


    const vv = (e) => {
        if (allproduct.length > 0 && allproduct.find(x => x.name === e.target.value)) {
            let product6 = allproduct.find(x => x.name === e.target.value)
            dispatch(actions.setProduct1(product6))
            // dispatch(actions.setProduct1(product6))
            setdtp(product6)
            setamount2(1)
            dispatch(actions.setAmountToProduct({ amount: 1, index1: props.index }))
            dispatch(actions.setSum({ sum: product6.discount ? product6.price * 1 * (1 - (product6.discount / 100)) : product6.price * 1, index1: props.index }))
            dispatch(actions.setResetNewProduct({}))
            // dispatch(actions.deleteLastProduct());
            dispatch(actions.setProductId2({ id: product6._id, index1: props.index }))
            dispatch(actions.setInvoceShow(detailsInvoice))
            dispatch(actions.setP(product6._id))
            // setnameProduct(e.target.value)
        }

        dispatch(actions.setNewProduct({ key: "name", value: e.target.value }))
    }
    const { vvv } = props
    // console.log("vvv",vvv);
    const dispatch = useDispatch();
    const { onItemChanged, onItemDeleted, productSelect } = props;


    const updateCell = (title1, e) => {
        if (e.target.value && e.target.value != "") {
            setFlagShowSaveP(true)
        }
        if (title1 == 'price') {
            setflagValidPrice(false)
        }

        for (var key in new_product) {
            if (new_product[key] && new_product[key] != "") {
                if (flagShowSaveP === false)
                    setFlagShowSaveP(true)
            }

        }

        if (title1 === "discount") {
            dtp.price && props.pro.amount ?
                dispatch(actions.setSum({ sum: (1 - (e.target.value / 100)) * dtp.price * props.pro.amount, index1: props.index })) :
                new_product.price && amountProductInvoice &&
                dispatch(actions.setSum({ sum: (1 - (e.target.value / 100)) * new_product.price * amountProductInvoice, index1: props.index }))
        }
        if (title1 === "price") {
            amount2 ? dtp.discount ?
                dispatch(actions.setSum({ sum: e.target.value * amount2 * (1 - (dtp.discount / 100)), index1: props.index })) :
                new_product.discount ?
                    dispatch(actions.setSum({ sum: e.target.value * amount2 * (1 - (new_product.discount / 100)), index1: props.index })) :
                    dispatch(actions.setSum({ sum: e.target.value * amount2, index1: props.index })) :
                dtp.discount ?
                    dispatch(actions.setSum({ sum: e.target.value * amountProductInvoice * (1 - (dtp.discount / 100)), index1: props.index })) :
                    new_product.discount ?
                        dispatch(actions.setSum({ sum: e.target.value * amountProductInvoice * (1 - (new_product.discount / 100)), index1: props.index })) :
                        dispatch(actions.setSum({ sum: e.target.value * amountProductInvoice, index1: props.index }))

        }
        if (title1 === "amount") {

            dispatch(actions.setAmountToProduct({ amount: e.target.value, index1: props.index }))
            dispatch(actions.setProductAmount(e.target.value))
            dtp.price ? dtp.discount ?
                dispatch(actions.setSum({ sum: e.target.value * dtp.price * (1 - (dtp.discount / 100)), index1: props.index })) :
                new_product.discount ?
                    dispatch(actions.setSum({ sum: e.target.value * dtp.price * (1 - (new_product.discount / 100)), index1: props.index })) :
                    dispatch(actions.setSum({ sum: e.target.value * dtp.price, index1: props.index })) :
                dtp.discount ?
                    dispatch(actions.setSum({ sum: e.target.value * new_product.price * (1 - (dtp.discount / 100)), index1: props.index })) :
                    new_product.discount ?
                        dispatch(actions.setSum({ sum: e.target.value * new_product.price * (1 - (new_product.discount / 100)), index1: props.index })) :

                        dispatch(actions.setSum({ sum: e.target.value * new_product.price, index1: props.index }))
        }
        // setamount2(props.pro.amount)

        else
            dispatch(actions.setNewProduct({ key: title1, value: e.target.value }))
        if (title1 == "amount") {
            if (e.target.value == "")
                if (!new_product.name || new_product.name == "")
                    if (!new_product.description || new_product.description == "")
                        if (!new_product.price || new_product.price == "")
                            if (!new_product.discount || new_product.discount == "")
                                setFlagShowSaveP(false)
        }
        if (title1 == "name") {
            if (e.target.value == "")
                if (!new_product.description || new_product.description == "")
                    if (!new_product.price || new_product.price == "")
                        if (!new_product.discount || new_product.discount == "")
                            setFlagShowSaveP(false)
        }
        if (title1 == "description") {
            if (e.target.value == "")
                if (!new_product.name || new_product.name == "")
                    if (!new_product.price || new_product.price == "")
                        if (!new_product.discount || new_product.discount == "")
                            setFlagShowSaveP(false)
        }
        if (title1 == "price") {
            if (e.target.value == "")
                if (!new_product.name || new_product.name == "")
                    if (!new_product.description || new_product.description == "")
                        if (!new_product.discount || new_product.discount == "")
                            setFlagShowSaveP(false)
        }
        if (title1 == "discount") {
            if (e.target.value == "")
                if (!new_product.name || new_product.name == "")
                    if (!new_product.description || new_product.description == "")
                        if (!new_product.price || new_product.price == "")
                            setFlagShowSaveP(false)
        }

    }
    const ggggg = () => {
    }
    const cleanInput1 = (field1) => {
        if (field1 === "amount") {

            if (amount2 != undefined) {
                dispatch(actions.setProductAmount(amount2))
                setamount2(undefined)
            }
        }
        else {
            if (dtp._id) {
                if (dtp[field1] != undefined) {
                    dispatch(actions.setNewProduct({ key: field1, value: dtp[field1] }))
                    setdtp({ ...dtp, [field1]: undefined })
                }
            }
        }
    }
    // useEffect(() => {
    //    
    //   console.log("discountp", discountp)
    // }, [discountp])
    const calcdiscountp = (e) => {
        //  
        // console.log("discountp11", discountp)

        setdiscountp(e.target.value)
    }



    const [flagValidPrice, setflagValidPrice] = useState(false);
    const [flagValidName, setflagValidName] = useState(false);
    const savepr = () => {

        if (amountProductInvoice != 0) {
            setamount2(amountProductInvoice)
            // dispatch(actions.setAmountToProduct({ id: dtp._id, amount: amountProductInvoice }))
        }
        if (dtp._id) {
            if (new_product.name && new_product.price) {
                dispatch(actions.setProductId1(dtp._id))
                dispatch(actions.editProduct())
                setflagValidPrice(false)
                setflagValidName(false)
            }
            else {
                if (new_product.name) {
                    setflagValidName(true)
                    console.log("flagValidName", flagValidName)
                }
                if (new_product.price) {
                    setflagValidPrice(true)
                    console.log("flagValidPhone", flagValidPrice)
                }
            }
        }
        else {
            // alert("hhhh", new_product)
            console.log('new_product', new_product)

            if (props.pro.id === "null" || props.pro.id === undefined) {
                if (new_product.name && new_product.price) {
                    dispatch(actions.setNewProductServer())
                    setflagValidPrice(false)
                    setflagValidName(false)
                }
                else {
                    if (!new_product.name) {
                        setflagValidName(true)
                        console.log("flagValidName", flagValidName)
                    }
                    if (!new_product.price) {
                        setflagValidPrice(true)
                        console.log("flagValidPhone", flagValidPrice)
                    }
                }
            }
        }
    }
    const totalProductRef = useRef([]);
    const resetproduct1 = () => {
        dispatch(actions.setProduct1({}))
    }
    // const calcAllSum = (e) => {
    //   alert("hhh")
    //   // console.log("calcAllSum", e.tatget.value)
    // }

    useEffect(() => {

        // alert("yy")
        console.log("dtp", dtp, "flagcalc", flagcalc, "sum", sum, "calcSumProduct", calcSumProduct)

        if (!flagcalc) {
            // if (!dtp._id)
            //   setCalcSumProduct(0)
            // if (props.pro.sum_product)
            //   setSum(props.pro.sum_product)
            setflagcalc(true)
        }



        else {
            // if (!dtp._id) {
            //   setCalcSumProduct(0)
            //   setSum(null)
            // }
            // else {
            //   if (props.pro.sum_product > 0) {
            //     setSum(props.pro.sum_product)
            //   }
            // if(!product1._id){
            // dtp.price ? amount2 ? discountp == 100 ? setCalcSumProduct(dtp.price * amount2) :
            //   setCalcSumProduct(dtp.price * amount2 * (1 - (discountp / 100))) :
            //   discountp == 100 ? setCalcSumProduct(dtp.price * amountProductInvoice) :
            //     setCalcSumProduct(dtp.price * amountProductInvoice * (1 - (discountp / 100))) :
            //   amount2 ? discountp == 100 ? setCalcSumProduct(amount2 * new_product.price) :
            //     setCalcSumProduct(amount2 * new_product.price * (1 - (discountp / 100))):
            //     discountp == 100 ?
            //  setCalcSumProduct(new_product.price * amountProductInvoice)  
            //  :
            // setCalcSumProduct(new_product.price * amountProductInvoice * (1 - (discountp / 100)))
            // }
        }
        // }
        console.log("22222 dtp", dtp, "flagcalc", flagcalc, "sum", sum, "calcSumProduct", calcSumProduct)
        // }
    }, [dtp, amount2, new_product, amountProductInvoice, discountp])

    // useEffect(() => {
    //   console.log("dtp", dtp, "calcSumProduct", calcSumProduct)
    //    
    //   if (!flagSumProduct) {
    //     setSum(props.pro.sum_product)
    //     setflagSumProduct(true)
    //   }
    //   else {
    //     if (dtp._id) {
    //       setSum(calcSumProduct)
    //       // setCalcSumProduct(sum
    //       dispatch(actions.setSumProductToPInvoice({ id: dtp._id, amount: amount2, sum_product: calcSumProduct }))

    //     }
    //     else {
    //       // setCalcSumProduct(0)
    //       setSum(props.pro.sum_product)
    //     }

    //     // setSum(props.pro.sum_product)
    //   }

    // }, [calcSumProduct])
    // useEffect(()=>{
    //    
    //   if(!flagsetSum)
    //   setflagsetSum(true)
    //   else
    //     setSum(props.pro.sum_product)
    // },[props.pro.sum_product])


    // const setTemp() => {

    // }

    return (
        <>
            {/* <LeaderLouder></LeaderLouder> */}
            {/* {flagLoud && <LeaderLouder></LeaderLouder>} */}
            {/* id='row1' */}
            {/* <div className={flagLoud ? "oposity" : "container-fluid con"}> */}
            <Row className='d-flex align-items-center row5 mr-0'>
                <Col md={1} className='py-3'>
                    <Button id='1'
                        style={{ visibility: displayInvoice === "true" ? "hidden" : "visible" }}
                        onClick={() => {
                            if (displayInvoice === "false") onItemDeleted()
                        }}
                        className='button4'>X</Button>


                    {
                        flagShowSaveP &&
                        <button style={{ width: "25px", height: "20px", backgroundColor: 'transparent', border: "none", color: colorFlagShowSaveP }} onClick={savepr}>save</button>
                    }

                </Col>
                {props.pro.id == "null" || props.pro.id === undefined ?
                    <Col className='py-3' md={2}>
                        {/* {console.log("dtp.name", dtp.name, new_product.name, new_product.price)} */}
                        <input
                            // onFocus={resetproduct1}
                            // onKeyPress="this.style.width = ((this.value.length + 1) * 8) + 'px';"
                            autoComplete='new-password'
                            onFocus={() => cleanInput1('name')}
                            name="product"
                            list="productname"
                            className={flagValidName ? 'cell validB' : 'cell'}
                            // maxlength="15"
                            size="7"
                            value={dtp ? dtp.name ? dtp.name : new_product.name ? new_product.name : '' : ''}
                            onChange={detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0 ? (e) => vv(e) : (e) => vv3(e)}
                        // onChange={(e) => vv3(e) }
                        // onBlur={vv2Save}
                        />
                        <datalist id="productname">
                            {productSelect.map(x => {
                                return (<option>{x.name}</option>)

                            })}
                        </datalist>

                        {/* <Select className="select_p" onChange={detailsInvoice && detailsInvoice.products && detailsInvoice.products.length > 0 ? (e) => vv(e) : (e) => vv2(e)} options={productSelect.map((x)=>{
           return ({
                    "label": x.name,
                    "value": x
                  })
})} */}

                    </Col>
                    :
                    <Cell
                        onFocus={() => cleanInput1('name')}
                        // value={product10 && product10.name ? product10.name : product1.name}
                        value={dtp.name ? dtp.name : new_product.name ? new_product.name : ''}
                        disabled={displayInvoice === "true" ? "" : "disable"}
                        onChange={(e) => updateCell('name', e)}
                        // onClick={(e)=>setFocus('productName')}
                        type="text"
                    > </Cell>}

                <Cell
                    placeholder='descripition'
                    onFocus={() => cleanInput1('description')}
                    disabled={displayInvoice === "true" ? "" : "disable"}
                    // value={product10 && product10.description ? product10.description : product1.description}
                    //  value={new_product.description?new_product.description:dtp?dtp.description:''}
                    value={dtp.description ? dtp.description : new_product.description ? new_product.description : ''}
                    onChange={(e) => updateCell('description', e)}
                    type="text"
                // onClick={(e) => setFocus('producteDscription')}
                ></Cell>
                <Cell
                    flagValidPrice={flagValidPrice}
                    onFocus={() => cleanInput1('price')}
                    // value={product10 && product10.price ? product10.price : product1.price}
                    value={dtp.price ? dtp.price : new_product.price ? new_product.price : ''}
                    disabled={displayInvoice === "true" ? "" : "disable"}
                    onChange={(e) => updateCell('price', e)}
                    onClick={(e) => setFocus('price')}
                    type="number"
                ></Cell>
                <Cell
                    onFocus={() => cleanInput1('amount')}
                    // value={product10 && product10.amount ? product10.amount : product1.amount}
                    // value={dtp.amount ? dtp.amount : new_product.amount ? new_product.amount : ''}
                    value={props.pro.amount}
                    onChange={(e) => updateCell('amount', e)}
                    // onChange={updateCell('amountByContact')}
                    // onClick={(e) => setFocus('amount')}
                    type="number"
                ></Cell>
                <Cell
                    onFocus={() => cleanInput1('discount')}
                    value={dtp.discount ? dtp.discount : new_product.discount ? new_product.discount : ''}
                    onChange={(e) => updateCell('discount', e)}
                    // onBlur={(e) => calcdiscountp(e)}
                    type="number"
                ></Cell>
                {/* <button style={{ width: "25px", height: "20px", backgroundColor: 'transparent', border: "none" }} onClick={savepr}>save</button> */}
                {/* <Col >
       </Col> */}
                <Col md={1} style={{ backgroundColor: '#707071', height: "100%" }}>
                    <div className='py-3' ref={totalProductRef}>
                        <input
                            className="sum1"
                            // value={sum ? sum : calcSumProduct ? calcSumProduct : ''}
                            value={props.pro.sum_product}

                        // discountp != 100 ?
                        //   dtp.price && amount2 ?
                        //     dtp.price * amount2 * (1 - (discountp / 100)) :
                        //     dtp.price && !amount2 ?
                        //       dtp.price * amountProductInvoice * (1 - (discountp / 100)) :
                        //       amount2 && !dtp.price ?
                        //         amount2 * new_product.price * (1 - (discountp / 100)) :
                        //         new_product.price && amountProductInvoice ?
                        //           new_product.price * amountProductInvoice * (1 - (discountp / 100)) : ''
                        //   :
                        //   dtp.price && amount2 ?
                        //     dtp.price * amount2 :
                        //     dtp.price && !amount2 ?
                        //       dtp.price * amountProductInvoice :
                        //       amount2 && !dtp.price ?
                        //         amount2 * new_product.price :
                        //         new_product.price && amountProductInvoice ?
                        //           new_product.price * amountProductInvoice : ''

                        // onChange={(e) => calcAllSum(e)}
                        />

                    </div>
                </Col>
            </Row>

        </>
    )
}

export const Cell = (props) => {
    const { value, onChange, onFocus, onBlur } = props;
    const displayInvoice = useSelector(state => state.invoiceReducer.dislayInvoice)

    // const [x, setX] = useState('d')
    // useEffect(() => {
    //   console.log(props)

    // })
    return <Col className='py-3' md={2}>

        <input
            onFocus={onFocus}
            disabled={displayInvoice === "true" ? "disable" : ""}
            className={props.flagValidPrice ? 'cell design_text validB' : 'cell design_text '}
            // maxlength="15"
            size="7"
            value={value}
            onBlur={onBlur}
            //  type="text"
            // onChange={(e) => setX(e.target.value)}
            // defaultValue={defaultValue}
            onChange={onChange}
            autoComplete='off'
        >
        </input>
    </Col>
}
const mapStateToProps = (state) => {
    return {
        imageInvoice: state.designReducer.imageInvoice,
        logowidth: state.LogoReducer.logoDesign.logoWidth,
        logoheight: state.LogoReducer.logoDesign.logoHeight,
        borderlogo: state.LogoReducer.logoDesign.logoBorderRadiusLogo,
        logo: state.LogoReducer.logoDesign.logo,
        colors: state.invoiceReducer.colors,
        allproduct: state.productReducer.allProducts
    };
}
const mapDispatchToProps = (dispatch) => ({
    changeimageInvoice: (image) => dispatch(actions.setImageInvoice(image)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Invoice)