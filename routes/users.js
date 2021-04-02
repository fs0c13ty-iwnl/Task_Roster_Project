var express = require('express');
var router = express.Router();



//users
var users = {
    test: {name: 'Test User'},
    test2: {name: 'Test User2'}
};


//user check
router.use(function(req,res,next) {

    if(!('user' in req.session)){
        res.sendStatus(403);
        return;
    }
    next();
});



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/addTask', function(req, res, next) {
    // var tasks = { author: author, title: title, DueDate: DueDate, content: content };

    var title = req.body.TaskName;
    var content = req.body.TaskContent;
    var DueDate = req.body.TaskDue;
    var author = req.session.user.id;




        req.pool.getConnection(function(err, connection) {
		if (err) {
            console.log(err);
			res.sendStatus(500);
			return;
		}
		var query = "INSERT INTO tasks (author, TaskName, TaskDue, TaskContent) VALUES (?, ?, ?, ?)";
		connection.query(query, [author, title, DueDate, content], function(err, rows, fields) {
			connection.release();
			if (err) {
                console.log(err);
				res.sendStatus(500);
				return;
			}
			res.redirect("/manager.html");
		});
	});




    // tasks.push(task);
    // res.end();
});





// make announcements
var posts = [];
router.post('/addPost', function(req, res, next) {
    var ptitle = req.body.PostTitle;
    var pcontent = req.body.PostContent;
    var postTime = req.body.PostTime;
    var author = req.session.user.id;

    req.pool.getConnection(function(err, connection) {
		if (err) {
            console.log(err);
			res.sendStatus(500);
			return;
		}
		var query = "INSERT INTO announcements (author, PostTitle, PostTime, PostContent) VALUES (?, ?, ?, ?)";
		connection.query(query, [author, ptitle, postTime, pcontent], function(err, rows, fields) {
			connection.release();
			if (err) {
                console.log(err);
				res.sendStatus(500);
				return;
			}
			res.send("<script>window.history.back(-1);displayAnn();colorChangeAnn();changeDirTitle();getPosts()</script>");
		});

    });

});

// router.get('/getPosts', function(req, res, next) {

//     res.send(posts);
// }
// );



//
router.get('/profile', function(req,res,next) {

    res.json(req.session.user.username);

});



router.get('/profile/:userid', function(req,res,next) {

    res.json(users[req.params.userdata]);

});

// router.get('/getTasks', function(req,res,next) {

//     res.json();

// });








module.exports = router;