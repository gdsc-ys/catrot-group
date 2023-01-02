import { Router, Request, Response, NextFunction } from 'express'
import Group from '../../models/group'

const router = Router()

router.post('/api/group/show/', async (req: Request, res: Response, next:NextFunction) => {
    const { id } = req.body;

    if(!id) {
        const allGroups = await Group.find()
        return res.status(200).send(allGroups)
    }

    const group = await Group.findOne({ _id: id }).populate('members')

    res.status(200).send(group)
})
export { router as showGroupRouter }