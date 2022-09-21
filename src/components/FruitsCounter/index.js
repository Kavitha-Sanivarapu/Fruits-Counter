// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="span-element">{mangoes}</span> mangoes{' '}
            <span className="span-element">{bananas}</span> bananas
          </h1>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onEatMango}>
              Eat Mango
            </button>
            <button className="button" type="button" onClick={this.onEatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
