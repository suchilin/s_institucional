import React from 'react';
import { render } from 'react-dom';
import MainLayout from './layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render((
    <MuiThemeProvider>
        <MainLayout />
    </MuiThemeProvider>
), document.getElementById('root'));
