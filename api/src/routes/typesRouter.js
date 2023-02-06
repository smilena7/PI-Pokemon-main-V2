const { Router } = require("express");
const getAllTypes = require("../controllers/typesController.js");
const router = Router();

router.get("/", getAllTypes);

module.exports = router;
