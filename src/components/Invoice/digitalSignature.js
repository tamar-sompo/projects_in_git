import React, { Component } from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles'
// import '../Components/stepper2.css';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from '../../redux/actions/All_actions'

import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'
import SignaturePad from 'react-signature-canvas'



const useStyles = (theme) => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden !important',
        '& .PrivateValueLabel-circle': {
            display: 'none'
        },
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        }
    },
});



class DigitalSignature extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    useStyle = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
    }));



    sigPad = {}
    clear = () => {
        this.sigPad.clear()
    }
    dataURLtoFile = (dataurl, filename) => {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }
    trim = () => {
        // this.props.changeTrimmedDataURL(this.sigPad.getTrimmedCanvas().toDataURL('image/png'))

        // reader.readAsDataURL(this.sigPad.getTrimmedCanvas().toDataURL('image/png'))
        let d = this.dataURLtoFile(this.sigPad.getTrimmedCanvas().toDataURL('image/png'), `signature.jpg`)
        this.props.onChangeHandlerProfileDigitalSignature(d);


        // this.props.changeTrimmedDataURL(this.sigPad.getTrimmedCanvas().toDataURL('image/png'))

    }
    render() {
        return (
            <> <br /><br />
                <div className="container">
                    {/* <div className="sigContainer"> */}
                        <SignaturePad canvasProps={{ className: "sigPad", id: "sigPad2" }}
                            ref={(ref) => { this.sigPad = ref }}
                            onChange={this.trim} />
                    {/* </div> */}
                    <div
                    style={{visibility: this.props.displayInvoice === "true" ? "hidden" : "visible"}}>
                  signature  _______________
                    <div></div>
                        <button 
                        style={{visibility: this.props.displayInvoice === "true" ? "hidden" : "visible"}}
                        className="buttons" onClick={this.clear}>
                            X
                        </button>
                        <button 
                        style={{visibility: this.props.displayInvoice === "true" ? "hidden" : "visible"}}
                        className="buttons" onClick={this.trim}>
                            v
                        </button>
                    </div>
                    {/* {this.props.quote.trimmedDataURL
                        ? <img
                            style={{ width: "50px", height: "50px" }}
                            src={this.props.quote.trimmedDataURL} />
                        : null} */}


                </div>
            </>

        )
    }


}

const mapStateToProps = (state) => {
    return {
        invoice: state.invoiceReducer.invoice,
        displayInvoice :state.invoiceReducer.dislayInvoice
    };
}

const mapDispatchToProps = (dispatch) => ({
    // changeTrimmedDataURL: (e) => dispatch(actions.setTrimmedDataURL(e)),
    onChangeHandlerProfileDigitalSignature: (image) => dispatch({ type: 'SET_SIGNATURE_TO_SERVER', payload: image }),
    // onChangeHandlerProfileDigitalSignature: (image) => dispatch(actions.setSignatureToServer(image)),
    
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(DigitalSignature));
