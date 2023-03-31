# customer-base-backEnd
*customer-base*
Este é um aplicativo no qual você pode gerenciar seus contatos de maneira simples e fácil.

Rodando localmente
Clone o projeto

```shel
  git@github.com:Victor-Novakoski/customer-base-backEnd.git
```  


Entre no diretório do projeto
```shel
  cd customer-base-backEnd
```  
  ou
  
```shel
  code .
```


Instale as dependências
```shel
  yarn
```  
iniciar as migrações 

```shel
  npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
```  

```shel
  npm run typeorm migration:run -- -d ./src/data-source
```  


Inicie o servidor
```shel
  yarn dev
```  


Stack utilizada
Front-end: React, Styled Components e TypeScript

Back-end: Node, Express e PostgreSQL
