FROM node:16-alpine AS build

# diretorio da aplicação
WORKDIR /app

# copiando arquivos de dependências
COPY pacage*.json ./


# instalando dependências
RUN npm install

# copiando demais arquivos
COPY . .

# criando build do projeto
RUN npm run build

# servidor web nginx
FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /user/share/nginx/html

EXPOSE 80


# ao iniciar servidor
ENTRYPOINT ["nginx", "-g", "daemon-ff;"]
