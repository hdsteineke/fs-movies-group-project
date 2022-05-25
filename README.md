# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

![wireframe](/public/wireframe.png)

1. App.js
   - Router
   - JS file setup (RFCs)
     - rename .env file
2. Auth Page
   - login
   - signup
3. Fetch Utils
   - logout
   - getUser
   - check Auth
4. Nav
   - header
     - Search
     - Watched
     - Logout
6. Functions (Third party APIs)
   - getMovies
     - fetch utils
     - netlify function
-----------------------------------------
5. Search
   - Header
   - Movie List
     - Movies
       - Poster (aka movie item)
         - header (movie title)
         - img (movie image)
         - description (movie description)
         - Button (watched button)
   - form
     - label
       - input
     - button
7. Supabase Fetch Utils
   - getWatchedMovies
   - Watched Movies Table
     - id
     - user_id
     - created_date
     - movie_id
     - movie_title
     - poster_path
     - description
   - get watched movies
   - get all movies
     - pagination
     - search query
     - remove watched movie
8. Watched List
   - Header
   - reuse movies poster component from above
     - map all watched movies from fetch util
