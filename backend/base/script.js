const express = require('express');
const app= express();

//routes create krna

//app.get(Router, requesthandler);
app.use( function(req, res, next) {
    console.log('Middleware executed');
    // Call the next middleware or route handler
    next();
  }) ;

app.get('/', function(req, res) 
  {
    res.send('Hello ji!');
  })


app.get('/profile', function(req, res, next) 
  {
    return next(new Error('Profile not found'));
  })
  
// error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(3000);

//middleware->server se route ke beech me jo code perform hota hai wo middleware kehlata hai

