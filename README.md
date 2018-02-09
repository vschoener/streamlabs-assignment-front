# Youtube Client

Manage UI interface for the final user. It will use the Youtube API as his main backend service to retrieve information

## Docker

You can use the basic docker / docker-compose command, but you should use the Makefile command, it contains the basics often used.

### Build and Install

To install your project inside the container, use
```bash
make build
make install
```

### Run

Let's run the container
```bash
make start
```

### Customize
In case you want to customize the services settings create a docker-compose.override.yml file and apply your needs.

## Locally

This project can be run on your computer if you have the necessaries tools / lib installed. It required Node.js / NPM and of course the command line interface of Angular.

### Install and Run
```bash
npm install && npm start
```

# Extra Angular Information

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
