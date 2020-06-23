const express = require("express");
const app = express();
const port = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', function(req, res) {
//     res.json(function(n){
//         return n+1;
//     })
// });

app.listen(port, function(){
    console.log(`incrementFunction app listening on port ${port}`)
});

// Create a message 
app.post('/', (req, res) => {
    // const value = req.body.value;
    const n = { value : parseInt(req.body.value) + 1};
    return res.send(n);
});
// curl code to run: 
// curl -X POST -H "Content-Type:application/json" http://localhost:3001/ -d '{"value":"4"}'
