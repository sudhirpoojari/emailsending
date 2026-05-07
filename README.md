# React & Node.js Email Sender Application

A full-stack web application built with React, Node.js, Express, and Nodemailer that allows users to send emails dynamically via an API endpoint using Gmail's SMTP server.

## 🚀 Features

- **Frontend**: Built with React and Vite for a fast, responsive user interface.
- **Backend**: Node.js and Express server to handle API requests.
- **Email Integration**: Uses Nodemailer to send emails securely via Gmail.
- **CORS Enabled**: Configured to safely accept requests from the frontend.
- **Environment Variables**: Secures sensitive credentials using `dotenv`.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, HTML, CSS
- **Backend**: Node.js, Express.js
- **Email Service**: Nodemailer (Gmail SMTP)

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- Node.js (v14 or higher)
- npm or yarn
- A Gmail account

### 🔑 Getting a Gmail App Password
To send emails using Nodemailer with Gmail, you cannot use your standard account password. You must generate an App Password:
1. Go to your Google Account Manage -> Security.
2. Turn on **2-Step Verification**.
3. Search for **App Passwords** in the security search bar.
4. Create a new app password (e.g., name it "Node Email App").
5. Copy the generated 16-character password (you will need it for the `.env` file).

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the following variables:
```env
PORT=5000
EMAIL_USER=your_gmail_address@gmail.com
EMAIL_PASS=your_16_character_app_password
```

Start the backend server:
```bash
node server.js
# Or use nodemon if installed: nodemon server.js
```
The server should now be running on `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

Start the Vite development server:
```bash
npm run dev
```
The React app should now be running (usually on `http://localhost:5173`).

## 📡 API Reference

### Send an Email
- **Endpoint:** `/send-email/`
- **Method:** `POST`
- **Content-Type:** `application/json`
- **Body:**
  ```json
  {
    "sendtext": "The content of the email message",
    "toemail": "recipient@example.com",
    "Subject": "Your Email Subject"
  }
  ```

## 📝 License
This project is licensed under the MIT License.