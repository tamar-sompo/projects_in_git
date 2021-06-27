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
// import uploadAnimation from '../assets/louder.gif'
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
    borderRadius: 50 + '%',
    padding: 0
  },
  imgUpload: {
    display: 'inline-block',
    width: 10 + 'vh',
    height: 10 + 'vh',
    backgroundColor: 'transparent',
    // border: '1px solid black',
    borderRadius: 50 + '%',
    padding: 0
  }
}))

function BuisnessList(props) {
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
  const userFiled = useSelector(state => state.buisnessReducer.newBuisness);


  const updateBuisnessField = (fieldToUpdate) => dispatch(actions.setBuisness(fieldToUpdate))
  const updateWebsite = (fieldToUpdate) => dispatch(actions.setbuisnessWebsite(fieldToUpdate))
  const setImageLogo = (objectImage) => dispatch(actions.setImage(objectImage))
  const setCities = (data) => dispatch(actions.getCityByCountry(data))
  const setCountry = () => dispatch(actions.getCountry())
  const [flag, setFlag] = useState("false")
  const [flagLoud, setFlagLoud] = useState(false)

  // useEffect(() => {
  //   setUrlLogo(detailsBusiness.imgLogo)
  //  } ,[detailsBusiness.imgLogo])


  useEffect(() => {
    if (flag === "false")
      setFlag("true")
    else {
      setFlagLoud(false)
      updateBuisnessField({ key: 'name', value: "" })
      updateBuisnessField({ key: 'email', value: "" })
      updateBuisnessField({ key: 'phone', value: "" })
      updateBuisnessField({ key: 'country', value: "" })
      updateBuisnessField({ key: 'city', value: "" })
      updateBuisnessField({ key: 'address', value: "" })
      updateWebsite({ key: 'website', value: "" })
      updateBuisnessField({ key: 'vat', value: "" })
      updateBuisnessField({ key: 'numberDeals', value: "" })
      history.push(`/${userName}/allDocuments`)
    }
  }, [allBuisness])

  const validatorPhone = (v) => {
    debugger
    const tmp = v.length == 13 && v.includes('+');
    return tmp || /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(v);
  }
  const validatorEmail = (v) => {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
  }

  // useEffect(()=>{
  //     if(flag==="false")
  //     setFlag("true")
  //     else
  //     history.push(`/${userName}/allDocuments`)
  // },[allBuisness])

  const saveNewBuisness = (e) => {
    let tmp1 = true;
    let tmp3 = true;
    // let tmp4 = userFiled.name || currentBuisness.name;
    // let tmp5 = userFiled.numberDeals || currentBuisness.numberDeals;
    if (userFiled.email) {
      tmp1 = validatorEmail(userFiled.email)
    }
    if (userFiled.phone) {
      debugger
      tmp3 = validatorPhone(userFiled.phone);
    }
    if (userFiled.name && userFiled.numberDeals && tmp1 == true && tmp3 == true && userFiled.city && userFiled.address) {
      setFlagLoud(true)
      dispatch(actions.setBuisnessToServer(userFiled))
      setErrorMessage('');
      setErrorMessage2('');
      setErrorMessage3('');
      setErrorMessage4('');
      setErrorMessage5('');
      setErrorMessage6('');
      // continewAfterSave();

    }
    else {
      if (!userFiled.name) {
        setErrorMessage('#enter your Buisness name')
      }
      else {
        setErrorMessage('');
      }
      if (!userFiled.numberDeals)
        setErrorMessage2('#enter your Number-Dealds')
      else {
        setErrorMessage2('');
      }
      if (!userFiled.city)
        setErrorMessage5('#enter City')
      else {
        setErrorMessage5('');
      }
      if (!userFiled.address)
        setErrorMessage6('#enter Address')
      else {
        setErrorMessage6('');
      }
      if (userFiled.email) {
        if (!tmp1) {
          setErrorMessage3('#Invalid email address')
        }
        else {
          setErrorMessage3('');
        }
      }
      if (userFiled.phone) {
        if (!tmp3) {
          setErrorMessage4('#Invalid phone')
        }
        else {
          setErrorMessage4('');
        }
      }
    }
  }
  // const continewAfterSave = () => {
  //   history.push(`/${userName}/allDocuments`)
  // }

  const onChangeCountry = (data) => {
    console.log("onChangeCounrty")
    debugger
    setCities(data)
  }
  const selectCountry = (e) => {
    setCountry()
  }
  const fieldChanged = (e, fieldName) => {
    if (fieldName == 'email') { if (validatorEmail(e.target.value)) setErrorMessage3('') }
    else {
      if (fieldName == 'name') setErrorMessage('')
      else {
        if (fieldName == 'phone') { if (validatorPhone(e.target.value)) setErrorMessage4('') }
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
    console.log("value", value)
    updateBuisnessField({ key: fieldName, value: value })
  }
  const onload = (e, fieldName) => {
    const value = e;
    updateBuisnessField({ key: fieldName, value: value })
  }
  const websiteChanged = (e, fieldName) => {
    const value = e.target.value;
    updateWebsite({ key: fieldName, value: value })
  }
  const onButtonClick = () => {
    inputFile1.current.click();
    // setUrlLogo(detailsBusiness.imgLogo)
  };

  const addImage1 = (event) => {
    if (event) {
      let reader = new FileReader();
      console.log("reader", reader.result)
      dispatch(actions.setBuisness({ key: 'imgLogo', value: reader.result }))
      reader.onloadend = () => {
        console.log("event", event)
        const objectImage = { 'image': event, 'to': 'buisness' }
        setImageLogo(objectImage)
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
          height: "88vh", width: "90%", borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126"
        }}>
        {/* {
        show ?
            <Alert variant="success"> 
             vvvvvv
            </Alert>
          : ""}
        <Button onClick={() => setShow(false)}>Show Alert</Button> */}
        {/* <Select
        components={{ IndicatorSeparator:() => null }}
          style={{ border: "0", boxShadow: "none", fontSize: "160%", maxWidth:"90%"}}
          class="form-select-lg mr-2"
          defaultValue={{ label: "Your Buisness", value: "" }}
          onChange={chooseCurrentBuisness}
          options={allBuisnessToUser? allBuisnessToUser.map((buisness) => {
            return ({
              "label": buisness.name,
              "value": buisness
            })
          }):""}>
        </Select> */}
        <div className="row titleBuisness d-flex justify-content-center flex-column space-between">
          <div><h1 style={{ fontFamily: "'Lato', sans-serif" }}
            id="firstTitle">Buisness Details</h1>
            <div class="row">
              <hr class="my-4 col-2 col-xl-2 col-lg-3 col-md-8 col-sm-4" style={{
                backgroundColor: "#917BDF",
                height: "2px",
                borderWidth: "0",
              }} />
            </div>
            {/* <div style={{ height: "20%" }}></div> */}
          </div>
        </div>
        {/* 
        <div style={{ height: "4%" }}></div> */}
        <div class="col-12 d-flex justify-content-start flex-column align-items-center ">
          <div  >
            <input type='file' id='file' ref={inputFile1} style={{ display: 'none' }}
              onChange={(e) => addImage1(e.target.files[0])} />
            <button onClick={onButtonClick} className="rounded" className={classes.buttonUpload}>
              {detailsBusiness && detailsBusiness.imgLogo ?
                <img
                  // id='userLogo-temp1'
                  className={classes.imgUpload}
                  src={detailsBusiness && detailsBusiness.imgLogo ? detailsBusiness.imgLogo : ""}
                  // src={urlLogo? urlLogo :""}
                  alt="Logo"
                  title="Your Logo Here"
                  onClick={() => onButtonClick("logo")}
                /> :
                <HiUpload id="icon" className={classes.iconUpload} />}
            </button>
          </div>

          <div>
            <p style={{ fontSize: "60%", marginLeft: "0px" }}>upload image</p>
          </div>
        </div>
        <Formik>
          <Form noValidate id="bisnD">
            <div className="row py-5 px-5">
              {/* <col></col> */}
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row">
                  <div className="col-lg-3 col-sm-12" >
                    <div className="row">
                      <lable className="col control-label" id="lableType">Buisness name</lable>
                    </div>
                    <div className="row" >
                      <div className="col">
                        <Field name='name' type="text" class="i_topic"
                          value={userFiled.name ? userFiled.name : ""}
                          onChange={(e) => fieldChanged(e, 'name')}
                        />
                        {errorMessage == '#enter your Buisness name' &&
                          <div className="required">{errorMessage}</div>
                        }
                        {/* <ErrorMessage name="name"
                          component="div"
                          className="erroeForm" /> */}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-12">
                    <div className="row">
                      <div className="col" id="lableType">Buisness email</div>
                    </div>
                    <div className="row">
                      <div className="col pr-2">
                        <Field name='email' type="text" class="i_topic"
                          value={userFiled.email ? userFiled.email : ""}
                          onChange={(e) => fieldChanged(e, 'email')}
                        />
                        {errorMessage3 == '#Invalid email address' &&
                          <div className="required">{errorMessage3}</div>}
                        {/* /* <ErrorMessage name="email"
                          component="div"
                          className="erroeForm" /> */ }
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-12">
                    <div className="row">
                      <div className="col" id="lableType">Buisness phone</div>
                    </div>
                    <div className="row">
                      <div className="col pr-2">
                        <Field name='phone' type="text" class="i_topic"
                          value={userFiled.phone ? userFiled.phone : ""}
                          onChange={(e) => { fieldChanged(e, 'phone') }}
                        />
                        {errorMessage4 == '#Invalid phone' &&
                          <div className="required">{errorMessage4}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-5 px-5">
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row">
                  <div className="col-lg-3 col-sm-12" >
                    <div className="row">
                      <lable className="col control-label" id="lableType">Country</lable>
                    </div>
                    <div className="row" >
                      <div className="col">
                        <input type="text" name="country" list="country" class="i_topic"
                          value={userFiled.country ? userFiled.country : ""}
                          onFocus={(e) => selectCountry(e)}
                          onBlur={(e) => { onChangeCountry(e.target.value) }}
                          onChange={(e) => fieldChanged(e, 'country')}
                        />
                        <datalist id="country">
                          {allCountry ? allCountry.map(x => {
                            return (
                              <option>{x.name}</option>)
                          }) : ''}
                        </datalist>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-12">
                    <div className="row">
                      <div className="col" id="lableType">City</div>
                    </div>
                    <div className="row">
                      <div className="col pr-2">
                        <input type="text" name="city" list="city" class="i_topic"
                          value={userFiled.city ? userFiled.city : ""}
                          onChange={(e) => fieldChanged(e, 'city')}
                        />
                        {errorMessage5 == '#enter City' &&
                          <div className="required">{errorMessage5}</div>}
                        <datalist id="city">
                          {allCities ? allCities.map(x => {
                            return (
                              <option>{x.name}</option>)
                          }) : ''}
                        </datalist>
                        {/* <Select className="col-15" name="country" class="i_topic" id="country"
                          components={{ IndicatorSeparator: () => null }}
                          style={{
                            border: "0", boxShadow: "none", fontSize: "160%", maxWidth: "90%",
                            webkitAppearance: "none",
                            mozAppearance: "none",
                            appearance: "none"
                          }}
                          // class="form-select-lg mr-2"
                          // defaultValue={{ label: "Your city", value: "" }}
                          // onChange={chooseCurrentBuisness}
                          // onChange={(e) => fieldChanged(e, 'city')}
                          options={allCities ? allCities.map((item) => {
                            return ({
                              "label": item.fields.name,
                              "value": item
                            })
                          }) : ""}
                          >
                        </Select> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-12">
                    <div className="row">
                      <div className="col" id="lableType">Street</div>
                    </div>
                    <div className="row">
                      <div className="col pr-2">
                        <Field name='address' type="text" class="i_topic"
                          value={userFiled.address ? userFiled.address : ""}
                          onChange={(e) => fieldChanged(e, 'address')}
                        />
                        {errorMessage6 == '#enter Address' &&
                          <div className="required">{errorMessage6}</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row
             py-5 px-5"
             >
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row">
                  <div className="col-lg-3 col-sm-12">
                    <div className="row">
                      <div className="col" id="lableType">Website</div>
                    </div>
                    <div className="row">
                      <div className="col pr-2">
                        <Field name='website' type="text" class="i_topic"
                          value={userFiled.socialmedias ?
                            userFiled.socialmedias.website ? userFiled.socialmedias.website :
                              "" : ""}
                          onChange={(e) => websiteChanged(e, 'website')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-12">
                    <div className="row">
                      <div className="col" id="lableType">Vat</div>
                    </div>
                    <div className="row">
                      <div className="col pr-2">
                        <Field name='vat' type="text" class="i_topic"
                          // onBlur={(e) => { fieldChanged(e, 'vat') }}
                          value={userFiled.vat ? userFiled.vat : ""}
                          onChange={(e) => fieldChanged(e, 'vat')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-12">
                    <div className="row">
                      <div className="col" id="lableType">Number-Deals</div>
                    </div>
                    <div className="row">
                      <div className="col pr-2">
                        <Field name='numberDeals' type="text" class="i_topic"
                          // onChange={(e) => { fieldChanged(e, 'numberDeals') }}
                          value={userFiled.numberDeals ? userFiled.numberDeals : ""}
                          onChange={(e) => fieldChanged(e, 'numberDeals')}
                        />
                        {errorMessage2 == '#enter your Number-Dealds' &&
                          <div className="required">{errorMessage2}</div>
                        }
                        {/* <ErrorMessage name="numberDeals"
                          component="div"
                          className="erroeForm" /> */}

                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-sm-12"> */}
                  {/* <div className="row">
                      <div className="col" id="lableType">Your logo</div>
                    </div> */}
                  {/* <div className="row"> */}
                  {/* <div className="col pr-2"> */}
                  {/* <IconContext.Provider */}
                  {/* value={{ color: 'blue' }}> */}
                  {/* <input name='buisnessLogo' */}
                  {/* // type="file"
                          //  className="i_topic d flex justify-content-center align-items-center"
                          //  placeholder={buisness.imgLogo} 
                          // value={user.companyName}
                          //  onBlur={onFieldChanged('imgLogo')}
                          // style={{ width: "40%", height: "100%", display: 'none' }}
                          // aria-describedby="basic-addon2"
                          // ref={inputFile}
                          // onChange={(e) => addImage(e.target.files[0])} 
                          // {...register("imgLogo")}
                          /> */}
                  {/* <button onClick={onButtonClick} className="rounded"   */}
                  {/* className={classes.buttonUpload}   */}

                  {/* <FixLogoBuisness> </FixLogoBuisness> */}

                  {/* </IconContext.Provider> */}
                  {/* </div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <div className="col" id="lableType">Your logo</div>
                  </div>
                  <div className="row">
                    <div className="col pr-2">
                      <IconContext.Provider
                        value={{ color: 'blue' }}> */}
                {/* <input name='buisnessLogo' */}
                {/* // type="file"
                          //  className="i_topic d flex justify-content-center align-items-center"
                          //  placeholder={buisness.imgLogo} 
                          // value={user.companyName}
                          //  onBlur={onFieldChanged('imgLogo')}
                          // style={{ width: "40%", height: "100%", display: 'none' }}
                          // aria-describedby="basic-addon2"
                          // ref={inputFile}
                          // onChange={(e) => addImage(e.target.files[0])} 
                          // {...register("imgLogo")}
                          /> */}
                {/* <button onClick={onButtonClick} className="rounded"   */}
                {/* className={classes.buttonUpload}   */}

                {/* <FixLogoBuisness> </FixLogoBuisness>*/}

                {/* </IconContext.Provider>  */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>

            <div className="row content d-flex justify-content-center">
              <div className="col-2" style={{
                paddingTop: "3vh",
                paddingRight: "6vh",
              }}>
                <Button
                  onClick={(e) => saveNewBuisness()}
                  style={{
                    backgroundColor: "#917BDF", borderColor: "#917BDF", minWidth: "100%",
                    width: "130%", height: "100%", fontSize: "200%"
                  }}
                  class="saveBuisness"
                >
                    SAVE
                  </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
};
export default BuisnessList;