## Como rodar a pagina que consome as informaçãos da APIInterprises:
* clonar o repositorio com do projeto o link é: [https://github.com/oscarRodriguesDev/Consurmer-API-01]

* Abra o prompt de comandos, você pode acessar via terminal do VSCode

* certifique-se de que você tem o Node.js instalado na sua maquina

* navegue até o diretório raiz da aplicação

* você precisa instalar as dependecias para o react rodar na sua máquina portanto execute npm install react.js

* para rodar a pagina react do repositório basta digitar o comando "npm start"

* em poucos segundo a tela da renderização das tabelas vai abrir no navegador padrao do seu sistema

## A pagina não exibe dados de nenhuma empresa:
Isso ocorre quando a API não está rodando, o ideal é o servidor sempre estar rodando, e o cliente se conectar com ele quando desejar, mas como estamos em ambiente de desenvolvimento, provavel que ele esteja inativo.

nesse caso abra outro prompt de comandos e navegue até o diretorio raiz da API e digite: "node server.js"
caso esteja usando o nodemon você pode digitar o comando "npm start"
Atualize a pagina das tabelas
se tudo tiver sido feito corretamente você poderá observar as informações das empresas na tabela renderizada pela pagina
