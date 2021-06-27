
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
import NewSetting from '../wrap/newSetting';
import Design_Menu from './design_menu'
function NewConfigorator(props) {
    const Location = useLocation()
    const dispatch = useDispatch()
    const [hidden_design, setHidden_design] = useState(true)
    const [margin1, setMargin] = useState('25%')
    const invoice = useSelector(state => state.invoiceReducer.invoice);
    const updateinvoiceField = (fieldToUpdate) => dispatch(actions.setUpdateInvoiceFields(fieldToUpdate))
    const userName = useSelector(state => state.publicReducer.userName);
    const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
    const ifDesign = useSelector(state => state.displayComponents.openDesign)
    // const open_design=useSelector(state=>state.displayComponents.openDesign)
    const open_design_by_steps = useSelector(state => state.displayComponents.openDesignBySteps)
    const prevPath = useSelector(state => state.displayComponents.prevPath)
    const sendWave = () => dispatch(actions.setSystemWave())
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
        // $('.left_nav').addClass('border_configurator') 
    })
    useEffect(() => {
        console.log("prevPath", prevPath)
        if (prevPath == `/${userName}/invoice`) {
            dispatch(actions.setPrevPath(''))
            // alert('gyfsj')
        }
    }, [Location])
    // useEffect(()=>{   
    //     debugger
    //     console.log("invoiceeeeproducts",invoice)

    // },[invoice])
    const save = () => {
        // debugger
        // sendWave()

        if (history.location.pathname === `/${userName}/invoice`) {
            dispatch(actions.setSaveInvoice(invoice))
            // history.push(`/${userName}/Invoice/Conversion`)
        }
        else {
            dispatch(actions.setGetInvoiceById(detailsInvoice._id))
            console.log("detailsInvoice", detailsInvoice._id)
            updateinvoiceField({ key: "products", value: detailsInvoice.products });

            dispatch(actions.setUpdateInvoice())


        }

        console.log("save", invoice)

    }
    return (
        <>
            <div className="left_nav border_configurator">
                {window.location.href.indexOf("invoice") != -1 || window.location.href.indexOf("/Invoice") > -1 ?
                    $('.left_nav').removeClass('border_configurator') &&
                    <>
                        <Design_Menu />
                        {ifDesign || open_design_by_steps ?
                            <>

                                {/* <button
                    onClick={save}
                    className="saving1 mt-2 mb-2"
                >
                    Save</button>     */}
                                <div style={{ position: "absolute" }}>
                                    <NewSetting ></NewSetting></div>
                                <div style={{ position: "relative" }}>
                                    <Maincomp ></Maincomp> </div>
                                <div className="try">
                                    <button
                                        onClick={save}
                                        className="saving1 mt-2 mb-2"
                                    >
                                        Save</button>
                                </div>

                            </> :

                            <>

                                <div style={{ position: "relative" }}>
                                    <NewSetting ></NewSetting>
                                </div>


                            </>}

                    </>
                    :
                    $('.left_nav').addClass('border_configurator') &&
                    <>
                        <div style={{ marginTop: '25%' }}>
                            <NewSetting ></NewSetting>
                        </div>
                    </>

                }

                {/* <div className="try">
                <button
                    onClick={save}
                    className="saving1 mt-2 mb-2"
                >
                    Save</button>
            </div> */}
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