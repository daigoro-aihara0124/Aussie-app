FROM node:12.18.3-alpine

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN apk update && yarn global add @vue/cli

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn run build

EXPOSE 8080

CMD [ "http-server", "dist" ]
