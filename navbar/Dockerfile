FROM node:17 as build-deps
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install
COPY . ./
CMD ["npm", "start"]
