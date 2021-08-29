const { Temperament } = require('../db')
const express = require('express')
const { default: axios } = require('axios')
const router = express.Router()

const { API_KEY } = process.env;

/*
 ] GET /temperament:
Obtener todos los temperamentos posibles
En una primera instancia deberán obtenerlos desde la API externa y 
guardarlos en su propia base de datos y luego ya utilizarlos desde allí
*/

router.post('/', async function (req, res) {
    try {
        let array = [];

        for (let i = 0; i < req.body.length; i++) {
            const listTemp = await Temperament.create({
                name: req.body[i]
            })
            array.push(listTemp)
        }
        res.json(array)

    } catch (error) {
        res.send(error)
    }

})

router.get('/', async function (req, res) {
    const listTemps = await Temperament.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'id_temp']
        }
    })
    if(listTemps.length > 0) {
        res.json(listTemps)
    }else{
        res.send('nooooo ')
    }
    
    /*
    const { temperament } = req.params;
    let temperaments = [];

    try {
        let temp = [];
        let temp2 = [];
        let modelTemp = [];
        
        let response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        response.data.forEach(element => {
            temperaments.push(element.temperament)
            temp = temperaments.flatMap(x => [x.split(',')]);
            for (let index = 0; index < temp.length; index++) {
                for (let j = 0; j < temp[index].length; j++) {
                    temp2.push(temp[index][j].trimStart())
                }
            }
            for (let i = 0; i < temp2.length; i++) {
                if (!modelTemp.includes(temp2[i])) {
                    modelTemp.push(temp2[i])
                }
            }

        })       
        console.log(modelTemp)
        res.json(modelTemp)

    } catch (error) {
        res.send(error)

    }
    */


})

module.exports = router;