FROM node:12.0-slim AS builder
# set working directory
WORKDIR /app

# install dependencies and build the angular app
# RUN npm config set registry https://registry.npm.taobao.org
COPY package*.json ./
RUN npm install --production --registry=https://registry.npm.taobao.org
COPY . .

# expose port 80
EXPOSE 3000

CMD npm run start