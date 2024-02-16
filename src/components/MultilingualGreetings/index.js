import {Component} from 'react'
import GreetingLanguage from '../GreetingLanguage'

const MultilingualGreetings = props => {
  const {languageGreetingsList} = props

  const onClickSelectedLanguage = button => {
    ;<img
      src={languageGreetingsList[0].imageUrl}
      alt={languageGreetingsList[0].imageAltText}
    />
  }

  return (
    <>
      <h1>Multilingual Greetings</h1>
      <ul>
        {languageGreetingsList.map(eachItem => (
          <button
            type="button"
            onClick={onClickSelectedLanguage(eachItem.buttonText)}
          >
            {eachItem.buttonText}
          </button>
        ))}
      </ul>
    </>
  )
}

export default MultilingualGreetings
