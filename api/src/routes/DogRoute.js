const { Dog } = require('../db');
const express = require('express')
const router = express.Router()

/*
[ ] POST /dog:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos
*/

router.post('/', async function(req, res){
    const { name, weight, heightmin, heightmax, life_spam, temperament } = req.body;
    try {
        const newDog = await Dog.create({
            name, 
            weight, 
            heightmin,
            heightmax,
            life_spam,
                    
        })
        temperament.forEach(async e => {
           await newDog.addTemperament(e)
        })
        return res.json(newDog) 
        
        
    } catch (error) {
        res.send(error)
    }
} )

module.exports = router;