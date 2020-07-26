var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/todoDB');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Database connection failed'));
db.once('Open',function(){
    console.log('Database connection success');
});