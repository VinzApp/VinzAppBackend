FROM node:latest
WORKDIR /app/src
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ls
CMD pm2 start ./dist/bundle.js