import React from 'react';
import HeaderBar from '../components/headerBar/headerBar';
import BottomBar from '../components/bottomBar/bottomBar';
import { Button } from '@material-ui/core';
import './style.css';
import Popup from 'react-popup';

class TroubleShooting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="troubleshooting-page">
                <HeaderBar page="Troubleshooting"></HeaderBar>
                <h1>TROUBLE SHOOTING CONTENT</h1>
                <Popup
                    className="mm-popup"
                    btnClass="mm-popup__btn"
                    closeBtn={true}
                    closeHtml={null}
                    defaultOk="Ok"
                    defaultCancel="Cancel"
                    wildClasses={false}
                    escToClose={true} />
                <Button m={5} variant="contained" color="default">Contact Us</Button>
                <Button m={5} variant="contained" color="default">Schedule Visit</Button>
                <BottomBar></BottomBar>
            </div>

        )
    }
}

export default TroubleShooting;