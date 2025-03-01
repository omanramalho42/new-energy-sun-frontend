# Use a imagem oficial do Node.js
FROM node:20.17.0

# Instale o Bun
RUN curl -fsSL https://bun.sh/install | bash

# Adicione o Bun ao PATH
ENV PATH="/root/.bun/bin:$PATH"

# Defina as variáveis de ambiente
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dG91Y2hpbmctcGhvZW5peC04My5jbGVyay5hY2NvdW50cy5kZXYk
ENV CLERK_SECRET_KEY=sk_test_AvDWCmPzsOZaam8C8psdVVYXRlgTWZ8jFe57RwlvfG
ENV NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
ENV NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up
ENV SMTP_SERVER_USERNAME=omanpple42@gmail.com
ENV SMTP_SERVER_PASSWORD=Om120600!
ENV SMTP_SERVER_HOST=email-smtp.us-east-1.amazonaws.com
ENV SITE_MAIL_RECIEVER="mail-receiver-email"
ENV NEXT_PUBLIC_API_URL=http://localhost:3001

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie o package.json e bun.lockb para o diretório de trabalho
COPY package.json bun.lock ./

# Instale as dependências usando Bun
RUN bun install

# Copie o restante dos arquivos da aplicação
COPY . .

# Construa o projeto Next.js usando Bun
RUN bun run build

# Exponha a porta 3000
EXPOSE 3000

# Definição da variável de ambiente PORT
CMD PORT=3000

# Comando para rodar a aplicação
CMD ["bun", "start"]
