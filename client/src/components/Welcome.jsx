import React from 'react';


class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        
        }
    }


    componentDidMount(){

    }

   

    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <div className = 'options'>
                    {this.props.topics.map((topic, i)=>{
                        return(
                            <button key = {i} id = {i} className = 'topic_select' value = {`${topic}`} onClick = {(e)=>{this.props.chooseTopic(e)}}>{topic}</button>
                        )
                    })}
                   
                </div>

                 <button onClick = {()=>this.props.switchView()} className = 'start_select' >Start</button>
                


            </div>
        )
    }
}



export default Welcome;