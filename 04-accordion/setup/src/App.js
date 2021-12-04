import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleButton = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <main>
      <div class='container'>
        <h3>questions and answers about login</h3>
        <section class='info'>
          {data.map((question) => (
            <SingleQuestion
              question={question}
              toggleButton={toggleButton}
              key={question.id}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App
