const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/calculate", (req, res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const op = req.query.op;

    let result;

    if(op==="add") result = num1 + num2;
    else if(op==="sub") result = num1 - num2;
    else if(op==="mul") result = num1 * num2;
    else if(op==="div") result = num1 / num2;

    res.json({result});
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});