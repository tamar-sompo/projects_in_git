import React, { useState } from 'react';

import { actions } from '../../redux/actions/All_actions'
import { useDispatch } from 'react-redux';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';






function PaypalCard(props) {
  const dispatch = useDispatch()
  const [isPaypalForm, setIsPaypalForm] = useState(false)

    const onFieldChanged = (e, fieldName) => {  
      const value = e.target.value;
      dispatch(actions.updatePaypalAccountField({ [fieldName]: value }))
  }

    return (
        <>
        {isPaypalForm === false ?
<div
className = 'payment_card mt-3 ml-3'
>
  <img src="https://files.codes/uploads/ruthF/img/1625567418051__paypalimg.png"
  className="mt-5 paypalLogo "
   alt="paypal_logo"
   />
  <div className="d-flex">
  <button
            className='paypalCard_addButton
            mt-4 mx-auto'
            onClick={() => setIsPaypalForm(true)}
          >Add</button>
  </div>
</div>:
<div
className = 'withForm ml-3'>
  <img src="https://files.codes/uploads/ruthF/img/1625567418051__paypalimg.png"
  className="mt-5 paypalLogo "
   alt="paypal_logo"/>
  <div className="d-flex flex-column">
  <div className="row mx-auto mt-4 ml-3">
          <div className="ml-5">
            {/* <label>Client-Id:</label> */}
            <textarea
            placeholder="Client Id"
              className="paypalCard_textarea_paypal"
              // value={newProductTable ? newProductTable.name : ''}
              onChange={(e) => onFieldChanged(e, 'client_id')}
              ></textarea>
          </div>
          {/* </div> */}
          {/* <div className="row"> */}
          <div className="ml-5 mt-3">
            {/* <label>Secret-Id:</label> */}
            <textarea
            placeholder="Client Id"
              className="paypalCard_textarea_paypal"
              // value={newProductTable ? newProductTable.name : ''}
              onChange={(e) => onFieldChanged(e, 'secret_id')}
            ></textarea>
          </div>
          {/* </div> */}
  <button
            className='paypalCard_addButton
            mt-4 mx-auto'
            onClick = {() => {dispatch(actions.setClientIdToBuisness())}}
            // onClick={() => setIsPaypalForm(false)}
          >Save</button>
  </div>
</div>
</div>
}
    </>
    )}
export default PaypalCard;