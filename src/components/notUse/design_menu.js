import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import './design_menu.css'
import $ from 'jquery'
import { actions } from '../../redux/actions/All_actions';
export default function Design_Menu() {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(1)
  const [flag1, setFlag1] = useState(0)
  const open_setting = useSelector(state => state.displayComponents.openSetting);
  const open_design_by_steps = useSelector(state => state.displayComponents.openDesignBySteps)
  const open_design = useSelector(state => state.displayComponents.openDesign)
  // const[openSetting,setOpensetting]=useState(false)
  useEffect(() => {
    if (open_design === true) {
      $("#b_design").focus()
      // $("#b_design").addClass('stay_color_design');
      $("#b_menu").removeClass('stay_color_design');
      // $("#b_design").css(
      //   'backgroundColor','rgb(222, 222, 222,0.23)'
      // )

      vv();
    }
    // $("#b_menu").css(
    //   'background', 'linear-gradient(to right, rgb(209, 209, 209,0.13) 100%, rgb(222, 222, 222,0.23) 50%) left',
    //   'backgroundSize','200%'
    // )
    // $(".b").click()
    //   $("#b_menu").on('focus',function()
    // {
    //   $(".des").css({"opacity":"0.5"})

    // }) 
    // $("#b_design").on('focus',function()
    // {
    //   $(".f").css({"opacity":"0.5"})

    // })
  }, [open_design])

  useEffect(() => {

    $("#b_design").focus()
    // $("#b_design").addClass('stay_color_design');
    // $("#b_design").css(
    //   'backgroundColor','rgb(222, 222, 222,0.23)'
    // )

    vv();

  }, [])
  const ff = () => {
    setFlag(0)
    setFlag1(1)
    dispatch(actions.setOpenSetting(true))
    dispatch(actions.setOpenDesign(false))
    dispatch(actions.setDisplaySetting(false))

  }

  const vv = () => {
    // dispatch(actions.setOpenDesignBySteps(false))
    dispatch(actions.setOpenSetting(false))
    dispatch(actions.setDisplaySetting(false))
    dispatch(actions.setOpenDesign(true))
  }
  // $("p").click(function(){
  //   $(this).addClass('ppoo')
  // })
  // $("#b_design").click(function(){
  //   $("#b_design").addClass('stay_color_design')

  //  })
  //  $("#b_menu").click(function(){
  //   $("#b_menu").removeClass('stay_color_design')

  //  })
  // open_design&&
  // $("#b_design").addClass('stay_color_design');

  $("#b_menu").click(function () {
    $("#b_design").removeClass('stay_color_design');
    // $("#b_menu").addClass('stay_color_design');

  })
  $("#b_design").click(function () {
    $("#b_menu").removeClass('stay_color_design');
    if ($("#b_design").hasClass('stay_color_design'))
      $("#b_design").addClass('');
    // else
    // $("#b_design").addClass('stay_color_design');

    //   "ffffffff",e.target.class)


  })

  return (
    <>
      {/* <button id="stamm" hidden="true"></button> */}
      {/* <p>yyyyyyyyyyyyyyyyyyyyyyyyyyyy</p> */}
      <div className="container-fluid t" style={{ marginBottom: "2%" }}>
        <div className="row wrapdm">
          {/* <div className="col-6 wrapb "> */}
          <button className={`col-6 ${flag1 == 1 ? "bbb" : "b_menu"}`} id="" onClick={ff}>MENU</button>
          <button className={`col-6 ${flag == 1 ? "bbb " : "b_design"}`} id="" onClick={vv}>DESIGN</button>
          {/* </div> */}
          {/* <div className="col-6 wrapb "> */}

          {/* </div> */}
        </div>
      </div>
      {/* <div className="stam"style={{width:"50px",height:"10px" ,backgroundColor:"pink"}}></div> */}
      {/* <button className="b" id="b_menu">MENU</button>
    <button className="b des" id="b_design">DESIGN</button> */}

      {/* <div className="button1"></div><br></br>
    <div className="button2"></div> */}
      {/* <div className="ee">yyy</div> */}
      {/* <button class="button1"></button>
<button class="button2"></button> */}
    </>
  )
}