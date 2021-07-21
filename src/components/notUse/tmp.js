import React, { useState, useRef } from 'react';

import './form.css';

import { makeStyles } from '@material-ui/core/styles';
// import { FiUpload } from 'react-icons/fi';
import { Button } from 'react-bootstrap'
// import Select from 'react-select';

import { actions } from '../../redux/actions/All_actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { useForm } from "react-hook-form";
import FixLogoBuisness from './fixLogoBuisness.js'


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
  }
}))

export default function BuisnessList(props) {

  const [buttonText, setButtonText] = useState("SAVE")

  const inputFile = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness);
  const currentBuisness = useSelector(state => state.buisnessReducer.currentBuisness);
  "currentBuisnessHome", currentBuisness, currentBuisness.name)
  const updateBuisnessField = (fieldToUpdate) => dispatch(actions.setBuisness(fieldToUpdate))
  const saveNewBuisness = () => {

    setButtonText("Continue")
    dispatch(actions.setBuisnessToServer())
  }
  const continewAfterSave = () => {
    history.push(`/${userName}/allDocuments`)
  }
  //   if (buttonType === "Continue") {
  //     history.push(`/${userName}/Invoice/allDocuments`)
  //   }
  // }
  const setImageLogo = (objectImage) => dispatch(actions.setImage(objectImage))

  const chooseCurrentBuisness = (event) => {
    const buisness = event.value;
    dispatch(actions.setGetBusiness(buisness._id))
    dispatch(actions.setGeCurrenttBusiness(buisness))
  }

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const onFieldChanged = (fieldName) => (e) => {
    const value = e.target.value;
    updateBuisnessField({ [fieldName]: value })
  }

  // const addImage = (event) => {
  //     'vdhggggg');
  //   if (event) {
  //       'event', event)
  //     let reader = new FileReader();
  //     const image = reader.result;
  //     reader.onloadend = () => {
  //       const objectImage = { 'image': event, 'to': 'product' }
  //       setImageLogo(objectImage)
  //     }
  //     reader.readAsDataURL(event)
  //       'imagep', props.imgProduct)
  //   }
  // }

  return (
    <>
      <div className="container-fluid con"
        style={{
          height: "88vh", width: "90%", borderRadius: "9px", boxShadow: "0px 3px 6px #0A26B126"
        }}>
        {/* <Select
        components={{ IndicatorSeparator:() => null }}
          style={{ border: "0", boxShadow: "none", fontSize: "160%", maxWidth:"90%"}}
          className="form-select-lg mr-2"
          defaultValue={{ label: "Your Buisness", value: "" }}
          onChange={chooseCurrentBuisness}
          options={allBuisnessToUser? allBuisnessToUser.map((buisness) => {
            return ({
              "label": buisness.name,
              "value": buisness
            })
          }):""}>
        </Select> */}
        <div className="row title d-flex justify-content-center flex-column space-between">
          <div><h1 style={{ fontFamily: "'Lato', sans-serif" }}
            id="firstTitle">Buisness Details</h1>
            <div className="row">
              <hr className="my-4 col-5 col-xl-3 col-lg-3 col-md-8 col-sm-4" style={{
                backgroundColor: "#917BDF",
                height: "2px",
                borderWidth: "0",
              }} />
            </div>
            <div style={{ height: "20%" }}></div>
            {/* <h2 className="my-5">Buisness Details</h2> */}
          </div>
        </div>

        <div style={{ height: "4%" }}></div>
        <form>
          <div className="row py-5 px-5">
            <div className="col-1"></div>
            <div className="col-2"></div>
            <div className="col-8">
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <lable
                      className="col control-label"
                      id="lableType">Buisness name
                    </lable>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        // editable
                        type="text"
                        className="i_topic"
                        placeholder="Buisness Name"
                        defaultValue={currentBuisness ? currentBuisness.name ? currentBuisness.name : "" : ""}
                        onBlur={onFieldChanged('name')}
                        // onChange={(e) => {onFieldChanged('name')}}
                        aria-describedby="basic-addon2" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <div className="col" id="lableType">Buisness email</div>
                  </div>
                  <div className="row">
                    <div className="col pr-2">
                      <input
                        type="text"
                        className="i_topic"
                        placeholder="buisness@gmail.com"
                        defaultValue={currentBuisness ? currentBuisness.email ? currentBuisness.email : "" : ""}
                        onBlur={onFieldChanged('email')}
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <div className="col" id="lableType">Buisness phone</div>
                  </div>
                  <div className="row">
                    <div className="col pr-2">
                      <input
                        type="text"
                        className="i_topic"
                        placeholder="+972-"
                        defaultValue={currentBuisness ? currentBuisness.phone ? currentBuisness.phone : "" : ""}
                        onBlur={onFieldChanged('phone')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-5 px-5">
            <div className="col-1"></div>
            <div className="col-2"></div>
            <div className="col-8">
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <lable
                      className="col control-label"
                      id="lableType">Country
                    </lable>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        // editable
                        name="country"
                        type="text"
                        className="i_topic"
                        // placeholder="counrty"
                        defaultValue={currentBuisness ? currentBuisness.country ? currentBuisness.country : "" : ""}
                        onBlur={onFieldChanged('counrty')}
                        // onChange={(e) => {onFieldChanged('name')}}
                        aria-describedby="basic-addon2" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <div className="col" id="lableType">City</div>
                  </div>
                  <div className="row">
                    <div className="col pr-2">
                      <input
                        name="city"
                        type="text"
                        className="i_topic"
                        // placeholder="buisness@gmail.com"
                        defaultValue={currentBuisness ? currentBuisness.city ? currentBuisness.city : "" : ""}
                        onBlur={onFieldChanged('city')}
                        aria-describedby="basic-addon2"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <div className="col" id="lableType">Street</div>
                  </div>
                  <div className="row">
                    <div className="col pr-2">
                      <input
                        name="street"
                        type="text"
                        className="i_topic"
                        placeholder="+972-"
                        defaultValue={currentBuisness ? currentBuisness.street ? currentBuisness.street : "" : ""}
                        onBlur={onFieldChanged('street')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-5 px-5">
            <div className="col-1"></div>
            <div className="col-2"></div>
            <div className="col-8">
              <div className="row">
                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <div className="col" id="lableType">Site</div>
                  </div>
                  <div className="row">
                    <div className="col pr-2">
                      <input
                        type="text"
                        class="i_topic"
                        placeholder="WWW.BUiSNESS.co.il"
                        valdefaultValue={currentBuisness ? currentBuisness.socialmedias ? currentBuisness.socialmedias.website ? currentBuisness.socialmedias.website : "" : "" : ""}
                        onBlur={onFieldChanged('website')}
                        aria-describedby="basic-addon2" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <div className="col" id="lableType">Vat</div>
                  </div>
                  <div className="row">
                    <div className="col pr-2">
                      <input
                        type="text" class="i_topic"
                        placeholder="%"
                        defaultValue={currentBuisness ? currentBuisness.vat ? currentBuisness.vat : "" : ""}
                        onBlur={onFieldChanged('vat')}
                        aria-describedby="basic-addon2" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="row">
                    <div className="col" id="lableType">Number-Deals</div>
                  </div>
                  <div className="row">
                    <div className="col pr-2">
                      <input
                        type="text"
                        class="i_topic"
                        placeholder="Buisness Number Deals"
                        defaultValue={currentBuisness ? currentBuisness.numberDeals ? currentBuisness.numberDeals : "" : ""}
                        onBlur={onFieldChanged('numberDeals')}
                        aria-described5by="basic-addon2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5"></div>
          <div className="row content d-flex justify-content-center">
            <div className="col-2">
              {buttonText == "SAVE" ?
                <Button
                  style={{
                    backgroundColor: "#917BDF", borderColor: "#917BDF", minWidth: "100%",
                    width: "100%", height: "100%", fontSize: "200%"
                  }}
                  class="saveBuisness"
                  onClick={(buttonText) => saveNewBuisness(buttonText)}
                >
                  {buttonText}
                </Button> :
                <Button
                  style={{
                    backgroundColor: "#917BDF", borderColor: "#917BDF", minWidth: "100%",
                    width: "100%", height: "100%", fontSize: "200%"
                  }}
                  class="saveBuisness"
                  onClick={() => continewAfterSave()}
                >
                  {buttonText}
                </Button>}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
import Select from 'react-select';
<Select className="col-4"
  components={{ IndicatorSeparator: () => null }}
  style={{
    border: "0", boxShadow: "none", fontSize: "160%", maxWidth: "90%",
    webkitAppearance: "none",
    mozAppearance: "none",
    appearance: "none"
  }}
  class="form-select-lg mr-2"
  defaultValue={{ label: "Your Buisness", value: "" }}
  onChange={chooseCurrentBuisness}
  options={allBuisnessToUser ? allBuisnessToUser ? allBuisnessToUser.map((buisness) => {
    return ({
      "label": buisness.name,
      "value": buisness
    })
  }) : "" : ""}>
</Select>


// Send a message

 // value={userFiled.county ? userFiled.email : ""}
                          // onBlur={(e) => { onChangeCounrty(e.target.value) }}
                          // value={userFiled.country ? userFiled.country : ""}
                          // onFocus={selectCountry()}