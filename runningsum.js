const express = require('express');
const app = express();

app.use(express.json());

app.post('/runningsum', function(req,res) {
    var intArray = req.body.arr;
    for(var i = 1; i < intArray.length; i++)
    {
        intArray[i] += intArray[i-1];
    }

    const jsonString = JSON.stringify({"arr": intArray});
    res.send(jsonString);
});

const port = process.env.port || 3000; // in terminal "set PORT=#"
app.listen(port, () => console.log('Listening on port '+ port));
