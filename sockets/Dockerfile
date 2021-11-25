FROM node:14.15

# Create app directory
RUN mkdir -p /usr/src/app
RUN chmod -R 777 /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . .
RUN npm install --production --silent

EXPOSE ${SOCKETPORT}
CMD [ "node", "index.js" ]