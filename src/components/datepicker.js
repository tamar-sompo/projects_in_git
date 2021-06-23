import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export default ()=> {
    const [date, setDate] = useState()
    return (<>
<DatePicker className="datepicker"  date={date} onDateChange={setDate} locale={enGB}id="calender"tabindex="-1">
      {({ inputProps, focused }) => (
        <input  
        style={{border:'none'}}
          className={'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />)}
        </DatePicker>
    </>);
}
 