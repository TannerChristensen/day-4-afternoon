import React, {Component} from "react"
import "./reset.css"
import "./App.css"
import Card from "./Card"
import Buttons from "./Buttons"
import data from "./data"

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data,
      userNumber: 0
    }
  }

  increaseNum = () => {
    if (this.state.userNumber === 24){
      this.setState({
        userNumber: 0
      })
    } else {
      this.setState({
        userNumber: this.state.userNumber + 1
      })
    }
  }

  decreaseNum = () => {
    if (this.state.userNumber === 0) {
      this.setState({
        userNumber: 24
      })
    } else {
      this.setState({
        userNumber: this.state.userNumber = 1
      })
    }
  }

  render(){
    const {data, userNumber} = this.state 

    return (
      <div>
        <header>
          <h2>Name</h2>
        </header>
        <body>
          <div className="content">
          <Card user={data[userNumber]}/>
          <Buttons increase={this.increaseNum} decrease={this.decreaseNum}/>
          </div>
        </body>
      </div>
    )
  }
}

export default App;