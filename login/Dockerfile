FROM node:17 as build-deps
WORKDIR /usr/src/app
COPY package.json  ./
RUN npm install -g pnpm
COPY . ./
EXPOSE 8002
CMD ["pnpm", "start", "--http", "--port", "8002"]