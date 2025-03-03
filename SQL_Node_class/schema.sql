create table user(
  id varchar(50) primary key,
  username varchar(50) unique ,
  email varchar(50) unique not null,
  password varchar(50) not null
);
--we use source filename.sql to run ---

--runing tha sql from files --