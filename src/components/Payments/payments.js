import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDeck } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import PaypalCard from './paypalCard.js'

import './payments.css'


function Payments(props) {
 
  return (
      <>
    <div className="container-fluid con" style={{
        height: "86vh",
        width: "98%"
      }}>
        <div className="row ">
          <div className="col d-flex row" 
          // style={{ height: 10 + 'vh' }}
          >
            <h1 className="ml-4"
            style={{ font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-22) Lato;" }}>
              Payments</h1>
          </div>
        </div>
      <hr className="payments_hr"/>
      <Row className="d-flex justify-content-around">
        <CardDeck
          style={{ width: "100%" }}
        >
              <div className=''>
                <PaypalCard
                  paymentType="paypal"
                />
              </div>
           
        </CardDeck>
      </Row>
      </div>
      </>
  )
}
export default Payments;