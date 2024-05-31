---

# Playwright Testing Framework

This project is a showcase of the Playwright testing framework using fictional data. It demonstrates how to use Playwright for UI and API testing, along with Knex.js for database interactions. Although the data used in this project is fictional, the structure and tests are fully functional and can be adapted for real-world applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running Tests](#running-tests)

## Introduction

This project serves as a comprehensive example of using the Playwright testing framework for both UI and API testing, alongside Knex.js for database interactions. The data and endpoints provided are fictional but can be replaced with real data and endpoints to create fully functional tests for your applications.

## Features

- **UI Testing**: Automated browser tests using Playwright.
- **API Testing**: REST API tests using Playwright.
- **Database Interactions**: Using Knex.js to interact with a SQL database. [Knex.js](https://knexjs.org/)
- **Comprehensive Examples**: Examples of locators, actions, assertions, and more.

## Setup

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (>= 6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pdobrzynski/playwright-testing-framework.git
   cd playwright-testing-framework
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables in `.env`:


## Usage

### Running Tests

- To run all tests:

  ```bash
  npm run test
  ```

- To run on a specific environment:

  ```bash
  npm run test:dev
  ```

- To view the test report:

  ```bash
  npx playwright show-report
  ```
