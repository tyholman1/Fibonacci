const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    while (num3 < num) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3 === num
}
app.get("/fib/:num", (req, res) => {
    if (fibonacci(parseInt(req.params.num))) {
        res.send("Very good. It is Fibonacci")
    } else {
        res.send("I can tell this is not a Fibonacci number.")
    }
})

app.listen(PORT, ()=>{
    console.log("Listening now")
})