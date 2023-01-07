import { Router, Request, Response, NextFunction } from 'express';
import Group from '../../models/group'
import User from '../../models/user'

const router = Router()

router.post('/api/group/new', async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, capacity, user_id } = req.body
    if (!name || !capacity) {
        const error = new Error('name and capacity are required!') as CustomError;
        error.status = 400;
        return next(error)
    }

    let newGroupId
    let newUserId

    // USER 생성
    const newUser = new User({
        user_id
    })
    await newUser.save(function(err, user) {
        newUserId = user._id
    })

    // GROUP 생성
    const newGroup = new Group({
        name,
        description,
        newUserId,
        capacity
    });
    await newGroup.save(function(err, group) {
        newGroupId = group._id
    })

    // 생성한 USER를 member에 추가
    const updatedGroup = await Group.findOneAndUpdate(
        { _id: newGroupId },
        { $push: { members: newUser } },
        { new: true }
    )

    // 생성한 GROUP을 groups_in에 추가
    await User.findOneAndUpdate(
        { _id: newUserId },
        { $push: { groups_in: newGroup } },
        { new: true }
    )

    res.status(201).send(updatedGroup)
})

export { router as newGroupRouter }