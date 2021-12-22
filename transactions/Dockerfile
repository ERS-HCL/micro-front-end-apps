FROM node:8.16 as build-deps
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
COPY . ./
EXPOSE 8005
CMD ["pnpm", "start", "--http", "--port", "8005"]