const express = require('express')
const axios = require('axios');
require('dotenv').config()
const {Configuration, OpenAIApi  } = require('openai')
const app = express()
const port = 3000
const configuration = new Configuration({
    apiKey: 'key',
});//输入你的key
const openai = new OpenAIApi(configuration)

app.post('/openAi', async (req, res) => {
  try {
    const response = await openai.createChatCompletion({
      model: 'text-davinci-003',
      prompt: '你好openAi',
      max_tokens: 1000,
      temperature: 0,
      top_p: 1.0,
      stop: ['/n']
    });
    return res.status(200).json({
      success: true,
      message:res.data.choices[0].text
    })
  }
  catch (error){
    res.send(error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}3000`)
})
