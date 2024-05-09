# setup
FROM node:18.19.0-alpine AS app
RUN npm install -g serve

# build
FROM node:18.19.0-alpine AS node-build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# start
FROM app
WORKDIR /app
COPY --from=node-build /app/dist /app/dist
EXPOSE 4002
ENTRYPOINT ["serve", "-s", "dist", "-l", "4002"]
