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

-   login
-   senha
    Cadastro de usuarios
    Autenticacao
    **Execute Migrations**

### 🙍‍♂️ Users - Endpoints

-   Register: **/register/user**
-   Login: **/authenticate**

### 🧚‍♂️ Mutants - Endpoints

-   Cadastrar Mutantes
    -   Verificar se ele ja existe
    -   Retorno do status do cadastro
        Listar
        Pesquisar por habilidade
    -   Editar
    -   Deletar

# Migrations

node_modules/.bin/sequelize migration:create --name create-mutant
node_modules/.bin/sequelize db:migrate
