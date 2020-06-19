CREATE DATABASE ng_games_db;

use ng_games_db;

CREATE TABLE games (
    id int(11) not null auto_increment primary key,
    title varchar(180),
    description varchar(255),
    image varchar(200),
    created_at timestamp default current_timestamp
);

describe games;

Host: bmlbguinipejiufu1t5g-mysql.services.clever-cloud.com
Database name: bmlbguinipejiufu1t5g
User: uc9rkpxymr3n0kmu
Password: h2slVlkcI9oOwkkO67rc
Port: 3306
Connection: mysql://uc9rkpxymr3n0kmu:h2slVlkcI9oOwkkO67rc@bmlbguinipejiufu1t5g-mysql.services.clever-cloud.com:3306/bmlbguinipejiufu1t5g

 
