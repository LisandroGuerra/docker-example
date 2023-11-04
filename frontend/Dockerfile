FROM node:18.18.2-alpine3.18

WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm install
COPY ./public/* ./public/
COPY ./src/* ./src/

EXPOSE 3000

# CMD ["npm","start"]
ENTRYPOINT ["npm","start"]