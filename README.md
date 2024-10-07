# Star Review System

This is a **Product Review System** built with React that allows users to submit reviews and give star ratings to products. The app aggregates all ratings and displays the average rating with a visual representation of stars.

## Features

- Submit product reviews with a name, review text, and star rating.
- View all submitted reviews with user names and their ratings.
- Display the average rating of all reviews with full and half stars.
- Responsive UI built with **Bootstrap**.
- Deployed via GitHub Pages.

## Live Demo

You can check the live version of the project here:  
[Live Demo](https://jamesarf.github.io/Product-Review-System/)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/jamesarf/Product-Review-System.git
    ```

2. Navigate into the project directory:

    ```bash
    cd Product-Review-System
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the app:

    ```bash
    npm start
    ```

   This will run the app in development mode and open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured to be deployed on GitHub Pages. To deploy your version:

1. Add the `"homepage"` field to `package.json` with your GitHub Pages link (this is already set up as `"https://jamesarf.github.io/Product-Review-System"`).
   
2. Run the following command to build and deploy the app:

    ```bash
    npm run deploy
    ```

## Dependencies

The project uses the following main dependencies:

- **React**: JavaScript library for building the user interface.
- **Bootstrap**: For styling the app.
- **FontAwesome**: For rendering the star icons.
  
You can find all dependencies in the `package.json` file.

## License

This project is open-source and available under the MIT License.
