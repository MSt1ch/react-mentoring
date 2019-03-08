const express = require('express');
const path = require('path');

const app = express();


const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () =>{
    console.log(`listening: ${app.get('port')}`);
});