FROM node:latest
WORKDIR /app/src
COPY package.json .
RUN npm install
RUN npm i -g pm2
COPY . .
RUN npm run build
CMD npm run start