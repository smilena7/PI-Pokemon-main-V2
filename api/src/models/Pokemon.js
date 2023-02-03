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
      imagen: {
        type: DataTypes.STRING,
        // poner un defaultValue:
        //allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
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
  - Vida/hp - NUMERO
  - Ataque/attack - NUMERO
  - Defensa/defense - NUMERO
  - Velocidad/speed - NUMERO
  - Altura/height - NUMERO
  - Peso/weight - NUMERO

Todas estas propiedades estan dentro de stats en la api:
El stats 0 es: hp
El stats 1 es: attack
El stats 2 es: defense
El stats 5 es: speed




*/
