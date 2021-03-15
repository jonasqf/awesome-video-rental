import { getRepository } from 'typeorm'
import { Inventory } from '../../infrastructure/database/entities/inventory'
import { Request, Response } from 'express'
import { Rental } from '../../infrastructure/database/entities/rental'

export const getRentals = async (request: Request, response: Response) => {
    try {
        const rental = await getRepository(Rental).find()
        return response.json(rental)
    }catch (err) {
        return response.status(400).json(({ message: 'Error: '+err }))
    }
}

export const saveRental = async (request: Request, response: Response) => {
    try {
    console.log(request.body)
        const rental = await getRepository(Rental).save(request.body)
        
        response.json(rental)
    }catch (err) {
        return response.status(400).json(({ message: 'Error: '+err }))
    }
}