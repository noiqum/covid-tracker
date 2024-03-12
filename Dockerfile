FROM node:alpine as builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm" , "run" , "start" ]

EXPOSE 3000
