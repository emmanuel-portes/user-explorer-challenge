FROM node:24-slim

ENV PORT 3100
ENV NODE_ENV prod

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3100

RUN useradd lex
USER lex

CMD ["npm", "run", "start"]