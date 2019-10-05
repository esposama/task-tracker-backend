FROM node:latest

WORKDIR /opt/tasks

COPY package.json yarn.lock ./

RUN yarn

COPY src ./src
COPY config ./config
COPY test ./test
COPY public ./public

CMD ["yarn", "dev"]