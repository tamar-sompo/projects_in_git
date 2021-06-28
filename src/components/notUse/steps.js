import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './steps.css';
import {Form} from 'react-bootstrap'
//import { connect, useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { Link } from "react-router-dom";

export default function Steps(props) {
  const { setIsLevel4 } = props
  const dispatch = useDispatch();
  const isLevel=useSelector(state=>state.designReducer.isLevel)
  //const focus = useSelector(state => state.invoiceReducer.focus);
  //const setFocus = (focus) => dispatch(actions.setFocus(focus))
  // const [numStep, setNumStep] = useState("1")
  const userName = useSelector(state => state.publicReducer.userName);

  const setIslevel=(level) => dispatch(actions.setIsLevel(level))
 
  // const [numStep, setNumStep] = useState(1)

  // const setLevel=(num)=>{
  // setNumStep(num)
  //setFocus(`level${num}`)
  // if(num===4)
  // }

  const setOpenDesignBySteps = (tt) => dispatch(actions.setOpenDesignBySteps(tt))
  const setOpenDesign = (tt) => dispatch(actions.setOpenDesign(tt))

  const [numStep, setNumStep] = useState("1")
  const setLevel = (num) => {
    if(isLevel!=3){
    setIslevel(num);
    setNumStep(num);
    setOpenDesign(true)
    // setOpenDesignBySteps(true)
    // dispatch(actions.setOpenSetting(false))

    if (num === 4){
      setIsLevel4(true)
    console.log('is level 3')
  }
    else
      setIsLevel4(false)
    }
  }
  return (
    <>
    <div className='progressTop justify-content-md-center text-center mt-4 mb-4 align-items-center row ' style={{ width: '75%', margin: 'auto' }}>
      <span className='col-1 mx-1 px-1' onClick={() => setLevel(1)}>
        {/* <Link
          to={{ pathname: `/${userName}/Invoice/Production` }}
          className="itemStep"
          style={numStep >= 1 ? { backgroundImage: "linear-gradient(to bottom,#917BDF,#6236FF )", color: "#FFFFFF", border: "none", lineHeight: '7vh' } : {}}
        > */}
        <span
        className="itemStep"
        style={numStep >= 1 ? { backgroundImage: "linear-gradient(to bottom,#917BDF,#6236FF )", color: "#FFFFFF", border: "none", lineHeight: '7vh' } : {}}
        >
          <span
            className="justify-content-center align-items-center">
            1
            {/* {numStep === 1 ? '1' :
              <FontAwesomeIcon
                className='iconV'
                size='1x'
                icon={['fas', 'check']}
              />} */}
          </span>
          </span>
        {/* </Link> */}
      </span>
      {/* <div className="lineStep col-2  p-0 m-0 bbbb"style={{ backgroundImage: 'linear-gradient(to bottom,#917BDF ,#6236FF )'}}></div> */}
      <div className="lineStep col-2  p-0 m-0 "
      // aaaa
      // style={{backgroundColor: '#787D91' }}
      style={
        numStep >= 2 ?
          {
            backgroundImage: 'linear-gradient(to bottom,#917BDF ,#6236FF )'
             
          }
          : { backgroundColor: '#787D91' }
      }
      ></div>
   
        <span className='col-1 mx-1 px-1 step2' onClick={() => setLevel(2)}>
          {/* <Link
            to={{ pathname: `/${userName}/Invoice/Design` }}
            className="itemStep"
            style={numStep >= 2 ? { backgroundImage: "linear-gradient(to bottom,#917BDF,#6236FF )", color: "#FFFFFF", border: "none", lineHeight: '7vh' } : {}}
          > */}
          <span
          className="itemStep"
          style={numStep >= 2 ? { backgroundImage: "linear-gradient(to bottom,#917BDF,#6236FF )", color: "#FFFFFF", border: "none", lineHeight: '7vh' } : {}}
      >
            <span
              className="justify-content-center align-items-center">
              2
              {/* {numStep <= 2 ? '2' :
                <FontAwesomeIcon
                  className='iconV'
                  size='1x'
                  icon={['fas', 'check']}
                />}*/}
            </span>
            </span>
          {/* </Link> */}
        </span>


        <div className="lineStep col-2  p-0 m-0 "
      // aaaa
      // style={{backgroundColor: '#787D91' }}
      style={
        isLevel >= 3 ?
          {
            backgroundImage: 'linear-gradient(to bottom,#917BDF ,#6236FF )'
             
          }
          : { backgroundColor: '#787D91' }
      }
      ></div>
        
        {/* <div className="lineStep col-2  p-0 m-0 " style={
          numStep >= 3 ?
            {
              backgroundImage: "linear-gradient(to bottom,#917BDF,#6236FF )"
            }
            : { backgroundColor: '#787D91' }
        }
        ></div> */}
         <span className='col-1 mx-1 px-1 step3'> 
          <span
          className="itemStep"
          style={isLevel >= 3 ? { backgroundImage: "linear-gradient(to bottom,#917BDF,#6236FF )", color: "#FFFFFF", border: "none", lineHeight: '7vh' } : {}}
      
          >
            <span
              className="justify-content-center align-items-center">
              3
              {/* {numStep <= 3 ? '3' :
                <FontAwesomeIcon
                  className='iconV'
                  size='1x'
                  icon={['fas', 'check']} */}
               
         </span> 
         </span>
         </span>
        {/* <div className="lineStep col-2  p-0 m-0 " style={
          numStep >= 4 ?
            {
              backgroundImage: "linear-gradient(to bottom,#917BDF,#6236FF )"
            }
            : { backgroundColor: '#787D91' }
        }
        ></div>
        <span className='col-1 mx-1 px-1 step4' onClick={() => setLevel(4)}
        // onClick={() => { props.done ? props.setNumStep("4") : alert(`${checkIfDoneMsg}`) }} 
        >
          <Link
            to={{ pathname:`/${userName}/Invoice/Conversion`}}
            className="itemStep"
            style={numStep >= 3 ? { backgroundImage: "linear-gradient(to bottom,#917BDF,#6236FF )", color: "#FFFFFF", border: "none", lineHeight: '7vh' } : {}}
          >
            <span
              className="justify-content-center align-items-center">
              {numStep <= 3 ? '3' :
                <FontAwesomeIcon
                  className='iconV'
                  size='1x'
                  icon={['fas', 'check']}
                />}
            </span>
          </Link>
        </span>*/}
      </div > 
    </>
  )
}