import React from 'react';
import Scoreboard from './Scoreboard.jsx';
import GameEntry from './GameEntry.jsx';


class GamePlay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gameOver: false
        }
    }


    componentDidMount(){

    }

    gameOver(){
        this.setState({
            gameOver : !this.state.gameOver
        })
    }


    render(){

        if(!this.state.gameOver){
            return(
                <div>
                    <button onClick = {()=>this.props.switchView()}>Home</button>
                    <h1>GamePlay : {this.props.topic}</h1>
                    <div>
                        {this.props.test.map((entry, i)=>(
                            <GameEntry  key = {i} entry = {entry} />
                        ))}
                    </div>
                    
                </div>
            )
        }else {
            return(
                <Scoreboard />
            )
        }
       
    }
}



export default GamePlay;