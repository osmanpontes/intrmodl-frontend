# Intrmodl Frontend

# Dependencies

You need to install:
  - [Node](https://github.com/creationix/nvm)
  - [Yarn](https://yarnpkg.com)

# Development

## Setup

At project folder:

```sh
cd path/to/project
```

Install dependencies:

```sh
yarn
```

## Running development server

```sh
yarn start
```

This will open a new tab on your default browser on the development application.
Now you can interact with it and make changes to the code.
The changes will be hot reloaded.

## Sending CSV File

Remember that the **Yard Code** must be an existing **yard_id** and the **Employee Code** must be an existing **employee_id**.

So, check it on database tables **yards** and **employees**.

This was generated using the seed script at Intrmodl Backend.

## Test

The project has no tests yet.

# Production

## Build

It will create a **/dist** folder containing the prodution artifacts.

```sh
yarn build
```
