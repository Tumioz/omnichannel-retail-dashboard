# Omnichannel Retail Dashboard

[![CI/CD Pipeline](https://github.com/YOUR-USERNAME/omnichannel-retail-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR-USERNAME/omnichannel-retail-dashboard/actions/workflows/ci.yml)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

A full-stack web application designed to help retail staff monitor and manage omnichannel inventory and pricing. This project serves as a vertical slice of a production-grade internal tool, demonstrating full-stack data flow, RESTful API design, and component-based UI architecture.

## 🚀 Features

* **Omnichannel Inventory Visibility:** View real-time stock levels and SKUs fetched from a relational database.
* **Dynamic Pricing Engine:** Update product pricing via the UI, triggering asynchronous `PUT` requests to the backend.
* **Optimistic UI Updates:** Component-level state management ensures the interface remains responsive during network requests.
* **Automated CI/CD:** GitHub Actions pipeline automatically installs dependencies and runs unit tests on every push and pull request.

## 🛠️ Technology Stack

* **Frontend:** React (Vite), HTML5, CSS3
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL, parameterized queries (pg) to prevent SQL injection.
* **Infrastructure & QA:** Docker (Containerized DB), Jest & Supertest (API Unit Testing), GitHub Actions (CI/CD).

## 💻 Local Development Setup

### Prerequisites
Ensure you have the following installed on your local machine:
* [Node.js](https://nodejs.org/) (v18 or higher)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* Git

### 1. Start the Database
The project includes a `docker-compose.yml` and an `init.sql` file that will automatically spin up a PostgreSQL instance and seed it with mock retail data.
```bash
docker-compose up -d
```


### 2. Run the Backend API
Open a terminal in the root directory and navigate to the `api` folder:
```bash
cd api
npm install
npm start
```
The API will run on http://localhost:5000


### 3. Run the Frontend Client
Open a new terminal in the root directory and navigate to the `client` folder:
```bash
cd client
npm install
npm run dev
```
The React app will run on http://localhost:5173


🧪Testing
This project includes automated unit testing for the backend API. To run the tests locally:
```Bash
cd api
npm test
```


📈 Engineering Standards & Next Steps
This project was developed simulating an Agile workflow using feature branches, Pull Requests, and automated CI/CD checks before merging to main.

Future Roadmap (Cloud Integration):

• Containerize the Node.js API and React
  Frontend using multi-stage Dockerfiles.

• Deploy the application infrastructure to Microsoft Azure (Azure App Service for the API, Azure Static Web Apps for the React client, and Azure Database for PostgreSQL).

• Implement Azure Integration Stack/REST APIs for syncing stock levels with external POS systems.