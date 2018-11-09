FROM node:8

WORKDIR /dockertest/navigation

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1129

CMD [ "npm", "run", "server" ]