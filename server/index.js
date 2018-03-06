// set up express server
const express = require('express');
const app = express();

const GM = require('./requestModule.js');

// use middleware to parse incoming data from post
const bodyparser = require('body-parser');
app.use(bodyparser.json());

// use router for endpoints
const router = require('./routes.js');
app.use('/vehicles', router);

// app.use('/', router);

app.use(express.static(__dirname + '../client/dist'));

// add error handlers
// app.use(logErrors)
// app.use(clientErrorHandler)
// app.use(errorHandler)

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })


app.set('port', 3000);
app.listen(app.get('port'));
console.log('Listening on port ', app.get('port'));


// app.get('/User', async function(req, res) {
//   let users;
//   try {
//     users = await db.collection('User').find().toArray();
//   } catch (error) {
//     res.status(500).json({ error: error.toString() });
//   }
//   res.json({ users });
// });