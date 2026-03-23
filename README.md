<p align="center">
  <img width="237" height="52" alt="image" src="https://github.com/user-attachments/assets/684d77e4-71ea-4ac4-a6dc-dd8f49c40aad" />
</p>

# User Explorer Challenge
Fullstack application intended to list, search, filter and visualize details about users. The application consists of two parts, the **front-end** which is develop with JavaScript and ReactJS, and the **back-end** which is built in NodeJS and TypeScript. The purpose of this project is to present it as a proposal for the Fullstack developer vacancy.

## Project Structure

```bash
├── back-end
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── src
│   │   ├── app.ts
│   │   ├── config
│   │   │   └── config.ts
│   │   ├── controllers
│   │   │   └── userController.ts
│   │   ├── data
│   │   │   └── data.ts
│   │   ├── domain
│   │   │   └── user.ts
│   │   ├── error
│   │   │   └── appError.ts
│   │   ├── middleware
│   │   │   ├── errorHandler.ts
│   │   │   └── validation.ts
│   │   ├── routes
│   │   │   └── userRoute.ts
│   │   ├── server.ts
│   │   └── services
│   │       └── userService.ts
│   └── tsconfig.json
├── front-end
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.svg
│   │   ├── icons.svg
│   │   └── search.svg
│   ├── README.md
│   ├── src
│   │   ├── App.jsx
│   │   ├── assets
│   │   │   ├── hero.png
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   ├── components
│   │   │   ├── NavBar.jsx
│   │   │   └── UserCard.jsx
│   │   ├── css
│   │   │   └── stye.css
│   │   ├── main.jsx
│   │   ├── pages
│   │   │   ├── Form.jsx
│   │   │   └── Home.jsx
│   │   └── services
│   │       └── api.js
│   └── vite.config.js
└── README.md
```
## Getting Started
There are ways to run the application. You can:
1. Run the application locally
2. Run the application locally using Docker (and Docker compose)

### Pre-requisites
Before any configuration the project must be cloned:

```git
git clone https://github.com/emmanuel-portes/user-explorer-challenge.git
```
### Installation
#### Run the application locally
After cloning the project, change directory into user-explorer-challenge and in the **back-end** directory execute to install the dependencies:
```bash
  npm install 
```
```bash
  npm run build
```
```bash
  npm run start 
```
Change directory into user-explorer-challenge and in the **front-end** directory execute to install the dependencies:
```bash
  npm run build
```
```bash
  npm run start 
```
#### Run the application locally using Docker

After cloning the project, change directory into user-explorer-challenge and execute:
```bash
  docker compose up
```
Either way each service should be running on http://localhost:3100/api/v1.0/users/ and http://localhost:5173/ respectively.

### Usage
In the specific case that the API is needed to request indenpendently. The request can be made as:
```bash
  curl -X GET http://localhost:3100/api/v1.0/users
```
```bash
  curl -X POST http://localhost:3100/api/v1.0/users
    \ -H "Content-Type: application/json"
    \ -d '{
      "name": "Lucía Fernández", "phone": "+18295473912", "city": "Santiago de los Caballeros",
      "company": "CaribeTech Solutions", "email": "lucia.fernandez@caribetech.com"
      }'
```
## Screenshots
<p align="center">
  <img width="1190" height="633" alt="image" src="https://github.com/user-attachments/assets/00f933ec-381c-4641-9109-d268e1aadccb" />
</p>
<br>
<p align="center">
  <img width="1224" height="948" alt="image" src="https://github.com/user-attachments/assets/549d5135-3c82-4ebf-82a2-dfef4e21efcc" />
</p>
<br>

## Next Steps
- Modify behavior of Save Users form, so fields are resetted after a successfull submit. Also Color them in case of an error.
- Consider a better project structure
