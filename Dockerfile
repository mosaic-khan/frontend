#FROM node:21-alpine
FROM registry.docker.ir/node:21-alpine 

WORKDIR /app

COPY package*.json .

RUN npm i

ENV NODE_ENV production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]