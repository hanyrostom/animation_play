import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Welcome from './components/Welcome.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import GamePlay from './components/GamePlay.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            exampleLetters : ['A','B','C','D'],
            gameOn : false,
            topic : '',
            topics : ['Athletes', 'Actors', 'Characters', 'Cities'],
            test : [{name: 'Cristiano Ronaldo', hints: [ "5 time Ballon D'or winner", "He plays for Real Madrid and Portugal", "Soccer Player"]},
                    {name: 'Messi', hints: [ "4 time Ballon D'or winner", "He plays for Barcelona", "Magician on a soccer field"]}]
        }
    this.switchView = this.switchView.bind(this)
    this.chooseTopic = this.chooseTopic.bind(this)
    }

    componentDidMount(){

    }


    chooseTopic(e){
        console.log('You clicked on  : ', e.target.value)
        this.setState({
            topic : e.target.value
        })
    }

    switchView(){
        console.log('Game topic : ', this.state.topic)
        this.setState({
            gameOn : !this.state.gameOn
        })
    }


    render(){

        if(!this.state.gameOn){
            return(
                <div className = "welcome">
                    <Welcome chooseTopic = {this.chooseTopic} switchView = {this.switchView} topics = {this.state.topics}/>
                </div>

            )
        }else{
            return(
                <div className = "game">
                <GamePlay letters = {this.state.exampleLetters} switchView = {this.switchView} topic = {this.state.topic} test = {this.state.test}/>
                </div>
            )
        }

    }
}

 ReactDOM.render(<App/>,document.getElementById('app'));

 /*


                <div class="instructions">
                    <h2>Instructions:</h2>
                    <div class="txt"><p>umm.. guess characters starting with the letter.. Click and hold letter to reveal hidden character..Get it right, you win!<br/><br/>Have fun!<br/><br/><br/><br/><br/><br/></p>
                    </div>
                </div>
                <div class="content">
                    <div class="row">
                    <a class="box c1 r1 a bx1" id="a" href="#">A<span>He once was super scrawny and lived in the 40's and slept thru the 90's<br/><br/>Favorite tool: A shield.</span></a>
                    <a class="box c2 r1 b bx2" id="b" href="#">B<span>Scratchy Super-Hero voice and billionaire by day<br/><br/>Favorite tool: leather suit.</span></a>
                    <a class="box c3 r1 c bx3" id="c" href="#">C<span>Meow Meow<br/><br/>Favorite tool: Whip.</span></a>
                    </div>
                    <div class="row">
                    <a class="box c1 r2 d bx2" id="d" href="#">D<span>Curses all the frickin time and his the funniest superhero.<br/><br/>Favorite tool: Guns and swords</span></a>
                    <a class="box c2 r2 e bx3" id="e" href="#">E<span>Slave worker Christmas time<br/><br/>Favorite tool: Gift wrap and cheerfulness</span></a>
                    <a class="box c3 r2 f bx4" id="f" href="#">F<span>Ali would know.</span></a>
                    </div>
                    <div class="row">
                    <a class="box c1 r3 g bx3" id="g" href="#">G<span>test test test</span></a>
                    <a class="box c2 r3 h bx4" id="h" href="#">H<span>Don't get him angry <br/><br/>Favorite tool: Doesn't need any, He smashes.</span></a>
                    <a class="box c3 r3 i bx5" id="i" href="#">I<span>Smartass Billionaire Superhero. <br/><br/>Favorite tool: Technology of his suit. </span></a>
                    </div>

                    <div class="row">
                    <a class="box c1 r1 a bx1" id="a" href="#">J<span>He once was super scrawny and lived in the 40's and slept thru the 90's<br/><br/>Favorite tool: A shield.</span></a>
                    <a class="box c2 r1 b bx2" id="b" href="#">K<span>Scratchy Super-Hero voice and billionaire by day<br/><br/>Favorite tool: leather suit.</span></a>
                    <a class="box c3 r1 c bx3" id="c" href="#">L<span>Meow Meow<br/><br/>Favorite tool: Whip.</span></a>
                    </div>
                    <div class="row">
                    <a class="box c1 r2 d bx2" id="d" href="#">M<span>test test test</span></a>
                    <a class="box c2 r2 e bx3" id="e" href="#">N<span>test test test</span></a>
                    <a class="box c3 r2 f bx4" id="f" href="#">O<span>test test test</span></a>
                    </div>
                    <div class="row">
                    <a class="box c1 r3 g bx3" id="g" href="#">P<span>test test test</span></a>
                    <a class="box c2 r3 h bx4" id="h" href="#">Q<span>test test test</span></a>
                    <a class="box c3 r3 i bx5" id="i" href="#">R<span>test test test</span></a>
                    </div>

                    <div class="row">
                    <a class="box c1 r1 a bx1" id="a" href="#">S<span>He once was super scrawny and lived in the 40's and slept thru the 90's<br/><br/>Favorite tool: A shield.</span></a>
                    <a class="box c2 r1 b bx2" id="b" href="#">T<span>Scratchy Super-Hero voice and billionaire by day<br/><br/>Favorite tool: leather suit.</span></a>
                    <a class="box c3 r1 c bx3" id="c" href="#">U<span>Meow Meow<br/><br/>Favorite tool: Whip.</span></a>
                    </div>

                    
                    <div class="row">
                    <a class="box c1 r2 d bx2" id="d" href="#">V<span>test test test</span></a>
                    <a class="box c2 r2 e bx3" id="e" href="#">X<span>test test test</span></a>
                    <a class="box c3 r2 f bx4" id="f" href="#">Y<span>test test test</span></a>
                    </div>


                    <div class="row">
                    <a class="box c1 r3 g bx3" id="g" href="#">Z<span>test test test</span></a>
                    <a class="box c2 r3 h bx4" id="h" href="#">#<span>test test test</span></a>
                    <a class="box c3 r3 i bx5" id="i" href="#">$<span>test test test</span></a>
                    </div>
                </div>
*/