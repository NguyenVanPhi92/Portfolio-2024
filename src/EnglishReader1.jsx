import React, { useEffect, useRef, useState } from 'react'

const EnglishReader1 = () => {
  const [text, setText] = useState(
    "Hello there. Welcome to your English reading session. Let's begin with something simple."
  )
  const [isReading, setIsReading] = useState(false)
  const words = useRef([])
  const index = useRef(0)
  const stopRef = useRef(false)
  const voiceRef = useRef(null)
  const [rate, setRate] = useState(1) // tốc độ đọc

  // Load voices once
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      const voice = voices.find((v) => v.name === 'Google UK English Female')
      if (voice) {
        voiceRef.current = voice
      }
    }

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    } else {
      loadVoices()
    }
  }, [])

  const startReading = () => {
    stopRef.current = false
    words.current = text.split(/(?<=[.?!])\s+/) // Tách từng câu
    index.current = 0

    setIsReading(true)
    readNext()
  }

  const stopReading = () => {
    stopRef.current = true
    window.speechSynthesis.cancel()
    setIsReading(false)
  }

  const readNext = () => {
    if (stopRef.current) {
      setIsReading(false)
      return
    }

    const utterance = new SpeechSynthesisUtterance(words.current[index.current])
    if (voiceRef.current) {
      utterance.voice = voiceRef.current
    }

    // utterance.rate = 0.9
    utterance.pitch = 1.1
    utterance.volume = 1
    utterance.rate = rate

    utterance.onend = () => {
      index.current += 1

      if (index.current >= words.current.length) {
        index.current = 0 // Đọc lại từ đầu
      }

      readNext() // tiếp tục
    }

    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className='max-w-xl p-4 mx-auto'>
      <h1 className='mb-2 text-xl font-bold text-white'>🗣️ English Reader</h1>
      <textarea
        className='w-full p-2 mb-4 border rounded'
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Type or paste your English text here...'
      />

      <div className='flex gap-4'>
        <button
          onClick={startReading}
          disabled={isReading}
          className='px-4 py-2 text-white bg-blue-600 rounded disabled:opacity-50'
        >
          ▶ Start Reading
        </button>
        <button onClick={stopReading} className='px-4 py-2 text-white bg-red-600 rounded'>
          ⏹ Stop
        </button>
      </div>

      <div className='mb-4'>
        <label className='block mb-2'>Tốc độ đọc: {rate}</label>
        <input
          type='range'
          min='0.1'
          max='2'
          step='0.1'
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className='w-full'
        />
      </div>
    </div>
  )
}

export default EnglishReader1
