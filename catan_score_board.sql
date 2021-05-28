USE CatanScoreBoard;

CREATE TABLE Players (
	player_ID int not null auto_increment,
    player_name varchar(30) not null,
    PRIMARY KEY (player_id)
);

CREATE TABLE Game (
	game_id int not null auto_increment,
    game_date date not null,
    num_players smallint, 
    winner int,
    PRIMARY KEY (game_id),
    foreign key (winner) references Players(player_ID)
);

CREATE TABLE Stats (
	stat_id int auto_increment,
    player_ID int,
	game_id int,
    starting_pos smallint,
    won bool,
    primary key (stat_id),
    foreign key (player_ID) references Players(player_ID),
    foreign key (game_id) references Game(game_id)
);

INSERT INTO Players (player_name)
VALUES ("Dan Morgan"),
("Mallory Perazzo"),
("Henry Briedenbach"),
("Abigail Ganz"),
("Jon Peace")
;

select * from Game;

INSERT INTO Game (game_date, num_players, winner)
VALUES ("2021-5-20", 3, 2),
("2021-5-20", 3, 2),
("2021-5-20", 3, 2),
("2021-5-21", 3, 3),
("2021-5-22", 3, 1),
("2021-5-23", 5, 5),
("2021-5-24", 3, 1);

select * from Stats;

INSERT INTO Stats (player_ID, game_id, starting_pos, won)
VALUES (1, 1, NULL, 0),
(2, 1, NULL, 1),
(3, 1, NULL, 0), 
(1, 2, NULL, 0),
(2, 2, NULL, 1),
(3, 2, NULL, 0), 
(1, 3, NULL, 0),
(2, 3, NULL, 1),
(3, 3, NULL, 0),
(1, 4, NULL, 0),
(2, 4, NULL, 0),
(3, 4, NULL, 1),
(1, 5, NULL, 1),
(2, 5, NULL, 0),
(3, 5, NULL, 0),
(1, 6, NULL, 0),
(2, 6, NULL, 0),
(3, 6, NULL, 0),
(4, 6, NULL, 0),
(5, 6, NULL, 1),
(1, 7, NULL, 1),
(2, 7, NULL, 0),
(3, 7, NULL, 0);

select * from Game;