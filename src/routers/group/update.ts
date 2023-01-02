import { Router, Request, Response, NextFunction } from 'express'
import Group from '../../models/group'

const router = Router()

router.post('/api/group/update/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const { name, description, lead, capacity } = req.body;

    if(!id) {
        const error = new Error('group id is required') as CustomError
        error.status = 400
        next(error)
    }

    let updatedGroup;

    try {
        updatedGroup = await Group.findOneAndUpdate(
            { _id: id }, 
            { $set: { name, description, lead, capacity } }, 
            { new: true }
        )
    } catch(err) {
        const error = new Error('group cannot be updated!') as CustomError
        error.status = 400;
        next(error)
    }

    res.status(200).send(updatedGroup)
})

export { router as updateGroupRouter }