# Overview

This is a nestjs based a monorepo project that allows user to register, login and query existing users.

User login functionality is implemented and register functionality is not implemented in frontend but with endpoint available in backend.

Login endpoint will generate and return a encrypted Jwt token, which expires in 1 day. The Jwt token is required for calling the get user endpoint.

Project is using MongoDB as the database, Redis as the cache.

Implemented with a redis based user locking mechanism. If a user tries to login with wrong password over 3 times, the user will be locked for maximum 5 minutes.

## Tech Stack

- Backend(based on [Nest.js](https://nestjs.com/)):

  - ORM: [Typegoose](https://mongoosejs.com/)
  - Database: [MongoDB](https://www.mongodb.com/)
  - Cache: [Redis](https://redis.io/)
  - Authentication: [JWT](https://jwt.io/)
  - Authorization: [graphql-shield](https://the-guild.dev/graphql/shield)
  <!-- - Message Queue(Todo): [rabbitmq](https://docs.nestjs.com/microservices/rabbitmq) -->
  <!-- - Logging(Todo): [elk](https://www.elastic.co/what-is/elk-stack) -->
  - Data Migration: [ts-migrate-mongoose](https://www.npmjs.com/package/ts-migrate-mongoose)

- Automation based on [Docker Compose](https://docs.docker.com/compose/)
  <!-- - [ ][Github Actions](https://docs.github.com/en/actions) -->
- Misc:

  - Testing: [Jest](https://jestjs.io/)
  - React & Vite for a very basic sample frontend project

## Project Structure

The project is structured as follows:

- `/`: Project root
  - `server`: The backend workspace.
    - `modules`: The different modules of the application.
      - **`identity`**: The identity microservice(**most logic goes this project**).
        - `src`: The source code of the identity microservice.
          - `auth`: The authentication module.
          - `user`: The user module.
          - `shared`: The share components like dtos and inputs and etc..
          - `app.module.ts`: The main module of the identity microservice.
          - `app.config.ts`: The configuration file of the identity microservice.
          - `app.permissions.ts`: The permissions setup file of the identity microservice.
          - `main.ts`: The entry point of the identity microservice.
          - `index.ts`: The exports of the identity microservice(as a library).
        - `.env.local`: The environment variables for local development of identity microservice.
        - `.env.development`: The environment variables for docker development instance of identity microservice.
        - `test`: The test folder, unit tests are placed together with the corresponding code files.
        - `migrations`: Data migrations for `ts-migrate-mongoose`.
      - `libs`: The shared lib module (to be optimized).
    - `api`: The API gateway(basically shares the same structure as the identity microservice, with less dependencies).
  - `clients`: The frontend clients.
    - `desktop`: The desktop (website) client.
      - `.env.local`: The environment variables for local development of desktop client.
      - `.env.development`: The environment variables for docker development instance of desktop client.
  - `dev_env`: Dependencies for local docker full stack deployment.
  - `init_workspace.ps1`: The script to setup the workspace for docker development.
  - `xorgx.code-workspace`: The vscode workspace file(to be optimized).

# Getting Started 

## Docker Development Approach

Prerequisites(with setup automation script for windows platform):

- docker-desktop
- pwsh(with administrator permission)
- nodejs-lts >= 18.19.0
- openssl

1. run script in repo root folder using pwsh with administrator permission, and follow instructions to setup prerequisites:

```pwsh
# run `.\init_workspace.ps1` will setup prerequisites automatically
.\init_workspace.ps1
```

2. run `pnpm migrate:up:development` at `./server/modules/identity` to migrate seed data to container mongodb.

3. open browser and access the frontend at [https://desktop.dev.xorgx.tech](https://desktop.dev.xorgx.tech) and the backend at [https://api.dev.xorgx.tech](https://api.dev.xorgx.tech/graphql).

> Note: This project will setup a fresh local dev environment with all the dependencies running in docker containers, these dependencies may conflict with your local environment if you already have some of the dependencies installed.

list of accessible endpoints:

- [traefik(reverse proxy)](https://traefik.dev.xorgx.tech) with default port of 80,443
- [dns server](https://dns-server.dev.xorgx.tech) with default port of 53,5380
- [redis](http://redis.dev.xorgx.tech:6379) with default port of 6379
- [mongodb](http://mongo.dev.xorgx.tech:27017) with default port of 27017
- [api(gateway)](https://api.dev.xorgx.tech/graphql) with default port of 3000
- [identity(micro service)](https://identity.dev.xorgx.tech/graphql) with default port of 3001
- [desktop](https://desktop.dev.xorgx.tech) with default port of 4003

## Local Development Approach

Prerequisites:

- node ~ 18.19.0 with npm installed
- pnpm ~ 8.10 installed globally
- redis running on localhost:6379
- mongodb running on localhost:27017, replica set is preferred

Steps to run the project:

1. start the identity micro service

```pwsh
# run at ./server/modules/identity
pnpm install && pnpm migrate:up && pnpm start:dev
```

2. start the api gateway

```pwsh
# run at ./server/api
pnpm install && pnpm start:dev
```

3. start the frontend app

```pwsh
# run at ./clients/desktop
pnpm install && pnpm start:dev
```

list of accessible endpoints:

- [redis(as prerequisites)](http://localhost:6379) with default port of 6379
- [mongodb(as prerequisites)](http://localhost:27017) with default port of 27017
- [api(gateway)](http://localhost:3000/graphql) with default port of 3000
- [identity(micro service)](http://localhost:3001/graphql) with default port of 3001
- [desktop](http://localhost:4003) with default port of 4003


## Recommendations for better dev experience:

- Use [vscode workspace](https://code.visualstudio.com/docs/editor/workspaces) to open this project.
- Install recommended vscode extensions.
- Utilize vscode [tasks](https://code.visualstudio.com/docs/editor/tasks) for automation scripts.


# Testing

Tests only covered the identity micro service for now, to run tests:

```pwsh
# run at ./server/modules/identity
pnpm run test:cov
```

# Deployment

todo
<!-- See `./.github/workflows/cd.yml` for deployment details. -->

# Q&A

todo

# Todos

- [x] Add authorization for get users endpoint with test cases
- [x] Add auto migration for local and docker develop deployment
- [x] Add input validation for login request
- [x] Implement graphql-shield based authorization
- [x] Unify jest test coverage report
- [x] Implement desktop client with automation
- [x] Optimize docker build process
- [ ] Better workspace automation tasks
- [ ] Add test cases for libs
- [ ] Optimize logging middleware
- [ ] Optimize dependencies
- [ ] Rbac based authorization
- [ ] Gql subscription
- [ ] Github actions based ci/cd
