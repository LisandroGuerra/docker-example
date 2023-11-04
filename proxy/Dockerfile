FROM nginx:1.25.3-alpine3.18-slim

RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx/default.conf /etc/nginx/conf.d

EXPOSE 80