import React, { useEffect, useState, useRef } from 'react';
import './form.css';
import Alert from 'react-bootstrap/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { FiUpload } from 'react-icons/fi';
import { Col, Row, Container, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconContext } from "react-icons";
import { Divider, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//  import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
// import FixLogoBuisness from './fixLogoBuisness.js'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from "yup"
import Select from 'react-select';
import { HiUpload } from "react-icons/hi";

import LeaderLouder from '../../components/Useful/leaderLouder'
import { SiYoutube, SiInstagram, SiWhatsapp, SiFacebook } from 'react-icons/si';
import { BiCalendar, BiPlus } from 'react-icons/bi';
import { GiWireframeGlobe } from 'react-icons/gi';
import { change } from 'redux-form';

// import {CgCalendarDates} from 'react-icons/cg';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// const userSchema = Yup.object().shape({
//   name: Yup.string().required('This field is required'),
//   email: Yup.string().email('Invalid email address'),
//   phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
//   numberDeals: Yup.string().required('This field is required')

// })

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
        borderRadius: 2 + 'vh',
        padding: 0
    },
    imgUpload: {
        display: 'inline-block',
        width: 10 + 'vh',
        height: 10 + 'vh',
        backgroundColor: 'transparent',
        // border: '1px solid black',
        // borderRadius: 50 + '%',
        padding: 0
    }
}))

function SettingBuisnessList(props) {
    // const [show, setShow] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    const [errorMessage2, setErrorMessage2] = useState();
    const [errorMessage3, setErrorMessage3] = useState();
    const [errorMessage4, setErrorMessage4] = useState();
    const [errorMessage5, setErrorMessage5] = useState();
    const [errorMessage6, setErrorMessage6] = useState();
    const [buttonText, setButtonText] = useState("SAVE");
    const inputFile1 = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { handle, register, handleSubmit, watch, formState: { errors } } = useForm();

    const [urlLogo, setUrlLogo] = useState("")

    const detailsBusiness = useSelector(state => state.buisnessReducer.newBuisness);
    const allCities = useSelector(state => state.cityByCountryReducer.allCities.geonames);
    const allCountry = useSelector(state => state.cityByCountryReducer.allCountry);
    const allBuisness = useSelector(state => state.buisnessReducer.allBuisness)
    const userName = useSelector(state => state.publicReducer.userName);
    const userFiled = useSelector(state => state.buisnessReducer.settingBuisness);
    const currentBuisness = useSelector(state => state.buisnessReducer.currentBuisness)

    const updateBuisnessField = (fieldToUpdate) => dispatch(actions.setSettingBuisness(fieldToUpdate))
    const updateWebsite = (fieldToUpdate) => dispatch(actions.setSettingBuisnessWebsite(fieldToUpdate))
    const setImageLogo = (objectImage) => dispatch(actions.setImage(objectImage))
    const setCities = (data) => dispatch(actions.getCityByCountry(data))
    const setCountry = () => dispatch(actions.getCountry())
    const [flag, setFlag] = useState("false")
    const [flagLoud, setFlagLoud] = useState(false)
    const flagSave = useSelector(state => state.buisnessReducer.flagSave);

    useEffect(() => {
        if (flagSave == 'updateBusiness') {
            saveNewBuisness()
        }
        else if (flagSave == 'noSave') {
            restart()
        }
    }, [flagSave])

    const restart = () => {
        setFlagLoud(false)
        updateBuisnessField({ key: 'name', value: "" })
        updateBuisnessField({ key: 'imgLogo', value: "" })
        updateBuisnessField({ key: 'email', value: "" })
        updateBuisnessField({ key: 'phone', value: "" })
        updateBuisnessField({ key: 'country', value: "" })
        updateBuisnessField({ key: 'city', value: "" })
        updateBuisnessField({ key: 'address', value: "" })
        updateWebsite({ key: 'website', value: "" })
        updateBuisnessField({ key: 'vat', value: "" })
        updateBuisnessField({ key: 'numberDeals', value: "" })
        updateBuisnessField({ key: 'imgLogo', value: "" })
    }
    // useEffect(() => {
    //   setUrlLogo(detailsBusiness.imgLogo)
    //  } ,[detailsBusiness.imgLogo])
    useEffect(() => {
        dispatch(actions.setDisplayBoxShadow(false))
    }, [])

    useEffect(() => {
        if (flag === "false")
            setFlag("true")
        else {
            setFlagLoud(false)
            updateBuisnessField({ key: 'name', value: "" })
            updateBuisnessField({ key: 'imgLogo', value: "" })
            updateBuisnessField({ key: 'email', value: "" })
            updateBuisnessField({ key: 'phone', value: "" })
            updateBuisnessField({ key: 'country', value: "" })
            updateBuisnessField({ key: 'city', value: "" })
            updateBuisnessField({ key: 'address', value: "" })
            updateWebsite({ key: 'website', value: "" })
            updateBuisnessField({ key: 'vat', value: "" })
            updateBuisnessField({ key: 'numberDeals', value: "" })
            updateBuisnessField({ key: 'imgLogo', value: "" })
            // history.push(`/${userName}/allDocuments`)
        }
    }, [currentBuisness])

    const validatorPhone = (v) => {

        const tmp = v.length == 13 && v.includes('+');
        return tmp || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v);
    }
    const validatorEmail = (v) => {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
    }

    const [tmpSave, setTmpSave] = useState(JSON.parse(JSON.stringify(currentBuisness)));

    const changeCurrentBusiness = (index, value) => {

        if (index !== "website") {
            let fff = tmpSave[index] = value
            // setTmpSave(...tmpSave, tmpSave[index] = value)
            setTmpSave({ ...tmpSave, index: fff })
        }
        else {

            // let fff = tmpSave.socialmedias.website = value
            setTmpSave({ ...tmpSave, socialmedias: { website: value } })
            // setTmpSave.socialmedias.website(value);
        }
    }

    const saveNewBuisness = (e) => {

        let tmp1 = true;
        let tmp3 = true;
        // let tmp4= (tmpSave.n)
        // let tmp4 = userFiled.name || currentBuisness.name;
        let tmp4 = tmpSave.name
        let tmp5 = tmpSave.numberDeals
        let tmp6 = tmpSave.city
        let tmp7 = tmpSave.address
        if (tmpSave.email) {
            tmp1 = validatorEmail(tmpSave.email)
        }
        // else {
        //     if (currentBuisness.email)
        //         tmp1 = validatorEmail(currentBuisness.email)
        // }
        if (tmpSave.phone) {

            tmp3 = validatorPhone(tmpSave.phone);
        }
        // else {
        //     if (currentBuisness.phone)
        //         tmp3 = validatorPhone(currentBuisness.phone);
        // }
        if (tmp4 && tmp5 && tmp1 == true && tmp3 == true && tmp6 && tmp7) {
            setFlagLoud(true);
            changeCurrentBusiness('imgLogo', userFiled.imgLogo)
            // delete tmpSave._id
            // delete tmpSave.uid
            if (flagSave == 'updateBusiness') {
                dispatch(actions.setflagSave('noSave'))
                // dispatch(actions.setflagSave('false'))
            }
            else {
                dispatch(actions.setflagSave('false'))
            }
            dispatch(actions.setUpdateSettingBusinessCard(tmpSave))

            setErrorMessage('');
            setErrorMessage2('');
            setErrorMessage3('');
            setErrorMessage4('');
            setErrorMessage5('');
            setErrorMessage6('');
            // continewAfterSave();
        }
        else {
            if (tmpSave.name) {
                setErrorMessage('')
            }
            else {
                // if (!currentBuisness.name)
                setErrorMessage('#enter your Buisness name')
                // else
                //     setErrorMessage('');
            }
            if (tmpSave.numberDeals)
                setErrorMessage2('')
            else {
                // if (!currentBuisness.numberDeals)
                setErrorMessage2('#enter your Number-Dealds')
                // else
                //     setErrorMessage2('');
            }
            if (tmpSave.city)
                setErrorMessage5('')
            else {
                // if (!currentBuisness.city)
                setErrorMessage5('#enter City')
                // else
                //     setErrorMessage5('');
            }
            if (tmpSave.address)
                setErrorMessage6('')
            else {
                // if (!currentBuisness.address)
                setErrorMessage6('#enter Address')
                // else
                //     setErrorMessage6('');
            }
            if (tmpSave.email) {
                if (!tmp1) {
                    setErrorMessage3('#Invalid email address')
                }
                else {
                    setErrorMessage3('');
                }
            }
            else setErrorMessage3('');
            // else {
            //     if (currentBuisness.email) {
            //         if (!tmp1) {
            //             setErrorMessage3('#Invalid email address')
            //         }
            //         else {
            //             setErrorMessage3('');
            //         }
            //     }
            // }
            if (tmpSave.phone) {
                if (!tmp3) {
                    setErrorMessage4('#Invalid phone')
                }
                else {
                    setErrorMessage4('');
                }
            }
            else {
                setErrorMessage4('');
            }
        }
    }
    // const continewAfterSave = () => {
    //   history.push(`/${userName}/allDocuments`)
    // }

    const onChangeCountry = (data) => {
        console.log("onChangeCounrty")

        setCities(data)
    }
    const selectCountry = (e) => {
        setCountry()
    }
    // function isDigit(name) {
    //   // var isValidName = false;
    //   // if (/[!@#$%^&*(),.?":{}|<>]/g.test(name)) {
    //   //   isValidName = false;
    //   // }
    //   // else {
    //   if (/[+]/g.test(name) || /\d+/g.test(name)) {
    //     return true;
    //   }
    //   return false;
    // }
    const fieldChanged = (e, fieldName) => {
        dispatch(actions.setflagSave('true2'))
        if (fieldName == 'email') { if (validatorEmail(e.target.value)) setErrorMessage3('') }
        else {
            if (fieldName == 'name') setErrorMessage('')
            else {
                if (fieldName == 'phone') {
                    if (validatorPhone(e.target.value)) setErrorMessage4('')
                    // if (!isDigit(e.target.value)) {
                    //   e.target.value = "false"
                    // }
                }
                else {
                    if (fieldName == 'address') setErrorMessage6('')
                    else {
                        if (fieldName == 'city') setErrorMessage5('')
                        else { if (fieldName == 'numberDeals') setErrorMessage2('') }
                    }
                }
            }
        }
        const value = e.target.value;
        // if (value !== "false") {
        console.log("value", value)
        updateBuisnessField({ key: fieldName, value: value })
        changeCurrentBusiness(fieldName, value)
        // }
    }
    const onload = (e, fieldName) => {
        const value = e;
        updateBuisnessField({ key: fieldName, value: value })
    }
    const websiteChanged = (e, fieldName) => {

        const value = e.target.value;
        updateWebsite({ key: fieldName, value: value })
        changeCurrentBusiness(fieldName, value)
    }
    const onButtonClick = () => {
        inputFile1.current.click();
        // setUrlLogo(detailsBusiness.imgLogo)
    };

    // const addImage1 = (event) => {
    //     if (event) {
    //         let reader = new FileReader();
    //         console.log("reader", reader.result)
    //         dispatch(actions.setSettingBuisness({ key: 'imgLogo', value: reader.result }))
    //         reader.onloadend = () => {
    //             console.log("event", event)
    //             const objectImage = { 'image': event, 'to': 'buisness' }
    //             setImageLogo(objectImage)
    //         }
    //         reader.readAsDataURL(event)
    //     }
    // }

    // const addImage1 = (event) => {
    //     if (event) {
    //         let reader = new FileReader();
    //         console.log("reader", reader.result)
    //         dispatch(actions.setBuisness({ key: 'imgLogo', value: reader.result }))
    //         reader.onloadend = () => {
    //             console.log("event", event)
    //             const objectImage = { 'image': event, 'to': 'buisness' }
    //             setImageLogo(objectImage)
    //         }
    //         reader.readAsDataURL(event)
    //     }
    // }
    const addImage1 = (event) => {
        dispatch(actions.setflagSave('true2'))
        if (event) {
            let reader = new FileReader();
            let imageToStor = { 'image': '', 'to': "" }
            dispatch(actions.setBuisness({ key: 'imgLogo', value: event }))
            reader.onloadend = () => {
                imageToStor = { 'image': event, 'to': 'buisnessSetting' }
                dispatch(actions.setImage(imageToStor))
            }
            reader.readAsDataURL(event)
        }
    }

    return (
        <>
            {flagLoud &&
                <LeaderLouder></LeaderLouder>}
            <div className={flagLoud ? "container-fluid con posity" : "container-fluid con"}
                style={{
                    height: "95%", width: "98%",
                    overflowY: "auto"
                }}>
                <div className="row d-flex">
                    <div className="col-10 font">
                        Buisness Details
                    </div>
                    <div class="d-flex justify-content-end">
                        <div className="col-2">
                            <Button
                                onClick={(e) => saveNewBuisness()}
                                style={{
                                    backgroundColor: "#917BDF", borderColor: "#917BDF",
                                    marginBottom: "2vh",
                                    position: "fixed",
                                    top: "0px",
                                    zIndex: "100",
                                    marginTop: "100px",
                                    width: "7%"
                                }}
                            // class="saveBuisness"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
                <div>
                    <div className="colorWhite">
                        Company Information
                    </div>
                    <div>
                        <div>Logo</div>
                        <div  >
                            <input type='file' id='file' ref={inputFile1} style={{ display: 'none' }}
                                // value={currentBuisness.imgLogo ? currentBuisness.imgLogo : ""}
                                onChange={(e) => addImage1(e.target.files[0])}
                                accept="image/*"
                            />
                            <button onClick={onButtonClick} className="rounded"
                                style={{
                                    width: "13vh",
                                    height: "13vh",
                                    marginTop: "2vh",
                                    borderRadius: "1vh",
                                    // borderRadius: 1vh;
                                    backgroundColor: "#F6F6FA"
                                }}
                                className={classes.buttonUpload}>
                                {userFiled && userFiled.imgLogo ?
                                    <img
                                        // id='userLogo-temp1'
                                        className={classes.imgUpload}
                                        src={userFiled && userFiled.imgLogo ? userFiled.imgLogo : ""}
                                        // src={urlLogo? urlLogo :""}
                                        alt="Logo"
                                        title="Your Logo Here"
                                        style={{}}
                                    // onClick={() => onButtonClick("logo")}
                                    /> :
                                    currentBuisness && currentBuisness.imgLogo ?
                                        <img
                                            // id='userLogo-temp1'
                                            className={classes.imgUpload}
                                            src={currentBuisness && currentBuisness.imgLogo ? currentBuisness.imgLogo : ""}
                                            // src={urlLogo? urlLogo :""}
                                            alt="Logo"
                                            title="Your Logo Here"
                                            style={{}}
                                        // onClick={() => onButtonClick("logo")}
                                        /> :
                                        <HiUpload id="icon" className={classes.iconUpload} />
                                }
                                <br></br>
                                <div className="uploadImage">Upload</div>

                            </button>

                            {/* <div className='imgLogoBusiness m-auto' style={{
                                backgroundImage: `url('${userFiled.imgLogo ?
                                    userFiled.imgLogo : currentBuisness.imgLogo ? currentBuisness.imgLogo : ""
                                    }')`
                            }}
                                onClick={load}
                            >
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 sm-10" style={{ paddingLeft: "5vh", paddingRight: "7vh" }}>
                            <div className="row">
                                <div>
                                    <div class="d-flex justify-content-start">
                                        <div className="font2">Business Name </div>
                                        <div style={{ color: "red", fontSize: "small" }}>*</div>
                                    </div>

                                    <input className={errorMessage ? "inptStyle  valid" : "inptStyle"} name='name' type="text"
                                        placeholder={currentBuisness.name ? "" : "Business Name"}
                                        defaultValue={userFiled.name ? userFiled.name :
                                            currentBuisness.name ? currentBuisness.name : ""}
                                        onChange={(e) => fieldChanged(e, 'name')}
                                        style={{ width: "42rem", fontSize: "small" }}></input>
                                    {errorMessage == '#enter your Buisness name' &&
                                        <div className="required">{errorMessage}</div>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 sd-10" style={{ paddingLeft: "0vh", marginRight: "3vh" }}>
                                    <div className="font2">Company Phone</div>
                                    <input className={errorMessage4 ? "inptStyle valid" : "inptStyle"} name='phone' type="text"
                                        placeholder={
                                            currentBuisness.phone ? "" : "Company Phone"}
                                        defaultValue={userFiled.phone ? userFiled.phone :
                                            currentBuisness.phone ? currentBuisness.phone : ""}
                                        onChange={(e) => { fieldChanged(e, 'phone') }}
                                        style={{ width: "20rem", fontSize: "small" }}></input>
                                    {errorMessage4 == '#Invalid phone' &&
                                        <div className="required">{errorMessage4}</div>}
                                </div>
                                <div className="col-md-5 sd-10">
                                    <div className="font2">Company Email</div>
                                    <input name='email' type="text"
                                        placeholder={
                                            currentBuisness.email ? "" : "Company Email"}
                                        className={errorMessage3 ? "inptStyle valid" : "inptStyle"}
                                        defaultValue={userFiled.email ? userFiled.email :
                                            currentBuisness.email ? currentBuisness.email : ""}
                                        onChange={(e) => fieldChanged(e, 'email')}
                                        style={{ width: "20rem", fontSize: "small" }}></input>
                                    {errorMessage3 == '#Invalid email address' &&
                                        <div className="required">{errorMessage3}</div>}
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: "0.5vh" }}>
                                <div>
                                    <div class="d-flex justify-content-start">
                                        <div className="font2">Address</div>
                                        <div style={{ color: "red", fontSize: "small" }}>*</div>
                                    </div>
                                    <input className={errorMessage6 ? "inptStyle valid" : "inptStyle"} name='address' type="text"
                                        placeholder={
                                            currentBuisness.address ? "" : "Address"}
                                        defaultValue={userFiled.address ? userFiled.address :
                                            currentBuisness.address ? currentBuisness.address : ""}
                                        onChange={(e) => fieldChanged(e, 'address')}
                                        style={{ width: "42rem", fontSize: "small" }}></input>
                                    {errorMessage6 == '#enter Address' &&
                                        <div className="required">{errorMessage6}</div>}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 sm-10">
                            <div className="row">
                                <div>
                                    <div className="font2">Website</div>
                                    <input className="inptStyle" name='website' type="text"
                                        placeholder={
                                            currentBuisness.socialmedias &&
                                                currentBuisness.socialmedias.website ? "" : "Website"}
                                        defaultValue={userFiled.socialmedias ?
                                            userFiled.socialmedias.website ? userFiled.socialmedias.website :
                                                currentBuisness.socialmedias ?
                                                    currentBuisness.socialmedias.website ? currentBuisness.socialmedias.website :
                                                        "" : "" : ""}
                                        onChange={(e) => websiteChanged(e, 'website')}
                                        style={{ width: "35rem", fontSize: "small" }}></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3.5" style={{ marginRight: "3vh" }}>
                                    <div class="d-flex justify-content-start">
                                        <div className="font2">Dealer License</div>
                                        <div style={{ color: "red", fontSize: "small" }}>*</div>
                                    </div>
                                    <input
                                        className={errorMessage2 ? "inptStyle valid" : "inptStyle"}
                                        name='numberDeals' type="number"
                                        placeholder={
                                            currentBuisness.numberDeals ? "" : "Dealer License"}
                                        defaultValue={userFiled.numberDeals ? userFiled.numberDeals :
                                            currentBuisness.numberDeals ? currentBuisness.numberDeals : ""}
                                        onChange={(e) => fieldChanged(e, 'numberDeals')}
                                        style={{ width: "12rem", fontSize: "small" }}></input>
                                    {errorMessage2 == '#enter your Number-Dealds' &&
                                        <div className="required">{errorMessage2}</div>}
                                </div>
                                <div className="col-3.5">
                                    <div className="font2">Vat</div>
                                    <input className="inptStyle" name='vat' type="text"
                                        placeholder={
                                            currentBuisness.vat ? "" : "Vat"}
                                        defaultValue={userFiled.vat ? userFiled.vat :
                                            currentBuisness.vat ? currentBuisness.vat : ""}
                                        onChange={(e) => fieldChanged(e, 'vat')}
                                        style={{ width: "12rem", fontSize: "small" }}></input>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-5" style={{ paddingLeft: "0vh" }} >
                                    <div className="font2" style={{ paddingBottom: "1.5vh" }} >Country</div>
                                    <input className="inptStyle" type="text" name="country" list="country"
                                        placeholder={
                                            currentBuisness.country ? "" : "Country"}
                                        defaultValue={userFiled.country ? userFiled.country :
                                            currentBuisness.country ? currentBuisness.country : ""}
                                        onFocus={(e) => selectCountry(e)}
                                        onBlur={(e) => { onChangeCountry(e.target.value) }}
                                        onChange={(e) => fieldChanged(e, 'country')}
                                        style={{ width: "20rem", fontSize: "small" }}></input>
                                    <datalist id="country">
                                        {allCountry ? allCountry.map(x => {
                                            return (
                                                <option>{x.name}</option>)
                                        }) : ''}
                                    </datalist>
                                </div>
                                <div className="col-5">
                                    <div class="d-flex justify-content-start">
                                        <div className="font2"
                                            style={{ paddingBottom: "1.5vh" }}
                                        >City</div>
                                        <div style={{ color: "red", fontSize: "small" }}>*</div>
                                    </div>
                                    <input
                                        className={errorMessage5 ? "inptStyle valid" : "inptStyle"}
                                        type="text" name="city" list="city"
                                        placeholder={
                                            currentBuisness.city ? "" : "City"}
                                        defaultValue={userFiled.city ? userFiled.city :
                                            currentBuisness.city ? currentBuisness.city : ""}
                                        onChange={(e) => fieldChanged(e, 'city')}
                                        style={{ width: "20rem", fontSize: "small" }}></input>
                                    {errorMessage5 == '#enter City' &&
                                        <div className="required">{errorMessage5}</div>}
                                    <datalist id="city">
                                        {allCities ? allCities.map(x => {
                                            return (
                                                <option>{x.name}</option>)
                                        }) : ''}
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <hr className="hrStyle"></hr> */}
                <div>
                    <div className="colorWhite">Social media</div>
                    <div style={{ paddingBottom: "2vh" }}>media</div>
                    <div style={{ marginLeft: "2vh" }}>
                        <div className="row">
                            <div className="inptStyle widthIcon" >
                                <SiFacebook className="styleicon"></SiFacebook>
                            </div>
                            <input className="inptStyle iconInput"
                                defaultValue="Add Your Facebook"
                            ></input>
                        </div>
                        <div className="row">
                            <div className="inptStyle widthIcon">
                                <SiWhatsapp className="styleicon"></SiWhatsapp>
                            </div>
                            <input className="inptStyle iconInput"
                                defaultValue="Add Your Whatsapp"
                            ></input>
                        </div>
                        <div className="row">
                            <div className="inptStyle widthIcon">
                                <SiInstagram className="styleicon"></SiInstagram>
                            </div>
                            <input className="inptStyle iconInput"
                                defaultValue="Add Your Instagram"
                            ></input>
                        </div>
                        <div className="row">
                            <div className="inptStyle widthIcon">
                                <SiYoutube className="styleicon"></SiYoutube>
                            </div>
                            <input className="inptStyle iconInput"
                                defaultValue="Add Your Youtube"
                            ></input>
                        </div>
                        <div className="row">
                            <div className="inptStyle widthIcon">
                                <BiPlus className="styleicon"></BiPlus>
                            </div>
                            <input className="inptStyle iconInput"
                                defaultValue="Add Your Media"
                            ></input>
                        </div>
                    </div>
                </div>
                {/* <div className="row"
        // style={{height:"90vh"}}
        >
          <div className="col-3 align-items-center">
            <div className="font2" style={{ height: "30vh", marginBottom: "2vh" }}>
              Profil Image
              <hr />
              <div class="col-12 d-flex justify-content-start flex-column align-items-center poo">
                <div  >
                  <input type='file' id='file' ref={inputFile1} style={{ display: 'none' }}
                    onChange={(e) => addImage1(e.target.files[0])} />
                  <button onClick={onButtonClick} className="rounded"
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      width: "10vh",
                      height: "10vh"
                    }}
                    className={classes.buttonUpload}>
                    {detailsBusiness && detailsBusiness.imgLogo ?
                      <img
                        // id='userLogo-temp1'
                        className={classes.imgUpload}
                        src={detailsBusiness && detailsBusiness.imgLogo ? detailsBusiness.imgLogo : ""}
                        // src={urlLogo? urlLogo :""}
                        alt="Logo"
                        title="Your Logo Here"
                        style={{}}
                        onClick={() => onButtonClick("logo")}
                      /> :
                      <HiUpload id="icon" className={classes.iconUpload} />}
                    <br></br>
                    <div className="uploadImage">Upload</div>
                  </button>
                </div>
              </div>
            </div> */}

                {/* <div className="font2" style={{ height: "40vh" }}>
              Social Networks
              <hr />
            </div>
          </div>
          <div className="col-8 font2" style={{ height: "72vh" }}>
            Personal Information
            <hr />
          </div>
        </div> */}
            </div>
        </>
    )
};
export default SettingBuisnessList;