import React from 'react';
import { StatusBar } from 'react-native'

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
    <>
        <StatusBar barStyle='light-content' backgroundColor='#ffc107' />
        <Routes />
    </>    
);
export default App;
