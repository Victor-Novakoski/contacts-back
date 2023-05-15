# contacts-back
*customer-base*
Este é um aplicativo no qual você pode gerenciar seus contatos de maneira simples e fácil.

Rodando localmente
Clone o projeto

```shel
  git@github.com:Victor-Novakoski/contacts-back.git
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

Login
```shel
  /auth
```  

body
```shel
{
	"email":"victor@mail.com",
	"password":"123456"
}
```  
status 200

```shel
{
"token": "token"
}
```  


Rota
```shel
  /user
```  
create

body

```shel
{
	"name": "teste1111",
	"email": "teste1111@mail.com",
	"password": "1234",
	"phone": "4199999999"
}
```  

status 204 

```shel
{
	"updatedAt": "2023-03-24T22:44:29.813Z",
	"createdAt": "2023-03-24T22:44:29.813Z",
	"isActive": true,
	"isAdm": false,
	"imageProfile": "https://argumentumpericias.com.br/biblioteca/2019/09/sem-imagem-avatar.png",
	"phone": "4199999999",
	"email": "teste@mail.com",
	"name": "teste",
	"id": "958a577e-1715-43c2-8ec5-84f91c1f0ffa"
}
```  

get

status 200 
```shel
[
	{
		"imageProfile": "https://www.omegascopio.com.br/wp-content/uploads/2022/09/Genshin-Impact-anime.jpg",
		"updatedAt": "2023-03-24T22:58:42.119Z",
		"createdAt": "2023-03-24T22:58:42.119Z",
		"isAdm": false,
		"isActive": true,
		"phone": "99 9999 9999",
		"email": "teste@mail.com",
		"name": "teste",
		"id": "9d531bf2-28b6-423f-a344-2d59b3bbd98a"
	}
]
```  

rota

```shel
  /users/profile
```  

get 

status 200

```shel
{
	"id": "9d531bf2-28b6-423f-a344-2d59b3bbd98a",
	"name": "teste",
	"email": "teste@mail.com",
	"imageProfile": "https://www.omegascopio.com.br/wp-content/uploads/2022/09/Genshin-Impact-anime.jpg",
	"phone": "99 9999 9999"
}
```  

patch 

body

```shel
"name":""
"email":""
"password":""
"imageProfile":""
"phone":""
``` 

status 200

```shel
{
	"updatedAt": "2023-03-26T21:55:24.494Z",
	"createdAt": "2023-03-24T22:58:42.119Z",
	"isActive": true,
	"isAdm": false,
	"imageProfile": "https://www.omegascopio.com.br/wp-content/uploads/2022/09/Genshin-Impact-anime.jpg",
	"phone": "99 99999999",
	"email": "victor@mail.com",
	"name": "victor",
	"id": "9d531bf2-28b6-423f-a344-2d59b3bbd98a"
}
```  
delete 

status 204

sem corpo


Rota

todas precisam de autenticação do token 

```shel
  /contact
``` 

create 

body

```shel
{
	"name": "teste",
	"email": "teste159@mail.com",
	"phone": "123456789"
}
``` 

status 201 

```shel
{
	"id": "fb53c418-7fee-49f5-985b-a5e2c48d7b9c",
	"name": "teste",
	"email": "teste159@mail.com",
	"phone": "123456789",
	"createdAt": "2023-03-27T18:37:23.966Z",
	"updatedAt": "2023-03-27T18:37:23.966Z"
}
``` 

get

status 200

```shel
[
	{
		"id": "9e289bf5-99b0-4661-98a1-0df5a253672e",
		"name": "lll",
		"email": "teste@mail.com",
		"phone": "4199999999",
		"createdAt": "2023-03-25T16:37:30.556Z",
		"updatedAt": "2023-03-28T21:03:48.853Z"
	}
]
``` 

delete e patch precisam do id do contato

```shel
  /contact/id
``` 

patch 

body

```shel
"name":""
"email":""
"phone":""
``` 

status 200

```shel
{
	"id": "01094c39-0c0b-49e2-a8ed-26a0d24dd4d0",
	"name": "testel",
	"email": "testel@mail.com",
	"phone": "9999999999",
	"createdAt": "2023-03-23T21:56:22.172Z",
	"updatedAt": "2023-03-23T22:13:21.575Z"
}
``` 

delete n tem corpo


Stack utilizada
Front-end: React, Styled Components e TypeScript

Back-end: Node, Express e PostgreSQL
