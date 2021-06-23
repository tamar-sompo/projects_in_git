import React, { Component } from 'react';
import { render } from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';

import Card from './components/Card';
import { coolTheme, darkTheme,aTheme } from './theme';
import TableStyle from './tryStyle/TableStyle.js';


export const Try=()=>{

    return (
        <div>
        <TableStyle 
            bgColor={'gray'}
            color={'blue'}
            >
                Table HeaderTable
        </TableStyle>)
        </div>
    );
  }


const SpecialCard = styled(Card)`
  background-color: black;
`;

