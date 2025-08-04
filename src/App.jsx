import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Fieldset from './components/Fieldset'
import { aiTranslation } from '../utils/ai'

export default function App() {
  const [textToTranslate, setTextToTranslate] = useState("")
  const [language, setLanguage] = useState("")

  const [isTranslating, setIsTranslating] = useState(false)
  const [translatedText, setTranslatedText] = useState("")

  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const langChoosen = formData.get("language")
    setLanguage(langChoosen)
    const text = formData.get("input-text")
    setTextToTranslate(text)
  }

  useEffect(() => {
    async function getTranslations() {
      try {
        const response = await aiTranslation(language, textToTranslate)
        setTranslatedText(response)
      } catch(err) {
        console.error(err)
      } finally {
        setIsTranslating(false)
      }
    }
    if (textToTranslate && language) {
      setIsTranslating(true)
      getTranslations()
    }
  }, [textToTranslate, language])

  function handleRestart() {
    setTextToTranslate("")
    setLanguage("")
    setTranslatedText("")
    formRef.current.reset()
  }

  return (
    <>
      <Header />
      <section className='translate-area'>
        <h2>Get started below</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className='wrapper-input-text'>
            <label htmlFor='input-text' className='translation-label'>Enter text to translate</label>
              <textarea 
                id='input-text'
                name='input-text'
                className='input-text'
                placeholder='Can I order a burger?'
                rows={4}
                required
              />
          </div>
          {(!isTranslating && !translatedText) ? 
          <>
            <Fieldset />
            <button disabled={isTranslating}>Translate</button>
          </> : null
          }
        </form>
        {isTranslating ?
        (<div className='translated-text loading'>
          <p>Translation is in progress...</p>
        </div>) :
        translatedText ?
        (
        <>
          <p className='translation-label'>Text in {language}</p>
          <div className='translated-text'>
            <p>{translatedText}</p>
          </div>
          <button onClick={handleRestart}>Start over</button>
        </>
        ) :
        null
        }
      </section>
    </>
  )
}

          // {isTranslating ? 
          // (<div className='translated-text'>
          //   <p>Translation is in progress...</p>
          // </div>) :
          // translatedText ?
          // (<div className='translated-text'>
          //   <p>{translatedText}</p>
          // </div>) :
          // <Fieldset />
          // }