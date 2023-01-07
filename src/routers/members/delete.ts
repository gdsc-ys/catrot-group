import { Router, Request, Response, NextFunction } from 'express'
import Group from '../../models/group'
import User from '../../models/user'

const router = Router()

router.delete('/member/:userId/delete/:groupId', async (req: Request, res: Response, next:NextFunction) => {
    const { groupId, userId } = req.params;

    if(!userId || !groupId) {
        const error = new Error('group id and user id are required') as CustomError;
        error.status = 400;
        next(error)
    }

    try {
        // User는 가입한 group에서 나감
        await User.findOneAndUpdate({ _id: userId }, { $pull: { groups_in: groupId } })
    } catch(err) {
        next(new Error('user cannot leave the group'))
    }

    try {
        // Group의 멤버가 나감
        await Group.findOneAndUpdate({ _id: groupId }, { $pull: { members: userId } })
    } catch(err) {
        next(new Error('user cannot be removed'))
    }
    

    res.status(200).json({ success: true })
})

export { router as leaveGroupRouter }