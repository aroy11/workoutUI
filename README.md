# WorkoutUiFsd


# Stack

Angular CLI: 1.7.3
Node: 8.11.1
Angular: 5.2.9
typescript: 2.5.3
webpack: 3.11.0
bootstrap: 4.0.0
karma: 2.0.0
Jasmine: 2.8.0
Jenkins: 2.114
IIS: 10.0.16299.15

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` in a browser. The app will be loaded in the browser.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Jenkins
Run `git push` to push the staged changes to remote repository. Jenkins will poll GIT SCM every 5 minutes to pull out the latest changes(if any), trigger a build and host the latest changes in IIS.

## Production server
Navigate to `http://localhost:7777/` in a browser to load the deployed application.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma]
Karma tests added: 11/11 specs