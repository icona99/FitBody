# FitBody Readme

Welcome to our React project! This project aims to provide a user-friendly interface for managing marathons. It includes features such as user authentication (login, register, logout), classes catalog browsing, class creation, and management functionalities (viewing details, editing, and deletion).

## Table of Contents

- Getting Started
- Features
- Technologies Used
- Backend Server
- Usage
- Contributing
- License

## Getting Started

To get started with this project, follow these instructions:

Server part Setup
Navigate to the Server Directory:
cd server
Install Server Dependencies and Start the Server Execute the following commands in order to start the server.
npm install
npm run client
npm run build
node ./server.js
Running the Server:
Once the server is started, it will listen for requests on:

http://localhost:3030/

Client Application Setup
Clone the Repository: You can clone the repository using the following command or download it as a ZIP file and extract it on your computer.

git clone https://github.com/icona99/FitBody

Navigate to the Project Directory:

Use the terminal to navigate to the project directory.
cd FitBody

Install Dependencies:
Install all the necessary dependencies by running the following command in your terminal:

npm install   
Run the Client Part: Start the React application with this command:
npm run dev
Open the Project: Access the application by opening the following URL in a web browser:  http://localhost:5173/

## Features

Our React project includes the following features:

- **User Authentication**:
  - Login: Users can log in using their credentials.
  - Register: New users can create an account by providing necessary information.
  - Logout: Users can securely log out of their accounts.

  Test User - email: peter@abv.bg password:123456

- **Classes Catalog**:
  - View Catalog: Users can browse through the available classes in the catalog.

- **Event Management**:

  - Create Event: Authenticated users can create new class events.
  - View Details: Users can view detailed information about specific class events.
  - Edit Event: Authenticated users can edit the details of the events they created.
  - Delete Event: Authenticated users can delete events they no longer wish to manage.
  - Search Event: Authenticated users can search for specific class eveby name.

## Technologies Used

This project is built using the following technologies:

- React: A JavaScript library for building user interfaces. React provides tools for developers to build applications that live on the web, mobile, or desktop.
-Different React libraries such as react-dom,react-spring/web,react-loader-spinner,react-modal,react-router-dom,react-slick,slick-carousel to make better UI and UX.
- SoftUni Practice Server: Utilized for backend services. This server is often used in educational contexts for practical exercises and provides a reliable back-end service for the application.
- HTML/CSS/JavaScript: Markup, styling, and scripting languages for web development.

## Backend Server

For backend functionalities such as user authentication, marathon management, and event handling, this project interfaces with a backend server running on localhost.

## Usage

To use this application effectively, follow these guidelines:

- **Login/Register**: If you're a new user, register for an account. If you're an existing user, log in using your credentials.
- **Browse Catalog**: Explore the available classes in the catalog.
- **Create Event**: If you're logged in, create a new class event by providing necessary details.
- **View Details**: Click on a specific event to view detailed information.
- **Edit/Delete Event**: If you're logged user, you can edit its details or delete it entirely.
- **Search Event**: If you're logged in, search for class event by providing name.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the Icona.
