create database Trailers_db
use Trailers_db
go

create table Users 
(
    Id int not null identity(1,1) primary key,
    [Name] varchar(50) not null,
    Email varchar(50) not null,
    [Password] varchar(25) not null
)

create table Trailers 
(
    Id int not null identity(1,1) primary key,
    [Name] varchar(50) not null,
    CoverSrc varchar(250) not null,
    ReleaseYear date not null,
    Duration int not null,
    Category varchar (25) not null,
    [Description] varchar (250) not null,
    [Url] varchar(250) not null
)