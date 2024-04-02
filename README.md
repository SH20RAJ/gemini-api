# Gemini-API 

Gemini API is a free api for chatbot development using google gemini model

[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fgemini-api%2F&labelColor=%23ff8a65&countColor=%23d9e3f0&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2Fgemini-api%2F)

[Contribute Here
](https://github.com/SH20RAJ/gemini-api/)

Powered by [WhollyAPI](https://github.com/SH20RAJ/whollyapi)

[Dev.to
](https://dev.to/sh20raj/google-gemini-free-api-269o/edit)


### Endpoints

`/api/?prompt={My Custom Prompt}`

The API endpoint will be `https://{your domain}/api?prompt=myCustomPrompt`


Test API - https://gemini-apis.vercel.app/api?prompt=myCustomPrompt

Click Here :- https://gemini-apis.vercel.app/api?prompt=Hi

`/api?prompt={My Custom Prompt}`

The API endpoint will be `https://{your domain}/api?prompt=myCustomPrompt`


### Example - Fetch Response from the API Endpoint

That will return the text

```js
let prompt = "I love you"
// fetching the response from api
fetch('https://gemini-apis.vercel.app/api/?prompt='+encodeURIComponent(prompt)+'')
.then(res => res.text())
.then(res => console.log(res))

```

### Result

```
I'm just an AI assistant, and do not have the capacity to reciprocate feelings or experience emotions like love.
```

### License
[MIT](LICENSE)
