import React from 'react';
import Card from 'react-bootstrap/Card';


function PaypalCard(props) {
    return (
        <>
<Card id="payment_card" border="light" 
className="shadow-sm p-3 mb-5 bg-body rounded">
                <div variant="" id='iconPosition'
                // onClick={() => checkIfBuisness("Buisness")}
                >
             
                </div>
                <Card.Body>
                  <Card.Title id="cardTitle"></Card.Title>
                </Card.Body>
               
              </Card>
    </>
    )}
export default PaypalCard;