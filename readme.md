# Cavaleiros do Zodíaco API

Ola, nesta documentação eu vou explicar sobre uma REST que criei utilizando Node.js, TypeScript, Fastify, Prisma e SQLite.

A REST (Representational State Transfer) é um estilo de arquitetura de software que define um conjunto de regras e convenções para criar aplicações que expõem serviços através da internet. Com a REST, é possível acessar recursos e operá-los através de chamadas HTTP, como GET, POST, PUT e DELETE.

Node.js é uma plataforma de código aberto que permite a criação de aplicações server-side utilizando JavaScript. O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática ao código, o que aumenta a qualidade e facilita a manutenção do código.

Fastify é um framework web para Node.js que é rápido, leve e fácil de usar. Ele é baseado em uma arquitetura de pipeline, o que o torna ideal para criar aplicações REST.

O Prisma é uma ferramenta que facilita o trabalho com bancos de dados relacionais, permitindo a criação de queries SQL de forma simples e segura. Neste projeto, utilizamos o SQLite como banco de dados, que é um sistema de gerenciamento de banco de dados relacional de código aberto.

A REST criada neste projeto expõe os seguintes recursos:

- **saints**: permite a criação, leitura, atualização e exclusão de cavaleiros. Cada cavaleiro tem um nome, informações adicionais e um mestre relacionado.
- **master**: permite a criação, leitura, atualização e exclusão de mestres. Cada mestre tem um nome e outras informações.

Segue também o endereço para testar a aplicação: <https://cdzwiki-api.up.railway.app/>

Além dos recursos mencionados acima, a REST também expõe os seguintes endpoints:

- "**/api/saints/post**": permite criar um cavaleiro.
- "**/api/saints**": acessa todos os cavaleiros.
- "**/api/saints/:id**": permite acessar um cavaleiro específico pelo seu ID. Pode ser usado para alterar ou excluir os dados.
- "**/api/masters/post**": permite criar um mestre.
- "**/api/masters**": acessa todos os mestres.
- "**/api/masters/:id**": permite acessar um mestre específico pelo seu ID. Pode ser usado para alterar ou excluir os dados.
<!-- - "/saints/masters/:id": permite acessar todos os cavaleiros que possuem um determinado mestre. -->
<!-- - "/masters/saints/:id": permite acessar todos os mestres que possuem um determinado cavaleiro. -->

Para rodar a aplicação, é necessário instalar as dependências do projeto com o comando "**`yarn`**" e, em seguida, executar o comando "**`yarn dev`**" para iniciar o servidor. A aplicação estará disponível na porta **`3333`** da máquina local.

É possível testar a aplicação utilizando alguma ferramenta de teste de API, como o Insomnia. É importante notar que, ao criar ou atualizar um cavaleiro ou mestre, é necessário enviar os dados em um formato JSON válido, seguindo o seguinte modelo:

    {
      name: 'Seiya',
      alignment: 'Athena',
      charClass: 'Cavaleiro de Bronze',
      armour: 'Armadura de Pégaso',
      constelation: 'Pegasus',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/seiya-pegasus.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670354499920',
      sex: 'male',
      age: 13,
      sign: 'Sagitário',
      specie: 'humano'
    }

Para criar o mestre tem que adicionar o id do cavaleiro aprendiz dele no corpo da requisição:

    {
      name: 'Marin',
      alignment: 'Athena',
      charClass: 'Amazona de Prata',
      armour: 'Armadura de Águia',
      imageUrl:
        'https://ik.imagekit.io/jaspionapi/marin-hawk.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1670357312800',
      sex: 'male',
      age: 16,
      sign: 'Peixes',
      specie: 'humano',
      saintId: 1
    }

Espero que esta documentação seja útil para entender e utilizar a REST criada neste projeto. Qualquer dúvida ou sugestão, não hesite em entrar em contato. Obrigado!

## Autor

<div align='center'>

 <img style="border:4px solid orange; border-radius: 100%; padding:1px;" src="https://github.com/felpfsf.png" width="100px;" alt=""/>
 <br />
 <sub><b>Felipe F.</b></sub>

Made with ❤️ by Felipe F. 👋🏽 Keep in touch!

[![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/felipefsf/)](https://www.linkedin.com/in/felipefsf/)

</div>