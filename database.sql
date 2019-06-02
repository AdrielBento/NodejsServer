create table usuario(
  id primary key auto_increment
  login varchar(70),
  password varchar(90)
)

create table mutante(
  nome varchar(70),
  habilidade varchar(70),
  foto varchar(150),
  user_name varchar(70),
  ativo boolean
)