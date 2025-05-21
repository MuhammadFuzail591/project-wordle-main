import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess'

function InputList ({ guessList, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(num => {
        return <Guess answer={answer} key={num} value={guessList[num]} />
      })}
    </div>
  )
}

export default InputList
