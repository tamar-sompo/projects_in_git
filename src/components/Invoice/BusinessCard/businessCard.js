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


export default function BusinessCard(props) {
  let history = useHistory();

  const { buisnessName, buisnessWebsite, buisnessNumber, buisnessId, buisnessImg } = props
  console.log("buisnessImg", buisnessImg)
  const dispatch = useDispatch();
  const userName = useSelector(state => state.publicReducer.userName);
  const allBuisnessToUser = useSelector(state => state.buisnessReducer.allBuisness);
  const business = useSelector(state => state.buisnessReducer.business);
  const updateBusiness = useSelector(state => state.buisnessReducer.updateBusiness);
  console.log("updateBusiness", updateBusiness)
  const updatedetailsBusiness = (fieldToUpdate) => dispatch(actions.setUpdateBusiness(fieldToUpdate))
  const updateWebsite = (fieldToUpdate) => dispatch(actions.setUpdateBusinessWebsite(fieldToUpdate))
  const updateDetailss = (value) => dispatch(actions.setUpdateBusinessCard(value))
  const inputFile1 = useRef();
  const [editable, setEditable] = useState(false)

  const [name, setName] = useState(buisnessName)
  const [website, setWebsite] = useState(buisnessWebsite)
  const [number, setNumber] = useState(buisnessNumber)
  const [image, setImage] = useState(buisnessImg)
  const [id, setId] = useState(buisnessId)

  const updatedetailsBusiness1 = (fieldName) => (e) => {
    const value = e.target.value;
    updatedetailsBusiness({ key: fieldName, value: value })
  }
  const updatedeWebsite1 = (fieldName) => (e) => {
    const value = e.target.value;
    updateWebsite({ key: fieldName, value: value })
  }
  const edit = () => {
    history.push(`/${userName}/setting`)

    setEditable(!editable)
    // updatedetailsBusiness({ key: 'id', value: buisnessId })
  }
  const save = () => {
    updateDetailss(buisnessId)
    // const currentBuisness = allBuisnessToUser.find(x => x._id === buisnessId)
    // updateDetailss(currentBuisness)
    setEditable(!editable)
  }
  const remove = () => {

    updatedetailsBusiness({ key: 'id', value: buisnessId })
    dispatch(actions.setRemoveBuisnessById(buisnessId))
  }

  const chooseBuisness = (value) => {
    const buisnessChoose = allBuisnessToUser.find(x => x._id === value)
    dispatch(actions.getAllProduct(buisnessChoose._id))
    console.log("buisnessObj", buisnessChoose)
    console.log("buisnessssssssssss", buisnessChoose)
    dispatch(actions.setGetBusiness(buisnessChoose._id))
    console.log("dispatch1")
    dispatch(actions.setGeCurrenttBuisness(buisnessChoose))
    console.log("dispatch2")
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
    <Card
      className="businessCard text-center p-5"
      style={{
        borderBottom: '4px solid #8E73EC',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '10px',
        // borderStyle: 'none',
        width: '93%',
        // margin: '0px 30px 30px 0px',
        // margin:'auto'
      }}
      onClick={() => chooseBuisness(buisnessId)}
    >
      <Card.Body >
        <Card.Title className='circle p-auto'>
          <input type='file' id='file' ref={inputFile1} style={{ display: 'none' }}
            disabled={!editable}
            onChange={(e) => addImageList(e.target.files[0])
            }
          // onChange={(e) =>  setImage(e.target.value)}
          />
          <div className='imgLogoBusiness m-auto' style={{
            height: "21px",
            backgroundImage: `url('${buisnessId === updateBusiness.id ?
              updateBusiness.imgLogo ?
                updateBusiness.imgLogo : image : image
              }')`
          }}
            onClick={load}
          >
            {/* {buisnessImg} */}
          </div>

        </Card.Title>
        <Card.Text className='my-4 rounded p-auto'
          style={{ border: editable === true ? '1px dashed lightgray' : 'none' }}>

          {/* <input type='file' id='file' ref={inputFile1} style={{ display: 'none' }}
            onChange={(e) => addImageList(e.target.files[0])} /> */}
          <input
            disabled={!editable}
            className=' p-2 font-weight-bold editable-business busnessh3'
            placeholder='Name of Business'
            onBlur={updatedetailsBusiness1('name')}
            onChange={(e) => setName(e.target.value)}
            value={buisnessId === updateBusiness.id ?
              updateBusiness.name ?
                updateBusiness.name : name : name}
          />
          <input
            disabled={!editable}
            className='p-1 editable-business busnessh5'
            placeholder='Website'
            onBlur={updatedeWebsite1('website')}
            onChange={(e) => setWebsite(e.target.value)}
            value={buisnessId === updateBusiness.id ?
              updateBusiness.socialmedias.website ?
                updateBusiness.socialmedias.website : website : website}
          />
          <input
            disabled={!editable}
            className='p-1  editable-business busnessh5'
            placeholder='Number Business'
            onBlur={updatedetailsBusiness1('numberDeals')}
            onChange={(e) => setNumber(e.target.value)}
            value={buisnessId === updateBusiness.id ?
              updateBusiness.numberDeals ?
                updateBusiness.numberDeals : number : number}
          />
        </Card.Text>
        {!editable ?
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
          </Tooltip> :
          <button
            className='m-auto editIcon'
            onClick={(e) => save()}
          >save</button>}
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
      </Card.Body>
    </Card>
  )
}