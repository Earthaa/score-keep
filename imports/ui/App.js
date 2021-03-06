import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayersList from './PlayerList';
export default class App extends React.Component{
    render(){
        return (
            <div>
                <TitleBar title={this.props.title} subtitle="Created by YZ"/>
                <div className="wrapper">
                    <PlayersList players={this.props.players}/>
                    <AddPlayer score={10}/>
                </div>
           </div>
        );
    };
}
App.prototype = {
    title:React.PropTypes.string.isRequired,
    players:React.PropTypes.array.isRequired
}