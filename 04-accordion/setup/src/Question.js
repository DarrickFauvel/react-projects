import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = (props) => {
  const { question, toggleButton } = props

  return (
    <article class='question'>
      <header>
        <h4>{question.title}</h4>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
    </article>
  )
}

export default Question
