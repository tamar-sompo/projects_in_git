import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
// import './config.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actions } from '../../redux/actions/All_actions'
import { useDispatch, useSelector } from 'react-redux';
// import './listPicture.css'
import { FiUpload } from "react-icons/fi";
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
// import tempLogo from '../../assets/newLogo.png';
// import flowersLogo from '../../../Img/flowersLogo.png';

const useStyles = makeStyles((theme) => ({
    MuiSlider_root: {
        color: '#B1B2BC',
        width: '95%',
        cursor: 'pointer',
        height: '2px',
        display: 'inline_block',
        padding: '13px 0',
        position: 'relative',
        box_sizing: 'content_box',
        touch_action: 'none',
        marginLeft: '5px',
        _webkit_tap_highlight_color: 'transparent'
    },
    inputNumberSlider:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'center',
        font: 'Light 50px/50px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },
}))

function FixLogo(props) {
const [isUploadImage, setisUploadImage] = useState(false);
console.log("upload", isUploadImage)


    const dispatch = useDispatch();
    const changeComponent = (component1) => dispatch(actions.setComponentConfigurator(component1))
    const componentConfigurator = useSelector(state => state.companyReducer.componentConfigurator)
    const setImage = (objectImage) => dispatch(actions.setImage(objectImage))
    const logoDesign = useSelector(state => state.LogoReducer.logoDesign)
    const changeLogoWidth = (image) => dispatch(actions.setLogoWidth(image))
    const changeLogoselectRdiuseView = (image) => dispatch(actions.setLogoBorderRadiusLogo(image))
    const inputFile = useRef();
    const classes = useStyles();

    const addImageList = (event) => {

        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                const imageToStor = { 'image': event, 'to': 'logo' }
                dispatch(actions.setImage(imageToStor))
                console.log("imageee", reader.result)
            }
            reader.readAsDataURL(event)
        }
    }

    const onButtonClick = () => {
        inputFile.current.click();
        setisUploadImage(true)
    };

    const onChangeHandlerLogo = (event) => {
        console.log("event", event)
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                const imageToStor = { 'image': event, 'to': 'logo' }
                setImage(event)
            }
            reader.readAsDataURL(event)
            console.log("logoooo", logoDesign.logo)
        }
    }
    return (
        <>
            <div className="mt-4 test_info_config">
                <div>
                    {/* <div className="uploaddivLogo uploaddiv d-flex justify-content-between"> */}
                    {/* {isUploadImage===true? */}
                        <img className="logoC"
                            id="imageshow"
                            alt=""
                            onClick={onButtonClick}
                            src={logoDesign.logo ? logoDesign.logo : <button  className="rounded" onChange={(e) => addImageList(e.target.files[0])}>
             <FiUpload id="icon" size={30} style={{ color: "#8E73EC29" }} /> 
                  </button>    
                             } />
                         <input name='buisnessLogo' style={{ display: 'none' }}
                            type="file"
                            className="i_topic d flex justify-content-center align-items-center"
                            ref={inputFile}
                            onChange={(e) => addImageList(e.target.files[0])}></input>  
             {/* <button onClick={onButtonClick} className="rounded"> */}
             {/* <FiUpload id="icon" size={30} style={{ color: "#8E73EC29" }} /> */}
                 {/* </button>    */}
                    {/* </div> */}
                </div>

                </div>

        </>);
}
export default FixLogo






















