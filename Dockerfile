FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3007

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN npm install

COPY . /usr/src/app

EXPOSE 3007
CMD [ "npm", "run", "dev" ]
