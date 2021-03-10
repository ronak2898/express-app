var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('etag');
app.get('/', function(req, res){
    res.send("🍕");  
})
app.listen(port);
