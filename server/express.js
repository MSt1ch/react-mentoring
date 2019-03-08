const express = require('express');
const path = require('path');

const app = express();

const data = [
    { id: 1, type: "Core concepts lecture" },
    { id: 2, type:"Webpack lecture" },
    { id: 3, type: "Components lecture" },
    { id: 4, type: "Testing lecture" },
    { id: 5, type: "Flux + Redux" },
    { id: 6, type: "Routing" },
    { id: 7, type: "Server Side Rendering" },
    { id: 8, type: "Useful libraries" },
];

const staticPath = path.join(__dirname, '../dist');

app.use(express.static(staticPath));

app.set('port', process.env.PORT || 3000);

app.get('/data', (req, res) => res.send({ data }));

app.listen(app.get('port'), () =>{
    console.log(`listening: ${app.get('port')}`);
});