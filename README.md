<p align="center">
  <img width="237" height="52" alt="image" src="https://github.com/user-attachments/assets/684d77e4-71ea-4ac4-a6dc-dd8f49c40aad" />
</p>

# User Explorer Challenge
Fullstack application intended to list, search, filter and visualize details about users. The application consists of two parts, the **front-end** which is develop with JavaScript and ReactJS, and the **back-end** which is built in NodeJS and TypeScript. The purpose of this project is to present it as a proposal for the Fullstack developer vacancy.

<p align="center">
  <img width="1156" height="572" alt="image" src="https://github.com/user-attachments/assets/e21146e3-5c8a-44ac-95a2-6b9479414884" />
</p>

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
## Setup
