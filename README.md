# 🧛‍♂️ Nodejs API

### Pré requisitos

-   Nodejs 10+
-   Mysql

### QUICK START

**⚙ Download and install**

```shell
git clone https://github.com/AdrielBento/NodejsServer
cd NodejsServer
npm i
```

**🎲 Create Database**  
Crie um database chamado `mutantes_project` no seu banco de dados Mysql
**Config:**

-   usuario: root
-   password: sem senha
-   server: localhost

**Execute Migrations**
```shell
node_modules/.bin/sequelize db:migrate
```

### 🙍‍♂️ Users - Endpoints

-   Cadastrar: **/register/user**
-   Login: **/authenticate** 

### 🧚‍♂️ Mutants - Endpoints

- Listar: **list**
- Cadastrar: **/register/mutant**
- Delete: **/delete/mutant**
- Editar: **/update/mutant**
- Pesquisa:**/search/mutant**

# Migrations

node_modules/.bin/sequelize migration:create --name  create-mutant
node_modules/.bin/sequelize db:migrate
