# Quiz Application

[![quiz-app](https://github.com/davidspiritu/quiz-app/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/davidspiritu/quiz-app/actions/workflows/pipeline.yml)

This project was generated using [Nx](https://nx.dev).

- Nx
- Node version v16.15.0
- Angular 15
- API Used: `https://the-trivia-api.com`
- Firebase

## Pre-requisites

### Install Dependencies

Run `npm ci --legacy-peer-deps`

Install the following (latest):

- [Node.js](https://nodejs.org/en/download)
- [Firebase Tools](https://www.npmjs.com/package/firebase-tools) for deploying
- [Visual Studio Code](https://code.visualstudio.com/download) as IDE
- [NVM](https://github.com/nvm-sh/nvm) (optional), so we can easily switch to different versions of node
- [Nx CLI](https://nx.dev/using-nx/nx-cli) via npm command, `npm i -g nx` (for better developer experience; no need to use npx command every time)
- [Git SCM](https://git-scm.com/downloads) for our version control system

## VSCode Extensions

### Required

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [TypeScript Import Sorter](https://marketplace.visualstudio.com/items?itemName=mike-co.import-sorter)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Recommended

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)

## Development server

Run `npx nx serve` or `nx serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npx nx run quiz-app:lint` run linter

Run `npx nx test` to execute the unit tests via [Jest](https://jestjs.io).

## Build

Run `npx nx build` or `nx build` to build the project. The build artifacts will be stored in the `dist/` directory. It will automatically be a production build.

## Deploy

Run `npm run builddeploy` or `npx run builddeploy` to build and deploy the application to firebase.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
