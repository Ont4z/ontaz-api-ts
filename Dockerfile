FROM node:16-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm run test

EXPOSE 8080
CMD ["npm", "start"]
