const { Dog, Temperament } = require('../db');
const express = require('express')
const { Op } = require('sequelize')
const router = express.Router()
const axios = require('axios')
const { API_KEY } = process.env;

const URL = 'https://api.thedogapi.com/v1/breeds'


/*
https://api.thedogapi.com/v1/breeds?api_key=065ed998-fdfe-4954-96b5-cc1ac8b63210 listado de todas las razas

https://api.thedogapi.com/v1/breeds/search?q=Akita&api_key=065ed998-fdfe-4954-96b5-cc1ac8b63210 raza especifica

*/

router.get('/', async function (req, res) {
   const { name } = req.query;

   try {
      //[ ] GET /dogs lista completa
      if (name === undefined) {
         let newresponse = [];
         const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
         const dogsList = await Dog.findAll();
         newresponse = [...dogsList, ...response.data]
         return newresponse.length > 0 ? res.json(newresponse) : res.send('¡List of dogs not found!')
      }

      // [ ] GET /dogs?name="...":

      let newresponse = [];
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`)
      console.log(response.data)
      const dog = await Dog.findAll({
         include: [{
            model: Temperament,
            attributes: {
               exclude: ['createdAt', 'updatedAt', 'id_temp'],
            },
            through: {
               attributes: []
            }
         }],
         where: {
            name: name
         },
         attributes: {
            exclude: ['createdAt', 'updatedAt', 'id_dog'],
         }
      });



      let dogDbFilter = [];
      /*
      dog.forEach(element =>{
         dogDbFilter.push({
            name: element.name,
            temperaments: element.temperaments,
         })
      })
      */
      /*
      
      */


      newresponse = [...dog, ...response.data]
      //console.log(newresponse)
      //console.log(dog)
      return newresponse.length > 0 ? res.json(newresponse) : res.send('¡Dog not found!')

   } catch (error) {
      res.send(error);
   }
})

router.get('/:id_dog', async function (req, res) {
   const { id_dog } = req.params;
   //console.log(id_dog)
   //console.log(Temperament)
   try {

      let newresponse = [];

      if (id_dog.indexOf('-') !== -1) {
         const dog = await Dog.findAll({
            include: [{
               model: Temperament,
               attributes: {
                  exclude: ['createdAt', 'updatedAt', 'id_temp'],
               },
               through: {
                  attributes: []
               }
            }],
            where: {
               id_dog: id_dog,
            },
            attributes: {
               exclude: ['createdAt', 'updatedAt', 'id_dog'],
            }
         });

         dog.forEach(element => {

            let properties = []            
            for(let i = 0; i < element.temperaments.length; i++) {
               properties.push(Object.values(element.temperaments[i].name).join(''))
            }
            let temperamentsFilter = properties.join(', ')

            newresponse.push({
               name: element.name,
               height: element.fullheight,
               weight: element.fullweight,
               life_span: element.fullLife_span,
               temperaments: temperamentsFilter,
            
            })
                        
         })

         return newresponse.length > 0 ? res.json(newresponse) : res.send('¡Dog not found!')

      } else {
         const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id_dog}&api_key=${API_KEY}`);
         //console.log(response.data)

         for (let property in response.data) {
            while (newresponse.length === 0) {
               newresponse.push({
                  name: response.data.name,
                  height: response.data.height,
                  weight: response.data.weight,
                  life_span: response.data.life_span,
                  temperament: response.data.temperament,
               })
            }

         }
         //console.log(newresponse)

         //newresponse.push(response.data)

         return newresponse.length > 0 ? res.json(newresponse) : res.send('¡Dog not found!')
      }


   } catch (error) {
      res.send(error)
   }
})



//router.get('/')
module.exports = router;