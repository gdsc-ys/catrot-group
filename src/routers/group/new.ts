import { Router, Request, Response, NextFunction } from 'express';
import Group from '../../models/group'

const router = Router()

router.post('/api/group/new', async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, lead, capacity } = req.body
    if (!name || !lead || !capacity) {
        const error = new Error('name, lead and capacity are required!') as CustomError;
        error.status = 400;
        return next(error)
    }

    const newGroup = new Group({
        name,
        description,
        lead,
        capacity
    });
    await newGroup.save()

    res.status(201).send(newGroup)
})

export { router as newGroupRouter }