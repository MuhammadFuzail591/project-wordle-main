import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import InputForm from '../InputForm/InputForm'
import InputList from '../InputList/InputList'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Banner from '../Banner/Banner'
import SadBanner from '../SadBanner/SadBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game () {
  const [gameStatus, setGameStatus] = React.useState('running')
  const [guessList, setGuessList] = React.useState([])

  function addToList (label) {
    const nextGuesses = [...guessList, label]
    setGuessList(nextGuesses)

    if (label === answer) {
      setGameStatus('won')
      console.log('You Won...!!')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
      console.log('You have lost the game')
    }
  }
  return (
    <>
      {gameStatus === 'won' ? (
        <Banner guessListLength={guessList?.length} />
      ) : undefined}
      {gameStatus === 'lost' ? <SadBanner correctAnswer={answer} /> : undefined}
      <InputList guessList={guessList} answer={answer} />
      <InputForm addToList={addToList} gameStatus={gameStatus} />
    </>
  )
}

export default Game
