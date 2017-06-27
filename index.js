const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = [];

app.get('/messages', function (req, res, next) {
    res.status(200).json( { messages } );
});

app.post('/messages', function(req, res, next){
    messages.push(
        { 
            message: req.body.message, 
            time: new Date() 
        }
    );
    res.status(200).json({ messages });
})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
