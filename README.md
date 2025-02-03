# Hobby Explorer
HobbyHub

Introduction

The HobbyExplorer is a web application designed to help users explore, track, and manage their hobbies efficiently. It features a backend API, a frontend interface, and a database to store user activities.

Technologies

Frontend: React (hobbies-app)

Backend: Node.js / Express (backend)

API: REST API (API folder)

Database: MongoDB

Authentication: JWT

Package Manager: npm

Installation

Prerequisites

Ensure you have the following installed:

Node.js & npm

MongoDB

Steps to Install

1. Clone the Repository

git clone https://github.com/yourusername/HobbyHub.git
cd HobbyHub

2. Install Dependencies

Navigate to respective directories and install required dependencies:

cd backend
npm install
cd ../hobbies-app
npm install

Usage

1. Start the Backend Server

cd backend
npm start

2. Start the Frontend

cd hobbies-app
npm start

3. Access the Application

http://localhost:3000

Environment Variables

Create a .env file in the backend directory and define the required variables:

PORT=5000
DB_URI=mongodb://localhost:27017/hobbyhub
JWT_SECRET=your_secret_key

Setup and Configuration

Backend: Configure database connection in backend/config/db.js.

Frontend: Update API endpoint in hobbies-app/src/config.js.

API Routes: Defined in backend/routes/.

API Documentation

API endpoints are available under /api.

Example: http://localhost:5000/api

Contributing

Fork the repository.

Create a feature branch (git checkout -b feature-name).

Commit your changes (git commit -m 'Add feature').

Push to the branch (git push origin feature-name).

Open a Pull Request.

License

This project is licensed under the MIT License.

