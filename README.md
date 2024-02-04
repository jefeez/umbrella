# Chat Using 

Sample chat using tailwindcss socket.io and sign-in and sign-up authentication with api

## Features

- authentication jwt
- sample chating with single room
- avatar uploading after first sign-up


## Getting Started

This project needs a backend with socket.io configuration and authentication with jwt to work

### Prerequisites

- [backend](https://github.com/jefeez/umbrella-server)


### Installation

Step-by-step instructions on how to install this project.

you need .env filer on project with this line below

```
VITE_APP_API = "http://localhost:3000/api" # authentication api with jwt
VITE_APP_WSS = http://localhost:3000 # socket.io communication
```

```bash
git clone https://github.com/jefeez/umbrella
cd umbrella
yarn install
```
