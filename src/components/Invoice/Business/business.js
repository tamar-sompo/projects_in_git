import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { actions } from '../../../redux/actions/All_actions.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import logo1 from '../../assets/newLogo.png'
import { Row } from 'react-bootstrap'
import { FiList } from 'react-icons/fi'
import { RiLayoutGridFill } from 'react-icons/ri'


import './business.css'

import BusinessCard from '../BusinessCard/businessCard';
import BuisnessList from '../BuisnessList/buisnessList';


function Business(props) {
  let history = useHistory();
  const dispatch = useDispatch();

  const [flag, setFlag] = useState()
  const [flagView, setFlagView] = useState(false)

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
      height: "86vh",
      width: "98%"
    }}>
      <div className="row" style={{ height: '6%', marginTop: '-1%' }}>
        <div className="col d-flex row" style={{ height: 10 + 'vh' }}>
          <h1 style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>Your Buisness</h1>
        </div>
        <div className="col-8 d-flex justify-content-end ">
          <div className="iconsBuisness">
            < RiLayoutGridFill onClick={() => setFlagView(true)}
              style={{ width: '2rem', height: '4vh', color: "gray", fontWeight: "bold", cursor: "pointer", verticalAlign: "middle" }}>
            </RiLayoutGridFill>
          </div>
          <div className="iconsBuisness">
            < FiList onClick={() => setFlagView(false)}
              style={{ width: '2rem', height: '4vh', color: "gray", fontWeight: "bold", cursor: "pointer", verticalAlign: "middle" }}>
            </FiList>
          </div>
          <div
            onClick={() => changeFlag(true)} >
            <button className="newProd11">New buisness +</button>
            {flag == true &&
              history.push(`/${userName}/add_buisness`)
            }
          </div>
        </div>
      </div>
      <hr className='my-4' />
      {
        flagView === false ? <BuisnessList allBuisness={allBuisnessToUser} /> :
          <CardDeck
            style={{ width: "93%" }}
          >
            <div className='displayCards'>
              {console.log('allbusiness lea', allBuisnessToUser)}
              {allBuisnessToUser ? allBuisnessToUser.map((buisness) =>
                <>
                  <BusinessCard
                    buisnessId={buisness._id}
                    buisnessName={buisness.name}
                    buisnessWebsite={buisness.socialmedias ? buisness.socialmedias.website ? buisness.socialmedias.website : '' : ''}
                    buisnessEmail={buisness.email}
                    buisnessImg={buisness.imgLogo ? buisness.imgLogo : logo1}
                    imageFlag={buisness.imgLogo ? 1 : 2}
                  />
                </>
              ) : <div>You have no Business</div>
              }
            </div>
          </CardDeck>
      }



      {/* <div class="d-flex justify-content-between   my-3"
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
       <hr className='my-4' />*/}
      {/* <Row className="d-flex justify-content-around">
        <CardDeck
          style={{ width: "93%" }}
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
      </Row> */}
    </div>
  )
}
export default Business;