import { Router, Request, Response, NextFunction } from 'express';
import Group from '../../models/group'
import User from '../../models/user'

const router = Router()

router.post('/group/new/:id', async (req: Request, res: Response, next: NextFunction) => {
    const { name, description, capacity } = req.body
    const { id } = req.params;

    if(!id) {
        const error = new Error('user id is required') as CustomError;
        error.status = 400;
        next(error)
    }
    if (!name || !capacity ) {
        const error = new Error('name and capacity are required!') as CustomError;
        error.status = 400;
        return next(error)
    }

    let newGroupId
    let newUserId

    // USER 생성
    const newUser = new User({
        user_id: id
    })
    await newUser.save();
    const newUserObj = await User.findOne({user_id: id})
    newUserId = newUserObj?._id

    // GROUP 생성
    const newGroup = new Group({
        name: name,
        description: description,
        lead: newUserId,
        capacity: capacity
    });
    await newGroup.save()
    const newGroupObj = await User.findOne({lead: newUserId})
    newGroupId = newGroupObj?._id

    // 생성한 USER를 member에 추가
    await Group.findOneAndUpdate(
        { _id: newGroupId },
        { $push: { members: newUserId } },
        { new: true }
    )

    // 생성한 GROUP을 groups_in에 추가
    await User.findOneAndUpdate(
        { _id: newUserId },
        { $push: { groups_in: newGroup } },
        { new: true }
    )

    res.status(201).send('new group created')
})

export { router as newGroupRouter }