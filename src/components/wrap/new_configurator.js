
import React from 'react'
import { connect } from 'react-redux';
// import { actions } from '../../redux/actions/All_actions';
import './new_configurator.css'
// import { actions } from '../../../../redux/actions/action'
// import DropDownList from '../dropDownList/dropDownList'
// import ConfiguratorTop from '../configuratorTop/configuratorTop'


// import history from '../../../history'
import { withRouter } from 'react-router-dom';
// import Maincomp from '../Details/productions'
import NewSetting from './newSetting';
// import Design_Menu from '../design_menu';




function NewConfigorator(props) {

    // const dispatch = useDispatch()

    // const userName = useSelector(state => state.publicReducer.userName);
    // const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
    // const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)
    // const setViewConversion = () => dispatch(actions.setViewConversion())
    // const prevPath = useSelector(state => state.displayComponents.prevPath)
    // const sendWave = () => dispatch(actions.setSystemWave())
    // const [flagM, setFlagM] = useState(false)
    // const allInvoices = useSelector(state => state.invoiceReducer.allInvoices);
    // const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);
    // const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
    // const showMessage = useSelector(state => state.messageReducer.showMessage);
    // const flagMessage = useSelector(state => state.messageReducer.flagMessage)
    // const flagMessageContact = useSelector(state => state.messageReducer.flagMessageContact)
    // const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
    // const setModalBody = (status) => dispatch(actions.setModalBody(status))
    // const [flagSaveinvoice1, setFlagSaveinvoice1] = useState(false)
    // const setFlagSaveInvoice = (status) => dispatch(actions.setFlagSaveInvoice(status))
    // const flagSaveInvoice = useSelector(state => state.messageReducer.flagSaveInvoice)
    // const buttonClick = useSelector(state => state.messageReducer.buttonClick)
    // const flagModal = useSelector(state => state.messageReducer.flagModal)
    // const [flagFirst, setFlagFirst] = useState(false)
    // const [flagFirstB, setFlagFirstB] = useState(false)
    // const colorFlagShowSaveP = useSelector(state => state.productReducer.colorFlagShowSaveP)
    // const [flagSaveP, setFlagSaveP] = useState(false)
    // const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
    // const invoiceId = useSelector(state => state.invoiceReducer.invoiceId)
    // const [flagFirstToP, setFlagFirstToP] = useState(false)
    // const [flagToCheck, setFlagToCheck] = useState(false)
    // const [first, setFirst] = useState(false)
    // const flagFromTable = useSelector(state => state.invoiceReducer.flagFromTable);
    // const flagPush = useSelector(state => state.invoiceReducer.flagPush);
    // const showModalName = useSelector(state => state.messageReducer.showModalName);


    // const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
    // const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);

    // const invoice = useSelector(state => state.invoiceReducer.invoice);
    // {type:'SET_SYSTEM_WAVE'})
    //     const history = useHistory()

    //     const changeBackground = (e) => {
    //         // props.history.push("/" + props.user)
    //         $(document).ready(function () {
    //             $("li").removeClass("li-back")
    //             $(e).addClass("li-back")
    //         })


    // useEffect(() => {
    //     dispatch(actions.setflagBorderProduct(false))
    //     // $('.left_nav').addClass('border_configurator') 
    // }, [])
    // useEffect(() => {
    //       "prevPath", prevPath)
    //     if (prevPath == `/${userName}/invoice`) {
    //         dispatch(actions.setPrevPath(''))
    //         // alert('gyfsj')
    //     }
    // }, [Location])
    // // useEffect(() => {

    // //     if (flagM === false) {

    // //         setFlagM(true)
    // //     }
    // //     else {
    // //         if (showMessage === false) {
    // //             save();
    // //         }
    // //     }
    // // }, [showMessage])
    // const flagOfterValidation = useSelector(state => state.invoiceReducer.flagOfterValidation);


    // useEffect(() => {
    //       "flagModal", flagModal)
    //     if (flagFirst === false)
    //         setFlagFirst(true)
    //     else {
    //         if (flagModal === "successContact") {

    //             save()
    //         }

    //     }

    // }, [flagModal])

    // useEffect(() => {

    //     //    alert("uuu")
    //     if (flagFirstB === false) {
    //         setFlagFirstB(true)
    //     }
    //     else {
    //         if (buttonClick === "saveInvoiceOtherPage")
    //             save1()
    //     }


    // }, [buttonClick])

    // useEffect(() => {
    //     if (first === false) {
    //         setFirst(true)
    //         //   setFlagToCheck(false)
    //         //   dispatch(actions.setflagBorderProduct(false))
    //         //   setFlagSaveP(false)
    //         //   dispatch(actions.setColorFlagShowSaveP("black"))
    //     }

    //     else {
    //         if (flagToCheck === true) {
    //             setFlagToCheck(false)
    //             if (flagSaveP === false) {
    //                 // alert("yy")
    //                  
    //                 if (history.location.pathname == `/${userName}/invoice` && invoice.products && invoice.products[0].id === "null" || window.location.href.indexOf('invoice/edit') != -1 && detailsInvoice.products && detailsInvoice.products[0].id == "null") {
    //                     dispatch(actions.setflagBorderProduct(true))
    //                 }
    //                 else {
    //                     dispatch(actions.setflagBorderProduct(false))
    //                     if (flagOfterValidation) {
    //                          
    //                         dispatch(actions.setFlagOfterValidation(false))
    //                         if (flagMessageContact) {
    //                             setShowMessage(true)
    //                             setFlagModal("contact")
    //                             setModalBody("how do you want to save contact changes?")
    //                         }
    //                         else {
    //                             save()
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }

    // }, [flagToCheck])

    // useEffect(() => {
    //     if (flagFirstToP === false)
    //         setFlagFirstToP(true)
    //     else {
    //         // flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
    //         if (colorFlagShowSaveP === "#DBD0D7")
    //             setFlagSaveP(false)
    //         else {
    //             dispatch(actions.setColorFlagShowSaveP("red"))
    //             setFlagSaveP(true)
    //         }
    //         //     if (flag === true) {
    //         //         setFlagSaveP(true)
    //         //         dispatch(actions.setColorFlagShowSaveP("red"))
    //         //     }
    //         //   })
    //         //   if(flagSaveP===false)
    //         //     save1()
    //     }
    // }, [colorFlagShowSaveP])

    // useEffect(() => {
    //     if (flagPush === true) {
    //         if (window.location.href.indexOf("invoice/edit") != -1
    //             && flagFromTable === false
    //         ) {
    //             dispatch(actions.setFlagIfEmpty(false))
    //             dispatch(actions.setFlagMessage(false))
    //             dispatch(actions.setDislayInvoice("false"));
    //             dispatch(actions.setGetInvoiceId(invoiceSave.invoice._id))
    //             dispatch(actions.setPDelete(['']))
    //             dispatch(actions.setResetAllNewProduct())
    //         }

    //         if (flagFromTable === true)
    //             dispatch(actions.setFlagFromTable(false))
    //     }
    // }, [flagPush])
    // // const save1 = () => {
    // //      
    // //     dispatch(actions.setFlagValidation(true))

    // //     // if (flagMessage)
    // //     //     setShowMessage(true)
    // //     // else
    // //     //     save()
    // // }
    // useEffect(() => {
    //      
    //     if (flagOfterValidation === true) {
    //         dispatch(actions.setFlagOfterValidation(false))
    //         // if (invoice.products && invoice.products[0] && invoice.products[0].id == "null") {
    //         //     dispatch(actions.setflagBorderProduct(true))

    //         // }
    //         // else {
    //         // dispatch(actions.setflagBorderProduct(false))


    //         // if (flagOfterValidation === false) {
    //         dispatch(actions.setFlagModal(""))
    //         dispatch(actions.setShowMessage(false))
    //         dispatch(actions.setButtonClick(""))
    //         dispatch(actions.setModalBody(""))
    //         setFlagToCheck(true)
    //         flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
    //             setFlagToCheck(true)
    //             if (flag === true) {
    //                 setFlagSaveP(true)
    //                 dispatch(actions.setColorFlagShowSaveP("red"))
    //             }
    //         })
    //         // }
    //         // }
    //     }
    // }, [flagOfterValidation])

    // const save1 = () => {

    //     if (invoice.products && invoice.products[0] && invoice.products[0].id == "null") {
    //         dispatch(actions.setflagBorderProduct(true))
    //     }
    //     else {
    //         dispatch(actions.setflagBorderProduct(false))
    //     }
    //     dispatch(actions.setFlagValidation(true))
    //     //   checkIfFalse()
    // }


    // useEffect(() => {

    //     if (flagSaveinvoice1 === false)
    //         setFlagSaveinvoice1(true)
    //     else

    //         if (viewConversion === "true") {
    //             dispatch(actions.setShowInInvoice(false))
    //             dispatch(actions.setViewConversion('false'))
    //             if (history.location.pathname === `/${userName}/invoice`) {

    //                 history.push(`/${userName}/invoice/edit/` + invoiceSave.invoice._id)
    //             }
    //             else
    //                 if (flagFromTable === false) {
    //                     // alert('opopo')
    //                     // history.push(`/${userName}/invoice/edit/` + invoiceSave.invoice._id)

    //                 }

    //         if (flagSaveinvoice1 === false)
    //             setFlagSaveinvoice1(true)
    //         else

    //         }

    // }, [viewConversion])

    //                     history.push(`/${userName}/invoice/edit/` + invoiceSave.invoice._id)
    //                 }
    //                 else
    //                     if (flagFromTable === false) {
    //                         // alert('opopo')
    //                         // history.push(`/${userName}/invoice/edit/` + invoiceSave.invoice._id)

    // const save = () => {
    //     setIslevel(3);
    //     // setFlagSaveInvoice(true)
    //     dispatch(actions.setFlagIfEmpty(false))
    //     if (history.location.pathname === `/${userName}/invoice`) {

    //         dispatch(actions.setSaveInvoice(invoice))
    //     }
    //     else {

    //         dispatch(actions.setGetInvoiceById(detailsInvoice._id))
    //           "detailsInvoice", detailsInvoice._id, detailsInvoice.products)
    //          
    //         updateinvoiceField({ key: "products", value: detailsInvoice.products });
    //         dispatch(actions.setUpdateInvoice())
    //     }
    //       "save", invoice)
    //     // sendWave()
    // }

    return (
        <>
            <div className="left_nav border_configurator">
                <NewSetting ></NewSetting></div>



        </>
    )
}

const mapStateToProps = (state) => {

    return {
        // user: state.public_reducer.userName,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NewConfigorator))