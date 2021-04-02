var express = require('express');
var router = express.Router();

var tasks = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get tasks
router.get('/getTasks', function(req, res, next) {

	req.pool.getConnection(function(err, connection) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		var query = 'SELECT TaskName, TaskDue, TaskContent, CONCAT(FirstName," ", LastName) AS author FROM tasks INNER JOIN all_users ON tasks.author = all_users.id';
		connection.query(query, function(err, rows, fields) {
			connection.release();
			if (err) {
				res.sendStatus(500);
				return;
			}
			res.json(rows);
		});
	});
});

// get announcements
router.get('/getPosts', function(req, res, next) {

	req.pool.getConnection(function(err, connection) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		var query = 'SELECT PostTitle, PostTime, PostContent, CONCAT(FirstName," ", LastName) AS author FROM announcements INNER JOIN all_users ON announcements.author = all_users.id';
		connection.query(query, function(err, rows, fields) {
			connection.release();
			if (err) {
				res.sendStatus(500);
				return;
			}
			res.json(rows);
		});
	});
});

//database test
router.get('/dbtest', function(req, res, next) {
	req.pool.getConnection(function(err, connection) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		var query = "SHOW TABLES";
		connection.query(query, function(err, rows, fields) {
			connection.release();
			if (err) {
				res.sendStatus(500);
				return;
			}
			res.json(rows);
		});
	});
});


//register
router.post('/register', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
	var privileges = req.body.AccountType;
	console.log(req.session);
	req.pool.getConnection(function(err, connection) {
    if (err) {
        res.sendStatus(500);
        return;
    }
    let query = "SELECT username FROM all_users WHERE username = ?";
    connection.query(query, [username], function(err, rows, fields) {
        if (err) {
            res.sendStatus(500);
            connection.release();
            return;
        }
        if (rows.length === 0 && password == password2) {
            let query = "INSERT INTO all_users (username, password, privileges) VALUES (?, ?, ?)";

            connection.query(query, [username, password, privileges], function(err, rows, fields) {
                connection.release();
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                console.log('successfully updated!');
                res.redirect('/index.html');
            });
        } else {
            res.send("Failed! Please check on your username/password!");
            connection.release();
        }
    });
});
	console.log(req.session);
});


//login


router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var privileges = req.body.AccountTypeL;
	console.log(req.session);
	req.pool.getConnection(function(err, connection) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		var query = "SELECT id, username, password, FirstName, LastName, Email, PhoneNum, privileges FROM all_users WHERE username = ? AND password = ? AND privileges = ?";
		connection.query(query, [username, password, privileges], function(err, rows, fields) {
			connection.release();
			if (err) {
				res.sendStatus(500);
				return;
			}

            if (rows.length > 0) {
    //         connection.query("SELECT privileges FROM all_users WHERE privileges = ?",[privileges], function(err, rows, fields) {
				// if (err) {
				// 	res.sendStatus(500);
				// 	connection.release();
				// 	return;
				// }

    //         });

				req.session.user = rows[0];
                if (privileges == 1){

					res.redirect('/main.html');
                } else {

					res.redirect('/manager.html');
                }
            }else{

				res.send('<script>alert("Incorrect username and/or password or Account Type, Please return to the login page!")</script>');
            }
			res.end();

		});
	});
	console.log(req.session);
});

//logout

router.post('/logout', function(req, res, next) {
    console.log(req.session);

	req.session.destroy();

	res.redirect('/index.html');


    console.log(req.session);
    console.log("successfully logged out!");
});
// router.get('/Announcements' function(req, res, next){
// 	res.send()
// });



//greetings
// router.get('/main.html', function(req, res ,next) {
// 	var username = req.body.;
// });


//update user info

router.post('/updateINFO', function(req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	var FirstName = req.body.FirstName;
	var LastName = req.body.LastName;
	var Email = req.body.Email;
	var PhoneNum = req.body.PhoneNum;
	var userID = req.session.user.id;

	console.log(req.session);
	req.pool.getConnection(function(err, connection) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		var query = "update all_users set username=?,password=?,FirstName=?,LastName=?,Email=?,PhoneNum=? where id=?";
		connection.query(query, [username,password,FirstName,LastName,Email,PhoneNum,userID], function(err, rows, fields) {
			connection.release();
			if (err) {
				console.log(err);
				res.sendStatus(500);
				return;
			}
			res.json(rows);
			console.log("successfully updated!");
		});
	});
	console.log(req.session);
});


//get all user info
router.get('/profileA', function(req,res,next) {
var userID = req.session.user.id;
console.log(req.session);
	req.pool.getConnection(function(err, connection) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		var query = "SELECT id,username,password,FirstName,LastName,Email,PhoneNum FROM all_users WHERE id=?";
		connection.query(query, [userID], function(err, rows, fields) {
			connection.release();
			if (err) {
                console.log(err);
				res.sendStatus(500);
				return;
			}
			res.json(rows);
		});
});
console.log(req.session);
    // res.json(req.session.user);
});


module.exports = router;
