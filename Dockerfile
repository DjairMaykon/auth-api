FROM node:lts-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
