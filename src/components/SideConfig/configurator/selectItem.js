import zIndex from '@material-ui/core/styles/zIndex';
import { UnsubscribeTwoTone } from '@material-ui/icons';
import React, {useEffect} from 'react';
import Select from 'react-select'

import './config.css'
export const SelectItem =(props)=>{
    const {itemsList,setValue,placeholder,value}=props;
    const customStyles = {
      menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 20,
      }),
      control: (_, { selectProps: { width }}) => ({
        width: width
      }),
      singleValue: provided=>({
          backgroundColor:'green'})
      // (provided, state) => {
      //   const opacity = state.isDisabled ? 0.5 : 1;
      //   const transition = 'opacity 300ms';
        // })
        // return { ...provided, opacity, transition,p };
      //}
    }
    const newStyles = {
      // option: (provided, state) => ({
      //   ...provided,
      //   borderBottom: '1px dotted pink',
      //   color: state.isSelected ? 'red' : 'blue',
      //   padding: 20,
      // }),
      menu: () => ({
                    paddingTop:'2px' ,
                    //boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
                    //marginTop:'5px',
                    borderRadius: '7px',
                    //backgroundColor:'unset',
                    backgroundColor:'rgba(101, 232, 255,0)', 
                    //color:'#B1B2BC',
                    width:'100%'
        // none of react-select's styles are passed to <Control />
        // width: 200,
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
      }
    } 
                const selectStyles = {
                  // control: 
                  //  provided => ({ 
                  //   //...provided, minWidth: 240, margin: 8
                  //   padding: '5px' ,
                  //   color:'',
                  //   borderRadius: '7px', 
                  //   backgroundColor: 'unset',
                  //   border: '1px solid #B1B2BC' 
                  // }),
                  control:()=>({
                    backgroundColor:'unset',
                    borderRadius: '7px',
                    borderColor:'#B1B2BC',
                    borderBottom:'2px'
                   
                  }),
                  
                  menu: () => ({
                    //paddingTop:'2px' ,
                    //boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)',
                    marginTop:'5px',
                    borderRadius: '7px',
                    backgroundColor:'#0A102E',
                    //backgroundColor:'rgba(101, 232, 255,0)',
                    //color:'#B1B2BC' #00414d
                  // }),
                  // gridList: {
                    // top:296+'px',
                    // width: 100,
                    // height: '100px'
                  }),
                  container: () => ({
backgroundColor:'yellow'
                  })
                }
            const  onSelectChange = (e) => {
                  setValue(e.value);
                }
 return  (
  
   <Select
  placeholder={placeholder}
  // styles={selectStyles} 
  onChange={onSelectChange}
  autoFocus
  value={value}
  options={itemsList.map((item)=>{
    return{
      'label':item.email,
      'value':item.email
    }
  })}
  theme={theme => ({
    ...theme,
    borderRadius: '7px',
    //backgroundColor:'rgba(101, 232, 255,0)',
    colors: {
      ...theme.colors,
      primary25: '#B1B2BC',
      primary: 'unset',
      // neutral50:'green',
      //neutral20:'gray'
     // primary50:'pink'
     dangerLight:'pink'
    },
  })}
   />
 )
}