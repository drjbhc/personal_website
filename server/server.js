const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
// const PORT = 5000;
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ extended: true }));

app.use(express.static('server/public'));

const mathematics = require('./required/mathematics');


let result;
let history = [];

app.post('/calculate', ( req, res ) => {
    console.log(req.body);
    let equation = (req.body);

    let num1 = Number(equation.num1);
    let num2 = Number(equation.num2);
    let operator = equation.operator;

    if (operator === 'plus' ){
        operator = '+';
        result = mathematics.addition(num1, num2);
    }
    else if (operator === 'minus' ){
        operator = '-';
        result = mathematics.subtraction(num1, num2);
    }
    else if (operator === 'multiplied' ){
        operator = '*';
        result = mathematics.multiplication(num1, num2);
    }
    else if (operator === 'divided' ){
        operator = '/';
        result = mathematics.division(num1, num2);
    }
    else {
        result = 'error';
    }

    let operation = `${num1} ${operator} ${num2} = ${result}`;
    history.push(operation);

    result = result.toString();

    console.log(result);
    console.log(history);

    res.status(201).send('equation received');

});

app.get('/calculate', ( req, res ) => {
    res.send(result);
});

app.get('/calculationhistory', ( req, res ) => {
    res.send(history);
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});