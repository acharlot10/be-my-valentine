import { useState } from 'react'
import './App.css'

// Generate heart positions once at module level
const heartPositions = [...Array(20)].map(() => ({
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 5}s`,
  animationDuration: `${5 + Math.random() * 5}s`
}))

function App() {
  const [answer, setAnswer] = useState(null)
  const [noClickCount, setNoClickCount] = useState(0)
  const [yesClickCount, setYesClickCount] = useState(0)

  const tryAgainMessages = [
    "Are you sure? 🥺",
    "Please reconsider... 💔",
    "Think about all the good times! 💕",
    "I'll be sad without you... 😢",
    "Maybe you need more time? ⏰",
    "I promise to make you happy! 🌟",
    "Don't break my heart! 💘",
    "Pretty please? 🙏",
    "I'll be the best valentine ever! 🎁",
    "One more chance? 🌹"
  ]

  const yesGifs = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JiMGx2cmtpbjFzdmp6NHRuaDBpZGY5d3hoZWsyczY3MXhydHAwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5GdhgaBpA3oCA/giphy.gif",
    "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWI1NHl1emMwZXA0MjIxMWd1enJ6eWs5ZzZuMHBvbXRzdHV5OGozbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vzvnFJV8a7zipTTuHf/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2V1b3Fyb251eGtpcHg2b2djdnA5YzE1ZjZkZDB2cHNxaTkxNzUxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NxC8VtyxqhMtpLoEEN/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm1za21iMHd3Y3VxaTJ3Y2xqMzlyNW0zaGhsc3h5d2R2eGF1N2t3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BOPz50G5Cf2Y5XS9Ba/giphy.gif"
  ]

  const handleYes = () => {
    setAnswer('yes')
    setYesClickCount(prev => (prev % yesGifs.length) + 1)
  }

  const handleNo = () => {
    setAnswer('no')
  }

  const handleTryAgain = () => {
    setAnswer(null)
    setYesClickCount(0)
  }

  const handleGifCycle = () => {
    if (answer === 'yes') {
      setYesClickCount(prev => (prev % yesGifs.length) + 1)
    } else if (answer === 'no') {
      // Trigger re-render to randomize message
      setNoClickCount(prev => prev + 1)
    }
  }

  if (answer === 'yes') {
    const gifIndex = (yesClickCount - 1) % yesGifs.length
    return (
      <div className="container response-container">
        <div className="hearts-background"></div>
        <div className="content">
          <h1 className="response-title">Yay! 🎉💖</h1>
          <div className="gif-container">
            <img 
              src={yesGifs[gifIndex]}
              alt="Happy celebration"
              className="response-gif"
            />
          </div>
          <p className="response-message">I'm so happy! This is going to be the best Valentine's Day ever! 💕</p>
          <div className='button-container'>
            <button onClick={handleGifCycle} className="button try-again-button">
              See More? 💝
            </button>
            <button onClick={handleTryAgain} className="button reset-button">
              Reset 💖
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (answer === 'no') {
    const messageIndex = Math.floor(Math.random() * tryAgainMessages.length)
    return (
      <div className="container response-container">
        <div className="hearts-background"></div>
        <div className="content">
          <h1 className="response-title">{tryAgainMessages[messageIndex]}</h1>
          <div className="gif-container">
            <img 
              src="https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif"
              alt="Sad puppy"
              className="response-gif"
            />
          </div>
          <div className='button-container'>
            <button onClick={handleGifCycle} className="button try-again-button">
              Try Again? 💝
            </button>
            <button onClick={handleTryAgain} className="button reset-button">
              Reset 💔
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="hearts-background">
        {heartPositions.map((style, i) => (
          <div key={i} className="heart" style={style}>
            ❤️
          </div>
        ))}
      </div>
      <div className="content">
        <h1 className="title">Will You Be My Valentine? 💕</h1>
        <div className="button-container">
          <button onClick={handleYes} className="button yes-button">
            Yes! 💖
          </button>
          <button onClick={handleNo} className="button no-button">
            No 😢
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
