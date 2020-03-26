##Backend
    - Banco de Dados Relacional (SQLite) e backend em Node.js;
    - Definimos as Entidades e Funcionalidades a partir do layout;
    - "npx knex init" cria o knexfile.js que define o caminho das nossas conexões com o banco e as migrations;
    - Migration define um histórico de tabelas criadas no banco de dados;
        - "npx knex migrate:make MIGRATION_NAME" cria uma migration;
        - "npx knex migrate:latest" executa uma migration
        - "npx knex migrate:rollback" executa rollback da última migration
        - "npx knex migrate:status" lista as últimas migrations executadas
    - Criamos duas tabelas:
        ONGS (id (PK), name, email, whatsapp, city, uf)
        INCIDENTS (id (PK increment), title, description, value, ong_id (FK))
        - Para o id de ONGS, definimos uma string com valor aleatório em hexadecimal com o crypto
        - Para o id de INCIDENTS, definimos um valor numérico auto incrementado
        - Para a FK de INCIDENTS, passamos o id de ONGS no header da requisição
    - Criamos quatro controles para definir os métodos executados pelas rotas
        - OngController: Métodos gerais que manipulam a tabela ongs
        - IncidentController: Métodos gerais que manipulam a tabela incidents
        - ProfileController: Métodos que manipulam da tabela incidents por ong_id
        - SessionController: Métodos que validam a existência da ong que está fazendo login
    - Importante: Boa prática é definir uma paginação para a listagem de dados

##Plugins
    - express (http://expressjs.com/pt-br/)
        Framework Web para Node.js que oferece um conjunto de features que facilitam o gerenciamento de requisições e rotas, além de definir configurações da aplicação web
    - nodemon
        Restarta o servidor a cada alteração;
    - knex (https://knexjs.org/) 
        Query Builder do Node.js (cria uma abstração para as consultas no banco de dados)
    - sqlite3 
        Driver do SQLite
    - crypto (https://nodejs.org/api/crypto.html)
        Plugin de criptografia que usamos para definir um id aleatório para a tabela ongs