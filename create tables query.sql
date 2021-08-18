CREATE TABLE Users (
	uid INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(55) NOT NULL,
	password VARCHAR(255) NOT NULL,
	mail VARCHAR(255) NOT NULL,
	firstName VARCHAR(55) NOT NULL,
	lastName VARCHAR(55)
)

CREATE TABLE Recipe (
	rid INT PRIMARY KEY AUTO_INCREMENT,
	uid INT,
	date DATETIME NOT NULL,
	title VARCHAR(255) NOT NULL,
	description TEXT(1000),
	img TEXT(1000),
	ingredients TEXT,
	steps MEDIUMTEXT,
	numOfLikes INT DEFAULT 0,
	FOREIGN KEY (uid) REFERENCES Users(uid)
)

CREATE TABLE Comment (
	cid INT PRIMARY KEY AUTO_INCREMENT,
	content TEXT(1000) NOT NULL,
	numOfLikes INT DEFAULT 0
)

CREATE TABLE RecipeLikes(
	uid INT,
	rid INT,
	FOREIGN KEY (uid) REFERENCES Users(uid),
	FOREIGN KEY (rid) REFERENCES Recipe(rid),
	PRIMARY KEY(uid, rid)
)

CREATE TABLE CommentLikes (
	uid INT,
	cid INT,
	FOREIGN KEY (uid) REFERENCES Users(uid),
	FOREIGN KEY (cid) REFERENCES Comment(cid),
	PRIMARY KEY (uid, cid)
)

CREATE TABLE CommentsOnRecipes (
	uid INT,
	cid INT,
	rid INT,
	FOREIGN KEY (uid) REFERENCES Users(uid),
	FOREIGN KEY (cid) REFERENCES Comment(cid),
	FOREIGN KEY (rid) REFERENCES Recipe(rid),
	PRIMARY KEY (uid, cid, rid)
)

CREATE TABLE Follows (
	uid INT,
	followerId INT,
	FOREIGN KEY (uid) REFERENCES Users(uid),
	FOREIGN KEY (followerId) REFERENCES Users(uid),
	date DATETIME NOT NULL
)