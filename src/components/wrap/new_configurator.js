
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import './new_configurator.css'
// import { actions } from '../../../../redux/actions/action'
// import DropDownList from '../dropDownList/dropDownList'
// import ConfiguratorTop from '../configuratorTop/configuratorTop'
import $ from 'jquery'
import { useHistory } from 'react-router-dom';
// import history from '../../../history'
import { withRouter, useLocation } from 'react-router-dom';
import Maincomp from '../Details/productions'
import NewSetting from './newSetting';
import Design_Menu from '../design_menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    Link
} from "react-router-dom";
import { TrainOutlined } from '@material-ui/icons';

function NewConfigorator(props) {
    const Location = useLocation()
    const dispatch = useDispatch()
    const setIslevel = (level) => dispatch(actions.setIsLevel(level))
    const [hidden_design, setHidden_design] = useState(true)
    const [margin1, setMargin] = useState('25%')
    const invoice = useSelector(state => state.invoiceReducer.invoice);
    const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
    const userName = useSelector(state => state.publicReducer.userName);
    const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
    const ifDesign = useSelector(state => state.displayComponents.openDesign)
    const viewConversion = useSelector(state => state.invoiceReducer.viewConversion)
    const setViewConversion = () => dispatch(actions.setViewConversion())
    // const open_design=useSelector(state=>state.displayComponents.openDesign)
    const open_design_by_steps = useSelector(state => state.displayComponents.openDesignBySteps)
    const prevPath = useSelector(state => state.displayComponents.prevPath)
    const sendWave = () => dispatch(actions.setSystemWave())
    const [flagM, setFlagM] = useState(false)
    const allInvoices = useSelector(state => state.invoiceReducer.allInvoices);
    const setShowMessage = (status) => dispatch(actions.setShowMessage(status))
    const showMessage = useSelector(state => state.messageReducer.showMessage);
    const flagMessage = useSelector(state => state.messageReducer.flagMessage)
    const flagMessageContact = useSelector(state => state.messageReducer.flagMessageContact)
    const setFlagModal = (status) => dispatch(actions.setFlagModal(status))
    const setModalBody = (status) => dispatch(actions.setModalBody(status))
    const [flagSaveinvoice, setFlagSaveinvoice] = useState(false)
    const buttonClick = useSelector(state => state.messageReducer.buttonClick)
    const flagModal = useSelector(state => state.messageReducer.flagModal)
    const [flagFirst, setFlagFirst] = useState(false)
    const [flagFirstB, setFlagFirstB] = useState(false)
    const colorFlagShowSaveP = useSelector(state => state.productReducer.colorFlagShowSaveP)
    const [flagSaveP, setFlagSaveP]=useState(false)
    const flagShowSaveP = useSelector(state => state.productReducer.flagShowSaveP)
    const [flagFirstToP, setFlagFirstToP]=useState(false)
    const [flagToCheck, setFlagToCheck]= useState(false)
    const [first, setFirst]=useState(false)
    // const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);

    // const invoice = useSelector(state => state.invoiceReducer.invoice);
    // {type:'SET_SYSTEM_WAVE'})
    const history = useHistory()

    const changeBackground = (e) => {
        // props.history.push("/" + props.user)
        $(document).ready(function () {
            $("li").removeClass("li-back")
            $(e).addClass("li-back")
        })

    }
    useEffect(() => {
        dispatch(actions.setflagBorderProduct(false))
        // $('.left_nav').addClass('border_configurator') 
    },[])
    useEffect(() => {
        console.log("prevPath", prevPath)
        if (prevPath == `/${userName}/invoice`) {
            dispatch(actions.setPrevPath(''))
            // alert('gyfsj')
        }
    }, [Location])
    // useEffect(() => {

    //     if (flagM === false) {

    //         setFlagM(true)
    //     }
    //     else {
    //         if (showMessage === false) {
    //             save();
    //         }
    //     }
    // }, [showMessage])

    useEffect(() => {
        console.log("flagModal", flagModal)
        if (flagFirst === false)
            setFlagFirst(true)
        else {
            if (flagModal === "successContact")
                save()
        }

    }, [flagModal])

    useEffect(() => {
        
            //    alert("uuu")
              if (flagFirstB === false) {
            setFlagFirstB(true)
        }
        else {
            if (buttonClick === "saveInvoiceOtherPage")
                save1()
        } 
           
        
    }, [buttonClick])

    useEffect(()=>{
        if(first===false){
              setFirst(true)
            //   setFlagToCheck(false)
            //   dispatch(actions.setflagBorderProduct(false))
            //   setFlagSaveP(false)
            //   dispatch(actions.setColorFlagShowSaveP("black"))
        }
      
         else{
        if(flagToCheck===true){
            setFlagToCheck(false)
            if(flagSaveP===false){
            // alert("yy")
             debugger
      if (invoice.products && invoice.products[0].id === "null") {
          dispatch(actions.setflagBorderProduct(true))
      }
      else {
          dispatch(actions.setflagBorderProduct(false))
          if (flagMessageContact) {
              setShowMessage(true)
              setFlagModal("contact")
              setModalBody("save contact")
          }
          else
              save()
        }
      }
        }
        }
        
    },[flagToCheck])

    useEffect(()=>{
        if(flagFirstToP===false)
           setFlagFirstToP(true)
           else{
        // flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
          if(colorFlagShowSaveP==="black")
            setFlagSaveP(false)
            else{
                dispatch(actions.setColorFlagShowSaveP("red"))
                setFlagSaveP(true)
            }
        //     if (flag === true) {
        //         setFlagSaveP(true)
        //         dispatch(actions.setColorFlagShowSaveP("red"))
        //     }
        //   })
        //   if(flagSaveP===false)
        //     save1()
    }
    },[colorFlagShowSaveP])

    const save1 = () => {
        dispatch(actions.setFlagModal(""))
        dispatch(actions.setShowMessage(false))
        dispatch(actions.setButtonClick(""))
        dispatch(actions.setModalBody(""))
         setFlagToCheck(true)
        flagShowSaveP.length > 0 && flagShowSaveP.map((flag, index) => {
            setFlagToCheck(true)
            if (flag === true) {
                setFlagSaveP(true)
                dispatch(actions.setColorFlagShowSaveP("red"))
            }
          })
        //   checkIfFalse()
    }


    useEffect(() => {

        if (flagSaveinvoice === false)
            setFlagSaveinvoice(true)
        else

            if (viewConversion === "true") {

                history.push(`/${userName}/allDocuments`)
            }

    }, [viewConversion])


    const save = () => {
        setIslevel(3);
        if (history.location.pathname === `/${userName}/invoice`) {
            // history.push(`/${userName}/invoice/save`)

            dispatch(actions.setSaveInvoice(invoice))
        }
        else {
            dispatch(actions.setGetInvoiceById(detailsInvoice._id))
            console.log("detailsInvoice", detailsInvoice._id, detailsInvoice.products)
            debugger
            updateinvoiceField({ key: "products", value: detailsInvoice.products });

            dispatch(actions.setUpdateInvoice())


        }
        console.log("save", invoice)
        // sendWave()
    }

    return (
        <>
 {console.log("setFlagSaveP", flagSaveP)}
            <div className="left_nav border_configurator">
                {window.location.href.indexOf("invoice") != -1 || window.location.href.indexOf("/Invoice") > -1 ?
                    $('.left_nav').removeClass('border_configurator') &&
                    <>

                        {/* <Design_Menu /> */}
                        {ifDesign || open_design_by_steps ?
                            <>

                                <div style={{ position: "absolute" }}>
                                    <NewSetting ></NewSetting></div>
                                <div style={{ position: "relative" }}>
                                    <Maincomp></Maincomp> </div>
                                <div className="try">
                                </div>

                            </> :

                            <>

                                <div style={{ position: "relative" }}>
                                    <NewSetting ></NewSetting></div>
                                <div className="try"
                                // className={colorFlagShowSaveP==="red" ? "noClick" : "try"}
                                >
                                    {console.log("setFlagSaveP", flagSaveP)}
                                    <button
                                        // style={colorFlagShowSaveP==="red" && {border: '1px solid red'}}
                                        onClick={save1}
                                        className={flagSaveP ? "saving2 mt-2 mb-2" : "saving1 mt-2 mb-2"}
                                    >
                                        Save</button>
                                </div>



                            </>}

                    </>
                    :
                    $('.left_nav').addClass('border_configurator') &&
                    <>
                        <div style={{ marginTop: '25%' }}>
                            <NewSetting ></NewSetting>
                        </div>
                        {/* <button 
                    onClick={save}
                    className="saving1 mt-2 mb-2"
                >
                    Save</button> */}

                    </>

                }
            </div>


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