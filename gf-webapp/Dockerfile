FROM node:18.3-alpine
WORKDIR /gf-webapp
COPY . .
RUN npm i -g pnpm

CMD pnpm dlx serve ./build -p 3000 -s
EXPOSE 3000

