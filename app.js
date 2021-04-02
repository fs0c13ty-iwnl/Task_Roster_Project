var express = require('express');
var mysql = require('mysql');
var session = require('express-session');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


var db = mysql.createPool({
	host:'localhost',
// 	user:'admin',
// 	password:'',
	database:'Task_Roster'
});


// app.get('/', function(req, res, next) {
// 	res.setHeader("Access-Control-Allow-Origin", "*");
// 	res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
// });

app.use(function(req, res, next) {
	req.pool = db;
	next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
	secret:"a string",
	resave: false,
	saveUninitialized: true,
	httpOnly: true,        //prevent attacks
	cookie: {secure: false}
}));







app.use(express.static(path.join(__dirname, 'public')));


app.use( (req,res,next) => {
let url=req.originalUrl;
    if (url != "/login" && url != "/register" && !req.session.user) {
        return res.redirect("/index.html");
    }
    next();
});

// app.use(function (req, res, next){
// 	if(req.session.user.privileges == 0 && req.url == "/main.html"){
// 		res.redirect("/manager.html");
// 	}else{
// 		next();
// 	}
// });







app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
