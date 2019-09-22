import React from 'react';
import { Link } from 'react-router-dom';
import './bottomBar.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HelpOutline, Home, History, Voicemail, MoreVert } from '@material-ui/icons';

class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='bottom-bar'>
                <BottomNavigation>
                    <BottomNavigationAction
                        component={Link}
                        to="/landing"
                        label="Home"
                        value="home"
                        icon={<Home />}
                    />
                    <BottomNavigationAction
                        label="Activity"
                        value="activity"
                        icon={<History />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="/alerts"
                        label="Automation"
                        value="automation"
                        icon={<Voicemail />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to="/alerts"
                        label="Support"
                        value="support"
                        icon={<HelpOutline />}
                    />
                    <BottomNavigationAction
                        label="More"
                        value="more"
                        icon={<MoreVert />}
                    />
                </BottomNavigation>
            </div>
        )
    }
}

export default BottomBar;