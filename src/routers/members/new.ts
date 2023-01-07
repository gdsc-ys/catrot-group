import { Router, Request, Response, NextFunction } from 'express';
import User from '../../models/user'
import Group from '../../models/group'

const router = Router()

router.post('/member/:userId/new/:groupId', async (req: Request, res: Response, next: NextFunction) => {
    const { groupId, userId } = req.params;

    if (!userId || !groupId) {
        const error = new Error('userId and groupId are required!') as CustomError;
        error.status = 400;
        return next(error)
    }

    // find GROUP
    const group = await Group.findById({_id: groupId})

    // USER의 가입한 그룹에 추가
    const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { $push: { groups_in: group } },
        { new: true }
    )

    // GROUP의 멤버에 추가
    const updatedGroup = await Group.findOneAndUpdate(
        { _id: groupId },
        { $push: { members: updatedUser } },
        { new: true }
    )

    res.status(201).send(updatedGroup)
})

export { router as joinGroupRouter }