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

  const handleYes = () => {
    setAnswer('yes')
  }

  const handleNo = () => {
    setAnswer('no')
    setNoClickCount(prev => prev + 1)
  }

  const handleTryAgain = () => {
    setAnswer(null)
  }

  if (answer === 'yes') {
    return (
      <div className="container response-container">
        <div className="hearts-background"></div>
        <div className="content">
          <h1 className="response-title">Yay! 🎉💖</h1>
          <div className="gif-container">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGw3dDN5ZGNkdHB5NG5qZWQ0Ym5sYnN5b2gzcGx6NXZuYmFnYTBtaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6Zt6ML6BklcajjsA/giphy.gif"
              alt="Happy celebration"
              className="response-gif"
            />
          </div>
          <p className="response-message">I'm so happy! This is going to be the best Valentine's Day ever! 💕</p>
        </div>
      </div>
    )
  }

  if (answer === 'no') {
    const messageIndex = (noClickCount - 1) % tryAgainMessages.length
    return (
      <div className="container response-container">
        <div className="hearts-background"></div>
        <div className="content">
          <h1 className="response-title">{tryAgainMessages[messageIndex]}</h1>
          <div className="gif-container">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2h6NXdyMmM5ZWJqNG52ZTY3a2YxYnN6YXY2ZjVtaGJ3enk0cWo1aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d2lcHJTG5Tscg/giphy.gif"
              alt="Sad puppy"
              className="response-gif"
            />
          </div>
          <button onClick={handleTryAgain} className="button try-again-button">
            Try Again? 💝
          </button>
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
