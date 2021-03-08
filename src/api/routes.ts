import { Router, Request, Response } from 'express'
import { getInventories, saveInventory } from '../data/controllers/inveventoryController'
import { getRentals, saveRental } from '../data/controllers/rentalController'
import { getVideos, saveVideo } from '../data/controllers/videoController'
const routes = Router()

routes.get('/', ( request:Request, response:Response ) => {
    return response.json({ message: 'teste' })
})

routes.get('/videos', getVideos) 
routes.post('/video', saveVideo)

routes.get('/inventories', getInventories) 
routes.post('/inventory', saveInventory)

routes.get('/inventories', getRentals) 
routes.post('/inventory', saveRental)

export default routes