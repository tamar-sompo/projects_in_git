import React from 'react';
import styled from 'styled-components';

export const TableStyle =()=>{

//    const[isClicked,setIsClicked] =useState(false) 
    const { bgColor,textColor, children, className } = this.props;

    return (
      <HeaderTable 
        className={className}
        bgColor={bgColor}
        color={textColor}
        >
          {children}
        </HeaderTable>
    )
  }

const HeaderTable = styled.div`
  background-color: ${ (props) => props.bgColor || 'unset'};
  color: ${ (props) => props.textColor || 'black'};
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const mainTable = styled.div`
  background-color: ${ (props) => props.bgColor || 'unset'};
  color: ${ (props) => props.textColor || 'black'};
`;