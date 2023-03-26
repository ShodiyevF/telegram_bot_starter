create database users;

create table users(
    user_id int generated always as identity primary key,
    user_fullname varchar(64) not null,
    user_username varchar(64) not null unique,
    user_password varchar(24) not null
);