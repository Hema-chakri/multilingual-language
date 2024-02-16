const GreetingLanguage = props => {
  const {greetDetails} = props
  const {imageUrl, imageAltText} = greetDetails

  return (
    <li>
      <img src={imageUrl} alt={imageAltText} />
    </li>
  )
}

export default GreetingLanguage
