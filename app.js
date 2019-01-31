// ----------------------------------


// HELLO WORLD ... it worked!!
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// ----------------------------------


// SOME OTHER HELLO WORLD ... it worked
// const http = require('http');
// const port=process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//     console.log(`Server running at port `+port);
// });


// ----------------------------------


// BOT FRAMEWORK BRIDGE ... 
const express = require('express');
const actionsOnGoogleAdapter = require('bot-framework-actions-on-google');
const app = express();
 
app.use(actionsOnGoogleAdapter('Q9TeKDUcW_o.cwA.btM.GR08F1ru8HBACS1o80FHO6gXT91VFboSQwiJBBUaY2E').router);
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ActionsOnGoogle demo listening on port ${PORT}!`));


// ----------------------------------



