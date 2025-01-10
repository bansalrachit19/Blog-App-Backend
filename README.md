# Blog-App-Backend

This repository contains the backend implementation for a Blogging System. It is built using **Node.js** and **Express**, with **MongoDB** as the database.

## Features

- Create, Read, Update, and Delete (CRUD) operations for blog posts.
- Add and manage comments for posts.
- Modular structure with separate controllers, routes, and models.
- Environment variable support using `.env` files.

## Prerequisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bansalrachit19/Blog-App-Backend.git

2. Navigate to the project directory:
   ```bash
   cd Blog-App-Backend
   
3. Install dependencies:
   ```bash
   npm install
   
4. Create a .env file in the root directory and add the following variables:
   ```bash
-     PORT = 4000.
-     DATABASE_URL = mongodb+srv://(project name on atlas):(password of your cluster)@cluster0.wlsiw.mongodb.net/(name of your database).

5. Start the MongoDB server (if not already running):
   ```bash
   mongod

## to run the server
```bash
npm run dev
