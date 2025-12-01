create database elibra_db;
use elibra_db;

-- user information
create table users(
	user_id int auto_increment primary key,
    username varchar(100) not null,
    email varchar(100) unique not null,
    passwords varchar(255) not null
);
-- book information
create table books(
	book_id int auto_increment primary key,
    title varchar(300) not null,
    author varchar(255),
    image varchar(255)
);

-- user's rating information
create table rating(
	rating_id int auto_increment primary key,
    user_id int,
    book_id int,
    rating int check (rating between 1 and 5),
    foreign key (user_id) references users(user_id),
    foreign key (book_id) references books(book_id)
);

