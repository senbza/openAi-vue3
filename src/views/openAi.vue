<template>
  <div>
    <input type="text" v-model="chat">
    <button @click="send">sendOpenAi</button>
    <p>{{ str }}</p>
  </div>
</template>

<script lang="ts" setup>

import { ref, getCurrentInstance, } from 'vue'
let { proxy } = getCurrentInstance()
const chat = ref('你好openAi')
const str = ref('')
const send = () => {
  proxy.$axios.defaults.headers.post['Authorization'] = 'Bearer Key'//需在Bearer后加入你的key
  proxy.$axios.post('https://api.openai.com/v1/completions', {
    prompt: chat.value,//要从中生成文本的文本提示。提示应该是尽可能详细和清晰的，以便模型能够生成准确和连贯的文本。
    max_tokens: 2000,//在完成的文本中生成的最大标记数（单词或标点符号）。默认值为16。
    model: 'text-davinci-003',//要用于生成文本的模型ID。模型ID是在OpenAI平台上创建模型时指定的唯一标识符。
    temperature: 0.8,//控制生成文本随机性的值。较高的温度会产生更多多样化和意外的响应，而较低的温度则会产生更保守和可预测的响应。默认值为1
    n: 1,//要生成的文本完成数。默认值为1。
    stop: '/n',//表示生成的文本完成的标记或字符串列表。生成停止标记后，模型不会生成任何标记。默认情况下，模型会在完成文本的结尾处自动停止
  }).then((result) => {
    str.value = result.data.choices[0].text
  }).catch((err) => {
    console.log(err);
  });
}

</script>