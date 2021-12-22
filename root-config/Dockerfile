FROM node:14.18-alpine3.12 as build-deps
WORKDIR /usr/src/app
COPY package.json  ./
RUN npm install
COPY . ./
#EXPOSE 8001
#RUN pnpm start --http --port 8001
CMD ["npm", "start"]