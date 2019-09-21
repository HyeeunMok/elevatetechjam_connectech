import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Alert from '../pages/alertPage';
import AlertInfo from '../pages/alertInfoPage';
import StoreBuy from '../pages/storePage';
import TroubleShooting from '../pages/troubleShootingPage';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/landing" component={LandingPage} />
        <Route path="/alerts" render={(props) => <Alert {...props} />} />
        <Route path="/alertinfo" render={(props) => <AlertInfo {...props} />} />
        <Route path="/storebuy" render={(props) => <StoreBuy {...props} />} />
        <Route path="/troubleshooting" render={(props) => <TroubleShooting {...props} />} />
      </BrowserRouter>
    );
  }
}

export default AppRouter;
