# 简易版 openAi 接口连接教程。vite+vue3

### 安装

```sh
npm install
```

### 运行

```sh
npm install
```

目前没有使用 key。需要在[openAi 开放 Api 处申请自己的 key](https://platform.openai.com/docs/quickstart/build-your-application).

![my-logo.png](/src/assets/WechatIMG21.jpeg)

```js
proxy.$axios.defaults.headers.post['Authorization'] = 'Bearer Key' //需在 Bearer 后加入你的 key
```

node 简易版 openAi 接口连接在

```
src>node.js
```

启动方法直接在终端 node.js 就可以。

```js
const configuration = new Configuration({
  apiKey: 'key'
})
```

在这里输入你的 key
