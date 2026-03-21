FROM node:24-slim

WORKDIR /usr/local/app

COPY package*.json ./

RUN npm install 

COPY . ./

RUN chown -R node:node /usr/local/app
 
USER node

EXPOSE 5173

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]