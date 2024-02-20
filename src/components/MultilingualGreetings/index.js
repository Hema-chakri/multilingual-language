import './index.css'
import {Component} from 'react'

class MultilingualGreetings extends Component {
  state = {
    resultImage:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    altText: 'english',
  }

  displaySelectedGreet = greet => {
    if (greet.buttonText === 'English') {
      this.setState({
        resultImage:
          'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
        altText: 'english',
      })
    } else if (greet.buttonText === 'Tamil') {
      this.setState({
        resultImage:
          'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
        altText: 'tamil',
      })
    } else if (greet.buttonText === 'Telugu') {
      this.setState({
        resultImage:
          'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
        altText: 'telugu',
      })
    }
  }

  render() {
    const {languageGreetingsList} = this.props
    const {resultImage, altText} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>

        <ul className="list-container">
          {languageGreetingsList.map(eachGreet => (
            <li key={eachGreet.id} className="list-item">
              <button
                type="button"
                onClick={() => this.displaySelectedGreet(eachGreet)}
                className="button-style"
              >
                <p>{eachGreet.buttonText}</p>
              </button>
            </li>
          ))}
        </ul>
        <img src={resultImage} alt={altText} className="greet-image" />
      </div>
    )
  }
}

export default MultilingualGreetings
