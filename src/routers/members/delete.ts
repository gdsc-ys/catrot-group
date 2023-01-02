import { Router, Request, Response, NextFunction } from 'express'
import Group from '../../models/group'
import User from '../../models/user'

const router = Router()

router.delete('/api/user/:userId/delete/:groupId', async (req: Request, res: Response, next:NextFunction) => {
    const { groupId, userId } = req.params;

    if(!userId || !groupId) {
        const error = new Error('group id and user id are required') as CustomError;
        error.status = 400;
        next(error)
    }

    try {
        await User.findOneAndRemove({ _id: groupId })
    } catch(err) {
        next(new Error('user cannot be removed'))
    }

    await Group.findOneAndUpdate({ _id: groupId }, { $pull: { members: userId } })

    res.status(200).json({ success: true })
})

export { router as deleteUserRouter }