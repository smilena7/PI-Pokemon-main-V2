const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vida: {
        type: DataTypes.INTEGER,
      },
      ataque: {
        type: DataTypes.INTEGER,
      },
      defensa: {
        type: DataTypes.INTEGER,
      },
      velocidad: {
        type: DataTypes.INTEGER,
      },
      altura: {
        type: DataTypes.INTEGER,
      },
      peso: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};

/*
- ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi 
  - Nombre * - STRING
  - Vida - NUMERO
  - Ataque - NUMERO
  - Defensa - NUMERO
  - Velocidad - NUMERO
  - Altura - NUMERO
  - Peso - NUMERO
Todas estas propiedades estan dentro de stats en la api
*/
