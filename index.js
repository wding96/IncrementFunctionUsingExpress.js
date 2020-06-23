const express = require("express");
const fs = require("fs");
const app = express();
const port = 3001;
const fileName = 'index_data.json';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function(){
    console.log(`IncrementFunction listening on port ${port}`)
});

// Read
app.get('/', function(req, res) {
    let data = fs.readFileSync("index_data.json");
    data = data.toString();
    return res.send(Object.values(data));
});

// Create 
app.post('/', (req, res) => {
    const n = { 
        current_value : req.body.value,
        increment_value: req.body.value + 1
    };
    let data = fs.readFileSync(fileName);
    data = data.toString();
    let Data = JSON.parse(data)
    Data.push(n)
    // fs.writeFileSync(__dirname + "/index_data.json", JSON.stringify(Data, null,2));
    return res.json(n);
    // res.send(n);
});
// curl code to run: 
// curl -X POST -H "Content-Type:application/json" http://localhost:3001/ -d '{"value":4}'

