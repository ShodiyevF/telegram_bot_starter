create database botdatabase;

drop table if exists users cascade;
create table if not exists users(
    user_id int generated always as identity primary key,
    user_chatid varchar(20) not null,
    user_username varchar(32) not null unique,
    user_firstname varchar(64) not null,
    user_lastname varchar(64),
    user_isdeleted boolean default false,
    user_createdat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);