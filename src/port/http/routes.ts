import { Router, Request, Response } from 'express'
import { getInventories, saveInventory } from './inveventoryController'
import { getRentals, saveRental } from './rentalController'
import { getVideos, saveVideo } from './videoController'
import { LoadAvailableVideos } from '../../domain/usecases/load-available-videos'
const routes = Router()
const loadAvailableVideos = new LoadAvailableVideos

routes.get('/', ( request:Request, response:Response ) => {
    return response.json({ message: 'teste' })
})

routes.get('/videos', getVideos) 
routes.post('/video', saveVideo)

routes.get('/inventories', getInventories) 
routes.post('/inventory', saveInventory)

routes.get('/rentals', getRentals) 
routes.post('/rental', saveRental)

routes.get('/availeble-videos', loadAvailableVideos.getAvailableVideos)

export default routes