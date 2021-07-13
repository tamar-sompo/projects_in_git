
import React, { useState, useEffect } from 'react';

import './email.css'

import makeAnimated from 'react-select/animated';
// import { colourOptions } from '../data';
import { defaultTheme } from 'react-select';
// import { stateOptions } from '../data';
import CreatableSelect from 'react-select/creatable';
import { actions } from '../../redux/actions/All_actions';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';





// import '../Components/style.css';
// import '../Components/viewNewOnePage.css';
// import validator from 'validator';

const { colors } = defaultTheme;

const animatedComponents = makeAnimated();

function MultiSelectInput(props) {
    const dispatch = useDispatch();
    const history = useHistory();


    const [isOpen, setIsOpen] = useState();
    const [flag, setFlag] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [valus, setValue] = useState(null);
    const [errorMessage, setErrorMessage] = useState(false);
    const detailsInvoice = useSelector(state => state.invoiceReducer.invoiceDetailsView);
    const invoice = useSelector(state => state.invoiceReducer.invoice);

    const userName = useSelector(state => state.publicReducer.userName);
    const allcontacts = useSelector(state => state.customerReducer.allContact);
    const successSendEmail = useSelector(state => state.exportInvoiceReducer.successSendEmail);
    const emailDetails = useSelector(state => state.exportInvoiceReducer.emailDetails);
    const updateEmailField = (fieldToUpdate) => dispatch(actions.setEmailDetails(fieldToUpdate))

    useEffect(() => {
        if (history.location.pathname == `/${userName}/invoice`)
            updateEmailField({ key: "to", value: invoice.contactOneTime.email })

        if (window.location.href.indexOf('invoice/edit'))
            updateEmailField({ key: "to", value: detailsInvoice.contactOneTime.email })

    }, [])


    const fieldChanged = (e, fieldName) => {
        if (fieldName == 'to') {
            if (!e.target.value) {
                setErrorMessage('#no email address')
            }
            else {
                setErrorMessage('');
            }
        }
        console.log("fieldMail")
        const value = e.target.value;
        console.log("valueMail", value)
        updateEmailField({ key: fieldName, value: value })
    }


    useEffect(() => {
        props.getAllContact()

        setFlag(true)
    }, [selectedValue]);

    const orderOptions = values => {
        return values.filter(v => v.isFixed).concat(values.filter(v => !v.isFixed));
    };
    const onChange = (value, { action, removedValue }) => {
        switch (action) {
            case 'remove-value':
            case 'pop-value':
                if (removedValue.isFixed) {
                    return;
                }
                break;
            case 'clear':
                value = options.filter(v => v.isFixed);
                break;
        }
        // let len = value.length;
        // if (len > 0 && !validator.isEmail(value[len - 1].value)) {
        //     value.splice(len - 1, 1)
        // }
        value = orderOptions(value);
        setValue(value)
    }





    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            // border: "1px dotted black",
            color: 'black',
            opacity: 0.8,
            // padding: 20,
        }),
        control: (provided) => ({
            ...provided,
            width: '95',
            background: "#F6F6FA",

        }),
        singleValue: (provided, state) => ({
            ...provided,
            color: 'black',

        })
    }

    async function sendAndClose() {
        if (valus) {
            await valus.map((item, i) => {
                props.changeEmailsToSendTemp({ index: i, value: item.value })
            })
            props.changeEmailsToSendIndexTemp(valus.length);
            let r = props.quote.emailsToSendIndexServer + valus.length;
            props.changeEmailsToSendIndexServer(r);
            await props.sendEmail(props.paperName);
            setValue(null);
        }

        props.changeExportYN("papers")
    }
    const { options } = props;
    console.log("777777valus" + valus);

    const validatorEmail = (v) => {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
    }

    const toMailServer = () => {
        if (emailDetails.to) {
            if (validatorEmail(emailDetails.to)) {
                console.log("toMailServer")
                dispatch(actions.setSendLinkToEmail())
                console.log("123")
                // dispatch(actions.setSuccessSendEmail("true"))
                console.log("123")
                setErrorMessage('')
                console.log("123")
            }
            else {
                setErrorMessage('#invalid email');
            }
        }
        else {
            setErrorMessage('#no email address');
        }
        dispatch(actions.setShow(true))
        dispatch(actions.setNameAction("The Email Send Success!"))
        setTimeout(() => {
            dispatch(actions.setsendMessage("false"))
            dispatch(actions.setSuccessSendEmail("false"))
            dispatch(actions.setInvoiceSave(null))
            console.log("successSendEmail", successSendEmail)
        }, 3000)
    }
    return (
        <>
            <div style={{ marginTop: "2vh" }}>
                <div className="d-flex justify-content-end tag-remove mr-3 pointer"
                    onClick={() => { dispatch(actions.setsendMessage("false")) }}>x</div>
                <div style={{ height: "6vh" }} >
                </div>
                {/* <div className="tag-remove"></div> */}
                <h4 className="d-flex justify-content-center emailFormTitle" style={{ textAlign: "center" }}
                > Send an link to your customer </h4>
                <hr className="d-flex justify-content-center"></hr>

                <input className="d-flex justify-content-center subjectAndBodyEmail"
                    onFocus={(e) => e.currentTarget.placeholder = ''}
                    onChange={(e) => fieldChanged(e, 'to')}
                    placeholder="To"
                /><div className="ml-5 errorMassage">{errorMessage}</div>
                <input className="d-flex justify-content-center subjectAndBodyEmail"
                    onFocus={(e) => e.currentTarget.placeholder = ''}
                    onChange={(e) => fieldChanged(e, 'subject')}
                    placeholder="Subject" />
                {/* <input  */}
                <TextareaAutosize
                    className="d-flex justify-content-center subjectAndBodyEmail bodyEmail"
                    onFocus={(e) => e.currentTarget.placeholder = ''}
                    onChange={(e) => fieldChanged(e, 'html')}
                    placeholder={"The Body Of The Message"}
                ></TextareaAutosize>
                {/* /> */}
                <div style={{ height: "20vh" }}></div>
                <div className="d-flex justify-content-center" >
                    <button onClick={() => toMailServer()}
                        style={{
                            backgroundColor: "#8E73EC",
                            borderRadius: "2px",
                            width: "7rem",
                            height: "4vh",
                            color: "white",
                            fontSize: "11px"
                        }}>send
                    </button>
                    {/* <FontAwesomeIcon
                        size="2x"
                        icon={['fas', 'paper-plane']}
                        style={{ color: "#917BDF" }}
                    /> */}
                </div>
                {/* {successSendEmail == "true" &&
                    <h2 className="d-flex justify-content-center">Send!</h2>} */}
                {/* {successSendEmail == "true" &&
                    setTimeout(() => {
                        dispatch(actions.setsendMessage("false"))
                        dispatch(actions.setSuccessSendEmail("false"))
                        dispatch(actions.setInvoiceSave(null))
                    }, 3000)
                } */}
            </div>
        </>
    );
}
export default connect(
    (state) => {
        return {
        }
    },
    (dispatch) => {
        return {
            setCurrentField: (e) => dispatch(actions.setCurrentField(e)),
            setCurrentField2: (e) => dispatch(actions.setCurrentField2(e)),
            getAllContact: (e) => dispatch({ type: "GETALL_CONTACT" }),
            changeEmailsToSendTemp: (e) => dispatch(actions.setEmailsToSendTemp(e)),
            changeEmailsToSendIndexTemp: (e) => dispatch(actions.setEmailsToSendIndexTemp(e)),
            changeEmailsToSendIndexServer: (e) => dispatch(actions.setEmailsToSendIndexServer(e)),
            sendEmail: (a) => dispatch({ type: 'SEND_EMAIL', payload: a }),
            deleteEmailsToSendTemp: (e) => dispatch(actions.deleteEmailsToSendTemp(e)),
            changeExportYN: (e) => dispatch(actions.setExportYN(e)),

            setBodyMail: (e) => dispatch(actions.setBodyMail(e)),
            setSubjectMail: (e) => dispatch(actions.setSubjectMail(e)),




        }
    })(MultiSelectInput)

const Menu = props => {
    const shadow = 'hsla(218, 50%, 10%, 0.1)';
    return (
        <div
            css={{
                backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
                marginTop: 8,
                position: 'absolute',
                zIndex: 2,

            }}
            {...props}
        />
    );
};
const Blanket = props => (
    <div
        css={{
            bottom: 0,
            left: 0,
            top: 0,
            right: 0,
            position: 'fixed',
            zIndex: 1,
        }}
        {...props}
    />
);
const Dropdown = ({ children, isOpen, target, onClose }) => (
    <div css={{ position: 'relative' }}>
        {target}
        {isOpen ? <Menu>{children}</Menu> : null}
        {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
);
const Svg = p => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        {...p}
    />
);
const DropdownIndicator = () => (
    <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
        <Svg>
            <path
                d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </Svg>
    </div>
);
const ChevronDown = () => (
    <Svg style={{ marginRight: -6 }}>
        <path
            d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </Svg>
);