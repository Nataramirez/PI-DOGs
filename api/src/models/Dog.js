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
        return `Height Min ${this.heightmin} - Height Max ${this.heightmax}`;
      },
      /*set(value) {
        throw new Error('Do not try to set the `fullHeight` value!');
      }*/
    },  
    weightmin: { 
      type: DataTypes.STRING,
    },    
    
    weightmax: { 
      type: DataTypes.STRING,
    },
    fullweight: {
      type: DataTypes.VIRTUAL,
      get(){
        return `Weight Min ${this.weightmin} - Weight Max${this.weightmax}`;
      },
    },
    life_span: {
      type: DataTypes.STRING,
    },
    fullLife_span: {
      type: DataTypes.VIRTUAL,
      get(){
        return `${this.life_span} years`
      },
    },
  });
};
