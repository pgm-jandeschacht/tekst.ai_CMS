# Tekst.ai CMS

This is the CMS for Tekst.ai. It's a project made by [Jan Deschacht](https://github.com/pgm-jandeschacht) commissioned by Arteveldehogeschool and [Tekst.ai](https://tekst.ai) as a final project for @Work5 en the associate degree Programming.

## Technical overview

The CMS is made in [Strapi](https://strapi.io/). It's a content management system for the web. The endpoint is consumable as a GraphQL API.

## Setup and usage

The app uses **yarn** to install dependencies and to run the website as well.

### Install dependencies

Run ```yarn install``` to install all dependencies.

### Environment variables

Make a file called `.env` in the root directory of the project and add the following lines:

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=OCy6KdO2okkorX5THy4DHw==,AU4ksr6x2z+xx8V2IIeZ3A==,qB7/7PltqZLj4x1bZ2cRVg==,v3V7QTc4iQYT6oGLEhgpuA==
API_TOKEN_SALT=F0uIq8Q0rD4go2D3cr8K3Q==
ADMIN_JWT_SECRET=0I7SbCuXKQ+6qOC3VLmQYQ==
JWT_SECRET=txnC3Nb3vSShQ1eKxGyC5w==
```

### Run the website

Run ```yarn develop``` to run the website locally. This will start the server and prompt you to open [localhost:1337](https://localhost:1337). Here you can access the website.

### Local build

To test the build locally, you can run ```yarn build``` to build the website. This will create a folder called `build` in the root directory of the project. afterward you can run ```yarn start``` to run the website.

## Deployment

The website is hosted on [render.com](https://render.com). To set it up you need to go to blueprints on the dashboard en connect to the repository. All the necessary commands and variables are in the render.yaml file so you don't need add something on render. Except the API_TOKEN_SALT environment variable needs to be added in the environment tab. Then it will start the build again. Now you are all set, a push to the main will trigger a build and a deploy.

## Live site

The website is deployed on [https://strapi-lhft.onrender.com/admin](https://strapi-lhft.onrender.com/admin).

## Login

To test the login, you can use the following credentials:
email: tekst.ai.test@gmail.com
password: Tester321
