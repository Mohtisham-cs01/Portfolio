# Developer Portfolio

This is a developer portfolio website built with React and Vite.

## Features

*   **Home:** A brief introduction to the developer.
*   **About:** More detailed information about the developer's background and skills.
*   **Projects:** A showcase of the developer's projects.
*   **Experience:** A summary of the developer's work experience.
*   **Skills:** A list of the developer's technical skills.
*   **Blog:** A blog where the developer can share their thoughts and experiences.
*   **Contact:** A form to contact the developer.

## Technologies Used

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [React Router](https://reactrouter.com/)
*   [ESLint](https://eslint.org/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/your_project_name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the app in the development mode, run the following command:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run lint`: Lints the project files.
*   `npm run preview`: Serves the production build locally.

## Project Structure

```
my-react-app/
├── public/
│   ├── data/
│   │   ├── blogPosts.json
│   │   ├── experience.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   └── socialLinks.json
│   └── ...
└── src/
    ├── assets/
    ├── components/
    │   ├── Footer.jsx
    │   ├── Layout.jsx
    │   ├── Navbar.jsx
    │   └── ...
    ├── context/
    │   └── AppContext.jsx
    ├── pages/
    │   ├── About.jsx
    │   ├── Blog.jsx
    │   ├── Contact.jsx
    │   ├── Experience.jsx
    │   ├── Home.jsx
    │   ├── Projects.jsx
    │   └── Skills.jsx
    ├── App.css
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.