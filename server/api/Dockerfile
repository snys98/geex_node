# setup
FROM node:18.19.0-alpine AS app

# build
FROM node:18.19.0-alpine AS node-build
RUN npm install -g pnpm
WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .
RUN pnpm install
COPY . .
RUN pnpm run build
RUN pnpm prune --prod

# start
FROM app
WORKDIR /app
COPY --from=node-build /app/node_modules /app/node_modules
COPY --from=node-build /app/dist /app
EXPOSE 3000
ENTRYPOINT ["node", "main.js"]
