create table user(
  id  int primary key auto_increment
  login varchar(70),
  password varchar(90)
);

create table mutant(
  name varchar(70),
  skill1 varchar(70),
  skill2 varchar(70),
  skill3 varchar(70),
  photo varchar(150),
  id_user varchar(70),
  active boolean,
  id int primary auto_increment
);

-- create table mutant_skills(
--     id_mutant int
--     id_skills int,
--     number int
--     primary KEY (id_mutant,id_skills)
-- )

-- create table skills(
--  id int primary auto_increment,
--  description varchar(70)
-- );