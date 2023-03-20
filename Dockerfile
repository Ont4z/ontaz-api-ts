FROM node:16-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

RUN npm run test

# RUN rm -rf test && rm -rf node_modules

# RUN npm install --prod
# RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]
