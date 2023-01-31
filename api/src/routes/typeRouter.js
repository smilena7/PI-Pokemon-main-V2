const { Router } = require("express");
const router = Router();
//const { Tipo } = require("../db.js");

router.get("/", async (req, res) => {
  res.send("in typeRouter");
});

module.exports = router;
