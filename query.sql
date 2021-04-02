--Queries for key funcrions
--Queries for key funcrions
--Queries for key funcrions
--Queries for key funcrions
--Queries for key funcrions
--Queries for key funcrions


-- all_accounts
-- check all users IDs, nicknames

SELECT * FROM all_accounts;

-- check all IDs from all_accounts

SELECT ID FROM all_accounts;

--  check all user nicknames from all_accounts

SELECT userName FROM all_accounts;

-- chcheck all manager nicknames from all_accounts

SELECT managerName FROM all_accounts;

-- check all nicknames

SELECT userName, managerName
FROM all_accounts;

-- count all numbers of users

SELECT COUNT(ID)
FROM all_accounts;

-- users
-- acquire all information of all users

SELECT * FROM users;

-- checka single one piece of info

SELECT userID FROM users;

SELECT nickname FROM users;

SELECT password FROM users;

SELECT FirstName FROM users;

SELECT LastName FROM users;

SELECT Email FROM users;

SELECT PhoneNumber FROM users;

-- count all users

SELECT COUNT(userID) FROM users

-- check specific piece of info on users

-- e.g. when authentication

SELECT userID, nickname, password FROM users

-- e.g. 2 
SELECT nickname, password, FirstName, LastName FROM users


-- acquire basic information of users (probably will be shown on the group page on the managing system)

SELECT nickname, FirstName, LastName, Email, PhoneNumber 
FROM users;

-- Content shown on the information edit page for users

SELECT nickname, password, FirstName, LastName, Email, PhoneNumber
FROM users;

-- check a users information

SELECT userID, nickname, password, FirstName, LastName, Email, PhoneNumber
FROM users
INNER JOIN all_accounts
ON all_accounts.ID = users.userID;

-- check a users name (First & Last)

SELECT userID, nickname, FirstName, LastName
FROM users
INNER JOIN all_accounts
ON all_accounts.ID = users.userID;

-- check a users contact info

SELECT userID, FirstName, LastName, Email, PhoneNumber
FROM users
INNER JOIN all_accounts
ON all_accounts.ID = users.userID;

-- check users ID, nickname & pswd

SELECT userID, nickname, password
FROM users
INNER JOIN all_accounts
ON all_accounts.ID = users.userID;

-- insert new info when registration
INSERT INTO users (userID, nickname, FirstName, LastName )
VALUES ('000000', 'xxxxxx', 'xxxxxx', 'xxxxxx');

-- insert new info on edit page
INSERT INTO users (userID, nickname, FirstName, LastName, Email, PhoneNumber)
VALUES ('000000', 'xxxxxx', 'xxxxxx', 'xxxxxx', 'xxxxxxxxx', '121231123123');





-- managers
-- acquire all information of all managers

SELECT * FROM managers;

-- checka single one piece of info on managers

SELECT managerID FROM managers;

SELECT nickname FROM managers;

SELECT password FROM managers;

SELECT FirstName FROM managers;

SELECT LastName FROM managers;

SELECT Email FROM managers;

SELECT PhoneNumber FROM managers;

-- count all managers
SELECT COUNT(userID) FROM users

-- check specific piece of info on managers

-- e.g. when authentication

SELECT managerID, nickname, password FROM managers

-- e.g. 2 
SELECT nickname, password, FirstName, LastName FROM managers


-- acquire basic information of managers (probably will be shown on the group page on the managing system)

SELECT nickname, FirstName, LastName, Email, PhoneNumber 
FROM managers;

-- Content shown on the information edit page for managers

SELECT nickname, password, FirstName, LastName, Email, PhoneNumber
FROM managers;

-- check a manager's information

SELECT managerID, nickname, password, FirstName, LastName, Email, PhoneNumber
FROM managers
INNER JOIN all_accounts
ON all_accounts.ID = managers.userID;

-- check a manager's name (First & Last)

SELECT managerID, nickname, FirstName, LastName
FROM managers
INNER JOIN all_accounts
ON all_accounts.ID = managers.userID;

-- check a manager's contact info

SELECT managerID, FirstName, LastName, Email, PhoneNumber
FROM managers
INNER JOIN all_accounts
ON all_accounts.ID = managers.userID;

-- check manager's ID, nickname & pswd

SELECT managerID, nickname, password
FROM managers
INNER JOIN all_accounts
ON all_accounts.ID = managers.userID;

-- insert new info when registration
INSERT INTO managers (managerID, nickname, FirstName, LastName )
VALUES ('000000', 'xxxxxx', 'xxxxxx', 'xxxxxx');

-- insert new info on edit page
INSERT INTO managers (managerID, nickname, FirstName, LastName, Email, PhoneNumber)
VALUES ('000000', 'xxxxxx', 'xxxxxx', 'xxxxxx', 'xxxxxxxxx', '121231123123');







-- Gruops
-- Check a single information of groups

SELECT groupID FROM groups;

SELECT groupName FROM groups;

SELECT userID FROM groups;

SELECT managerID FROM groups;

-- acquire name of users in a group

SELECT FirstName, LastName
FROM users
INNER JOIN groups
ON users.userID = groups.userID;

-- form a new group

INSERT INTO groups (groupName, userID)
VALUES ('xxxxx', 'xxxxxx');

-- Delete a groups 
DELETE FROM groups 
WHERE xxxx = xxxxx;

-- count the number of all groups 	
SELECT COUNT(groupID)
FROM groups;


-- insert users in groups
INSERT INTO groups.userID
VALUES (WHERE users.userID = groups.userID);


-- get all users' name (First & Last) in a group
SELECT FirstName, LastName
FROM users
INNER JOIN groups
ON users.userID = groups.userID;







-- Tasks
-- check a single colomn of tasks

SELECT TaskName FROM tasks;

SELECT TaskDue FROM tasks;

SELECT TaskContent FROM tasks;

SELECT taskID FROM tasks;

SELECT managerID FROM tasks;

SELECT managerFirstName FROM tasks;

SELECT managerLastName FROM tasks;

-- Acquire tasks' Name/Due/Content/manager (on task page)

SELECT TaskName, TaskDue, TaskContent, managerFirstName, managerLastName
FROM tasks;

-- Acquire tasks on the list page (if possible)

SELECT TaskName, TaskName
FROM tasks;

-- Acquire tasks ordered by time, shown on the dashboard

SELECT TaskName, TaskDue, TaskContent, managerFirstName, managerLastName
FROM tasks
ORDER BY TaskDue DESC;

-- Acquire tasks ordered by title, shown on the dashboard

SELECT TaskName, TaskDue, TaskContent, managerFirstName, managerLastName
FROM tasks
ORDER BY TaskName ASC;

-- Insert new tasks

INSERT INTO tasks (TaskName, TaskDue, TaskContent, managerFirstName, managerLastName)
VALUES	('xxxxx', 'xxxxx', 'xxxxx', 'xxxxxx', 'xxxxxx');

-- Delete tasks

DELETE FROM tasks WHERE xxxx = xxxxx;




-- annoucnements

-- check a single colomn of announcements

SELECT PostName FROM annoucnements;

SELECT PostTime FROM annoucnements;

SELECT PostContent FROM annoucnements;

SELECT postID FROM annoucnements;

SELECT managerID FROM annoucnements;

SELECT managerFirstName FROM annoucnements;

SELECT managerLastName FROM annoucnements;

-- Acquire annoucnementss' Name/time/Content/manager (on task page)

SELECT PostName, PostTime, PostContent, managerFirstName, managerLastName
FROM annoucnements;

-- Acquire tasks ordered by time, shown on the dashboard

SELECT PostName, PostTime, PostContent, managerFirstName, managerLastName
FROM annoucnements
ORDER BY PostTime DESC;

-- Acquire tasks ordered by title, shown on the dashboard

SELECT TaskName, TaskDue, TaskContent, managerFirstName, managerLastName
FROM managers
ORDER BY PostName ASC;

-- Insert new tasks

INSERT INTO tasks (TaskName, TaskDue, TaskContent, managerFirstName, managerLastName)
VALUES	('xxxxx', 'xxxxx', 'xxxxx', 'xxxxxx', 'xxxxxx');

-- Delete tasks

DELETE FROM annoucnements WHERE xxxx = xxxxx;



-- lists

-- select a single info of the lists

SELECT ListName FROM lists;

SELECT ListContent FROM lists;

SELECT ListColor FROM lists;

SELECT userID FROM lists;

-- select the list created by a sinle user

SELECT ListName, ListContent, ListColor
FROM lists
INNER JOIN users
ON lists.userID = users.userID;

-- ADD a new list

INSERT INTO lists (ListName, ListContent, ListColor, userID) 
VALUES ('xxxx','xxxxxxxxxassdas','#xxxxx','000000');

DELETE FROM lists WHERE xxxx = xxxxx;


-- Count lists

SELECT COUNT(ListName) FROM lists;


-- count the number of lists from an user
SELECT COUNT(ListName)
FROM lists
INNER JOIN users
ON lists.userID = users.userID;






-- Tags

-- select a single info of the Tags

SELECT TagName FROM tags;

SELECT TagContent FROM tags;

SELECT TagColor FROM tags;

SELECT userID FROM tags;

-- select the Tag created by a sinle user

SELECT TagName, TagContent, TagColor
FROM tags
INNER JOIN users
ON tags.userID = users.userID;

-- ADD a new Tag

INSERT INTO tags (TagName, TagContent, TagColor, userID) 
VALUES ('xxxx','xxxxxxxxxassdas','#xxxxx','000000');


-- Delete a tag
DELETE FROM tags WHERE xxxx = xxxxx;


-- Count Tags

SELECT COUNT(TagName) FROM tags;


-- count the number of Tags from an user
SELECT COUNT(TagName)
FROM Tags
INNER JOIN users
ON tags.userID = users.userID;













