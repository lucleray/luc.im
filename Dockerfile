FROM mhart/alpine-node:10
WORKDIR /web
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build &&\
  yarn export -o /public &&\
  cp -r build-stats /public/
