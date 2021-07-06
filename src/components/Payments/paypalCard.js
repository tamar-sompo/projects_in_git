import React from 'react';

import Card from 'react-bootstrap/Card';

// import paypalLogo from '../assets/paypalLogo';



function PaypalCard(props) {
    return (
        <>
{/* <Card id="payment_card" border="light" 
className="shadow-sm bg-body rounded black mt-3">
                <div variant="" id='iconPosition'
                // onClick={() => checkIfBuisness("Buisness")}
                >
             
                </div>
                <Card.Body>
                  <Card.Title>
                  <img src="https://files.codes/uploads/ruthF/img/1625567418051__paypalimg.png"></img>

                  </Card.Title>
                  <button
            className='paypalCard_addButton'
            // onClick={(e) => save()}
          >Add</button>
                </Card.Body>
               
              </Card> */}
              {/* <div className="card"
              id="payment_card">
  <img src="https://files.codes/uploads/ruthF/img/1625567418051__paypalimg.png" alt="PaypalLogo" style="width:100%"/>
  <div class="container">
  <button
            className='paypalCard_addButton'
            // onClick={(e) => save()}
          >Add</button>
  </div>
</div> */}

<div
className="payment_card shadow-sm bg-body rounded black mt-3">
  <img src="https://files.codes/uploads/ruthF/img/1625567418051__paypalimg.png"
  className="mt-5 paypalLogo"
   alt="Avatar"
  //  style={{"width":"100%"}}
   />
  <div class="container">
  <button
            className='paypalCard_addButton mt-5'
            // onClick={(e) => save()}
          >Add</button>
  </div>
</div>


    </>
    )}
export default PaypalCard;