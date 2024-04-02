# Gemini-API 


### Endpoints

`/api/?prompt={My Custom Prompt}`

The API endpoint will be `https://{your domain}/api?prompt=myCustomPrompt`


Test API - https://gemini-apis.vercel.app/api?prompt=myCustomPrompt`

`/api?prompt={My Custom Prompt}`

The API endpoint will be `https://{your domain}/api?prompt=myCustomPrompt`


### Example - Fetch Response from the API Endpoint

That will return the text

```js
let prompt = "I love you"
// fetching the response from api
fetch(`https://gemini-apis.vercel.app/api/?prompt=${encodeURIComponent(prompt))
.then(res => res.text())
.then(res => console.log(res))

```

### License
[MIT](LICENSE)
