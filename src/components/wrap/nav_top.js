import React, { useState, useEffect } from 'react';

import './nav_top.css';
import logo from '../assets/newLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Form from "react-bootstrap/Form";
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import Select from 'react-select';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from './share';
import { ImLink } from 'react-icons/im'
// import $ from 'jquery';

// import BuisnessList from '../forms/buisnessForm';

import { useHistory } from 'react-router-dom';

export default function Nav() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [copy, setCopy] = useState(false);
  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness);
  const currentBuisness = useSelector(state => state.buisnessReducer.currentBuisness);
  const invoiceSave = useSelector(state => state.invoiceReducer.invoiceSave);

  useEffect(() => {
    console.log("navTop")
  }, [invoiceSave])

  const chooseCurrentBuisness = (event) => {
    const buisnessChoose = event.value;
    const objBuisness = JSON.parse(buisnessChoose)
    dispatch(actions.getAllProduct(objBuisness._id))
    console.log("buisnessObj", objBuisness)
    console.log("buisnessssssssssss", buisnessChoose)
    dispatch(actions.setGetBusiness(objBuisness._id))
    console.log("dispatch1")
    dispatch(actions.setGeCurrenttBuisness(objBuisness))
    console.log("dispatch2")
  }


  const setMail = () => {
    dispatch(actions.setsendMessage("true"))
  }

  const send = () => {
    history.push(`/${userName}/`)
  }
  return (

    // <div className="col-11 d-flex justify-content-end" >


    <div className="nav_top1 container-fluid  d-flex align-items-center ">
      {/* <div className="row" style={{ width: "100%" }}>
      </div> */}
      <div className="col-2 d-flex justify-content-start">
        <div
        // style={{ display: "inline-block" }}
        >
          <img src={logo} alt={"logo"} width="130px"
            className="pointer"
            // style={{ cursor: "pointer" }}
            onClick={(e) => send()}
          />
        </div></div>

      <div className="col-9 d-flex justify-content-center" style={{ border: "3px black" }}>


        {invoiceSave ? invoiceSave.invoice ? invoiceSave.invoice._id ?
          <div className="col-9 d-flex justify-content-center" style={{ border: "3px black" }}>
            <div className="copy" style={{ border: "solid 1px #917BDF" }}>
              <CopyToClipboard
                text={`https://finance.leader.codes/${userName}/view/${invoiceSave.invoice._id}`}
                onCopy={() => {
                  setCopy(true)
                  setTimeout(() => {
                    setCopy(false)
                  }, 3000);
                }}>
                <div className="linkCopydiv pointer" style={{ display: "inline" }}>
                  <span className="linkCopyspan px-3">
                    <span>{`https://finance.leader.codes/${invoiceSave.invoice._id.slice(0, 5)}${"..."}`}</span>
                  </span>
                  <span className="linkCopyicon px-1"
                  // onClick={()=>setMail()}
                  >
                    {/* <FontAwesomeIcon className="ic" size="2x" icon={['fas', 'link']}
        ></FontAwesomeIcon> */}
                    <ImLink className="ic" size="2x" icon={['fas', 'link']}
                    ></ImLink>
                  </span>
                  {copy && <span className="px-3 alert-copy">Test Link Copied!</span>}
                </div>
              </CopyToClipboard>
            </div>
            <div className="share">
              <Share fl={2} />
            </div>
          </div>
          : "" : "" : ""}
      </div>

      {/* <button onClick={()=>setMail()}>email</button> */}
      {/* <div className="col-5 d-flex justify-content-end" > */}

      {/* <h2>{currentBuisness? currentBuisness.name? currentBuisness.name: "":""}</h2> */}
      <Select
        // className="col-4"
        components={{ IndicatorSeparator: () => null }}
        style={{
          border: "0", boxShadow: "none", fontSize: "160%", maxWidth: "90%",
          // backgroundImage: ('../assets/newLogo.png'),
          webkitAppearance: "none",
          mozAppearance: "none",
          appearance: "none"
        }}
        class="form-select-lg mr-2" className="css-yk16xz-control1"
        value={{
          label: currentBuisness ? currentBuisness._id ? currentBuisness.name : userName : userName,
          value: currentBuisness ? currentBuisness._id ? currentBuisness : "" : ""
        }}
        onChange={chooseCurrentBuisness}
        options={allBuisnessToUser ? allBuisnessToUser ? allBuisnessToUser.map((buisness) => {
          return ({
            label: <div><img src={buisness.imgLogo ? buisness.imgLogo : logo} height="25px" width="25px" /> {buisness.name}</div>,
            value: JSON.stringify(buisness),
          })
        }) : "" : ""}>
      </Select>

    </div>
    // </div>



  );
}