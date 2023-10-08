# DCCS Certificates App for internship program

Certificates App is a webapp created in React. This App is used for managing certificates, such as creating, editing, removing certificates. You can assign participants to certificates and you can add the supplier who issued the certificate. Different users can add multiple comments to the certificates. 

On the top right corner of Header component there is language switch beetwen English and Bosnian. 

## Project structure
Components folder contains all components that are used in the app for displaying data. Components folder has multiple subfolders for better code organisation.

Resources/icons folder contains all icons and images.
  
In pages folder I defined pages that are available in the app. 

All styles for app can be found in style.module.css file.

## Libraries

* **React Router** - React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. In certificate app react router is used for navigating to homepage, certificate overview page, new certificate page and edit certificate page. Routes are defined in App.js 

```js
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/certificate", element: <CertificateOverviewPage /> },
  { path: "/certificate/newcertificate", element: <NewCertificatePage /> },
  { path: "/certificate/editCertficate/:certificateId", element: <EditCertificatePage /> },
]);
```
* **React Context** - React Context is a way to manage state globally. I used react context to save active user. It is defined in user-context.js file.
```js
import React from "react";

const UserContext = React.createContext({
    selectedUser: "",
    setSelectedUser: (currentUser) => { }
})

export default UserContext;
```
* **IndexedDB with Dexie.js** - IndexedDB is a way for you to persistently store data inside a user's browser. Dexie. js is a JavaScript library that provides a straightforward way to work with indexedDB, a browser-based storage mechanism. With Dexie.js, you can easily create, read, update, and delete data in an indexedDB database. I used indexedDB with dexie to store certificate I implemented it inside a DataBaseSettings.js file
```js
import Dexie from 'dexie';
const db = new Dexie("Certficates");
db.version(1).stores({
  certificates: "++id,supplier,certificateType,validFrom,validTo,participants,comments",
});
export default db;
```
* **i18next** - is a very popular internationalization framework for browser or any other javascript environment. I used it for multilanguage support (English and Bosnian). Implementation is in i18n.js file.

* **MUI** - is a collection of React components built to enhance and offer improvements upon Google's Material Design. I used it mostly for buttons and links.

## How to run the App

Before starting the app, you will need to download the project dependencies. You can do it by executing command `npm install`.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

