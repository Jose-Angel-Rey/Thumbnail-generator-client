<div align="center">
  <h1>Thumbnail generator app</h1>

  [![THUMB](https://img.shields.io/badge/Go_to_Thumbnail_generator-404040?style=for-the-badge&logo=ko-fi&logoColor=white)](https://thumbnail-generator-app.vercel.app/)
  
  <img src="https://user-images.githubusercontent.com/76404798/170847471-925a11c4-70d1-43ce-9e98-3ac3d7e42fa3.png" alt="Cover image" width="100%" />  
</div>  

---

This application is in charge of generating thumbnails based on an image that can be uploaded by the user from his device or by taking a picture with the camera.

The user will have the option to crop or resize the image before it is processed and generate thumbnails.

After uploading the image the thumbnails will be generated and the user will be able to preview the result, copy the image link to the clipboard or download the image.

---

## Features

- Responsive web design
- Login and user registration implemented using Auth0 services
- Upload images by drag and drop or by clicking on the marked area
- Upload images using the device camera
- Crop or resize the image to be used to generate thumbnails
- Displays load statuses depending on the operation being performed
- Preview the generated thumbnail
- Copy the generated thumbnail link to clipboard
- Download the generated thumbnail 
<!-- - It's Dockerized for local development -->
<!-- - Includes unit and end-to-end tests -->

---

## Environment variables

The application only needs the configuration of 2 environment variables which are used for the login service with Auth0.

`REACT_APP_AUTH0_CLIENT_ID`

`REACT_APP_AUTH0_DOMAIN`

Both environment variables can be obtained by creating a Single Page Application with React in Auth0 and giving permissions to `http://localhost:3000` to make requests to that service in order to run the login service.

![Auth0 config](https://user-images.githubusercontent.com/76404798/170896696-da765a1d-394b-449c-b058-a23c2dbca095.png)


In the application you will find an `.env.sample` file which you can use as a template to generate the `.env` file in which to place the corresponding values of the environment variables.

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn dev`

Run the application in development mode via a Docker image.

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
