import { range } from '../../utils.js'
import { checkGuess } from '../../game-helpers.js'
import Banner from '../Banner/Banner.js'
import SadBanner from '../SadBanner/SadBanner.js'

function Cell ({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell'

  return <span className={className}>{letter}</span>
}

export let isDisable = false

function Guess ({ value, answer }) {
  const result = checkGuess(value, answer)

  // const resultStatus = result?.filter(res => res.status === 'correct')

  return (
    <>
      {/* {resultStatus?.length === 5 ? (
        <Banner guessListLength={guessListLength} />
      ) : undefined} */}
      {/* {guessListLength >= 6 ? <SadBanner correctAnswer={answer} /> : undefined} */}
      <p className='guess'>
        {range(5).map(num => (
          <Cell
            key={num}
            status={result ? result[num].status : undefined}
            letter={result ? result[num].letter : undefined}
          />
        ))}
      </p>
    </>
  )
}

export default Guess
