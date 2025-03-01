# **Documentação de Instalação e Uso - Frontend**

## **Pré-requisitos**

Antes de começar, verifique se você tem as seguintes ferramentas instaladas na sua máquina:

- **Node.js**: A versão do Node.js necessária está definida no Dockerfile, mas você pode verificar se tem o Node.js instalado com:
  - [Baixar Node.js](https://nodejs.org/)
  
- **Git**: Usado para clonar o repositório do GitHub.
  - [Baixar Git](https://git-scm.com/)

- **Docker e Docker Compose**: Utilizados para rodar a aplicação em containers.
  - [Baixar Docker](https://www.docker.com/get-started)

- **Bun**: Gerenciador de pacotes para o frontend.
  - [Baixar Bun](https://bun.sh/)

## **Clonando o Repositório**

Primeiro, clone o repositório do GitHub para a sua máquina local. Execute os seguintes comandos no terminal:

git clone https://github.com/seu-usuario/seu-repositorio.git cd seu-repositorio

markdown
Copiar
Editar

Substitua `seu-usuario` e `seu-repositorio` pelos nomes corretos do seu repositório no GitHub.

## **Instalação das Dependências**

Após clonar o repositório, instale as dependências do projeto com o **Bun**:

1. Se ainda não tem o Bun instalado, execute o comando abaixo para instalar:

curl -fsSL https://bun.sh/install | bash

csharp
Copiar
Editar

2. Em seguida, instale as dependências do projeto:

bun install

markdown
Copiar
Editar

Isso instalará as dependências listadas no `package.json` e criará o arquivo `bun.lockb`.

## **Rodando a Aplicação Localmente**

Você pode rodar o frontend da aplicação localmente utilizando **Docker** ou o **Bun**. Aqui estão os passos para cada método.

### **Rodando com Docker (Recomendado)**

1. Certifique-se de ter o Docker e o Docker Compose instalados corretamente.

2. No diretório raiz do projeto, execute o comando para construir a imagem Docker e iniciar os containers:

docker-compose up -d --build

css
Copiar
Editar

3. A aplicação será executada na porta `3001` (ou a que você configurou no `Dockerfile`).

   Acesse a aplicação em:

http://localhost:3001

markdown
Copiar
Editar

### **Rodando com Bun (Alternativa)**

Se você não quiser usar Docker, pode rodar a aplicação localmente com o **Bun**. Para isso, execute:

1. Inicie o servidor de desenvolvimento:

bun dev

css
Copiar
Editar

2. Acesse a aplicação em:

http://localhost:3001

markdown
Copiar
Editar

## **Comandos Comuns**

Aqui estão alguns comandos úteis para trabalhar com o frontend:

- **Instalar dependências**:

bun install

markdown
Copiar
Editar

- **Iniciar o servidor de desenvolvimento**:

bun dev

markdown
Copiar
Editar

- **Construir a aplicação para produção**:

bun run build

css
Copiar
Editar

- **Rodar a aplicação em modo produção**:

bun start

markdown
Copiar
Editar

## **Subindo Alterações para o GitHub**

Após fazer alterações no código, siga esses passos para enviar suas mudanças para o GitHub:

1. **Adicionar os arquivos modificados**:

git add .

markdown
Copiar
Editar

2. **Criar um commit**:

git commit -m "Mensagem explicando as alterações"

markdown
Copiar
Editar

3. **Enviar para o repositório no GitHub**:

git push origin main

markdown
Copiar
Editar

## **Problemas Comuns**

- **Erro: "bun: command not found"**
  - Solução: Verifique se o Bun foi instalado corretamente. Caso contrário, execute o comando de instalação novamente.

- **Erro: "Porta já em uso"**
  - Solução: Verifique se outro processo está usando a porta configurada (3001). Você pode matar o processo ou alterar a porta na configuração.