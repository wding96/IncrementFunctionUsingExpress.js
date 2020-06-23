const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function(){
    console.log(`IncrementFunction listening on port ${port}`)
});

let history = {
    1: {
        "current_value" : 1,
        "increment_value": 2
    },
}
// Read
app.get('/', function(req, res) {
    return res.send(Object.values(history));
});

// Create 
app.post('/', (req, res) => {
    const id = req.body.value;
    const n = { 
        current_value : req.body.value,
        increment_value: req.body.value + 1
    };
    history[id] = n;
    return res.json(n);
});
// curl code to run: 
// curl -X POST -H "Content-Type:application/json" http://localhost:3001/ -d '{"value":4}'

