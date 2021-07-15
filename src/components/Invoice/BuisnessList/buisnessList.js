import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { actions } from '../../../redux/actions/All_actions'
import { connect } from 'react-redux';
import $ from "jquery";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { MdEdit, MdDelete, MdContentCopy, MdRemoveRedEye } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri'
import ModeldeleteBuisness from '../BuisnessList/modalDeleteBuisness.js'
import logo1 from '../../assets/newLogo.png'


function BuisnessList(props) {
    let history = useHistory();
    const dispatch = useDispatch();
    const userName = useSelector(state => state.publicReducer.userName);
    const setModalBody = (message) => dispatch(actions.setModalBody(message))
    const showModalDelete = useSelector(state => state.messageReducer.showModalDelete);
    const currentBuisness = useSelector(state => state.buisnessReducer.currentBuisness);


    const [chooselinei, setchooselinei] = useState({
        flag: "false",
        index: "",
        isShown: false
    });
    const mouseEnter = (key) => {
        setchooselinei({
            flag: "true",
            index: key,
            isShown: true
        })
    }
    const mouseLeave = (key) => {
        setchooselinei({
            flag: "false",
            index: key,
            isShown: false
        })
    }
    const convertdate = (date1) => {
        let date = new Date(date1)
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
    // const date1 = new Date()
    // const date2 = convertdate(date1);
    // console.log("date2", date2)

    const edit = (buisnessChoose) => {
        dispatch(actions.getAllProduct(buisnessChoose._id))
        console.log("buisnessObj", buisnessChoose)
        dispatch(actions.setGetBusiness(buisnessChoose._id))
        dispatch(actions.setGeCurrenttBuisness(buisnessChoose))
        history.push(`/${userName}/setting`)
    }
    const remove = (e) => {
        e.stopPropagation()
        // setModalBody("Do You Want To delete The Buisness Forever?")
        dispatch(actions.setShowModalDelete(true));

    }
    const chooseBuisness = (value) => {
        if (currentBuisness != value) {
            dispatch(actions.setShow(true))
            dispatch(actions.setNameAction("You moved to another business"))
        }
        // const buisnessChoose = allBuisnessToUser.find(x => x._id === value)
        dispatch(actions.getAllProduct(value._id))
        console.log("buisnessObj", value)
        dispatch(actions.setGetBusiness(value._id))
        dispatch(actions.setGeCurrenttBuisness(value))
    }
    return (
        <>
            {showModalDelete && <ModeldeleteBuisness />}
            <div className="wrap_table" style={{ marginTop: "2%" }}>
                <div className="row" >
                    <div className="col">
                        <div className="table-responsive" style={{ margin: '0% !important' }}>
                            <table className="table table-hover" style={{ backgroundColor: "white", fontSize: "14px", marginBottom: "0rem" }}>
                                <thead style={{ backgroundColor: "rgb(250, 250, 250)", opacity: "100%", borderBottom: "0px" }}>
                                    <tr style={{ borderBottom: "0px" }}>
                                        {/* <th style={{ width: "3%", backgroundColor: "#F5F5FA" }}></th> */}
                                        <th style={{ width: "9%", backgroundColor: "rgb(250, 250, 250)", borderBottom: "0px" }}></th>
                                        <th style={{ borderBottom: "0px" }}>NAME</th>
                                        <th style={{ borderBottom: "0px" }}>EMAIL</th>
                                        <th style={{ borderBottom: "0px" }}>WEBSITE</th>
                                        <th style={{ borderBottom: "0px" }}>ADDRESS</th>
                                        <th style={{ borderBottom: "0px" }}>PRODUCTION DATE</th>
                                        <th style={{ width: "3%", backgroundColor: "rgb(250, 250, 250)", borderBottom: "0px" }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {(searchby === "" || de === true) && filtersearchInvoices &&
                                        filtersearchInvoices.length > 0 && filtersearchInvoices.map((invoice, index) => { */}
                                    {props.allBuisness && props.allBuisness.length > 0 && props.allBuisness.map((buisness, index) => {
                                        return (
                                            <>
                                                <tr className="tr"
                                                    style={{ height: "55px", cursor: "pointer", borderTop: "0px" }}
                                                    id={"flag" + index}
                                                    onMouseEnter={() => mouseEnter(buisness._id)}
                                                    onMouseLeave={() => mouseLeave(buisness._id)}
                                                    onClick={() => chooseBuisness(buisness)}
                                                    key={buisness._id}>
                                                    {/* <td style={{ width: "5%" }}></td> */}
                                                    <td style={{ paddingLeft: "3%" }}>
                                                        <img style={{ width: "34px", height: "34px" }} className="rounded-circle" alt="" src={buisness.imgLogo ? buisness.imgLogo : logo1} />
                                                    </td>
                                                    <td> {buisness.name ? buisness.name : ''}</td>
                                                    <td>{buisness.email ? buisness.email : ''}</td>
                                                    <td>{buisness.socialmedias ? buisness.socialmedias.website ? buisness.socialmedias.website.split('/')[2] : '' : ''}</td>
                                                    <td>{buisness.address && buisness.city ? buisness.address + " " + buisness.city : ''}</td>
                                                    <td>{convertdate(buisness.productionDate)}</td>
                                                    <td className="td_tt" style={{ width: "7%" }}>
                                                        <div className="td_side_edit_delete_copy d-flex-justify-content-center" style={{ display: "inline-block" }}>
                                                            {
                                                                chooselinei.isShown && chooselinei.index === buisness._id && (
                                                                    <div className="d-flex flex-row" style={{ display: "inline-block", width: "100%" }}>
                                                                        <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Edit</p>} placement="bottom">
                                                                            <a style={{ height: "14px" }}>
                                                                                <MdEdit id="icon"
                                                                                    onClick={() => edit(buisness)}
                                                                                    style={{ verticalAlign: "top", cursor: 'pointer', marginLeft: "6px", width: "16px", height: "16px" }}
                                                                                ></MdEdit>
                                                                            </a>
                                                                        </Tooltip>
                                                                        <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>View</p>} placement="bottom">
                                                                            <RiDeleteBin6Line id="icon"
                                                                                style={{ verticalAlign: "top", cursor: 'pointer', marginLeft: "5px", width: "16px", height: "16px", zIndex: "2" }}
                                                                                onClick={(e) => remove(e)}>
                                                                            </RiDeleteBin6Line>
                                                                        </Tooltip>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </td>
                                                </tr>
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
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        // deleteinvoice:(id)=>dispatch(actions.)
    }
}

const mapStateToProps = (state) => {
    return {
        allInvoices: state.invoiceReducer.allInvoices,
        contact1: state.customerReducer.detailscontact,
        allContact: state.customerReducer.allContact,
        allproduct: state.productReducer.allProducts,
        product_object: state.productReducer.product1
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuisnessList)