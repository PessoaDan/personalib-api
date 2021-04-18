import { request, response, Router } from 'express';

const router = Router();


//GET ROUTES
router.get('/auth', (request, response) => {
    response.send('hello world !');
});

//POST ROUTES


//PUT ROUTES


//PATCH


//DELETE



export { router }; 