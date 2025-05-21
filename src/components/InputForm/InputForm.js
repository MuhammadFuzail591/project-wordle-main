import React from 'react'

function InputForm ({ addToList, gameStatus }) {
  const [input, setInput] = React.useState('')

  function onSubmitHandler (e) {
    e.preventDefault()

    if (input.length !== 5) {
      alert('The Input must be only 5 characters Word')
      return
    }

    console.log(input)
    addToList(input)
    setInput('')
  }

  return (
    <form onSubmit={onSubmitHandler} className='guess-input-wrapper'>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        type='text'
        value={input.toUpperCase()}
        pattern='[A-Za-z]{5}'
        title='Must be Only 5 Alphabetic Characters'
        id='guess-input'
        disabled={gameStatus !== 'running'}
        onChange={e => setInput(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default InputForm
