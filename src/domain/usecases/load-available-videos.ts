import { getRepository } from 'typeorm'
import { Inventory } from '../../infrastructure/database/entities/inventory'
import { Request, Response } from 'express'

    
export class LoadAvailableVideos {

getAvailableVideos = async (request: Request, response: Response) => {
    try {
        const videos = await getRepository(Inventory).find()
        const listVideos = videos.filter(inv => inv.quantity)
        
        return response.json(listVideos)
    }catch (err) {
        return response.status(400).json(({ message: 'Error: '+err }))
    }
}
}
export default LoadAvailableVideos
