import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdEdit, MdDelete, MdContentCopy } from 'react-icons/md'
import { useState } from 'react';
import { useGlobalState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../redux/actions/All_actions'
import { useHistory } from 'react-router-dom';
import './businessCard.css';
import Tooltip from '@material-ui/core/Tooltip';
import ModeldeleteBuisness from '../BuisnessList/modalDeleteBuisness.js'


export default function Cards(props) {
  const { buisnessName, buisnessWebsite, buisnessEmail, buisnessId, buisnessImg, imageFlag } = props
  // console.log("imageFlag", imageFlag)

  let history = useHistory();

  console.log("buisnessImg", buisnessImg)
  const dispatch = useDispatch();
  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness);
  const business = useSelector(state => state.buisnessReducer.business);
  const currentBuisness = useSelector(state => state.buisnessReducer.currentBuisness);
  const showModalDelete = useSelector(state => state.messageReducer.showModalDelete);


  const inputFile1 = useRef();
  const [editable, setEditable] = useState(false)


  const edit = () => {
    history.push(`/${userName}/setting`)
    setEditable(!editable)
  }
  const remove = () => {
    debugger
    // dispatch(actions.setRemoveBuisnessById(buisnessId))
    dispatch(actions.setShowModalDelete(true));

  }

  const chooseBuisness = (value) => {
    if (currentBuisness._id != value) {
      dispatch(actions.setShow(true))
      dispatch(actions.setNameAction("You moved to another business"))
    }
    const buisnessChoose = allBuisnessToUser.find(x => x._id === value)
    dispatch(actions.getAllProduct(buisnessChoose._id))
    console.log("buisnessObj", buisnessChoose)
    dispatch(actions.setGetBusiness(buisnessChoose._id))
    dispatch(actions.setGeCurrenttBuisness(buisnessChoose))
  }

  const load = () => {
    inputFile1.current.click();
  }
  const addImageList = (event) => {
    if (event) {
      let reader = new FileReader();
      let imageToStor = { 'image': '', 'to': "" }
      reader.onloadend = () => {

        imageToStor = { 'image': event, 'to': 'buisnessImg' }
        dispatch(actions.setImage(imageToStor))
        console.log("imageee12kkkkkkkkkkkk", imageToStor)
      }
      reader.readAsDataURL(event)
    }
  }
  return (
    <>
      {showModalDelete && <ModeldeleteBuisness />}
      <div className="buisnessBackground d-flex justify-content-center "
        style={{ marginTop: '19%', height: "fit-content" }}>
        <div className="circleTop">
          <div className="after">
            <div className='circle'>
              <input type='file' id='file' ref={inputFile1} style={{ display: 'none' }}
                disabled={!editable}
                onChange={(e) => addImageList(e.target.files[0])}
              />
              <div className="imgLogoBusiness m-auto"
                className={imageFlag == 2 ?
                  'imgLogoBusiness m-auto' : 'defaultImgLogoBusiness m-auto'}
                style={imageFlag == 2 ? { height: "4vh", width: "10vh", backgroundImage: `url('${buisnessImg}')` } :
                  { height: "10vh", width: "10vh", borderRadius: '50% ', backgroundImage: `url('${buisnessImg}')` }}
                onClick={load}
              >
              </div>
            </div>
          </div>
        </div>
        <div
          className="businessCard text-center p-5"
          style={{
            borderBottom: '4px solid #8E73EC',
            boxShadow: '0px 3px 6px #00000029',
            borderRadius: '10px',
            width: '93%',
            height: '93%',
            cursor: "pointer",
            zIndex: "1",
            marginLeft: '2%'
          }}
          onClick={() => chooseBuisness(buisnessId)}
        >
          <div className="body" style={{ marginTop: '2rem' }}>
            <div className='my-4 rounded p-auto'
              style={{ border: editable === true ? '1px dashed lightgray' : 'none' }}>
              <input
                disabled={!editable}
                className=' p-2 font-weight-bold editable-business busnessh3'
                placeholder='Name of Business'
                value={buisnessName}
                style={{ color: "#917BDF !important" }}
              />
              {/* <input
                            disabled={!editable}
                            className='p-1 editable-business busnessh5'
                            placeholder='Website'
                            value={buisnessWebsite ? buisnessWebsite.split('/')[2] : ""}
                        /> */}
              <input
                disabled={!editable}
                className='p-1  editable-business busnessh5'
                placeholder='Email Business'
                value={buisnessEmail}
              />
            </div>
            <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Edit</p>} placement="bottom">
              <button
                className='btn btn-light m-auto'
                onClick={(e) => edit()}
              >
                <FontAwesomeIcon
                  className='m-auto editIcon'
                  size='1x'
                  icon={['fas', 'pen']}
                  style={{ color: 'gray' }}
                />
              </button>
            </Tooltip>
            <Tooltip title={<p style={{ height: ".4vh", fontSize: '10px' }}>Delete</p>} placement="bottom">
              <button
                className='btn btn-trash'
                onClick={(e) => remove()}
              >
                <FontAwesomeIcon
                  className='m-auto'
                  size='1x'
                  icon={['fas', 'trash']}
                  style={{ color: 'gray' }}
                />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}