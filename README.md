# ReLife

## Resumo 
Olá, bem vindo, esse backend foi desenvolvido para o projeto final do Academy Bootcamp do Instituto Atlantico, a problematica seria construir um sistema de uma ONG para doações do orgãos, as quais pessoas e instituições poderiam, caso fosse de seu interesse, se cadastrarem na plataforma para ter mais um local de busca e e informações sobre o processo de doação.

## Como executar localmente 💻

- Baixe o projeto para sua máquina com `git clone https://github.com/Atlantis-Fellowship-Instituto-Atlantico/ReLife.git`

- Execute no terminal o comando `npm install` para instalar as dependencias necessárias.

- Utilize o comando `docker-compose up -d` dentro da pasta do projeto , após rodar o container e ele estiver up, basta fazer a conexão com o banco, com pgadmin, dbeaver, utilizando as variaveis que estão dentro do arquivo **docker-compose**.

- Dentro da pasta **src** utilizar o comando `npm run migration:up`, para criar as tabelas dentro do BD.

- Execute o comando `npm run start` dentro da pasta **src** do projeto, abra o insomnia e importe as requests utilizando o arquivo **RequestsInsominia.json**.

### Pronto agora é só testar os endpoints 😄
___

## Como executar com o Docker 🐳

- Baixe o projeto para sua máquina com `git clone https://github.com/Atlantis-Fellowship-Instituto-Atlantico/ReLife.git`

- Na pasta 'backend' rode o comando `./script.bat` para subir os containers de forma automatizada.

  - Neste arquivo é executado os comandos: 
  
    - ***docker build -t relife-web .***

      - ***npm install***
    
      - ***npm run migration:up***

    - ***docker-compose up -d***
  
      - ***npm run start***

- Após rodar o script e os containers estiverem up, basta fazer a conexão com o banco, com pgadmin, dbeaver, utilizando as variaveis que estão dentro do arquivo **docker-compose**.

- Abra o insomnia e importe as requests utilizando o arquivo **RequestsInsominia.json**.

### Pronto agora é só testar os endpoints 😄
