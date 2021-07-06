// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Box from '@material-ui/core/Box';
// import FormFile from 'react-bootstrap/FormFile'
// import Form from 'react-bootstrap/Form'
// import { withStyles } from '@material-ui/core/styles';
// import './config.css'

// function DesignPicture(props)

// {
//   return (
// <>

//     <input type="file" class="form-control up" title="&nbsp;" value=""></input>

// </>
// );}

// export default DesignPicture




// import React, { useState } from 'react';

import './config.css'
// export function LogoInvoice(props){

//   return (
// <>
// <div>logo</div>
//  </>);}





import React, { Component } from 'react'
import '../../../App.css';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
// import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
// import ImageList from '@material-ui/core/ImageList';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import { actions } from '../../../redux/actions/All_actions';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListPicture from './listPicture';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



// import tempLogo from '../../assets/newLogo.png';

import clsx from 'clsx';
// import src from '*.jpg';
const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        // overflow: 'hidden',
        // '&::-webkit-scrollbar': {
        //     display: 'none'
        // }
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);



const useStyles = (theme) => ({
    root: {
        overflowX: 'hidden !important',
        flexGrow: 1,
        '& .PrivateValueLabel-circle': {
            display: 'none'
        },
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        }
    },

    Logo_root_37: {
        background_color: '#4d5358'
    },
    MuiSlider_root: {
        color: '#fafafa',
        width: '92%',
        cursor: 'pointer',
        height: '2px',
        display: 'inline_block',
        padding: '13px 0',
        position: 'relative',
        box_sizing: 'content_box',
        touch_action: 'none',
        _webkit_tap_highlight_color: 'transparent'
    },
    textField: {
        width: 200,
        textAlign: 'left',
        color: '#787880',
        opacity: 1,
        // overflow: 'hidden'
    },

    checkbox: {
        borderColor: '#5E81F4'
    },
    p_Publiceveryonecansee: {
        top: 0,
        left: -70,
        height: 10,
        font: 'Bold 14px/19px Roboto',
        color: '#1C1D21',
        opacity: 1,
    },
    p_editby: {
        top: 60,
        left: -100,
        textAlign: 'left',
        font: 'Regular 14px/21px Roboto',
        letterSpacing: ' 0.2px',
        color: ' #787880',
        opacity: 1
    },
    i_text_description: {
        top: 252,
        left: 1276,
        width: 292,
        height: 94,
        textAlign: 'left',
        letterSpacing: 0,
        opacity: 1
    },
    icon_upload: {
        fontSize: 100,
        textAlign: 'left',
    },
    icon_clander: {
        textAlign: 'left'
    },
    list1: {
        fontSize: 'smaller',
        paddingTop: 1
    },
    drawer: {
        backgroundColor: '#3A405E'
    },

    RoundedUp: {
        borderRadius: ' 50px 0px 0px 0px '
    },
    fieldTextStyle: {
        textAlign: 'left',
        font: 'Light 40px/40px Roboto',
        letterSpacing: '.1px',
        color: '#cfd1d9!important',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
        borderBottom: '1px solid #75798e',
        opacity: 1,
    },
    textcontect: {
        color: 'white',
        margin: '1%'
    },
    toolbar: {
        paddingRight: '0px',
    },
    multilineColor: {
        color: 'white'
    },
    form: {
        margin: 'auto'
    },
    button: {
        color: 'white',
        margintTop: '60%',
        borderRadius: '290px'
    },
    textarea: {
        backgroundColor: '#3A405E'
    },

    div: {
        textAlign: 'center',
        backgroundColor: 'lightslategrey',
        width: 124,
        height: 104
    },
    iconVideUp:
    {
        fontSize: 50,
        textAlign: 'center',
    },
    hue_horizontal:
    {
        padding: '0px 2px',
        position: 'relative',
        height: '100%',
        border_radius: ' 2px',
        width: '60%'
    },
    iconVideUp1:
    {
        fontSize: 50,
        textAlign: 'center',
    },

    inputNumber:
    {
        width: '30px',
        display: 'inline_block',
        textAlign: 'left',
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
    row: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200,
    },
    row1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200
    },
    createNewPage: {
        paddingRight: '5%',
        paddingLeft: '5%',
        position: 'sticky',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 6 + 'vh',
        top: 0
    },
    logoDetails: {
        color: '#b6b6c9',
        fontSize: '13px',
        paddingLeft: '8%',
        marginTop: '10px'
    },
    buttonUpload: {
        top: 5 + '%',
        left: -47 + 'px',
        width: 200 + '%',
        height: 35 + 'px',
        border: 2 + 'px solid #FFFFFF',
        opacity: 1,
        // width:220+'px',
        // height: 35 + 'px',
        backgroundColor: 'transparent',
        borderRadius: 2 + 'px'
        // opacity:0,
        // border:2+'px solid black'
    }
});


class DesignPicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgcolrPNG: '#fffff',
            checkedSwitch: false,
            IsCollapse: false,
            logoYN: true,
            indexList: "index" + 1
        }
        this.inputFile = React.createRef();
    }
    handleChangeSwitch = () => {
        this.setState({ logoYN: !this.state.logoYN })
            ;
        this.props.changeLogoYOrN()
    }
    IsOpenCollapse = () => {
        this.setState({
            IsCollapse: !this.state.IsCollapse
        })
    }

    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));
    handleChangeComplete = (color) => {
        this.setState({ bgcolrPNG: color.hex });
    };
    changeLogoselectRdiuseView = (e) => {
        this.props.changeLogoselectRdiuseView(e)
    }
    addImageList(event) {

        if (event) {
            let reader = new FileReader();
            const image = { img: null, title: "" };
            reader.onloadend = () => {
                // this.props.changeLogo(reader)
                // image=reader.result .name.match(/\.(jpg|jpeg|png|gif)$/)
                // image=
                image.img = event;
                image.title = this.state.indexList
                this.setState({
                    indexList: this.state.indexList + 1
                })

                const imageToStor = { 'image': image, 'to': 'design' }
                this.props.setImage(imageToStor)
                // this.props.addImage(image)
                console.log("imageee", reader.result)
                console.log("imageee111111", this.props.list)
                // this.props.saveLogoToFiles(event)
            }
            reader.readAsDataURL(event)
        }

    }
    onButtonClick = () => {
        // `current` points to the mounted file input element
        this.inputFile.current.click();
    };

    render() {
        const { classes } = this.props
        // const inputFile = React.useRef(null)
        const defaultProps3 = {
            color: 'white'

        }
        return (
            <>

                <div className="mt-4 test_info_config">
                    {/* <div className="pref mb-4">
                                <p>Image</p>
                                <AiOutlineReload id="icon" className="mt-1" onClick={() => backBackgroundImg()} />
                            </div>
                            <div className="uploaddiv mb-5">
                                <FiUpload id="icon" />
                            </div> */}
                    {
                        < div className="container imgs-div">
                            <div className="con-img mr-2">
                                <div className="row">
                                    {console.log(props.itemData)}
                                    {props.itemData.map(p =>
                                        <div className=" col-md-5 col-sm-10 mr-2 mb-2"
                                            style={{
                                                backgroundImage: url(`${p.img}`)
                                            }}
                                        // onClick={() => changeBackgroundImg(p)}
                                        >
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>


                    }
                </div>


                {/* <div className="d-flex justify-content-center" className={classes.root} >
                    <FormControl className="d-flex justify-content-center" component="fieldset" className={clsx(classes.textField, 'con', 'vertical-center')} style={{ height: 40 + "vh", width: 14 + "vw", backgroundColor:'transparent'}} >
                        <FormGroup className="d-flex justify-content-center" className={classes.textField} >
                            <div hidden={this.state.IsCollapse} style={{ width: 94 + "%", marginRight: 3 + "%", marginLeft: 7 + "%", margintTop: 20 + "vh" }} >
                                <Grid
                                    container
                                    direction="column"
                                    justify="space-between"
                                    className="d-flex justify-content-center"
                                    style={{width:14+'vw'}}
                                >
                                    <Box
                                        alignSelf="center" style={{width:30+"%"}}>
                                        <div>
                                            <div className="image-upload">
                                                <input type='file' id='file' ref={this.inputFile} style={{ display: 'none' }}
                                                    onChange={(e) => this.addImageList(e.target.files[0].file)} />
                                                <button onClick={this.onButtonClick} className={classes.buttonUpload}>
                                                    <FontAwesomeIcon
                                                        className='iconBtnConfig pr-2 pt-1'
                                                        size='2x'
                                                        icon={['fas', 'upload']}
                                                    >
                                                    </FontAwesomeIcon>
                                                </button>
                                            </div>
                                            <div id='lbError' className='warning'
                                                style={{
                                                    position: 'relative',
                                                    color: 'red',
                                                    top: '-43px',
                                                    right: '7x',
                                                    left: '109px'
                                                }}
                                            >
                                            </div>
                                        </div>
                                    </Box>
                                    <br></br>
                                    <br></br>
                                    <Box className="d-flex justify-content-center" flexDirection="row"
                                        display="flex"
                                        justifyContent="space-between">
                                        <Box
                                            width={'100%'}
                                            alignSelf="center">
                                        </Box>
                                        <ListPicture></ListPicture>
                                    </Box>

                                </Grid>
                            </div>
                        </FormGroup>
                    </FormControl>
                            {console.log("listtt",this.props.list)} */}
                {/* </div> */}
            </>
        )
    }

}




const mapStateToProps = (state) => {
    return {
        logoDesign: state.LogoReducer.logoDesign,
        imageInvoice: state.designReducer.imageInvoice,
        list: state.designReducer.itemData,
        itemData: state.designReducer.itemData,
    };
}
const mapDispatchToProps = (dispatch) => ({

    changeimageInvoice: (image) => dispatch(actions.setImageInvoice(image)),
    setImage: (objectImage) => dispatch(actions.setImageD(objectImage))
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(DesignPicture));









