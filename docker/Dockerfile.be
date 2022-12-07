FROM node:16.14.2-alpine

# vi tri thu muc 
WORKDIR /app

COPY ./server/package.json .

# cau lenh run
RUN yarn install --production

# coppy source
COPY ./server .

EXPOSE 3333

CMD [ "yarn", "start" ]