import React from 'react'

function Banner ({ guessListLength }) {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{' ' + guessListLength} guesses</strong>.
      </p>
      <button
        style={{
          font: 'bold',
          backgroundColor: 'white',
          color: 'black',
          padding: '5px 10px',
          border: '1px solid black',
          borderRadius: '5px',
          marginTop: '2px'
        }}
        onClick={() => window.location.reload()}
      >
        Play Again..
      </button>
    </div>
  )
}

export default Banner
