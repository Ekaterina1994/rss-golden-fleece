FROM node:18.3-alpine
WORKDIR /gf-server-resources
COPY . .
RUN npm i -g pnpm
RUN pnpm i
RUN pnpm run build
CMD pnpm node ./build/main.js
EXPOSE 3500

