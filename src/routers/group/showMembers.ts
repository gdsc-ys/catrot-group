import { Router, Request, Response, NextFunction } from 'express'
import Group from '../../models/group'

const router = Router()

router.post('/api/group/showMembers/', async (req: Request, res: Response, next:NextFunction) => {
    const { id } = req.body;

    if(!id) {
        const allGroups = await Group.find()
        return res.status(200).send(allGroups)
    }

    const group = await Group.findOne({ _id: id }).populate('members')

    // members의 user_id를 가져와서
    // gRPC를 통해 USER DB로부터 member들 정보를 받아온 뒤
    // 이후 memmbers 정보를 담은 결과를 반환 (JSON)

    res.status(200).send(group)
})
export { router as showMembersRouter }