import React from 'react';


class GameEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    componentDidMount(){

    }


    render(){

        return(
            <div>{this.props.entry.name}</div>
        )
    }
}


export default GameEntry;