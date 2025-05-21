import React from 'react'

function SadBanner ({ correctAnswer }) {
  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{correctAnswer}</strong>.
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

export default SadBanner
