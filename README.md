# E-commerce Back-End Application

## Description

E-commerce plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. Databases store user and product information and we often must interact with their data in our applications.

This application is a working REST API using Express.js that utilizes Sequelize to interact with a MySQL database. HTTP route requests handle retrieving, creating, updating and deleting fields in the database tables. Models were used to create table schema with key constraints & validation via JavaScript.

Technologies & Key Concepts:

- Node.js
- REST api + HTTP routes
- Modularization
- Database schema creation, seeding & management

Packages used in this application:

- Express.js
- Dotenv
- MySQL2
- Sequelize

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To view this application's repository code and try it for yourself, [click here.](https://github.com/michiewillman/ecommerce-back-end-db)

You can clone this repo from GitHub via SSH using the following command to use this application on your local machine.

```bash
git clone git@github.com:michiewillman/ecommerce-back-end-db.git
```

Install the dependencies:

```bash
npm install
```

Run MySQL in terminal, then enter your password.

```bash
mysql -u root -p
```

Source database schema file to create database:

```bash
source <db/schema.sql>
```

Source database seeds:

```bash
npm run seed
```

Start the application:

```bash
npm start
```

## Usage

For a video showing the application's functionality, [click here.](https://watch.screencastify.com/v/YlP2yE8DcC6bTRteQa85)

# Deployment

N/A

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT

For more information on this license, [click here.](https://opensource.org/license/https://opensource.org/licenses/MIT)

## Contributing

N/A

## Tests

N/A

## Questions

If you have any questions, please open an issue or contact me via email at [contact@michiewillman.com](mailto:contact@michiewillman.com).

You can view more of my work on GitHub [here](https://github.com/michiewillman).
