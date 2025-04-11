import React, { useRef, useState } from 'react'

const EnglishReader = () => {
  const synth = useRef(window.speechSynthesis)
  const utterance = useRef(null) // ✅ đúng
  const [isReading, setIsReading] = useState(false)
  //   const utterance = new SpeechSynthesisUtterance("Hello, how are you today?");

  const text = `
    Welcome to the English reading app.
    This text will be read out loud continuously until you stop it.
    Feel free to test it with your own content.
  `

  const startReading = () => {
    if (!synth.current) return

    utterance.current = new SpeechSynthesisUtterance(text)
    utterance.current.onend = () => {
      if (isReading) {
        startReading() // đọc lại khi kết thúc nếu chưa bấm stop
      }
    }

    synth.current.speak(utterance.current)
    setIsReading(true)
  }

  const stopReading = () => {
    if (synth.current?.speaking) {
      synth.current.cancel()
    }
    setIsReading(false)
  }

  return (
    <div className='p-4'>
      <h1 className='mb-4 text-xl font-bold text-white'>English Reader</h1>
      <div className='space-x-4'>
        <button onClick={startReading} className='px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600'>
          Start
        </button>
        <button onClick={stopReading} className='px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'>
          Stop
        </button>
      </div>
    </div>
  )
}

export default EnglishReader
