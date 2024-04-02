# Gemini-API 


Endpoints

`/api/?prompt={My Custom Prompt}`

The API endpoint will be `https://{your domain}/api?prompt=myCustomPrompt`

That will return the text

```js
let prompt = "I love you"
// fetching the response from api
fetch(`/api/?prompt=${encodeURIComponent(prompt))
.then(res => res.text())
.then(res => console.log(res))

```

## License
[MIT](LICENSE)
