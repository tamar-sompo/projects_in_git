import React from 'react';

import { actions } from '../../redux/actions/All_actions'
import { useDispatch, useSelector } from 'react-redux';







function PaypalCard(props) {
  const dispatch = useDispatch()
  // const [isPaypalForm, setIsPaypalForm] = useState(false)

  const isPaypalForm = useSelector(state => state.paymentsReducer.isPaypalForm);

  const updatePaypalAccountField = (fieldToUpdate) => {
    dispatch(actions.updatePaypalAccountField(fieldToUpdate))
  }

  const onFieldChanged = (e, fieldName) => {
    const value = e.target.value;
    updatePaypalAccountField({ key: fieldName, value: value })
  }

  return (
    <>
      {isPaypalForm === false ?
        <div
          className='payment_card mt-3 ml-3'
        >
          <img src="https://files.codes/uploads/ruthF/img/1625567418051__paypalimg.png"
            className="mt-5 paypalLogo "
            alt="paypal_logo"
          />
          <div className="d-flex">
            <button
              className='paypalCard_addButton
            mt-4 mx-auto'
              onClick={() => dispatch(actions.setClosePaypalForm(true))}
            >Add</button>
          </div>
        </div> :
        <div
          className='withForm ml-3'>
          <img src="https://files.codes/uploads/ruthF/img/1625567418051__paypalimg.png"
            className="mt-5 paypalLogo "
            alt="paypal_logo" />
          <div className="d-flex flex-column">
            <div className="row mx-auto mt-4 ml-3">
              <div className="ml-5">
                <textarea
                  type="string"
                  placeholder="Client Id"
                  className="paypalCard_textarea_paypal  p-3"
                  onChange={(e) => onFieldChanged(e, 'client_id')}
                ></textarea>
              </div>
              <div className="ml-5 mt-5">
                <textarea
                  type="string"
                  placeholder="Secret Id"
                  className="paypalCard_textarea_paypal  p-3"
                  onChange={(e) => onFieldChanged(e, 'secret_id')}
                ></textarea>
              </div>
            </div>
            <div className="d-flex mt-3">
              <button
                className='paypal_saveButton h-40 row mt-5 justify-content-center
                mx-auto'
                onClick={() => { dispatch(actions.setClientIdToBuisness()) }}
              >Save</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
export default PaypalCard;