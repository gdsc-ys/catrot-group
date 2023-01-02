import { Router, Request, Response, NextFunction } from 'express';
import User from '../../models/user'
import Group from '../../models/group'

const router = Router()

router.post('/api/member/new/:groupId', async (req: Request, res: Response, next: NextFunction) => {
    const { name, user_id, groups_own, groups_in } = req.body
    const { groupId } = req.params;

    if (!user_id) {
        const error = new Error('user_id is required!') as CustomError;
        error.status = 400;
        return next(error)
    }

    const newUser = new User({
        name,
        user_id,
        groups_own,
        groups_in
    });

    await newUser.save()

    const updatedGroup = await Group.findOneAndUpdate(
        { _id: groupId },
        { $push: { members: newUser } },
        { new: true }
    )

    res.status(201).send(updatedGroup)
})

export { router as newUserRouter }