# Responsive dashboard design solution

# Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Setting up the repository](#setting-up-the-repository)
  - [Challenge encountered](#challenge-encountered)
- [Author](#author)


# Overview

## The challenge

- To reproduce a desktop pixel-perfect implementation of the home page of the Responsive dashboard design.

# Links

- [Solution URL](https://github.com/adetutudeborah/responsive-dashboard)
- [Live site URL](https://responsive-dashboard-beta.vercel.app/)
- [Figma Design](https://www.figma.com/file/ecAKL1petCMenoHjh0QhaW/%F0%9F%98%B5-Responsive-dashboard-design-using-Auto-Layout-(Community)-(Copy)?node-id=0%3A1&t=G3pOAd8z0hsd79X1-1)

# My process

# Built with

- React Js
- Tailwind CSS

# Setting up the repository

The Responsive dashboard design solution is created with Vite.js. Follow these steps to set up the repository on your local machine:

- Install `Vite.js` by running
```
npm install -g vite
```
- Create the project folder/name by running
```
vite my-project --template react
```
- Change into the project folder by running
```
cd my-project
```
- Install the dependencies by running
```
npm install
```
- Start the development server by running
```
npm run dev
```
- Open `http://localhost:5174/` in your browser to view the app

# Setting up Tailwind CSS with Vite

Install Tailwind CSS and other dependencies in the terminal after creating the React app with Vite using the following steps;

- Input this command to install the tailwindcss, postcss and autoprefixer dependencies
```
npm install -D tailwindcss postcss autoprefixer
```
- Enter this command to generate tailwind.config.cjs andpostcss.config.cjs configuration files.
```
npx tailwindcss init -p
```
- Add the paths to all of your template files in your tailwind.config.cjs file.
```
"./index.html",

"./src/**/*.{js,ts,jsx,tsx}",
```
- Add Tailwind Directives to Your CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Start the development server by running
```
npm run dev
```
- Open `http://localhost:5174/` in your browser to view the app

# Deployment
The Responsive dashboard design solution has been deployed on `Vercel`, and it can be accessed at the following URL: https://responsive-dashboard-beta.vercel.app/

# Author

- GitHub - [@adetutudeborah](https://github.com/adetutudeborah)
- Twitter - [@adetutuoluwa](https://twitter.com/adetutuoluwa2)



