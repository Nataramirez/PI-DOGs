const { urlencoded } = require('body-parser');
const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id_dog: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      //unique: true,
    },
    heightmin: { 
      type: DataTypes.STRING,
    },    
    
    heightmax: { 
      type: DataTypes.STRING,
    },
        
    fullheight: { 
      type: DataTypes.VIRTUAL,
      get(){
        return `${this.heightmin} - ${this.heightmax}`;
      },
      /*set(value) {
        throw new Error('Do not try to set the `fullHeight` value!');
      }*/
    },  
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    life_spam: {
      type: DataTypes.INTEGER,
    },
  });
};
