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
      if (name === undefined || name === null) {
         let newresponse = [];
         let fulldogDbFilter = [];
         let fulldogApiFilter = [];

         const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
         //console.log(response.data)
         response.data.forEach(element => {
            fulldogApiFilter.push({
               id: element.id,
               name: element.name,
               temperaments: element.temperament,
               weightmin: element.weight.metric,
               weightmax: element.weight.imperial,
               image: element.image.url,
            })
         })

         const dogsList = await Dog.findAll({
            include: [{
               model: Temperament,
               attributes: {
                  exclude: ['createdAt', 'updatedAt', 'id_temp'],
               },
               through: {
                  attributes: []
               }
            }],
            attributes: {
               exclude: ['createdAt', 'updatedAt', 'id_dog', 'life_span', 'fullLife_span',
                  'heightmin', 'heightmax', 'fullheight', 'fullweight'],
            }
         });
         dogsList.forEach(element => {
            let properties = []
            for (let i = 0; i < element.temperaments.length; i++) {
               properties.push(Object.values(element.temperaments[i].name).join(''))
            }
            let temperamentsFilter = properties.join(', ')
            fulldogDbFilter.push({
               name: element.name,
               temperaments: temperamentsFilter,
               weightmin: element.weightmin,
               weightmax: element.weightmax,
            })
         })
         // newresponse = [...dogsList, ...response.data]
         newresponse = [...fulldogDbFilter, ...fulldogApiFilter]
         return newresponse.length > 0 ? res.json(newresponse) : res.send('¡List of dogs not found!')
      }

      // [ ] GET /dogs?name="...":

      let newresponse = [];
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=${API_KEY}`)
      console.log(response.data)
      let dogApiFilter = [];
      let dogDbFilter = [];

      response.data.forEach(element => {
         dogApiFilter.push({
            name: element.name,
            temperaments: element.temperament,
            refImage: element.reference_image_id,
            id: element.id,
            

         })
      })

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
            name: { [Op.substring]: name },
         },
         attributes: {
            exclude: ['createdAt', 'updatedAt', 'id_dog', 'life_span', 'fullLife_span',
               'heightmin', 'heightmax', 'weightmax', 'weightmin', 'fullheight', 'fullweight'],
         }
      });

      dog.forEach(element => {
         let properties = []
         for (let i = 0; i < element.temperaments.length; i++) {
            properties.push(Object.values(element.temperaments[i].name).join(''))
         }
         let temperamentsFilter = properties.join(', ')
         dogDbFilter.push({
            name: element.name,
            temperaments: temperamentsFilter,
         })
      })

      newresponse = [...dogDbFilter, ...dogApiFilter]
      //console.log(newresponse)

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
            for (let i = 0; i < element.temperaments.length; i++) {
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
         console.log(response.data)
         //const responseImage = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
         //console.log(responseImage.data);      

         let heightImperial = '';
         let heightMetric = '';
         let heightMax = [];
         let heightMin = [];
         let fullHeight = '';
         let weightImperial = '';
         let weightMetric = '';
         let weightMax = [];
         let weightMin = [];
         let fullWeight = '';

         for (let property in response.data) {
            if (property === 'height') {
               for (let property2 in response.data.height) {
                  if (property2 === 'imperial') {
                     heightImperial = Object.values(response.data.height.imperial)
                     heightMin.push(heightImperial.join(''))
                     //console.log(heightmax)
                  }
                  if (property2 === 'metric') {
                     heightMetric = Object.values(response.data.height.metric)
                     heightMax.push(heightMetric.join(''))
                     //console.log(heightMax)
                  }
               }
            }
            if (property === 'weight') {
               for (let property2 in response.data.weight) {
                  if (property2 === 'imperial') {
                     weightImperial = Object.values(response.data.weight.imperial)
                     weightMax.push(weightImperial.join(''))
                     //console.log(heightmax)
                  }
                  if (property2 === 'metric') {
                     weightMetric = Object.values(response.data.weight.metric)
                     weightMin.push(weightMetric.join(''))
                     //console.log(heightMax)
                  }
               }
            }
         }
         if (heightMax.length > 0 && heightMin.length > 0) {
            fullHeight = `Height Min ${heightMin.join('')} - Height Max ${heightMax.join('')}`
         }
         if (weightMax.length > 0 && weightMin.length > 0) {
            fullWeight = `Height Min ${weightMin.join('')} - Height Max ${weightMax.join('')}`
         }

         //console.log(referenceImage)
         newresponse.push({
            name: response.data.name,
            height: fullHeight ? fullHeight : res.send('¡Dog not found!'),
            weight: fullWeight ? fullWeight : res.send('¡Dog not found!'),
            life_span: response.data.life_span,
            temperament: response.data.temperament,

         })

         return newresponse.length > 0 ? res.json(newresponse) : res.send('¡Dog not found!')
      }

   } catch (error) {
      res.send(error)
   }
})



//router.get('/')
module.exports = router;