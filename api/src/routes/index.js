const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const DogsRoute = require('./DogsRoute.js') 
const DogRoute = require('./DogRoute.js') 
const DogTemperament = require('./DogTemperament.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', DogsRoute)
router.use('/dog', DogRoute)
router.use('/temperament', DogTemperament)





module.exports = router;
