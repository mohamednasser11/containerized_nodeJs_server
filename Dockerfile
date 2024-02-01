FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

COPY . /app

RUN npm install

CMD ["npm", "start"]

EXPOSE 3000