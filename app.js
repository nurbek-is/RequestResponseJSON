const express = require('express');
const app = express()
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, response) => {
    response.redirect('/send-json.html');
});

app.get('/process', (request, response) => {
  const strJSON = request.query['strJSON'];
  const objJSON = JSON.parse(strJSON);
  let responseMsg;
  if (objJSON.msg === "Hi There!") {
    responseMsg = "And hi there to you!";
  } else {
    responseMsg = "Later Gator!";
  }
  response.send(responseMsg);
});

app.listen(8080);