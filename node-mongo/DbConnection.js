var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeeManagement');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Failed'));

db.once('open', function () {

    console.log('Connection Succesful')

})