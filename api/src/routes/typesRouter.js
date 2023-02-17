const { Router } = require("express");
const {
  getAllTypes,
  getTypeName,
} = require("../controllers/typesController.js");

const router = Router();

router.get("/types", getAllTypes);
router.get("/types-name", getTypeName);

module.exports = router;
