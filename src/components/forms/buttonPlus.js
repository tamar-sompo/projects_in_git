import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'bootstrap';

import { useDispatch, useSelector } from 'react-redux';

// import ContactForm from './cotactForm'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { actions } from '../../redux/actions/All_actions';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  icon: {
    backgroundColor: '#8E73EC'
  },
  button: {
    "&:focus": {
      backgroundColor: 'transparent',
      borderStyle: 'inset',
      boxShadow: 'none',
      outline: 'none',
    }
  }
}));

function ButtonPlus(props) {
  const dispatch = useDispatch();
  const allproduct = useSelector(state => state.productReducer.allProducts);
  const setDisplayInvoice = (status) => dispatch(actions.setDislayInvoice(status));

  let history = useHistory();
  const classes = useStyles();
  const [flag, setFlag] = useState()

  const userName = useSelector(state => state.publicReducer.userName);
  const changeFlag = (value) => {
    allproduct.length > 0 && allproduct.map((x) => {
      dispatch(actions.setProductSelect(x))
    })
    setDisplayInvoice("false")
    setFlag(value)
    dispatch(actions.setInvoiceSave(null))
  }

  return (
    <>
      <button onClick={() => changeFlag(true)}
        className="newProd11">New Invoice +</button>
      {
        history.location.pathname == `/${userName}/allDocuments` && dispatch(actions.setFlagPush(true)) && dispatch(actions.setFlagPush1(true)) && flag === true && dispatch(actions.setResetSaveSum(0)) && dispatch(actions.setFlagIfEmpty(false))
        && dispatch(actions.setResetAllNewProduct()) && dispatch(actions.setInvoiceShow({})) && dispatch(actions.setFlagMessage(false)) &&
        dispatch(actions.setProductAfterDelete([])) && dispatch(actions.setDetailsContact({})) && dispatch(actions.setResetContactedit({})) && dispatch(actions.setInvoice({
          products: [],
        })) &&
        history.push(`/${userName}/invoice`)
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    currentComponent: state.productReducer.currentComponent
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentComponent: (component) => dispatch(actions.setCurrentComponent(component))
  // setImgProduct:(img)=>dispatch(actions.setSignatureToServerP(img))
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonPlus)