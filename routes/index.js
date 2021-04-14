const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/books");

// API Routes
router.use("/api", apiRoutes);

// If there is no API routes hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;