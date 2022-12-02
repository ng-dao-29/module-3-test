drop database manager_Student;
create database manager_Student;
use manager_Student;

create table students (
ID int primary key auto_increment,
name varchar(50) not null,
class varchar(15) not null,
theoretical_point tinyint not null,
evaluate varchar(255) not null,
practice_points tinyint not null,
describes varchar(255) null
);


insert into students (name,class,evaluate ,theoretical_point,practice_points)
value	('Mark','Otto','@mdo',7,7),
		('Jacob','Thornton','@fat',6,6),
        ('Layla','the Bind','@twiter',8,8);