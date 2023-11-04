FROM node:18.18.2-alpine3.18

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm install
COPY ./api.js ./

EXPOSE 5000

# CMD ["npm","start"]
ENTRYPOINT ["npm","start"]