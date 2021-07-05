import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';


export default function Payments() {

    return (
        <>
            <div className='row container'>
            <input
                      type="text"
                      placeholder="client_id"
                      onChange={(e) => onFieldChanged(e, 'client_id')}
                    //   onBlur={updatedetailsBusiness1('phone')}
                    //   value={detailsBusiness && detailsBusiness.phone}
                    />  
                     <input
                      type="text"
                      placeholder="secret_id"
                      onChange={(e) => onFieldChanged(e, 'secret_id')}
                    //   onBlur={updatedetailsBusiness1('phone')}
                    //   value={detailsBusiness && detailsBusiness.phone}
                    /> 
                    <button
                    onClick = {() => {dispatch(actions.setClientIdToBuisness())}}>SAVE</button>
            </div>
        </>
    );
}
// )




