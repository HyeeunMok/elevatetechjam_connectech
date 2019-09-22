import React from 'react';
import './headerBar.css';

class HeaderBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div className="header-bar">
                 <h1>{this.props.page}</h1>
            </div>
           
        )
    }
}

export default HeaderBar;