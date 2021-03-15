import { getRepository } from 'typeorm'
import { Inventory } from '../../infrastructure/database/entities/inventory'
import { Request, Response } from 'express'

export const getInventories = async (request: Request, response: Response) => {
    try {
        const inventory = await getRepository(Inventory).find()
        return response.json(inventory)
    }catch (err) {
        return response.status(400).json(({ message: 'Error: '+err }))
    }
}

export const saveInventory = async (request: Request, response: Response) => {
    try {
    console.log(request.body)
        const inventory = await getRepository(Inventory).save(request.body)
        
        response.json(inventory)
    }catch (err) {
        return response.status(400).json(({ message: 'Error: '+err }))
    }
}