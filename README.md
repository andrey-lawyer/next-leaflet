# Next-leaflet

## Table of Contents

- [Introduction](#introduction)
- [Backend](#backend)
- [Installation](#installation)
- [Structure](#structure)
- [Deployment](#deployment)

## Introduction

This project is a Next.js application designed to display a map with markers and a search functionality. The choice of technologies and architecture was driven by several considerations:

- **Next.js Framework:** Chosen for its simplicity, flexibility, and efficient development of React applications. It provides server-side rendering and a great developer experience.

- **Leaflet Library:** Used for interactive maps, Leaflet is a lightweight library that provides an elegant and simple way to display maps on the web. It integrates seamlessly with React through the react-leaflet package.

- **GeoJSON:** GeoJSON is utilized for representing geographic data. It allows for the encoding of various geographic data structures and is compatible with Leaflet.

- **Formik and Yup:** Formik is employed for handling forms, while Yup is used for form validation. This combination streamlines the form development process.

- **Axios:** Axios is a popular HTTP client used for making requests to external APIs. It is employed for fetching data in this project.

## Backend

- **Nest.js:** [project files](https://github.com/andrey-lawyer/nest-backend-accommodation) A powerful and modular Node.js framework used for building the custom backend. Nest.js provides a structured and efficient way to create scalable and maintainable server-side applications.

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
