import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import './config.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actions } from '../../../redux/actions/All_actions'
import { useDispatch, useSelector } from 'react-redux';
//  import './listPicture.css'
import './color1.css'
import { AiOutlineReload } from "react-icons/ai";
import { FiUpload } from 'react-icons/fi';
import { Col, Row, Container, Button } from 'react-bootstrap'



function Color1(props) {
    const dispatch = useDispatch();
    const changeComponent = (component1) => dispatch(actions.setComponentConfigurator(component1))
    const componentConfigurator = useSelector(state => state.companyReducer.componentConfigurator)
    const itemData = useSelector(state => state.designReducer.itemData)
    const changeimageInvoice = (image) => dispatch(actions.setImageInvoice(image))
    const changeLogoWidth = (image) => dispatch(actions.setLogoWidth(image))

    const setColors=(color)=>dispatch(actions.setColors(color))

    const [colorArr, setColorArr] = useState([
        ['#61A28F', '#BFDCD6', '#FDC946', '#F89724'],
        ['#A6C161', '#84CDC1', '#F0B96E', '#F57D54'],
        ['#353D30', '#70836F', '#A17550', '#DAC1A4'],
        ['#2E4873', '#238E9C', '#A17550', '#D2AA39'],
        ['#DB5F7C', '#CAD669', '#F4BB59', '#F4D646'],
        ['#464B47', '#777F74', '#ADC5C2', '#E07064'],
        ['#677788', '#E1863F', '#EFBA2F', '#D3BFA3'],
        ['#567960', '#7A805F', '#D3784F', '#E09D7A'],
        ['#87A39F', '#E76984', '#F5ABA3', '#F5D8B6'],

        ['#2F3229', '#3C0C15', '#9C8F7D', '#B47537'],

        ['#49353D', '#AB9C92', '#93AA9E', '#445853'],
        ['#384C68', '#50718D', '#8BA3A9', '#DAC1A4']])

    const inputFile = useRef();




    const handleChangeComplete = (color) => {
        setColors(color)
      };
   

    return (
        <>
            {/* <div className=""> */}
            <div className="d-flex justify-content-center" style={{width:'100%', marginTop:'10%'}}>
              
                <h6 style={{color:'#B1B2BC'}}>Select A Color Paleta</h6> 
                </div>
                    < div className="container mt-4 color-div">
                        {/* <div className="mr-2"> */}
                            
                                {console.log(colorArr)}
                                {colorArr.map(p =>
                            <div>
                                    <div className="row d-flex justify-content-center row-color  p-0" onClick={()=>handleChangeComplete(p)}>
                                        {p.map(item =>
                                            <div className="col col-color p-0"
                                                style={{
                                                    backgroundColor: item,
                                                    // paddingRight:"50px"
                                                    marginRight: '7px'
                                                }}
                                              
                                                // onClick={() => changeimageInvoice(p)}
                                            // onClick={() => changeBackgroundImg(p)}
                                            >
                                            </div>
                                        )}
                                    </div> 
                                   
                                    <div className="row d-flex align-items-center" style={{height:'1.5vh'}}>
                                                <hr className="hrColor"/>
                                        </div>
                                    </div>
                                    
                                )}
                                {/* <div class="button1"></div>

    <div class="button2">

    </div> */}

                            {/* </div> */}
                        {/* </div> */}
                    </div>


                
            {/* </div> */}
            <br></br>
            <br></br>
            

        </>);
}
export default Color1























