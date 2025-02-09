# YouTube Layout Group

## Coding Convension
1. CamelCase ( Ex: exampleFunction() => {})
2. Use default folder structure
3. Use tailwind css for styling
4. Never changes other files that are not related to your task

## GitHub Convension
1. Do not push env file to github
2. Do not change the folder structure
3. Never overwrite the main branch
4. Do not declare youtube api key in the code

---------

## Description
This project is a YouTube layout clone built with React and Vite. It aims to replicate the YouTube interface and functionalities.

## Prerequisites
- Node.js
- npm (Node Package Manager)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/youtube-layout-group.git
   ```
2. Navigate to the project directory:
   ```sh
   cd youtube-layout-group
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Configuration
1. Create a .env file in the root directory of the project.
2. Add the following environment variables to  `.theenv` file:
   ```env
   VITE_API_URL=YOUR_API_URL
   ```

## Usage
1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Building for Production
1. Generate a production build:
   ```sh
   npm run build
   ```
2. Preview the production build:
   ```sh
   npm run preview
   ```

## Project Structure
```
.
├── public
│   └── (static files)
├── src
│   ├── components
│   ├── pages
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Acknowledgements
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)