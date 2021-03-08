import { Router, Request, Response } from 'express'
import { getInventory, saveInventory } from './domain/data/controllers/inveventoryController'
import { getVideos, saveVideo } from './domain/data/controllers/videoController'
const routes = Router()

routes.get('/', ( request:Request, response:Response ) => {
    return response.json({ message: 'teste' })
})

routes.get('/videos', getVideos) 

routes.post('/video', saveVideo)

routes.get('/inventories', getInventory) 

routes.post('/inventory', saveInventory)


export default routes