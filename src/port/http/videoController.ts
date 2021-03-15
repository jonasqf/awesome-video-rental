import { getRepository } from 'typeorm'
import { Video } from '../../infrastructure/database/entities/video'
import { Request, Response } from 'express'

export const getVideos = async (request: Request, response: Response) => {
    try {
        const videos = await getRepository(Video).find()
        return response.json(videos)
    }catch (err) {
        return response.status(400).json(({ message: 'Error: '+ err }))
    }
}



export const saveVideo = async (request: Request, response: Response) => {
    try {
        const video = await getRepository(Video).save(request.body)
        response.json(video)
    }catch (err) {
        return response.status(400).json(({ message: 'Error: '+err }))
    }
}