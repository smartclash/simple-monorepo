# Monorepo Example

This repository has a simple `common` package and a `server` package.

- The `common` package has a `add` function that returns the sum.
- The `server` package is a simple express app that listens at port **8080**
  - Going to `http://localhost:8080/add/5/10` returns a JSON response that contains the sum of 5 and 10. This sum is calculated using the `add` function found inside `common` package.

## Installation

1. Git clone this repository

    ```bash
    git@github.com:smartclash/simple-monorepo.git
    ```

2. Install the dependencies (use only yarn)

    ```bash
    yarn
    ```

3. Start the express server

    ```bash
    yarn run start-server
    ```

## Extra commands

> Make sure each of these commands are run in seperate terminal session

- Developing express app? You might need to compile and restart it for every change.

    ```bash
    yarn run watch-server
    ```

- Also messing around with the `common` package? Make sure to compile that one too

    ```bash
    yarn run watch-common
    ```
