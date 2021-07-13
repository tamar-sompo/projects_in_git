import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

// or less ideally
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import { Route, Switch } from "react-router-dom";

import Fiances from './components/wrap/fiances'
// import Invoice from 'invoice'
import Invoicelink from './components/Invoice/invoivelink'
import LeaderLouder from './components/Useful/leaderLouder'
import MessageFormat from './components/Useful/messageFormat'
// import MassageFormat from '../Useful/messageFormat'


function App() {
  // useEffect(() => {
  //   window.onbeforeunload = confirmExit;
  //   function confirmExit() {
  //     return "show warning";
  //   }
  // }, [])
  return (<>
    {/* <Provider store={store}> */}
    {/* <ProtectedRoute> */}

    <Switch>
      <Route path="/:userName/view/:theId" component={Invoicelink} />
      <Fiances></Fiances>
    </Switch>
    {/* <LeaderLouder></LeaderLouder> */}
    {/* </ProtectedRoute> */}
    {/* </Provider>‏ */}

  </>
  );
}

export default App;
