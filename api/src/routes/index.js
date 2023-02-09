const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require("./pokemonsRouter.js");
const typesRouter = require("./typesRouter.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/api", pokemonsRouter);
router.use("/api", typesRouter);

module.exports = router;

// {}
