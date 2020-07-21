# Pedidos Online - PWA
Escolha os pratos de comida que você deseja e envie o espelho do pedido para o whatsapp da empresa. 

**Veja online** [Github Pages](https://lucas-av7.github.io/pedidos-online/)

## Framework e bibliotecas usadas
- **Vue.js**
- Vue-router
- Moment.js
- V-money e Vue-the-mask
- Vue-share-buttons
- Vue-PWA

## Como iniciar o projeto
Primeiro adicione o número do whatsapp para onde será enviado o espelho do pedido no arquivo .env
```
# Número do whatsapp ex: 5511988887777 (prefixo 55 + DDD + número)
VUE_APP_PHONENUMBER=
```

*É preciso ter instalado o NodeJS na sua máquina para continuar.*
Faça o download das dependências e rode o projeto executando os códigos abaixo a partir da pasta raíz.
```
$ npm install
$ npm run serve
```

**A partir deste momento, a aplicação estará disponível para acesso.** *(verifique o link de acesso no terminal)*

## Como compilar o projeto para produção
```
$ npm run build
```
**Os arquivos para upload no servidor estarão disponíveis na pasta criada */dist*.**