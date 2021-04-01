FROM node:15 as build

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./cloudEnv.js /app/cloudEnv.js
COPY ./webpack.config.js /app/webpack.config.js
COPY ./src /app/src

RUN npm install
RUN npm run build


FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./1.0-website /usr/share/nginx/html
#COPY ./public /usr/share/nginx/html
COPY --from=build /app/public/js /usr/share/nginx/html/js
