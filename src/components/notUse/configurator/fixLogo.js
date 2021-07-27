import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import './config.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { actions } from '../../../redux/actions/All_actions'
import { useDispatch, useSelector } from 'react-redux';
import './listPicture.css'
import { FiUpload } from "react-icons/fi";
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
// import tempLogo from '../../assets/newLogo.png';
import flowersLogo from '../../../Img/flowersLogo.png';

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
    const dispatch = useDispatch();
    const changeComponent = (component1) => dispatch(actions.setComponentConfigurator(component1))
    const componentConfigurator = useSelector(state => state.companyReducer.componentConfigurator)
    const setImage = (objectImage) => dispatch(actions.setImage(objectImage))
    const logoDesign = useSelector(state => state.LogoReducer.logoDesign)
    const changeLogoWidth = (image) => dispatch(actions.setLogoWidth(image))
    const changeLogoselectRdiuseView = (image) => dispatch(actions.setLogoBorderRadiusLogo(image))
    const invoice = useSelector(state => state.invoiceReducer.invoice);
    const inputFile = useRef();
    const classes = useStyles();

    const addImageList1 = (event) => {

        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                const imageToStor = { 'image': event, 'to': 'logo' }
                dispatch(actions.setImage(imageToStor))
                "imageee", reader.result)
            }
            reader.readAsDataURL(event)
        }
    }


    const onButtonClick = () => {
        inputFile.current.click();
    };

    const onChangeHandlerLogo = (event) => {
        "event", event)
        if (event) {
            let reader = new FileReader();
            reader.onloadend = () => {
                const imageToStor = { 'image': event, 'to': 'logo' }
                setImage(event)
            }
            reader.readAsDataURL(event)
            "logoooo", logoDesign.logo)
        }
    }
    return (
        <>
            <div className="mt-4 test_info_config">
                <div>
                    <div className="uploaddivLogo uploaddiv d-flex justify-content-between">
                        <img className="logoC"
                            id="imageshow"
                            alt=""
                            src={invoice.imgLogo ? invoice.imgLogo : flowersLogo} />
                        <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                            onChange={(e) => addImageList1(e.target.files[0])} />
                        <button onClick={onButtonClick} className="bUp" style={{ backgroundColor: "transparent" }}>
                            <div className="d flex justify-content-center align-items-end" style={{ width: '20%', height: '100%' }}>
                                <FiUpload id="icon" />
                            </div>
                        </button>
                    </div>
                </div>
                <h6 className="mb-1" style={{ color: '#B1B2BC', marginTop: "20%" }} >Border Radius</h6>
                <div>
                    <Slider
                        defaultValue={logoDesign.logoBorderRadiusLogo}
                        min={38}
                        max={400}
                        getAriaValueText={changeLogoselectRdiuseView}
                        className={classes.MuiSlider_root}
                    />
                </div>


                <h6 className="mb-1" style={{ color: '#B1B2BC', marginTop: "-4%" }}>Logo Size</h6>

                <Slider
                    defaultValue={logoDesign.logoWidth ? logoDesign.logoWidth : '0'}
                    min={38}
                    max={400}
                    getAriaValueText={changeLogoWidth}
                    className={classes.MuiSlider_root}
                />

            </div>

        </>);
}
export default FixLogo






















