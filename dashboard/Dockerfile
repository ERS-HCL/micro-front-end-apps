FROM node:17 as build-deps
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
COPY . ./
EXPOSE 8001
#RUN pnpm start --http --port 8001
CMD ["pnpm", "start", "--http", "--port", "8001"]