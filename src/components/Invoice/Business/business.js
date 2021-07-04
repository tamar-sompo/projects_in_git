import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { actions } from '../../../redux/actions/All_actions.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import logo1 from '../../assets/newLogo.png'
import { Row } from 'react-bootstrap'

import './business.css'

import BusinessCard from '../BusinessCard/businessCard';

function Business(props) {
  let history = useHistory();
  const dispatch = useDispatch();

  const [flag, setFlag] = useState()

  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness);
  const allInvoices = useSelector(state => state.buisnessReducer.allInvoices);


  const changeFlag = (value) => {

    setFlag(value)
  }
  console.log("changeFlag", changeFlag)
  useEffect(() => {
    dispatch(actions.setDisplayBoxShadow(false))
  }, [])

  return (
    <div className="container-fluid con" style={{
      height: "95%",
      width: "95%",
      // borderRadius: "9px",
      // boxShadow: "0px 3px 6px #0A26B126",
      // backgroundColor: 'white'
    }}>
      <div class="d-flex justify-content-between   my-3"
        style={{
          marginBottom: '40%'
        }}
      >
        <div class="p-2 h3 font-weight-bold">Your Business</div>
        <button
          class="p-3 my-4"
          onClick={() => changeFlag(true)}
          style={{ backgroundColor: '#8E73EC', border: 'none', borderRadius: '7%', color: 'white' }}
        >
          + Add Business
        </button>
        {flag == true &&
          history.push(`/${userName}/add_buisness`)
        }
      </div>
      <hr className='my-4' />
      {/* className="justify-content-center m-3"> */}
      <Row className="d-flex justify-content-around">
        <CardDeck
          style={{ width: "93%" }}
        // className="d-flex justify-content-center align-items-center"
        >
          <div className='displayCards'>
            {console.log('allbusiness lea', allBuisnessToUser)}
            {allBuisnessToUser ? allBuisnessToUser.map((buisness) =>
              <div className=''>
                <BusinessCard
                  buisnessId={buisness._id}
                  buisnessName={buisness.name}
                  buisnessWebsite={buisness.socialmedias ? buisness.socialmedias.website ? buisness.socialmedias.website : '' : ''}
                  buisnessNumber={buisness.numberDeals ? buisness.numberDeals : ''}
                  buisnessImg={buisness.imgLogo ? buisness.imgLogo : logo1}
                />
              </div>
            ) : <div>You have no Business</div>
            }
          </div>
        </CardDeck>
      </Row>
    </div>
  )
}
export default Business;