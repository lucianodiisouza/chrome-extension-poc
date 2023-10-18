const url = 'https://api.openai.com/v1'
const model = 'gpt-3.5-turbo-instruct'
const temperature = 0.9
const max_tokens = 2048
const top_p = 0
const frequency_penalty = 0
const presence_penalty = 0
const apiKey = process.env.REACT_APP_OPENAI_KEY

export const getCompletition = async (prompt) => {
  console.log('REQUESTING DATA')
  const path = `${url}/completions`
  const response = await fetch(`${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: model,
      prompt: prompt,
      temperature: temperature,
      max_tokens: max_tokens,
      top_p: top_p,
      frequency_penalty: frequency_penalty,
      presence_penalty: presence_penalty,
    }),
  })

  try {
    const data = await response.json()
    return data.choices[0].text
  } catch (error) {
    return `${error}`
  }
}
