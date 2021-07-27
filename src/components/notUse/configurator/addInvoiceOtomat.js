import React, { useState } from 'react';
// import { connect } from 'react-redux';
import './config.css'
import { actions } from '../../../redux/actions/All_actions'
// import {useDispatch, useSelector} from 'react-redux'
import { Col, Row, Container, Button } from 'react-bootstrap'
import Datetime from 'react-datetime';
import './add.css'
import { parse } from 'date-fns';
import { connect, useDispatch, useSelector } from 'react-redux';


function AddInvoiceOtomat(props) {
  const dispatch = useDispatch();
  const invoiceDetailsView = useSelector(state => state.invoiceReducer.invoiceDetailsView);
  const [flag, setFlag] = useState(false);
  const [timeOtamat, setTimeOtomat] = useState({
    second: 0,
    minute: 0,
    hour: 0,
    dayOfMonth: 0,
    month: 0,
    dayOfWeek: 0
  })
  const [unique_name, setUnique_name] = useState("index")
  const [deleteSchedule, setDeleteSchedule] = useState(false)
  const [invoicePayload, setInvoicePayload] = useState({
    //invoice:invoiceDetailsView
    invoice: { date: new Date() },
    time: timeOtamat,
    deleteSchedule: deleteSchedule
  })


  // const createInvoice=()=>{
  //     props.create(new Date());
  //  }
  const deleteScheduleFunction = () => {
    setDeleteSchedule(true)
  }

  const changeFlagOtomat = () => {
    setFlag(true)
  }

  const changetime = (e, namefield) => {
    if (namefield == 'month')
      setTimeOtomat({
        second: 0,
        minute: 0,
        hour: 0,
        dayOfMonth: parseInt(e.target.value),
        month: 0,
        dayOfWeek: 0
      })
    //  setTimeOtomat({second:e.target.value})

  }
  const create = () => {
    "ddddvgvgvgvgvgvgvgv", timeOtamat)
    setInvoicePayload({ time: timeOtamat })
    props.createInvoice(invoicePayload)
  }

  return (
    <>
      <button type="button" class="btn" onClick={changeFlagOtomat}>יצירת חשבונית אוטומטית חודשית</button>
      {/* <button type="button" class="btn btn-primary">יצירת חשבונית אוטומטית שבועית</button> */}

      {flag &&
        <>
          <select onChange={(e) => changetime(e, 'month')} value={timeOtamat.month} id="day">
            {/* <option selected></option> */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <div className="time">
            {/* <Datetime
        input={false}
        timeFormat="HH:mm:ss"
        timeConstraints={{
          hours: { min: 0, max: 23 },
          minutes: { min: 0, max: 59 },
          seconds: { min: 0, max: 59 }
        }}
      /> */}
          </div>

          {/* <div class="form-group row"> */}
          {/* <label for="example-time-input" class="col-2 col-form-label">Time</label> */}
          {/* <div class="col-10"> */}
          {/* <input  type="time" onChange={changetime} value={timeOtamat.second}/> */}
          {/* </div> */}
          {/* </div> */}
          <button onClick={create}>create</button>
          {invoiceDetailsView &&
            <button onClick={create}>delete schedule</button>}

        </>
      }



    </>);

}
const mapStateToProps = (state) => {
  return {
    imageInvoice: state.designReducer.imageInvoice,
    itemData: state.designReducer.itemData,

  };
}
const mapDispatchToProps = (dispatch) => ({
  createInvoice: (time) => dispatch(actions.createInvoice(time))
})

// export default connect(mapStateToProps,mapDispatchToProps)(Design) 
export default connect(mapStateToProps, mapDispatchToProps)(AddInvoiceOtomat)