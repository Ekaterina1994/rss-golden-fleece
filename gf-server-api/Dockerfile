FROM node:18.3-alpine
WORKDIR /gf-server-api
COPY . .
RUN npm i -g pnpm
RUN pnpm i

CMD node ./build/main.js
EXPOSE 3600

