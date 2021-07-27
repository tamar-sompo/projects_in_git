import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import $ from "jquery";

function SaveButton(props) {
  const history = useHistory();
  const [value, setValue] = useState("SAVE")
  const invoiceDetails = useSelector(state => state.invoiceReducer.invoice);
  const selector = formValueSelector('NewPostForm');


  const changeName = () => {
    setValue("UPDATE")
  }


  const saveInvoiceServerAction = () => {
    const uid = 'DYc3VUmEHScqaZBw300lv89fna82'
    $.ajax({
      url: 'https://finance.leader.codes/' + uid,
      type: 'post',
      data: JSON.stringify(invoiceDetails),
      contentType: 'application/json',
      withCradentials: true,
      async: false,
      dataType: 'json',
      success: function (data) {
        history.push("/save/" + data.invoice._id)
      },
    });
  }
  return (
    <>
      <Fab
        style={{ width: "150px" }}
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
        // className={classes.margin}
        onClick={() => saveInvoiceServerAction()}
      // onClick={changeName}
      >
        <svg style={{ fill: "white", flexShrink: 0, margin: '5px' }} xmlns="http://www.w3.org/2000/svg" width="8.211" height="11.124" viewBox="0 0 8.211 11.124"><path d="M13.6,5.344,5.915.047A.265.265,0,0,0,5.5.265V10.859a.265.265,0,0,0,.415.218L13.6,5.78a.265.265,0,0,0,0-.436Z" transform="translate(-5.5 0)" /></svg>
        {value}
      </Fab>
    </>
  )
}

export default connect()(SaveButton)
