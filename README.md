# Next-leaflet

## Table of Contents

- [Introduction](#introduction)
- [Backend](#backend)
- [Installation](#installation)
- [Structure](#structure)
- [Deployment](#deployment)

## Introduction

This project is a Node.js server designed to synchronize data with a Google Sheet. The choice of technologies and architecture was driven by several considerations:

- **Express.js Framework:** Chosen for its simplicity, flexibility, and widely-adopted nature, Express.js is well-suited for building RESTful APIs. It allows us to define routes, middleware, and controllers with ease.

- **Google-spreadsheet Library:** Instead of using the Google Sheets API directly, we opted for the `google-spreadsheet` library. This library simplifies interactions with Google Sheets, making it more convenient for our use case.

- **TypeORM with PostgreSQL:** TypeORM provides a robust Object-Relational Mapping (ORM) solution for TypeScript and JavaScript. PostgreSQL, a powerful open-source database, was chosen for its reliability and support for complex queries.

- **TypeScript:** The decision to use TypeScript brings static typing to our codebase, enhancing code quality and providing better developer tooling.

## Backend

- **Nest.js:** A powerful and modular Node.js framework used for building the custom backend. Nest.js provides a structured and efficient way to create scalable and maintainable server-side applications.

- **TypeORM with PostgreSQL:** The backend uses TypeORM with PostgreSQL for database interactions, ensuring a reliable and performant storage solution.

- **Cloudinary:** Cloudinary is employed for handling images, providing a cloud-based solution for storage and manipulation.

## Installation

1. **Clone the repo**

```bash
github.com/andrey-lawyer/test-google-sheets
```

2. **Install dependencies** It's recommended to use npm:

```
npm install
```

3. **Create a .env file** in the root directory with the following content:

- NEXT_PUBLIC_BACKEND_API = https://map-backend-gx6r.onrender.com/

## Structure

The project is structured as follows:

- _components:_ React components used throughout the application.
- _hooks:_ Custom React hooks.
- _pages:_ Next.js pages representing different routes.
- _public:_ Static assets such as images and styles.
- _services:_ Business logic and external service interactions.
- _types_: TypeScript types.

## Deployment

The project is currently deployed on [Netlify](https://lively-croquembouche-f9b6f3.netlify.app). .

Feel free to check the live deployment and interact with the application.
