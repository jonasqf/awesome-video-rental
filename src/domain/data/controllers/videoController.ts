import { getRepository } from 'typeorm'
import { Video } from '../entities/video'
import { Request, Response } from 'express'

export const getVideos = async (request: Request, response: Response) => {
    const videos = await getRepository(Video).find()
    return response.json(videos)
}

export const saveVideo = async (request: Request, response: Response) => {
    const video = await getRepository(Video).save(request.body)
    response.json(video)
}