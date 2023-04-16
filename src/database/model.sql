create database autotype;

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

drop table if exists inlinemenu cascade;
create table if not exists inlinemenu(
    menu_id int generated always as identity primary key,
    menu_title varchar(20) not null,
    menu_img varchar(40) not null,
    menu_isactive boolean default false,
    menu_createdat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

drop table if exists count_inlines cascade;
create table if not exists count_inlines(
    count_id int generated always as identity primary key,
    count_menu int not null,
    menu_title varchar(20) not null,
    menu_id int not null references inlinemenu(menu_id) unique,
    count_createdat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);