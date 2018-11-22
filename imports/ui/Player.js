import {Players} from './../api/players';
import React from 'react';
export default class Player extends React.Component{
    render(){
        return(
            <p key={this.props.player._id}>
              {this.props.player.name} has {this.props.player.score} points
              <button onClick = {()=>Players.remove(this.props.player._id)}>x</button>
              <button onClick = {()=>Players.update(this.props.player._id,{$inc:{score:1}})}>+1</button>
              <button onClick = {()=>Players.update(this.props.player._id,{$inc:{score:-1}})}>-1</button>
            </p>
        );
    }
}
Player.propTypes = {
    player:React.PropTypes.object.isRequired
}