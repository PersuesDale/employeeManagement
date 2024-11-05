const express = require('express')
const app = express();
const port = 8000;
const router = require('./router')
const datab = require('./DbConnection')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors())

app.use( express.static(`${__dirname}/assets`));

app.use(bodyParser.json())

app.use('/', router)

app.listen(port, () => {

    console.log(port, 'port created')

})