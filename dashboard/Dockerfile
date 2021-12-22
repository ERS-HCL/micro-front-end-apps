FROM node:17 as build-deps
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install
COPY . ./
#EXPOSE 8001
#RUN pnpm start --http --port 8001
CMD ["npm", "start"]