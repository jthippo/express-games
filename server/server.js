const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));

// Give access to our data
const data = require("./games.json");

// Function returns an array with all games that match the year parameter
function findGameByYear(year) {
  return data.filter((game) => game.year == year || !year);
}

// Endpoint for /
app.get("/", (request, response) => {
  response.json("Hey Johnny");
});

// Endpoint for /games
// localhost:8080/games?year=X
app.get("/games", (request, response) => {
  const games = findGameByYear(request.query.year);
  response.json(games);
});
