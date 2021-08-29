const { Dog } = require('../db');
const express = require('express')
const router = express.Router()

/*
[ ] POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos
*/

router.post('/', async function(req, res){
    const { name, heightmin, heightmax, weightmin, weightmax, life_span, temperament } = req.body;
    try {
        const newDog = await Dog.create({
            name, 
            weightmin, 
            weightmax, 
            heightmin,
            heightmax,
            life_span,
                   
        });
        temperament.forEach(async e => {
           await newDog.addTemperament(e)
        });
        return res.json(newDog) 
        
        
    } catch (error) {
        res.send(error)
    }
} )

module.exports = router;