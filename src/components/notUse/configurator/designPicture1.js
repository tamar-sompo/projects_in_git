import React,{useState, useRef } from 'react';
import { connect } from 'react-redux';
import './config.css'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {actions} from '../../../redux/actions/All_actions'
 import { useDispatch, useSelector } from 'react-redux';
 import './listPicture.css'
 import { FiUpload } from "react-icons/fi";



function DesignPicture1(props){
    const dispatch = useDispatch();
    const changeComponent = (component1) => dispatch(actions.setComponentConfigurator(component1))
    const componentConfigurator = useSelector(state => state.companyReducer.componentConfigurator)
    const itemData=useSelector(state=>state.designReducer.itemData)

    // const   changeimageInvoice=(image)=>dispatch(actions.setImageInvoice(image))
    const  changeimageInvoice=(image)=>dispatch(actions.setUpdateInvoiceFields({key:'imageFrame',value:image}))
    // dispatch(actions.setUpdateInvoiceFields({key:'imageFrame',value:response.data.url}))
    const changeLogoWidth =(image) => dispatch(actions.setLogoWidth(image))
    const setImage=(objectImage)=>dispatch(actions.setImage(objectImage))

     const inputFile = useRef();
     const  [indexList, setIndexList]=useState("index" + 1) 

    const addImageList=(event)=> {
     
                if (event) {
                    let reader = new FileReader();
                     
                    reader.onloadend = () => {
                    const imageToStor ={'image':event, 'to':'design'}
                    setImage(imageToStor)
                    console.log("imageee",reader.result)
                    console.log("imageee111111",itemData)
            }
            reader.readAsDataURL(event)
        }
                    }

          const onButtonClick = () => {
        // `current` points to the mounted file input element
       inputFile.current.click();
      };

  return (
<>

<div className="mt-4 test_info_config">
                            <div className="uploaddiv mb-5">  
                             <input type='file' id='file' ref={inputFile} style={{display: 'none'}}
                                                 onChange={(e) => addImageList(e.target.files[0])}/>
                                                 <button onClick={onButtonClick} className="bUp" style={{backgroundColor:"transparent"}}>
                                <FiUpload id="icon" />
                                </button>
                            </div> 
                            {
                                < div className="container imgs-div">
                                    <div className="con-img mr-2">
                                        <div className="row">
                                            {console.log(itemData)}
                                            {itemData.map(p =>
                                                <div className=" col-md-5 col-sm-10 mr-2 mb-2"
                                                    style={{
                                                        
                                                        backgroundImage:`url('${p}')` 
                                                    }}
                                                    onClick={()=>changeimageInvoice(p)}
                                                    // onClick={() => changeBackgroundImg(p)}
                                                >
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>


                            }
                        </div>
                        <br></br>
            
 </>); 
 }  
export default DesignPicture1