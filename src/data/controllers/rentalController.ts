import { getRepository } from 'typeorm'
import { Inventory } from '../entities/inventory'
import { Request, Response } from 'express'
import { Rental } from '../entities/rental'

export const getRentals = async (request: Request, response: Response) => {
    const rental = await getRepository(Rental).find()
    return response.json(rental)
}

export const saveRental = async (request: Request, response: Response) => {
    console.log(request.body)
    const rental = await getRepository(Rental).save(request.body)
    
    response.json(rental)
}