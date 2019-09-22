import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../pages/landingPage';
import Activity from '../pages/activityPage';
import Alert from '../pages/alertPage';
import AlertInfo from '../pages/alertInfoPage';
import StoreBuy from '../pages/storePage';
import TroubleShooting from '../pages/troubleShootingPage';
import SchedulePage from '../pages/schedulePage';

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/landing" component={LandingPage} />
        <Route path="/activity" render={(props) => <Activity {...props} />} />
        <Route path="/alerts" render={(props) => <Alert {...props} />} />
        <Route path="/alertinfo" render={(props) => <AlertInfo {...props} />} />
        <Route path="/storebuy" render={(props) => <StoreBuy {...props} />} />
        <Route path="/troubleshooting" render={(props) => <TroubleShooting {...props} />} />
        <Route path="/schedule" render={(props) => <SchedulePage {...props} />} />
      </BrowserRouter>
    );
  }
}

export default AppRouter;
