FROM node:18.13.0-alpine3.17 as build-stage
WORKDIR /app

COPY package.json  .

RUN npm install

COPY . .

EXPOSE 8081

CMD ["npm","start"]