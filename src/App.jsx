import { useEffect, useState } from 'react'
import ChatGPT, { getCompletition } from './lib/chatgpt'
import { Button } from './components/Button'
import { TextArea } from './components/TextArea'
import { Divider } from './components/Divider'
import { Loader } from './components/Loader'
import { Container } from './components/Container'
import { Response } from './components/Response'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')
  const [prompt, setPrompt] = useState('')

  useEffect(() => {}, [loading, response, prompt])

  useEffect(() => {
    console.log('prompt', prompt)
  }, [prompt])

  const getChatGPTResponse = async () => {
    setLoading(true)
    setResponse('')

    console.log('GETCHATGPTRESPONSE')
    try {
      const response = await getCompletition(prompt)
      setResponse(response)
      setLoading(false)
    } catch (error) {
      setResponse(error)
      setLoading(false)
    }
  }

  const onClick = () => {
    getChatGPTResponse()
  }

  const onChange = (event) => {
    setPrompt(event.target.value)
  }

  return (
    <Container.Outer>
      <Container.Inner>
        <TextArea onChange={onChange} />
        <Button onClick={onClick}>Get Answer</Button>
        <Divider />
        {loading ? <Loader /> : <Response response={response} />}
      </Container.Inner>
    </Container.Outer>
  )
}
