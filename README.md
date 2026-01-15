# StudentNotesManager
# StudentNotesManager

StudentNotesManager — MERN-Based Student Notes Management System
Technical Design & Development Document

1. Introduction
1.1 Purpose

This document defines the complete technical design and development guidelines for the StudentNotesManager application.
The platform enables students to securely create, manage, and organize academic notes while providing role-based access for future scalability.

The project is designed to help students understand full-stack MERN development using a real-world CRUD-based application.

1.2 Target Audience

Undergraduate students

Faculty 

1.3 Learning Outcomes

JWT-based authentication

RESTful API development

MongoDB schema design

MERN stack architecture

CRUD operations

Secure backend–frontend integration

2. System Overview
2.1 User Roles
Role	Description
Student	Registers, logs in, creates, edits, deletes notes
Faculty Registers, logs in, creates, edits, deletes notes

2.2 Core Features

User authentication (Register / Login)

Secure note creation and management

Notes categorized by subject

Edit and delete notes

Search notes by title

JWT-protected routes

3. High-Level Architecture
[ React Frontend ]
        |
        | REST API
        |
[ Node.js + Express ]
        |
[ MongoDB ]

Key Principle

Single MERN Stack Application with Secure API Architecture

4. Database Design (DB-First Approach)
4.1 Database

MongoDB (Local / Atlas)

ODM: Mongoose

4.2 Collections
4.2.1 users
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "role": "student | faculty",
  "id": "string (Roll No / Faculty ID)",
  "yearOfStudy": "number (1–5 | null)",
  "section": "string | null",
  "branch": "string | null",
  "profilePic": "string | null",
  "createdAt": "Date",
  "updatedAt": "Date"
}


Indexes

email (unique)

4.2.2 notes
{
  "_id": "ObjectId",
  "title": "string",
  "subject": "string",
  "description": "string | null",
  "fileUrl": "string (PDF / DOC / PPT link)",
  "uploadedBy": "ObjectId (ref User)",
  "branch": "string",
  "yearOfStudy": "number (1–5)",
  "section": "string | null",
  "tags": ["string"],
  "visibility": "public | private | class",
  "downloads": "number",
  "createdAt": "Date",
  "updatedAt": "Date"
}



Indexes

userId

subject

5. Backend Design (Node.js + Express)
5.1 Technology Stack

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

bcrypt for password hashing

dotenv for environment variables

5.2 Backend Folder Structure
backend/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── app.js
│── .env
│── package.json

5.3 Authentication Flow

User registers with email & password

Password is hashed using bcrypt

User logs in

JWT token is generated

Token is sent in Authorization header

Protected routes verify JWT

5.4 API Endpoints
Auth APIs
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Login user
GET	/auth/me	Get logged-in user
Notes APIs
Method	Endpoint	Description
POST	/notes	Create a note
GET	/notes	Get all user notes
GET	/notes/:id	Get single note
PUT	/notes/:id	Update note
DELETE	/notes/:id	Delete note
5.5 Authorization

JWT middleware validates user

Notes can only be accessed by their owner

Unauthorized access is blocked

6. Frontend – MERN (React)
6.1 Tech Stack

React

React Router

Axios

Context API

CSS / Bootstrap

6.2 Folder Structure
src/
├── components/
├── pages/
├── context/
├── services/
├── utils/
└── App.jsx

6.3 Key Pages

Login

Register

Dashboard

Add Note

Edit Note

View Notes

7. State Management

React Context API

Stores authentication state

Handles JWT token persistence

8. Security Considerations

Password hashing using bcrypt

JWT authentication

Protected API routes

Input validation

Environment variables for secrets

9. Development Workflow

Modular backend design

REST API testing using Postman

Frontend-backend integration using Axios

Git-based version control

10. Future Enhancements

Note sharing between users

Role-based admin panel

File upload (PDF, images)

Cloud storage integration

Full-text search

11. Conclusion

The StudentNotesManager project demonstrates a complete MERN stack application with secure authentication, structured backend APIs, and an interactive frontend.
It serves as an excellent foundation for understanding real-world full-stack development concepts.

Project Name: StudentNotesManager
Document Owner: Keerthi Percherla
