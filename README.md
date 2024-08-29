
# PassKey - Password Manager

## Overview
**PassKey** is a simple and efficient password manager that allows users to store, manage, and retrieve their passwords securely. Built using React, this app provides an easy way to manage credentials for different sites, copy them to the clipboard, and view/hide passwords as needed.

## Features
- **Add Passwords**: Save passwords along with the associated website and username.
- **View & Hide Passwords**: Toggle between showing and hiding passwords.
- **Copy to Clipboard**: Easily copy site URLs, usernames, and passwords to the clipboard with one click.
- **Edit & Delete Passwords**: Update or remove passwords from the list.
- **Persistent Storage**: Passwords are saved to local storage, so they persist even after closing the browser.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pulkitsharma4/passkey.git
   ```

2. Navigate to the project directory:
   ```bash
   cd passkey
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173`.

## Usage
1. Enter the website URL, username, and password in the input fields.
2. Click **Add** to save the password.
3. View or hide the password using the eye icon.
4. Copy the site, username, or password by clicking the copy icon.
5. Edit or delete the password using the respective icons.

## Technologies Used
- **React**
- **React Toastify**: For displaying toast notifications.
- **Local Storage**: For persisting data.

## Screenshots

### Add Password
![Add Password](public\screenshots\pic-2.png)

### Password List
![Password List](public\screenshots\pic-1.png)

### Edit/Delete Password
![Edit/Delete Password](public\screenshots\pic-3.png)
