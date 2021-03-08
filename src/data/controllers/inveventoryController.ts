import { getRepository } from 'typeorm'
import { Inventory } from '../entities/inventory'
import { Request, Response } from 'express'

export const getInventories = async (request: Request, response: Response) => {
    const inventory = await getRepository(Inventory).find()
    return response.json(inventory)
}

export const saveInventory = async (request: Request, response: Response) => {
    console.log(request.body)
    const inventory = await getRepository(Inventory).save(request.body)
    
    response.json(inventory)
}