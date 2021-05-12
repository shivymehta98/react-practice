import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
//do's and don'ts of state
//1. Always modify the state using setState() in object...directly it won't workS
//2. Place the code in the call back function if the code has to exe after state is updated
    increment(){
        // this.setState({
        //     count: this.state.count + 1 
        // }, () => {console.log('callback value', this.state.count)})
        // console.log(this.state.count)
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    render(){
        return(
            <div>
            <div>Count - {this.state.count}</div>
            <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>

        )
    }
}
export default Counter